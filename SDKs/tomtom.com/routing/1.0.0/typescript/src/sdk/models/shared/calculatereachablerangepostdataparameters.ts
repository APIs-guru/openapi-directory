import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;
}


export class CalculateReachableRangePostDataParametersAvoidAreasRectangles extends SpeakeasyBase {
  @Metadata({ data: "json, name=northEastCorner" })
  northEastCorner?: CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner;

  @Metadata({ data: "json, name=southWestCorner" })
  southWestCorner?: CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner;
}


export class CalculateReachableRangePostDataParametersAvoidAreas extends SpeakeasyBase {
  @Metadata({ data: "json, name=rectangles", elemType: shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles })
  rectangles?: CalculateReachableRangePostDataParametersAvoidAreasRectangles[];
}


export class CalculateReachableRangePostDataParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowVignette" })
  allowVignette?: string[];

  @Metadata({ data: "json, name=avoidAreas" })
  avoidAreas?: CalculateReachableRangePostDataParametersAvoidAreas;

  @Metadata({ data: "json, name=avoidVignette" })
  avoidVignette?: string[];
}
