import './Object.assign';
import './requestAnimationFrame';
import './Math.sign';
import './Number.isInteger';
import { window } from 'pixi-browser-polyfill';

if (!window.ArrayBuffer)
{
    window.ArrayBuffer = Array;
}

if (!window.Float32Array)
{
    window.Float32Array = Array;
}

if (!window.Uint32Array)
{
    window.Uint32Array = Array;
}

if (!window.Uint16Array)
{
    window.Uint16Array = Array;
}
