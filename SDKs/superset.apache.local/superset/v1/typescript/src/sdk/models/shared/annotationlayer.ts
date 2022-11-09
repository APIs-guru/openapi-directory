import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AnnotationLayerAnnotationTypeEnum {
    Formula = "FORMULA"
,    Interval = "INTERVAL"
,    Event = "EVENT"
,    TimeSeries = "TIME_SERIES"
}

export enum AnnotationLayerOpacityEnum {
    Unknown = ""
,    OpacityLow = "opacityLow"
,    OpacityMedium = "opacityMedium"
,    OpacityHigh = "opacityHigh"
}

export enum AnnotationLayerSourceTypeEnum {
    Unknown = ""
,    Line = "line"
,    Native = "NATIVE"
,    Table = "table"
}

export enum AnnotationLayerStyleEnum {
    Dashed = "dashed"
,    Dotted = "dotted"
,    Solid = "solid"
,    LongDashed = "longDashed"
}


export class AnnotationLayer extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationType" })
  annotationType?: AnnotationLayerAnnotationTypeEnum;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=descriptionColumns" })
  descriptionColumns?: string[];

  @Metadata({ data: "json, name=hideLine" })
  hideLine?: boolean;

  @Metadata({ data: "json, name=intervalEndColumn" })
  intervalEndColumn?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=opacity" })
  opacity?: AnnotationLayerOpacityEnum;

  @Metadata({ data: "json, name=overrides" })
  overrides?: Map<string, any>;

  @Metadata({ data: "json, name=show" })
  show: boolean;

  @Metadata({ data: "json, name=showMarkers" })
  showMarkers: boolean;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: AnnotationLayerSourceTypeEnum;

  @Metadata({ data: "json, name=style" })
  style?: AnnotationLayerStyleEnum;

  @Metadata({ data: "json, name=timeColumn" })
  timeColumn?: string;

  @Metadata({ data: "json, name=titleColumn" })
  titleColumn?: string;

  @Metadata({ data: "json, name=value" })
  value: any;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
