/* const eyeball_l = document.querySelector('#eyeball_l');
const eyeball_r = document.querySelector('#eyeball_r');
const inter_area = document.querySelector('#inter_area');
const eye_center_l = document.querySelector('#eye_center_l');
const eye_center_r = document.querySelector('#eye_center_r');

const offsetRadius = 6;

const center_l_left = eye_center_l.offsetLeft;
const center_l_top = eye_center_l.offsetTop;
const center_r_left = eye_center_r.offsetLeft;
const center_r_top = eye_center_r.offsetTop;
// console.log('center_l_left@', center_l_left);
// console.log('center_l_top@', center_l_top);
// console.log('center_r_left@', center_r_left);
// console.log('center_r_top@', center_r_top);
inter_area.addEventListener('mousemove', e => {
    // console.log(`(${e.offsetX}, ${e.offsetY})`);

    // eyeball_l.style.left = offsetRadius * Math.cos(Math.atan(Math.abs((center_l_top - e.offsetY) / (center_l_left - e.offsetX)))) + 'px';
    eyeball_l.style.top = offsetRadius * Math.sin(-45 / 360 + Math.atan(Math.abs((center_l_top - e.offsetY) / (center_l_left - e.offsetX)))) + 'px';

    // eyeball_r.style.left = offsetRadius * Math.cos(Math.atan((center_r_top - e.offsetY) / (center_r_left - e.offsetX))) + 'px';
    eyeball_r.style.top = offsetRadius * Math.sin(-135 / 360 + Math.atan(Math.abs((center_r_top - e.offsetY) / -(center_r_left - e.offsetX)))) + 'px';
}) */


const arm_l = document.querySelector('.arm_l');
const arm_r = document.querySelector('.arm_r');
const arm_l_anim_className = 'arm_l_anim';
const arm_r_anim_className = 'arm_r_anim';

let flag = true;
const arm_inter = () => {
    if (!flag) return;
    flag = false;
    if (arm_l.classList.contains(arm_l_anim_className)) {
        arm_l.classList.remove(arm_l_anim_className);
    } else {
        arm_l.classList.add(arm_l_anim_className);
    }
    if (arm_r.classList.contains(arm_r_anim_className)) {
        arm_r.classList.remove(arm_r_anim_className);
    } else {
        arm_r.classList.add(arm_r_anim_className);
    }

    setTimeout(() => {
        flag = true;
        arm_l.classList.remove(arm_l_anim_className);
        arm_r.classList.remove(arm_r_anim_className);
    }, 2000)
}
arm_l.addEventListener('click', arm_inter);
arm_r.addEventListener('click', arm_inter);