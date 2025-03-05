gsap.registerPlugin(ScrollTrigger);
const svg = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_60_324)">
    <path d="M-0.482103 19.8674L-0.656062 20.5H0H11H11.6561L11.4821 19.8674L5.9821 -0.132578L5.5 -1.88568L5.0179 -0.132578L-0.482103 19.8674Z" fill="white" stroke="white" />
    <path d="M-5.5 -0.5H-6.15606L-5.9821 0.132578L-0.482103 20.1326L0 21.8857L0.482103 20.1326L5.9821 0.132578L6.15606 -0.5H5.5H-5.5Z" fill="white" stroke="white" />
    <path d="M10.5179 19.8674L10.3439 20.5H11H22H22.6561L22.4821 19.8674L16.9821 -0.132578L16.5 -1.88568L16.0179 -0.132578L10.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M5.5 -0.5H4.84394L5.0179 0.132578L10.5179 20.1326L11 21.8857L11.4821 20.1326L16.9821 0.132578L17.1561 -0.5H16.5H5.5Z" fill="white" stroke="white" />
    <path d="M21.5179 19.8674L21.3439 20.5H22H33H33.6561L33.4821 19.8674L27.9821 -0.132578L27.5 -1.88568L27.0179 -0.132578L21.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M16.5 -0.5H15.8439L16.0179 0.132578L21.5179 20.1326L22 21.8857L22.4821 20.1326L27.9821 0.132578L28.1561 -0.5H27.5H16.5Z" fill="white" stroke="white" />
    <path d="M32.5179 19.8674L32.3439 20.5H33H44H44.6561L44.4821 19.8674L38.9821 -0.132578L38.5 -1.88568L38.0179 -0.132578L32.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M27.5 -0.5H26.8439L27.0179 0.132578L32.5179 20.1326L33 21.8857L33.4821 20.1326L38.9821 0.132578L39.1561 -0.5H38.5H27.5Z" fill="white" stroke="white" />
    <path d="M43.5179 19.8674L43.3439 20.5H44H55H55.6561L55.4821 19.8674L49.9821 -0.132578L49.5 -1.88568L49.0179 -0.132578L43.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M38.5 -0.5H37.8439L38.0179 0.132578L43.5179 20.1326L44 21.8857L44.4821 20.1326L49.9821 0.132578L50.1561 -0.5H49.5H38.5Z" fill="white" stroke="white" />
    <path d="M54.5179 19.8674L54.3439 20.5H55H66H66.6561L66.4821 19.8674L60.9821 -0.132578L60.5 -1.88568L60.0179 -0.132578L54.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M49.5 -0.5H48.8439L49.0179 0.132578L54.5179 20.1326L55 21.8857L55.4821 20.1326L60.9821 0.132578L61.1561 -0.5H60.5H49.5Z" fill="white" stroke="white" />
    <path d="M65.5179 19.8674L65.3439 20.5H66H77H77.6561L77.4821 19.8674L71.9821 -0.132578L71.5 -1.88568L71.0179 -0.132578L65.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M60.5 -0.5H59.8439L60.0179 0.132578L65.5179 20.1326L66 21.8857L66.4821 20.1326L71.9821 0.132578L72.1561 -0.5H71.5H60.5Z" fill="white" stroke="white" />
    <path d="M76.5179 19.8674L76.3439 20.5H77H88H88.6561L88.4821 19.8674L82.9821 -0.132578L82.5 -1.88568L82.0179 -0.132578L76.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M71.5 -0.5H70.8439L71.0179 0.132578L76.5179 20.1326L77 21.8857L77.4821 20.1326L82.9821 0.132578L83.1561 -0.5H82.5H71.5Z" fill="white" stroke="white" />
    <path d="M87.5179 19.8674L87.3439 20.5H88H99H99.6561L99.4821 19.8674L93.9821 -0.132578L93.5 -1.88568L93.0179 -0.132578L87.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M82.5 -0.5H81.8439L82.0179 0.132578L87.5179 20.1326L88 21.8857L88.4821 20.1326L93.9821 0.132578L94.1561 -0.5H93.5H82.5Z" fill="white" stroke="white" />
    <path d="M98.5179 19.8674L98.3439 20.5H99H110H110.656L110.482 19.8674L104.982 -0.132578L104.5 -1.88568L104.018 -0.132578L98.5179 19.8674Z" fill="white" stroke="white" />
    <path d="M93.5 -0.5H92.8439L93.0179 0.132578L98.5179 20.1326L99 21.8857L99.4821 20.1326L104.982 0.132578L105.156 -0.5H104.5H93.5Z" fill="white" stroke="white" />
    <path d="M-0.482103 39.8674L-0.656062 40.5H0H11H11.6561L11.4821 39.8674L5.9821 19.8674L5.5 18.1143L5.0179 19.8674L-0.482103 39.8674Z" fill="white" stroke="white" />
    <path d="M-5.5 19.5H-6.15606L-5.9821 20.1326L-0.482103 40.1326L0 41.8857L0.482103 40.1326L5.9821 20.1326L6.15606 19.5H5.5H-5.5Z" fill="white" stroke="white" />
    <path d="M10.5179 39.8674L10.3439 40.5H11H22H22.6561L22.4821 39.8674L16.9821 19.8674L16.5 18.1143L16.0179 19.8674L10.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M5.5 19.5H4.84394L5.0179 20.1326L10.5179 40.1326L11 41.8857L11.4821 40.1326L16.9821 20.1326L17.1561 19.5H16.5H5.5Z" fill="white" stroke="white" />
    <path d="M21.5179 39.8674L21.3439 40.5H22H33H33.6561L33.4821 39.8674L27.9821 19.8674L27.5 18.1143L27.0179 19.8674L21.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M16.5 19.5H15.8439L16.0179 20.1326L21.5179 40.1326L22 41.8857L22.4821 40.1326L27.9821 20.1326L28.1561 19.5H27.5H16.5Z" fill="white" stroke="white" />
    <path d="M32.5179 39.8674L32.3439 40.5H33H44H44.6561L44.4821 39.8674L38.9821 19.8674L38.5 18.1143L38.0179 19.8674L32.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M27.5 19.5H26.8439L27.0179 20.1326L32.5179 40.1326L33 41.8857L33.4821 40.1326L38.9821 20.1326L39.1561 19.5H38.5H27.5Z" fill="white" stroke="white" />
    <path d="M43.5179 39.8674L43.3439 40.5H44H55H55.6561L55.4821 39.8674L49.9821 19.8674L49.5 18.1143L49.0179 19.8674L43.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M38.5 19.5H37.8439L38.0179 20.1326L43.5179 40.1326L44 41.8857L44.4821 40.1326L49.9821 20.1326L50.1561 19.5H49.5H38.5Z" fill="white" stroke="white" />
    <path d="M54.5179 39.8674L54.3439 40.5H55H66H66.6561L66.4821 39.8674L60.9821 19.8674L60.5 18.1143L60.0179 19.8674L54.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M49.5 19.5H48.8439L49.0179 20.1326L54.5179 40.1326L55 41.8857L55.4821 40.1326L60.9821 20.1326L61.1561 19.5H60.5H49.5Z" fill="white" stroke="white" />
    <path d="M65.5179 39.8674L65.3439 40.5H66H77H77.6561L77.4821 39.8674L71.9821 19.8674L71.5 18.1143L71.0179 19.8674L65.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M60.5 19.5H59.8439L60.0179 20.1326L65.5179 40.1326L66 41.8857L66.4821 40.1326L71.9821 20.1326L72.1561 19.5H71.5H60.5Z" fill="white" stroke="white" />
    <path d="M76.5179 39.8674L76.3439 40.5H77H88H88.6561L88.4821 39.8674L82.9821 19.8674L82.5 18.1143L82.0179 19.8674L76.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M71.5 19.5H70.8439L71.0179 20.1326L76.5179 40.1326L77 41.8857L77.4821 40.1326L82.9821 20.1326L83.1561 19.5H82.5H71.5Z" fill="white" stroke="white" />
    <path d="M87.5179 39.8674L87.3439 40.5H88H99H99.6561L99.4821 39.8674L93.9821 19.8674L93.5 18.1143L93.0179 19.8674L87.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M82.5 19.5H81.8439L82.0179 20.1326L87.5179 40.1326L88 41.8857L88.4821 40.1326L93.9821 20.1326L94.1561 19.5H93.5H82.5Z" fill="white" stroke="white" />
    <path d="M98.5179 39.8674L98.3439 40.5H99H110H110.656L110.482 39.8674L104.982 19.8674L104.5 18.1143L104.018 19.8674L98.5179 39.8674Z" fill="white" stroke="white" />
    <path d="M93.5 19.5H92.8439L93.0179 20.1326L98.5179 40.1326L99 41.8857L99.4821 40.1326L104.982 20.1326L105.156 19.5H104.5H93.5Z" fill="white" stroke="white" />
    <path d="M-0.482103 59.8674L-0.656062 60.5H0H11H11.6561L11.4821 59.8674L5.9821 39.8674L5.5 38.1143L5.0179 39.8674L-0.482103 59.8674Z" fill="white" stroke="white" />
    <path d="M-5.5 39.5H-6.15606L-5.9821 40.1326L-0.482103 60.1326L0 61.8857L0.482103 60.1326L5.9821 40.1326L6.15606 39.5H5.5H-5.5Z" fill="white" stroke="white" />
    <path d="M10.5179 59.8674L10.3439 60.5H11H22H22.6561L22.4821 59.8674L16.9821 39.8674L16.5 38.1143L16.0179 39.8674L10.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M5.5 39.5H4.84394L5.0179 40.1326L10.5179 60.1326L11 61.8857L11.4821 60.1326L16.9821 40.1326L17.1561 39.5H16.5H5.5Z" fill="white" stroke="white" />
    <path d="M21.5179 59.8674L21.3439 60.5H22H33H33.6561L33.4821 59.8674L27.9821 39.8674L27.5 38.1143L27.0179 39.8674L21.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M16.5 39.5H15.8439L16.0179 40.1326L21.5179 60.1326L22 61.8857L22.4821 60.1326L27.9821 40.1326L28.1561 39.5H27.5H16.5Z" fill="white" stroke="white" />
    <path d="M32.5179 59.8674L32.3439 60.5H33H44H44.6561L44.4821 59.8674L38.9821 39.8674L38.5 38.1143L38.0179 39.8674L32.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M27.5 39.5H26.8439L27.0179 40.1326L32.5179 60.1326L33 61.8857L33.4821 60.1326L38.9821 40.1326L39.1561 39.5H38.5H27.5Z" fill="white" stroke="white" />
    <path d="M43.5179 59.8674L43.3439 60.5H44H55H55.6561L55.4821 59.8674L49.9821 39.8674L49.5 38.1143L49.0179 39.8674L43.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M38.5 39.5H37.8439L38.0179 40.1326L43.5179 60.1326L44 61.8857L44.4821 60.1326L49.9821 40.1326L50.1561 39.5H49.5H38.5Z" fill="white" stroke="white" />
    <path d="M54.5179 59.8674L54.3439 60.5H55H66H66.6561L66.4821 59.8674L60.9821 39.8674L60.5 38.1143L60.0179 39.8674L54.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M49.5 39.5H48.8439L49.0179 40.1326L54.5179 60.1326L55 61.8857L55.4821 60.1326L60.9821 40.1326L61.1561 39.5H60.5H49.5Z" fill="white" stroke="white" />
    <path d="M65.5179 59.8674L65.3439 60.5H66H77H77.6561L77.4821 59.8674L71.9821 39.8674L71.5 38.1143L71.0179 39.8674L65.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M60.5 39.5H59.8439L60.0179 40.1326L65.5179 60.1326L66 61.8857L66.4821 60.1326L71.9821 40.1326L72.1561 39.5H71.5H60.5Z" fill="white" stroke="white" />
    <path d="M76.5179 59.8674L76.3439 60.5H77H88H88.6561L88.4821 59.8674L82.9821 39.8674L82.5 38.1143L82.0179 39.8674L76.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M71.5 39.5H70.8439L71.0179 40.1326L76.5179 60.1326L77 61.8857L77.4821 60.1326L82.9821 40.1326L83.1561 39.5H82.5H71.5Z" fill="white" stroke="white" />
    <path d="M87.5179 59.8674L87.3439 60.5H88H99H99.6561L99.4821 59.8674L93.9821 39.8674L93.5 38.1143L93.0179 39.8674L87.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M82.5 39.5H81.8439L82.0179 40.1326L87.5179 60.1326L88 61.8857L88.4821 60.1326L93.9821 40.1326L94.1561 39.5H93.5H82.5Z" fill="white" stroke="white" />
    <path d="M98.5179 59.8674L98.3439 60.5H99H110H110.656L110.482 59.8674L104.982 39.8674L104.5 38.1143L104.018 39.8674L98.5179 59.8674Z" fill="white" stroke="white" />
    <path d="M93.5 39.5H92.8439L93.0179 40.1326L98.5179 60.1326L99 61.8857L99.4821 60.1326L104.982 40.1326L105.156 39.5H104.5H93.5Z" fill="white" stroke="white" />
    <path d="M-0.482103 79.8674L-0.656062 80.5H0H11H11.6561L11.4821 79.8674L5.9821 59.8674L5.5 58.1143L5.0179 59.8674L-0.482103 79.8674Z" fill="white" stroke="white" />
    <path d="M-5.5 59.5H-6.15606L-5.9821 60.1326L-0.482103 80.1326L0 81.8857L0.482103 80.1326L5.9821 60.1326L6.15606 59.5H5.5H-5.5Z" fill="white" stroke="white" />
    <path d="M10.5179 79.8674L10.3439 80.5H11H22H22.6561L22.4821 79.8674L16.9821 59.8674L16.5 58.1143L16.0179 59.8674L10.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M5.5 59.5H4.84394L5.0179 60.1326L10.5179 80.1326L11 81.8857L11.4821 80.1326L16.9821 60.1326L17.1561 59.5H16.5H5.5Z" fill="white" stroke="white" />
    <path d="M21.5179 79.8674L21.3439 80.5H22H33H33.6561L33.4821 79.8674L27.9821 59.8674L27.5 58.1143L27.0179 59.8674L21.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M16.5 59.5H15.8439L16.0179 60.1326L21.5179 80.1326L22 81.8857L22.4821 80.1326L27.9821 60.1326L28.1561 59.5H27.5H16.5Z" fill="white" stroke="white" />
    <path d="M32.5179 79.8674L32.3439 80.5H33H44H44.6561L44.4821 79.8674L38.9821 59.8674L38.5 58.1143L38.0179 59.8674L32.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M27.5 59.5H26.8439L27.0179 60.1326L32.5179 80.1326L33 81.8857L33.4821 80.1326L38.9821 60.1326L39.1561 59.5H38.5H27.5Z" fill="white" stroke="white" />
    <path d="M43.5179 79.8674L43.3439 80.5H44H55H55.6561L55.4821 79.8674L49.9821 59.8674L49.5 58.1143L49.0179 59.8674L43.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M38.5 59.5H37.8439L38.0179 60.1326L43.5179 80.1326L44 81.8857L44.4821 80.1326L49.9821 60.1326L50.1561 59.5H49.5H38.5Z" fill="white" stroke="white" />
    <path d="M54.5179 79.8674L54.3439 80.5H55H66H66.6561L66.4821 79.8674L60.9821 59.8674L60.5 58.1143L60.0179 59.8674L54.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M49.5 59.5H48.8439L49.0179 60.1326L54.5179 80.1326L55 81.8857L55.4821 80.1326L60.9821 60.1326L61.1561 59.5H60.5H49.5Z" fill="white" stroke="white" />
    <path d="M65.5179 79.8674L65.3439 80.5H66H77H77.6561L77.4821 79.8674L71.9821 59.8674L71.5 58.1143L71.0179 59.8674L65.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M60.5 59.5H59.8439L60.0179 60.1326L65.5179 80.1326L66 81.8857L66.4821 80.1326L71.9821 60.1326L72.1561 59.5H71.5H60.5Z" fill="white" stroke="white" />
    <path d="M76.5179 79.8674L76.3439 80.5H77H88H88.6561L88.4821 79.8674L82.9821 59.8674L82.5 58.1143L82.0179 59.8674L76.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M71.5 59.5H70.8439L71.0179 60.1326L76.5179 80.1326L77 81.8857L77.4821 80.1326L82.9821 60.1326L83.1561 59.5H82.5H71.5Z" fill="white" stroke="white" />
    <path d="M87.5179 79.8674L87.3439 80.5H88H99H99.6561L99.4821 79.8674L93.9821 59.8674L93.5 58.1143L93.0179 59.8674L87.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M82.5 59.5H81.8439L82.0179 60.1326L87.5179 80.1326L88 81.8857L88.4821 80.1326L93.9821 60.1326L94.1561 59.5H93.5H82.5Z" fill="white" stroke="white" />
    <path d="M98.5179 79.8674L98.3439 80.5H99H110H110.656L110.482 79.8674L104.982 59.8674L104.5 58.1143L104.018 59.8674L98.5179 79.8674Z" fill="white" stroke="white" />
    <path d="M93.5 59.5H92.8439L93.0179 60.1326L98.5179 80.1326L99 81.8857L99.4821 80.1326L104.982 60.1326L105.156 59.5H104.5H93.5Z" fill="white" stroke="white" />
    <path d="M-0.482103 99.8674L-0.656062 100.5H0H11H11.6561L11.4821 99.8674L5.9821 79.8674L5.5 78.1143L5.0179 79.8674L-0.482103 99.8674Z" fill="white" stroke="white" />
    <path d="M-5.5 79.5H-6.15606L-5.9821 80.1326L-0.482103 100.133L0 101.886L0.482103 100.133L5.9821 80.1326L6.15606 79.5H5.5H-5.5Z" fill="white" stroke="white" />
    <path d="M10.5179 99.8674L10.3439 100.5H11H22H22.6561L22.4821 99.8674L16.9821 79.8674L16.5 78.1143L16.0179 79.8674L10.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M5.5 79.5H4.84394L5.0179 80.1326L10.5179 100.133L11 101.886L11.4821 100.133L16.9821 80.1326L17.1561 79.5H16.5H5.5Z" fill="white" stroke="white" />
    <path d="M21.5179 99.8674L21.3439 100.5H22H33H33.6561L33.4821 99.8674L27.9821 79.8674L27.5 78.1143L27.0179 79.8674L21.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M16.5 79.5H15.8439L16.0179 80.1326L21.5179 100.133L22 101.886L22.4821 100.133L27.9821 80.1326L28.1561 79.5H27.5H16.5Z" fill="white" stroke="white" />
    <path d="M32.5179 99.8674L32.3439 100.5H33H44H44.6561L44.4821 99.8674L38.9821 79.8674L38.5 78.1143L38.0179 79.8674L32.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M27.5 79.5H26.8439L27.0179 80.1326L32.5179 100.133L33 101.886L33.4821 100.133L38.9821 80.1326L39.1561 79.5H38.5H27.5Z" fill="white" stroke="white" />
    <path d="M43.5179 99.8674L43.3439 100.5H44H55H55.6561L55.4821 99.8674L49.9821 79.8674L49.5 78.1143L49.0179 79.8674L43.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M38.5 79.5H37.8439L38.0179 80.1326L43.5179 100.133L44 101.886L44.4821 100.133L49.9821 80.1326L50.1561 79.5H49.5H38.5Z" fill="white" stroke="white" />
    <path d="M54.5179 99.8674L54.3439 100.5H55H66H66.6561L66.4821 99.8674L60.9821 79.8674L60.5 78.1143L60.0179 79.8674L54.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M49.5 79.5H48.8439L49.0179 80.1326L54.5179 100.133L55 101.886L55.4821 100.133L60.9821 80.1326L61.1561 79.5H60.5H49.5Z" fill="white" stroke="white" />
    <path d="M65.5179 99.8674L65.3439 100.5H66H77H77.6561L77.4821 99.8674L71.9821 79.8674L71.5 78.1143L71.0179 79.8674L65.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M60.5 79.5H59.8439L60.0179 80.1326L65.5179 100.133L66 101.886L66.4821 100.133L71.9821 80.1326L72.1561 79.5H71.5H60.5Z" fill="white" stroke="white" />
    <path d="M76.5179 99.8674L76.3439 100.5H77H88H88.6561L88.4821 99.8674L82.9821 79.8674L82.5 78.1143L82.0179 79.8674L76.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M71.5 79.5H70.8439L71.0179 80.1326L76.5179 100.133L77 101.886L77.4821 100.133L82.9821 80.1326L83.1561 79.5H82.5H71.5Z" fill="white" stroke="white" />
    <path d="M87.5179 99.8674L87.3439 100.5H88H99H99.6561L99.4821 99.8674L93.9821 79.8674L93.5 78.1143L93.0179 79.8674L87.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M82.5 79.5H81.8439L82.0179 80.1326L87.5179 100.133L88 101.886L88.4821 100.133L93.9821 80.1326L94.1561 79.5H93.5H82.5Z" fill="white" stroke="white" />
    <path d="M98.5179 99.8674L98.3439 100.5H99H110H110.656L110.482 99.8674L104.982 79.8674L104.5 78.1143L104.018 79.8674L98.5179 99.8674Z" fill="white" stroke="white" />
    <path d="M93.5 79.5H92.8439L93.0179 80.1326L98.5179 100.133L99 101.886L99.4821 100.133L104.982 80.1326L105.156 79.5H104.5H93.5Z" fill="white" stroke="white" />
  </g>
  <defs>
    <clipPath id="clip0_60_324">
      <rect width="100" height="100" fill="white" />
    </clipPath>
  </defs>
