import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateRoutePostDataParametersAvoidAreasRectangles extends SpeakeasyBase {
  @Metadata({ data: "json, name=northEastCorner" })
  northEastCorner?: CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner;

  @Metadata({ data: "json, name=southWestCorner" })
  southWestCorner?: CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}


export class CalculateRoutePostDataParametersAvoidAreas extends SpeakeasyBase {
  @Metadata({ data: "json, name=rectangles", elemType: shared.CalculateRoutePostDataParametersAvoidAreasRectangles })
  rectangles?: CalculateRoutePostDataParametersAvoidAreasRectangles[];
}


export class CalculateRoutePostDataParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowVignette" })
  allowVignette?: string[];

  @Metadata({ data: "json, name=avoidAreas" })
  avoidAreas?: CalculateRoutePostDataParametersAvoidAreas;

  @Metadata({ data: "json, name=avoidVignette" })
  avoidVignette?: string[];

  @Metadata({ data: "json, name=supportingPoints" })
  supportingPoints?: any[];
}
