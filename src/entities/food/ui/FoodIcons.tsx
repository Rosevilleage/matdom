// SVG 아이콘 임포트
import KoreanFoodSvg from "@/shared/assets/icons/korean-food.svg";
import ChineseFoodSvg from "@/shared/assets/icons/chinese-food.svg";
import JapaneseFoodSvg from "@/shared/assets/icons/japanese-food.svg";
import WesternFoodSvg from "@/shared/assets/icons/western-food.svg";
import ChickenSvg from "@/shared/assets/icons/chicken.svg";
import PizzaSvg from "@/shared/assets/icons/pizza.svg";
import BurgerSvg from "@/shared/assets/icons/burger.svg";
import StreetFoodSvg from "@/shared/assets/icons/street-food.svg";
import NoodleSvg from "@/shared/assets/icons/noodle.svg";
import CurrySvg from "@/shared/assets/icons/curry.svg";
import TacoSvg from "@/shared/assets/icons/taco.svg";
import DessertSvg from "@/shared/assets/icons/dessert.svg";
import DefaultSvg from "@/shared/assets/icons/default.svg";

interface IconProps {
  className?: string;
}

// 각 음식 카테고리별 아이콘 컴포넌트
function KoreanFoodIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={KoreanFoodSvg} alt="Korean Food" className={className} />;
}

function ChineseFoodIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={ChineseFoodSvg} alt="Chinese Food" className={className} />;
}

function JapaneseFoodIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <img src={JapaneseFoodSvg} alt="Japanese Food" className={className} />
  );
}

function WesternFoodIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={WesternFoodSvg} alt="Western Food" className={className} />;
}

function ChickenIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={ChickenSvg} alt="Chicken" className={className} />;
}

function PizzaIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={PizzaSvg} alt="Pizza" className={className} />;
}

function BurgerIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={BurgerSvg} alt="Burger" className={className} />;
}

function StreetFoodIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={StreetFoodSvg} alt="Street Food" className={className} />;
}

function NoodleIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={NoodleSvg} alt="Noodle" className={className} />;
}

function CurryIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={CurrySvg} alt="Curry" className={className} />;
}

function TacoIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={TacoSvg} alt="Taco" className={className} />;
}

function DessertIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={DessertSvg} alt="Dessert" className={className} />;
}

function DefaultFoodIcon({ className = "w-12 h-12" }: IconProps) {
  return <img src={DefaultSvg} alt="Food" className={className} />;
}

// 개별 아이콘 컴포넌트 export
export {
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
  DefaultFoodIcon,
  DefaultFoodIcon as DefaultIcon, // 별칭으로 export
};
