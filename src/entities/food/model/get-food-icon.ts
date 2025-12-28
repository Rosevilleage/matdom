// getFoodIcon 함수를 별도 파일로 분리 - Fast Refresh 에러 방지
import React from "react";
import {
  KoreanFoodIcon,
  ChineseFoodIcon,
  JapaneseFoodIcon,
  WesternFoodIcon,
  ChickenIcon,
  PizzaIcon,
  BurgerIcon,
  StreetFoodIcon,
  NoodleIcon,
  CurryIcon,
  TacoIcon,
  DessertIcon,
  DefaultIcon,
} from "../ui/FoodIcons";

interface IconProps {
  className?: string;
}

// 음식 이름으로 아이콘 매핑
export function getFoodIcon(foodName: string): React.ComponentType<IconProps> {
  const lowerFood = foodName.toLowerCase();

  // 한식
  if (
    lowerFood.includes("김치") ||
    lowerFood.includes("된장") ||
    lowerFood.includes("비빔밥") ||
    lowerFood.includes("불고기") ||
    lowerFood.includes("삼겹살") ||
    lowerFood.includes("갈비") ||
    lowerFood.includes("설렁탕") ||
    lowerFood.includes("육개장") ||
    lowerFood.includes("삼계탕") ||
    lowerFood.includes("순두부") ||
    lowerFood.includes("백반") ||
    lowerFood.includes("쌈밥") ||
    lowerFood.includes("보쌈") ||
    lowerFood.includes("족발")
  ) {
    return KoreanFoodIcon;
  }

  // 중식
  if (
    lowerFood.includes("짜장") ||
    lowerFood.includes("짬뽕") ||
    lowerFood.includes("탕수육") ||
    lowerFood.includes("양장피") ||
    lowerFood.includes("마라") ||
    lowerFood.includes("깐풍") ||
    lowerFood.includes("유산슬") ||
    lowerFood.includes("중국") ||
    lowerFood.includes("볶음밥")
  ) {
    return ChineseFoodIcon;
  }

  // 일식
  if (
    lowerFood.includes("초밥") ||
    lowerFood.includes("라멘") ||
    lowerFood.includes("돈카츠") ||
    lowerFood.includes("우동") ||
    lowerFood.includes("오코노미") ||
    lowerFood.includes("타코야키") ||
    lowerFood.includes("규동") ||
    lowerFood.includes("회") ||
    lowerFood.includes("사시미")
  ) {
    return JapaneseFoodIcon;
  }

  // 양식
  if (
    lowerFood.includes("스테이크") ||
    lowerFood.includes("리조또") ||
    lowerFood.includes("샐러드") ||
    lowerFood.includes("스프") ||
    lowerFood.includes("파스타")
  ) {
    return WesternFoodIcon;
  }

  // 치킨
  if (
    lowerFood.includes("치킨") ||
    lowerFood.includes("닭") ||
    lowerFood.includes("탄두리")
  ) {
    return ChickenIcon;
  }

  // 피자
  if (lowerFood.includes("피자")) {
    return PizzaIcon;
  }

  // 햄버거
  if (
    lowerFood.includes("햄버거") ||
    lowerFood.includes("버거") ||
    lowerFood.includes("샌드위치")
  ) {
    return BurgerIcon;
  }

  // 분식
  if (
    lowerFood.includes("떡볶이") ||
    lowerFood.includes("순대") ||
    lowerFood.includes("튀김") ||
    lowerFood.includes("김밥") ||
    lowerFood.includes("어묵") ||
    lowerFood.includes("만두")
  ) {
    return StreetFoodIcon;
  }

  // 면 요리
  if (
    lowerFood.includes("라면") ||
    lowerFood.includes("쌀국수") ||
    lowerFood.includes("팟타이") ||
    lowerFood.includes("냉면") ||
    lowerFood.includes("막국수") ||
    lowerFood.includes("칼국수") ||
    lowerFood.includes("수제비") ||
    lowerFood.includes("분짜")
  ) {
    return NoodleIcon;
  }

  // 커리
  if (
    lowerFood.includes("커리") ||
    lowerFood.includes("카레") ||
    lowerFood.includes("비리야니")
  ) {
    return CurryIcon;
  }

  // 멕시칸
  if (
    lowerFood.includes("타코") ||
    lowerFood.includes("부리또") ||
    lowerFood.includes("케밥")
  ) {
    return TacoIcon;
  }

  // 카페/디저트
  if (
    lowerFood.includes("카페") ||
    lowerFood.includes("디저트") ||
    lowerFood.includes("케이크") ||
    lowerFood.includes("커피") ||
    lowerFood.includes("음료")
  ) {
    return DessertIcon;
  }

  return DefaultIcon;
}
