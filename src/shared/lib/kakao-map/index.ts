/**
 * Kakao Map SDK 통합 모듈
 *
 * FSD 아키텍처에 따라 shared layer에서 Kakao Map API를 래핑합니다.
 *
 * @module shared/lib/kakao-map
 */

// SDK 로더
export { loadKakaoMapSDK, isSDKLoaded } from "./loader";

// 타입 정의 (re-export)
export type {} from "./types";
