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
`;

const removeStyleTransition = (element) => {
  if (element) {
    element.style.transition = 'null';
  }
};

const animateImageWithTriangles = (container) => {
  if (!container) return;

  container.style.position = 'relative';
  container.style.overflow = 'hidden';

  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svg, 'image/svg+xml');
  const svgElement = svgDoc.documentElement;
  svgElement.setAttribute('width', '100%');
  svgElement.setAttribute('height', '100%');
  svgElement.setAttribute('viewBox', '0 0 100 100');
  svgElement.setAttribute('preserveAspectRatio', 'none');
  svgElement.style.position = 'absolute';
  svgElement.style.top = '0';
  svgElement.style.left = '0';
  svgElement.style.width = '100%';
  svgElement.style.height = '100%';

  container.appendChild(svgElement);

  const paths = svgElement.querySelectorAll('path');

  paths.forEach((path, index) => {
    const row = Math.floor(index / 20);
    const col = index % 20;

    const waveDelay = (row + col) * 0.04;

    gsap.set(paths, { transformOrigin: 'center' });

    gsap.to(path, {
      scaleX: 0,
      duration: 1,
      delay: waveDelay,
      ease: 'sine.out',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
      },
    });
  });
};

const animateFooter = (footer, logo, text, infos) => {
  logo.style.transition = 'null';

  removeStyleTransition(logo);
  removeStyleTransition(text);
  removeStyleTransition(infos);

  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: footer,
      start: 'top bottom',
    },
  });

  tl.fromTo(
    text,
    {
      y: 100,
    },
    { y: 0 },
    0
  )
    .fromTo(
      infos,
      {
        y: 200,
      },
      { y: 0 },
      0
    )
    .fromTo(
      logo,
      {
        opacity: 0,
      },
      { opacity: 1 },
      0
    );
};

/**
 * HOME
 */
const animateHomeHero = () => {
  const header = document.querySelector('.elementor-element-3a6ff3b3');
  const hero = document.querySelector('.elementor-element-d6f559d');

  let rightText, leftText, logo;

  if (hero) {
    rightText = hero.querySelector('.elementor-element-36d8733');
    leftText = hero.querySelector('.elementor-element-d478c92');
    logo = hero.querySelector('.elementor-element-11a92c6');
  }

  removeStyleTransition(header);
  removeStyleTransition(rightText);
  removeStyleTransition(leftText);
  removeStyleTransition(logo);

  animateImageWithTriangles(hero);

  const tl = gsap.timeline({
    delay: 2,
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
  });

  tl.fromTo(
    rightText,
    { yPercent: 50, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
    .fromTo(
      leftText,
      { yPercent: 50, opacity: 0 },
      { yPercent: 0, opacity: 1 },
      0.1
    )
    .fromTo(
      header,
      {
        yPercent: -100,
      },
      { yPercent: 0 },
      0.2
    )
    .fromTo(
      logo,
      {
        yPercent: -200,
      },
      { yPercent: 0, duration: 1.2 },
      0.4
    )
    .fromTo(
      logo,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.4 },
      0.4
    );
};

const animateHomeAbout = () => {
  const about = document.querySelector('.elementor-element-a6a6e27');

  let smallText, header, infos, logo, buttonContainer, buttons, buttonsInner;

  if (about) {
    smallText = about.querySelector('.elementor-element-4d18a7c p');
    header = about.querySelector('.elementor-element-392c131');
    infos = about.querySelector('.elementor-element-3c69ac3');
    logo = about.querySelector('.elementor-element-92a4c05');
  }

  if (about) {
    buttonContainer = about.querySelector('.elementor-element-1d57c2c');

    if (buttonContainer) {
      buttons = buttonContainer.querySelectorAll('.elementor-widget-button');
      buttonsInner = buttonContainer.querySelectorAll(
        '.elementor-widget-container'
      );
    }
  }

  removeStyleTransition(smallText);
  removeStyleTransition(logo);
  removeStyleTransition(header);
  removeStyleTransition(infos);

  const infosTl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: infos,
      start: 'top bottom',
    },
  });

  infosTl
    .fromTo(smallText, { opacity: 0 }, { opacity: 1 })
    .fromTo(
      logo,
      {
        opacity: 0,
      },
      { opacity: 1 },
      0.1
    )
    .fromTo(
      header,
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1 },
      0.2
    )
    .fromTo(
      infos,
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1 },
      0.4
    );

  const buttonsTl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: buttonContainer,
      start: 'top bottom',
    },
  });

  buttonsTl
    .set(buttons, { transformOrigin: 'left center' })
    .fromTo(buttons, { scaleX: 0 }, { scaleX: 1 })
    .fromTo(buttonsInner, { opacity: 0 }, { opacity: 1 }, 0);
};

const animateHomeSolutions = () => {
  const solutions = document.querySelector('.elementor-element-36b7317');

  let logo, header, infos, list, items, container;

  if (solutions) {
    logo = solutions.querySelector('.elementor-element-66c8153');
    header = solutions.querySelector('.elementor-element-19de3dd');

    infos = solutions.querySelector('.elementor-element-c79a800');

    list = solutions.querySelector('.elementor-element-b49b35f');

    container = solutions.querySelector('.elementor-element-a834728');

    if (list) {
      items = list.querySelectorAll('a');
    }
  }

  animateImageWithTriangles(container);

  removeStyleTransition(logo);
  removeStyleTransition(header);
  removeStyleTransition(infos);

  const headerTl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: header,
      start: 'top bottom',
    },
  });

  headerTl
    .fromTo(
      logo,
      {
        yPercent: -200,
      },
      { yPercent: 0, duration: 1.2 }
    )
    .fromTo(
      logo,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.4 },
      0
    )
    .fromTo(
      header,
      {
        y: 100,
      },
      { y: 0 },
      0
    );

  gsap.fromTo(
    infos,
    { y: 100 },
    {
      y: 0,
      duration: 0.8,
      ease: 'sine.out',
      scrollTrigger: {
        trigger: infos,
        start: 'top bottom',
      },
    }
  );

  if (items) {
    items.forEach((item) => removeStyleTransition(item));
  }

  const listTl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: list,
      start: 'top bottom',
    },
  });

  listTl.fromTo(
    items,
    { y: 200 },
    {
      y: 0,
    }
  );
};

const animateHomePortfolio = () => {
  const portfolio = document.querySelector('.elementor-element-b7bc695');

  let container, logo, title, infos;

  if (portfolio) {
    container = portfolio.querySelector('.elementor-element-a05d710');
    logo = portfolio.querySelector('.elementor-element-a13fd65');

    title = portfolio.querySelector('.elementor-element-6e83bf4');
    infos = portfolio.querySelector('.elementor-element-70093b3 ');
  }

  removeStyleTransition(logo);
  removeStyleTransition(title);
  removeStyleTransition(infos);

  animateImageWithTriangles(container);

  const containerTl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: container,
      start: 'top bottom',
    },
  });

  containerTl
    .fromTo(
      logo,
      {
        yPercent: -200,
      },
      { yPercent: 0, duration: 1.2 }
    )
    .fromTo(
      logo,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.4 },
      0
    );

  const titleTl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: title,
      start: 'top bottom',
    },
  });

  titleTl.fromTo(
    [title, infos],
    {
      y: 100,
    },
    { y: 0 },
    0
  );
};

const animateHomeNews = () => {
  const news = document.querySelector('.elementor-element-3eaa49e');

  let header, list, items;

  if (news) {
    header = news.querySelector('.elementor-element-1e23539');

    list = news.querySelector('.elementor-element-b47ea62');

    if (list) {
      items = list.querySelectorAll('.elementor-819');
    }
  }

  removeStyleTransition(header);

  if (items) {
    items.forEach((item) => removeStyleTransition(item));
  }

  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
    scrollTrigger: {
      trigger: header,
      start: 'top bottom',
    },
  });

  tl.fromTo(
    header,
    {
      y: 100,
    },
    { y: 0 },
    0
  ).fromTo(
    items,
    {
      y: 100,
      stagger: 0.1,
    },
    { y: 0 },
    0.1
  );
};

const animateHomeFooter = () => {
  const footer = document.querySelector('.elementor-element-225cb15');

  let logo, text, infos;

  if (footer) {
    logo = footer.querySelector('.elementor-element-9c5f727');
    text = footer.querySelector('.elementor-element-2498881');
    infos = footer.querySelector('.elementor-element-cfc68da');
  }

  animateFooter(footer, logo, text, infos);
};

/**
 * ABOUT
 */
const animateAbout = () => {
  const hero = document.querySelector('.elementor-element-9402f5a');

  let logo, text;

  if (hero) {
    text = hero.querySelector('.elementor-element-ecf960e');
    logo = hero.querySelector('.elementor-element-3252069');
  }

  removeStyleTransition(text);
  removeStyleTransition(logo);

  animateImageWithTriangles(hero);

  const tl = gsap.timeline({
    delay: 2,
    defaults: {
      duration: 0.8,
      ease: 'sine.out',
    },
  });

  tl.fromTo(text, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1 })

    .fromTo(
      logo,
      {
        yPercent: -200,
      },
      { yPercent: 0, duration: 1.2 },
      0.4
    )
    .fromTo(
      logo,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.4 },
      0.4
    );

  const potential = document.querySelector('.elementor-element-4be82b9');
  let potentialImage;

  if (potential) {
    potentialImage = potential.querySelector('.elementor-element-1a52414');
  }

  animateImageWithTriangles(potentialImage);

  const support = document.querySelector('.elementor-element-4f33dea');
  let supportImage;

  if (support) {
    supportImage = support.querySelector('.elementor-element-38d108e');
  }

  animateImageWithTriangles(supportImage);

  const success = document.querySelector('.elementor-element-568b83d');
  let successImage;

  if (success) {
    successImage = success.querySelector('.elementor-element-b899b9a');
  }

  animateImageWithTriangles(successImage);

  const footer = document.querySelector('.elementor-element-2e48c1a');

  let footerLogo, footerText, footerInfos;

  if (footer) {
    footerLogo = footer.querySelector('.elementor-element-20d6a17');
    footerText = footer.querySelector('.elementor-element-acf251b');
    footerInfos = footer.querySelector('.elementor-element-098823e');
  }

  animateFooter(footer, footerLogo, footerText, footerInfos);
};

/**
 * CAPABILITIES
 */
const animateCapabilities = () => {
  const page = document.querySelector('.elementor-element-f64ceb7');

  let container;

  if (page) {
    container = page.querySelector('.elementor-element-88fd887');
  }

  animateImageWithTriangles(container);

  const footer = document.querySelector('.elementor-element-489612b');

  let footerLogo, footerText, footerInfos;

  if (footer) {
    footerLogo = footer.querySelector('.elementor-element-c4483ad');
    footerText = footer.querySelector('.elementor-element-9311f47');
    footerInfos = footer.querySelector('.elementor-element-d82db84');
  }

  animateFooter(footer, footerLogo, footerText, footerInfos);
};

/**
 * PORTFOLIO
 */
const animatePortfolio = () => {
  const firstElement = document.querySelector('.elementor-element-52fba50');
  const secondElement = document.querySelector('.elementor-element-9cec417');

  let firstContainer, secondContainer;

  if (firstElement) {
    firstContainer = firstElement.querySelector('.elementor-element-e8c8d1e');
  }

  if (secondElement) {
    secondContainer = secondElement.querySelector('.elementor-element-d064a74');
  }

  animateImageWithTriangles(firstContainer);
  animateImageWithTriangles(secondContainer);

  const footer = document.querySelector('.elementor-element-4e4f730');

  let footerLogo, footerText, footerInfos;

  if (footer) {
    footerLogo = footer.querySelector('.elementor-element-2edf18d');
    footerText = footer.querySelector('.elementor-element-e290357');
    footerInfos = footer.querySelector('.elementor-element-fd92f44');
  }

  animateFooter(footer, footerLogo, footerText, footerInfos);
};

/**
 * NEWS
 */
const animateNews = () => {
  const footer = document.querySelector('.elementor-element-1e912e3');

  let footerLogo, footerText, footerInfos;

  if (footer) {
    footerLogo = footer.querySelector('.elementor-element-128c4fa');
    footerText = footer.querySelector('.elementor-element-1fd1a4f');
    footerInfos = footer.querySelector('.elementor-element-529c30b');
  }

  animateFooter(footer, footerLogo, footerText, footerInfos);
};

/**
 * SHOP
 */
const animateShop = () => {
  const footer = document.querySelector('.elementor-element-7693e98e');

  let footerLogo, footerText, footerInfos;

  if (footer) {
    footerLogo = footer.querySelector('.elementor-element-67c172');
    footerText = footer.querySelector('.elementor-element-4978f90d');
    footerInfos = footer.querySelector('.elementor-element-5e81f4ef');
  }

  animateFooter(footer, footerLogo, footerText, footerInfos);
};

/**
 * ROUTER
 */
gsap.set(document.documentElement, { autoAlpha: 0 });

document.addEventListener('DOMContentLoaded', () => {
  gsap.to(document.documentElement, {
    autoAlpha: 1,
    duration: 0.75,
    ease: 'sine.out',
  });

  let template = window.location.pathname;

  if (template !== '/' && template.endsWith('/')) {
    template = template.slice(0, -1);
  }

  console.log(template);

  if (template === '/') {
    animateHomeHero();
    animateHomeAbout();
    animateHomeSolutions();
    animateHomePortfolio();
    animateHomeNews();
    animateHomeFooter();
  } else if (template === '/capabilities') {
    animateCapabilities();
  } else if (template === '/portfolio') {
    animatePortfolio();
  } else if (template === '/about-us') {
    animateAbout();
  } else if (template === '/news') {
    animateNews();
  } else if (template === '/shop') {
    animateShop();
  }
});
