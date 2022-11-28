import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateReachableRangePostDataParametersAvoidAreasRectangles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=northEastCorner" })
  northEastCorner?: CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner;

  @SpeakeasyMetadata({ data: "json, name=southWestCorner" })
  southWestCorner?: CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}


export class CalculateReachableRangePostDataParametersAvoidAreas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rectangles", elemType: CalculateReachableRangePostDataParametersAvoidAreasRectangles })
  rectangles?: CalculateReachableRangePostDataParametersAvoidAreasRectangles[];
}


export class CalculateReachableRangePostDataParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowVignette" })
  allowVignette?: string[];

  @SpeakeasyMetadata({ data: "json, name=avoidAreas" })
  avoidAreas?: CalculateReachableRangePostDataParametersAvoidAreas;

  @SpeakeasyMetadata({ data: "json, name=avoidVignette" })
  avoidVignette?: string[];
}
