import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './ball.gltf';

class Ball extends Group {
    constructor() {
        // Call parent Group() constructor
        super();

        // Init state
        this.state = {
        };

        // Load object
        const loader = new GLTFLoader();

        this.name = 'ball';
        loader.load(MODEL, (gltf) => {
            this.add(gltf.scene);
        });

        this.position.set(0, 0, 1);
        this.scale.set(1, 1, 1);
    }
}

export default Ball;