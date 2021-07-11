const lyrics = [
  {
    lyric:
      "잊지마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이지 그 유일함이 얼마나 아름다운지 말야",
    title: "Celebrity - IU",
  },
  {
    lyric:
      "이거 하나만 잊지 마 아주 먼 어느 밤 너를 위로할 별 하나 아마 나일 거야",
    title: "dear DREAM - NCT DREAM",
  },
  {
    lyric:
      "I know it's hard sometimes to see the light  But you and I keep on dreaming",
    title: "Fireflies - NCT DREAM",
  },
  {
    lyric: "낙엽이 떨어진 계절을 다시 만나면 어디든 나 문득 떠나고 싶어",
    title: "나나나 - BTOB",
  },
  {
    lyric: "지금 내게 더 필요한 건 어딘가로 데려다 줄 신발 하나뿐",
    title: "I Just - RED VELVET",
  },
  {
    lyric: "그 좋은 손길에 까무룩 잠이 들어도 잠시만 그대로 두어요",
    title: "무릎 - IU",
  },
  {
    lyric: "현실이 꿈이고 꿈이 현실 같아",
    title: "My Page - NCT DREAM",
  },
  {
    lyric:
      "수많은 알 수 없는 길 속에 희미한 빛을 난 쫓아가 언제까지라도 함께 하는 거야 다시 만난 나의 세계",
    title: "다시 만난 세계 - 소녀시대",
  },
  {
    lyric:
      "좁다란 길 향기를 채우는 가로등 빛 물든 진달래꽃 이 향기를 그와 함께 맡으면 참 좋겠네",
    title: "산책 - 백예린",
  },
  {
    lyric: "당신의 한숨 그 깊일 이해할 순 없겠지만 괜찮아요 내가 안아줄게요",
    title: "한숨 - 이하이",
  },
];

const lyric = document.querySelector("#lyrics span:first-child");
const title = document.querySelector("#lyrics span:last-child");

const todaysLyric = lyrics[Math.floor(Math.random() * lyrics.length)];

lyric.innerText = todaysLyric.lyric;
title.innerText = todaysLyric.title;