</svg>
`,
  animateImageWithTriangles = (_) => {
    (_.style.position = 'relative'), (_.style.overflow = 'hidden');
    let e = new DOMParser(),
      t = e.parseFromString(svg, 'image/svg+xml'),
      $ = t.documentElement;
    $.setAttribute('width', '100%'),
      $.setAttribute('height', '100%'),
      $.setAttribute('viewBox', '0 0 100 100'),
      $.setAttribute('preserveAspectRatio', 'none'),
      ($.style.position = 'absolute'),
      ($.style.top = '0'),
      ($.style.left = '0'),
      ($.style.width = '100%'),
      ($.style.height = '100%'),
      _.appendChild($);
    let L = $.querySelectorAll('path');
    L.forEach((e, t) => {
      let $ = Math.floor(t / 20),
        i = t % 20,
        l = ($ + i) * 0.04;
      gsap.set(L, { transformOrigin: 'center' }),
        gsap.to(e, {
          scaleX: 0,
          duration: 1,
          delay: l,
          ease: 'sine.out',
          scrollTrigger: { trigger: _, start: 'top bottom' },
        });
    });
  },
  animateHomeLoad = () => {
    let _ = document.querySelector('.elementor-element-3a6ff3b3'),
      e = document.querySelector('.elementor-element-d6f559d'),
      t = e.querySelector('.elementor-element-36d8733'),
      $ = e.querySelector('.elementor-element-d478c92'),
      L = e.querySelector('.elementor-element-11a92c6');
    (t.style.transition = 'null'),
      ($.style.transition = 'null'),
      (_.style.transition = 'null'),
      animateImageWithTriangles(e);
    let i = gsap.timeline({
      delay: 2,
      defaults: { duration: 0.8, ease: 'sine.out' },
    });
    i.fromTo(t, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1 })
      .fromTo($, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1 }, 0.1)
      .fromTo(_, { yPercent: -100 }, { yPercent: 0 }, 0.2)
      .fromTo(L, { yPercent: -200 }, { yPercent: 0, duration: 1.2 }, 0.4)
      .fromTo(L, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.4);
  },
  animateHomeAbout = () => {
    let _ = document.querySelector('.elementor-element-a6a6e27'),
      e = _.querySelector('.elementor-element-4d18a7c p'),
      t = _.querySelector('.elementor-element-392c131'),
      $ = _.querySelector('.elementor-element-3c69ac3'),
      L = _.querySelector('.elementor-element-92a4c05'),
      i = _.querySelector('.elementor-element-1d57c2c'),
      l = i.querySelectorAll('.elementor-widget-button'),
      o = i.querySelectorAll('.elementor-widget-container');
    (e.style.transition = 'null'),
      (L.style.transition = 'null'),
      (t.style.transition = 'null'),
      ($.style.transition = 'null');
    let r = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: $, start: 'top bottom' },
    });
    r.fromTo(e, { opacity: 0 }, { opacity: 1 })
      .fromTo(L, { opacity: 0 }, { opacity: 1 }, 0.1)
      .fromTo(t, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.2)
      .fromTo($, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.4);
    let h = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: i, start: 'top bottom' },
    });
    h.set(l, { transformOrigin: 'left center' })
      .fromTo(l, { scaleX: 0 }, { scaleX: 1 })
      .fromTo(o, { opacity: 0 }, { opacity: 1 }, 0);
  },
  animateHomeSolutions = () => {
    let _ = document.querySelector('.elementor-element-36b7317'),
      e = _.querySelector('.elementor-element-66c8153'),
      t = _.querySelector('.elementor-element-19de3dd'),
      $ = _.querySelector('.elementor-element-c79a800'),
      L = _.querySelector('.elementor-element-b49b35f'),
      i = L.querySelectorAll('a'),
      l = _.querySelector('.elementor-element-a834728');
    animateImageWithTriangles(l),
      (e.style.transition = 'null'),
      (t.style.transition = 'null'),
      ($.style.transition = 'null');
    let o = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: t, start: 'top bottom' },
    });
    o
      .fromTo(e, { yPercent: -200 }, { yPercent: 0, duration: 1.2 })
      .fromTo(e, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0)
      .fromTo(t, { y: 100 }, { y: 0 }, 0),
      gsap.fromTo(
        $,
        { y: 100 },
        {
          y: 0,
          duration: 0.8,
          ease: 'sine.out',
          scrollTrigger: { trigger: $, start: 'top bottom' },
        }
      ),
      i.forEach((_) => (_.style.transition = 'null'));
    let r = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: L, start: 'top bottom' },
    });
    r.fromTo(i, { y: 200 }, { y: 0 });
  },
  animateHomePortfolio = () => {
    let _ = document.querySelector('.elementor-element-b7bc695'),
      e = _.querySelector('.elementor-element-a05d710'),
      t = _.querySelector('.elementor-element-a13fd65'),
      $ = _.querySelector('.elementor-element-6e83bf4'),
      L = _.querySelector('.elementor-element-70093b3 ');
    (t.style.transition = 'null'),
      ($.style.transition = 'null'),
      (L.style.transition = 'null'),
      animateImageWithTriangles(e);
    let i = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: e, start: 'top bottom' },
    });
    i.fromTo(t, { yPercent: -200 }, { yPercent: 0, duration: 1.2 }).fromTo(
      t,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      0
    );
    let l = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: $, start: 'top bottom' },
    });
    l.fromTo([$, L], { y: 100 }, { y: 0 }, 0);
  },
  animateHomeNews = () => {
    let _ = document.querySelector('.elementor-element-3eaa49e'),
      e = _.querySelector('.elementor-element-1e23539'),
      t = _.querySelector('.elementor-element-b47ea62'),
      $ = t.querySelectorAll('.elementor-819 ');
    (e.style.transition = 'null'),
      $.forEach((_) => (_.style.transition = 'null'));
    let L = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: e, start: 'top bottom' },
    });
    L.fromTo(e, { y: 100 }, { y: 0 }, 0).fromTo(
      $,
      { y: 100, stagger: 0.1 },
      { y: 0 },
      0.1
    );
  },
  animateHomeFooter = () => {
    let _ = document.querySelector('.elementor-element-225cb15'),
      e = _.querySelector('.elementor-element-9c5f727'),
      t = _.querySelector('.elementor-element-2498881'),
      $ = _.querySelector('.elementor-element-cfc68da');
    (e.style.transition = 'null'),
      (t.style.transition = 'null'),
      ($.style.transition = 'null');
    let L = gsap.timeline({
      defaults: { duration: 0.8, ease: 'sine.out' },
      scrollTrigger: { trigger: _, start: 'top bottom' },
    });
    L.fromTo(t, { y: 100 }, { y: 0 }, 0)
      .fromTo($, { y: 200 }, { y: 0 }, 0)
      .fromTo(e, { opacity: 0 }, { opacity: 1 }, 0);
  };
document.addEventListener('DOMContentLoaded', () => {
  gsap.fromTo(
    document.documentElement,
    { autoAlpha: 0 },
    { autoAlpha: 1, delay: 0.2, duration: 0.75, ease: 'sine.out' }
  ),
    '/' === window.location.pathname &&
      (animateHomeLoad(),
      animateHomeAbout(),
      animateHomeSolutions(),
      animateHomePortfolio(),
      animateHomeNews(),
      animateHomeFooter());
});
