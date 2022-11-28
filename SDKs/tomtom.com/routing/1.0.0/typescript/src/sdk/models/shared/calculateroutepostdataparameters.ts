import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateRoutePostDataParametersAvoidAreasRectangles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=northEastCorner" })
  northEastCorner?: CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner;

  @SpeakeasyMetadata({ data: "json, name=southWestCorner" })
  southWestCorner?: CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}


export class CalculateRoutePostDataParametersAvoidAreas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rectangles", elemType: CalculateRoutePostDataParametersAvoidAreasRectangles })
  rectangles?: CalculateRoutePostDataParametersAvoidAreasRectangles[];
}


export class CalculateRoutePostDataParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowVignette" })
  allowVignette?: string[];

  @SpeakeasyMetadata({ data: "json, name=avoidAreas" })
  avoidAreas?: CalculateRoutePostDataParametersAvoidAreas;

  @SpeakeasyMetadata({ data: "json, name=avoidVignette" })
  avoidVignette?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportingPoints" })
  supportingPoints?: any[];
}
