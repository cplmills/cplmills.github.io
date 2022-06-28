// function loadPlaceholders() {
//     // store all data-src tags to the imagesToLoad list
//     let imagesToLoad = document.querySelectorAll('img[data-src]');
//     let srcToLoad = document.querySelectorAll('source[data-src]');

//     //Creates a function called loadImages which is replacing the src with the data-src value
//     const loadImages = (image) => {
//         image.setAttribute('src', image.getAttribute('data-src'));
//         image.onload = () => {
//             image.removeAttribute('data-src');
//         };
//     };

//     const loadSrcSet = (srcset) => {
//         srcset.setAttribute('srcset', srcset.getAttribute('data-src'));
//         srcset.onload = () => {
//             srcset.removeAttribute('data-src');
//             console.log(srcset.getAttribute('data-src'));
//         };
//     };

//     // Loops through the imagesToLoad list and calls the loadImages function on each image
//     imagesToLoad.forEach((img) => {
//         loadImages(img);
//     });

//     srcToLoad.forEach((img) => {
//         loadSrcSet(img);
//     });
// }

// function loadObserver() {
    let imagesToLoad = document.querySelectorAll('img[data-src]');
    let srcToLoad = document.querySelectorAll('source[data-src]');

    const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
        };
    };
    
    const loadSrcSet = (srcset) => {
        srcset.setAttribute('srcset', srcset.getAttribute('data-src'));
        srcset.onload = () => {
            srcset.removeAttribute('data-src');
        };
    };

    if('IntersectionObserver' in window) {
        // create an instance of the Observer class called observer
        const imgObserver = new IntersectionObserver((imagesToLoad, observer) => {
          imagesToLoad.forEach((item) => {
            if(item.isIntersecting) {
              loadImages(item.target);
              imgObserver.unobserve(item.target);
            }
          });
        });

        const srcObserver = new IntersectionObserver((imagesToLoad, observer) => {
            imagesToLoad.forEach((item) => {
              if(item.isIntersecting) {
                loadSrcSet(item.target);
                srcObserver.unobserve(item.target);
              }
            });
          });

        imagesToLoad.forEach((img) => {
          imgObserver.observe(img);
        });

        srcToLoad.forEach((img) => {
            srcObserver.observe(img);
        });
      } else {
        imagesToLoad.forEach((img) => {
          loadImages(img);
        });
        srcToLoad.forEach((img) => {
            loadImages(img);
        });
      }
// }