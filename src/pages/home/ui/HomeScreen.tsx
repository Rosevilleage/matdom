import { useState } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence } from "framer-motion";
import { SlotMachine, SlotMachineIcon } from "@/widgets/slot-machine";
import { FoodResultModal } from "@/widgets/food-result-modal";
import { IconMapPin } from "@tabler/icons-react";
import { FOOD_ITEMS } from "@/shared/config";

export function HomeScreen() {
  const navigate = useNavigate();
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleRollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setShowResult(false);

    // 랜덤 음식 선택
    const randomIndex = Math.floor(Math.random() * FOOD_ITEMS.length);
    const selectedFood = FOOD_ITEMS[randomIndex];
    setResult(selectedFood);
  };

  const handleSlotComplete = () => {
    // 슬롯머신 애니메이션이 완료되면 결과 모달 표시
    setIsRolling(false);
    setShowResult(true);
  };

  const handleRollAgain = () => {
    setShowResult(false);
    setResult(null);
    setTimeout(() => {
      handleRollDice();
    }, 200);
  };

  const handleFindNearby = () => {
    if (result) {
      // URL에 음식 정보를 포함하여 맵 페이지로 이동
      navigate(`/map?food=${encodeURIComponent(result)}`);
    }
  };

  const handleShowNearbyRestaurants = () => {
    // 내 주위 음식점 보기 (검색 없이)
    navigate("/map");
  };

  const handleClose = () => {
    setShowResult(false);
    setResult(null);
    setIsRolling(false);
  };

  return (
    <div className="flex flex-col h-full px-6 pt-12 pb-24 relative">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-4xl" style={{ animationDuration: "2s" }}>
            🍽️
          </span>
          <h1
            className="text-4xl tablet:text-5xl font-bold animate-gradient"
            style={{
              background:
                "linear-gradient(90deg, #4F46E5 0%, #7C3AED 50%, #4F46E5 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            오늘 뭐 먹지?
          </h1>
          <span
            className="text-4xl"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          >
            🤔
          </span>
        </div>
        <p className="text-muted-foreground text-base tablet:text-lg">
          음식을 랜덤으로 추천받아보세요
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* 슬롯머신 아이콘 - 초기 상태 */}
        {!isRolling && !showResult && (
          <button
            onClick={handleRollDice}
            className="mb-12 animate-bounce cursor-pointer active:scale-95 transition-transform"
            aria-label="음식 뽑기"
          >
            <div className="w-32 h-32 rounded-3xl bg-white flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200">
              <SlotMachineIcon className="w-24 h-24" />
            </div>
          </button>
        )}

        {/* Empty State Message */}
        {!isRolling && !showResult && (
          <div className="text-center text-muted-foreground mb-8">
            <p>음식 뽑기를 시작해보세요!</p>
            <p className="text-sm mt-2">
              100가지 이상의 음식 중 랜덤으로 추천해드려요
            </p>
          </div>
        )}
      </div>

      {/* Roll Dice Button */}
      <div className="mt-auto space-y-3">
        <button
          onClick={handleRollDice}
          disabled={isRolling}
          className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white rounded-2xl transition-all duration-150 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-lg">
            <SlotMachineIcon className="w-5 h-5" />
          </div>
          <span className="text-lg">
            {isRolling ? "음식 뽑는 중..." : "음식 뽑기"}
          </span>
        </button>

        <button
          onClick={handleShowNearbyRestaurants}
          className="w-full py-5 bg-white hover:bg-gray-50 active:bg-gray-100 text-indigo-600 border-2 border-indigo-600 rounded-2xl transition-all duration-150 flex items-center justify-center gap-3 active:scale-[0.98] shadow-lg"
        >
          <IconMapPin className="w-6 h-6" />
          <span className="text-lg">내 주위 음식점 보기</span>
        </button>
      </div>

      {/* Slot Machine Animation */}
      {isRolling && result && (
        <SlotMachine
          isRolling={isRolling}
          foodItems={FOOD_ITEMS}
          result={result}
          onComplete={handleSlotComplete}
        />
      )}

      {/* Result Modal */}
      <AnimatePresence>
        {showResult && result && (
          <FoodResultModal
            foodName={result}
            onFindNearby={handleFindNearby}
            onRollAgain={handleRollAgain}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
