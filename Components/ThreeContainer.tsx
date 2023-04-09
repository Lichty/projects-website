import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeContainerProps {
  onSceneReady: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void;
  onAnimate: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void;
}

const ThreeContainer: React.FC<ThreeContainerProps> = ({ onSceneReady, onAnimate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);

      onSceneReady(scene, camera, renderer);

      const animate = () => {
        requestAnimationFrame(animate);
        onAnimate(scene, camera, renderer);
      };

      animate();
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [containerRef, onSceneReady, onAnimate]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeContainer;
