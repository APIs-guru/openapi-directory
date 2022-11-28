import { SpeakeasyBase } from "../../../internal/utils";
export declare class CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner extends SpeakeasyBase {
    latitude?: string;
    longitude?: string;
}
export declare class CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner extends SpeakeasyBase {
    latitude?: string;
    longitude?: string;
}
export declare class CalculateReachableRangePostDataParametersAvoidAreasRectangles extends SpeakeasyBase {
    northEastCorner?: CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner;
    southWestCorner?: CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}
export declare class CalculateReachableRangePostDataParametersAvoidAreas extends SpeakeasyBase {
    rectangles?: CalculateReachableRangePostDataParametersAvoidAreasRectangles[];
}
export declare class CalculateReachableRangePostDataParameters extends SpeakeasyBase {
    allowVignette?: string[];
    avoidAreas?: CalculateReachableRangePostDataParametersAvoidAreas;
    avoidVignette?: string[];
}
