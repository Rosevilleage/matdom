// 음식 아이콘 매핑 - Fast Refresh를 위해 별도 파일로 분리
import React from "react";

interface IconProps {
  className?: string;
}

// 이 파일은 상수만 export하므로 Fast Refresh 에러가 발생하지 않습니다
export const ICON_MAP_PLACEHOLDER: Record<string, React.ComponentType<IconProps>> = {};

