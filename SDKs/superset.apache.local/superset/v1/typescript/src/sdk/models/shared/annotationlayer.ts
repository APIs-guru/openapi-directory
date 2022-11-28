import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AnnotationLayerAnnotationTypeEnum {
    Formula = "FORMULA",
    Interval = "INTERVAL",
    Event = "EVENT",
    TimeSeries = "TIME_SERIES"
}

export enum AnnotationLayerOpacityEnum {
    Unknown = "",
    OpacityLow = "opacityLow",
    OpacityMedium = "opacityMedium",
    OpacityHigh = "opacityHigh"
}

export enum AnnotationLayerSourceTypeEnum {
    Unknown = "",
    Line = "line",
    Native = "NATIVE",
    Table = "table"
}

export enum AnnotationLayerStyleEnum {
    Dashed = "dashed",
    Dotted = "dotted",
    Solid = "solid",
    LongDashed = "longDashed"
}


export class AnnotationLayer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationType" })
  annotationType?: AnnotationLayerAnnotationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptionColumns" })
  descriptionColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=hideLine" })
  hideLine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intervalEndColumn" })
  intervalEndColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=opacity" })
  opacity?: AnnotationLayerOpacityEnum;

  @SpeakeasyMetadata({ data: "json, name=overrides" })
  overrides?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=show" })
  show: boolean;

  @SpeakeasyMetadata({ data: "json, name=showMarkers" })
  showMarkers: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: AnnotationLayerSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: AnnotationLayerStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=timeColumn" })
  timeColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=titleColumn" })
  titleColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
