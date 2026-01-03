/**
 * Kakao Map JavaScript SDK 타입 선언
 * @see https://apis.map.kakao.com/web/documentation/
 */

// 전역 kakao 네임스페이스
declare global {
  interface Window {
    kakao: typeof kakao;
  }

  const kakao: {
    maps: {
      // SDK 로드 함수
      load: (callback: () => void) => void;

      // 지도 클래스
      Map: new (container: HTMLElement, options: kakao.maps.MapOptions) => kakao.maps.Map;

      // 좌표 클래스
      LatLng: new (lat: number, lng: number) => kakao.maps.LatLng;

      // 마커 클래스
      Marker: new (options: kakao.maps.MarkerOptions) => kakao.maps.Marker;

      // 마커 이미지 클래스
      MarkerImage: new (
        src: string,
        size: kakao.maps.Size,
        options?: kakao.maps.MarkerImageOptions
      ) => kakao.maps.MarkerImage;

      // 크기 클래스
      Size: new (width: number, height: number) => kakao.maps.Size;

      // 이벤트 유틸리티
      event: {
        addListener: (
          target: kakao.maps.Map | kakao.maps.Marker,
          type: string,
          handler: (...args: unknown[]) => void
        ) => void;
        removeListener: (
          target: kakao.maps.Map | kakao.maps.Marker,
          type: string,
          handler: (...args: unknown[]) => void
        ) => void;
      };
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace kakao.maps {
    // 지도 옵션
    interface MapOptions {
      center: LatLng;
      level?: number;
    }

    // 지도 인스턴스
    interface Map {
      setCenter(latlng: LatLng): void;
      getCenter(): LatLng;
      setLevel(level: number, options?: { animate?: boolean }): void;
      getLevel(): number;
      panTo(latlng: LatLng): void;
    }

    // 좌표
    interface LatLng {
      getLat(): number;
      getLng(): number;
    }

    // 마커 옵션
    interface MarkerOptions {
      position: LatLng;
      map?: Map;
      image?: MarkerImage;
      title?: string;
      clickable?: boolean;
      zIndex?: number;
    }

    // 마커 인스턴스
    interface Marker {
      setMap(map: Map | null): void;
      getMap(): Map;
      setPosition(position: LatLng): void;
      getPosition(): LatLng;
      setImage(image: MarkerImage): void;
      setZIndex(zIndex: number): void;
      setTitle(title: string): void;
    }

    // 마커 이미지 옵션
    interface MarkerImageOptions {
      offset?: { x: number; y: number };
      alt?: string;
      coords?: string;
      shape?: string;
      spriteOrigin?: { x: number; y: number };
      spriteSize?: Size;
    }

    // 마커 이미지
    interface MarkerImage {
      // 추후 필요시 메서드 추가 가능
      readonly _brand: "MarkerImage";
    }

    // 크기
    interface Size {
      // 추후 필요시 메서드 추가 가능
      readonly _brand: "Size";
    }
  }
}

export {};
