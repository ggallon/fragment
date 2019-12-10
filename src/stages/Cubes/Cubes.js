import { Camera, Box, Mesh, Sphere, Program } from "ogl";

import Stage from "../Stage.js";

const vertex = /* glsl */ `
    precision highp float;
    precision highp int;
    attribute vec3 position;
    attribute vec3 normal;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;
    varying vec3 vNormal;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    precision highp int;
    varying vec3 vNormal;
    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        vec3 color = vec3(0.2, 0.8, 1.0);
        gl_FragColor.rgb = color + lighting * 0.1;
        gl_FragColor.a = 1.0;
    }
`;

class Cubes extends Stage {

    constructor(options) {
        super(options);

        this.onChangeSpeed = this.onChangeSpeed.bind(this);

        this.props.speed.onChange = this.onChangeSpeed;

        this.camera = new Camera(this.gl);
        this.camera.perspective({ aspect: this.gl.canvas.width / this.gl.canvas.height });
        this.camera.position.z = 3;

        const program = new Program(this.gl, {
            vertex,
            fragment,
        });

        const geometry = new Box(this.gl, {
            width: 1,
            height: 1,
            depth: 1
        });

        this.mesh = new Mesh(this.gl, { geometry, program });
        this.scene.addChild(this.mesh);
    }

    onChangeSpeed({ value }) {
        console.log('onChangeCount', value);
    }

    update() {
        this.mesh.rotation.x += 0.01 * this.props.speed.value;
        this.mesh.rotation.y += 0.01 * this.props.speed.value;
        this.mesh.rotation.z += 0.01 * this.props.speed.value;
    }

    render() {
        this.renderer.render({ scene: this.scene, camera: this.camera });
    }
}

export default {
    name: 'Cubes',
    scene: Cubes,
    props: {
        speed: {
            min: 0,
            max: 20,
            value: 1,
        }
    }
};