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
} from "@/entities/food/ui/FoodIcons";

const FOOD_ICONS = [
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
];

export function PatternBackground() {
  // 아이콘들을 반복 패턴으로 배치
  const rows = 10; // 세로 행 수
  const cols = 20; // 가로 열 수 (데스크톱에서 충분히 넓게)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 flex flex-col">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex shrink-0"
            style={{ height: `${100 / rows}%` }}
          >
            {Array.from({ length: cols }).map((_, colIndex) => {
              const IconComponent =
                FOOD_ICONS[(rowIndex * cols + colIndex) % FOOD_ICONS.length];
              const opacity = 0.08; // 파스텔 배경에 맞게 약간 더 진하게

              return (
                <div
                  key={colIndex}
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: `${100 / cols}%`,
                    opacity,
                    filter: "brightness(0.9) saturate(0.7)", // 파스텔 톤으로 조정
                  }}
                >
                  <IconComponent className="w-10 h-10" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
