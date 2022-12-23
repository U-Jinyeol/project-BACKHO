declare global {
  interface Window {
    Kakao: any;
  }
}

export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init("51ebaf2e14f641424fbaa34581102603");
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "Merry Christmas",
        description: "Merry Christmas Dear My Friend",
        imageUrl: "https://ifh.cc/g/ZBVBHG.png",
        imageWidth: 600,
        imageHeight: 400,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },

      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  }
};
