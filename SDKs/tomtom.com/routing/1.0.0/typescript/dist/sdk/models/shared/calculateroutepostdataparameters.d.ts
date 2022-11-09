import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner extends SpeakeasyBase {
    latitude?: string;
    longitude?: string;
}
export declare class CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner extends SpeakeasyBase {
    latitude?: string;
    longitude?: string;
}
export declare class CalculateRoutePostDataParametersAvoidAreasRectangles extends SpeakeasyBase {
    northEastCorner?: CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner;
    southWestCorner?: CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}
export declare class CalculateRoutePostDataParametersAvoidAreas extends SpeakeasyBase {
    rectangles?: CalculateRoutePostDataParametersAvoidAreasRectangles[];
}
export declare class CalculateRoutePostDataParameters extends SpeakeasyBase {
    allowVignette?: string[];
    avoidAreas?: CalculateRoutePostDataParametersAvoidAreas;
    avoidVignette?: string[];
    supportingPoints?: any[];
}
