import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AnnotationLayerAnnotationTypeEnum {
    Formula = "FORMULA",
    Interval = "INTERVAL",
    Event = "EVENT",
    TimeSeries = "TIME_SERIES"
}
export declare enum AnnotationLayerOpacityEnum {
    Unknown = "",
    OpacityLow = "opacityLow",
    OpacityMedium = "opacityMedium",
    OpacityHigh = "opacityHigh"
}
export declare enum AnnotationLayerSourceTypeEnum {
    Unknown = "",
    Line = "line",
    Native = "NATIVE",
    Table = "table"
}
export declare enum AnnotationLayerStyleEnum {
    Dashed = "dashed",
    Dotted = "dotted",
    Solid = "solid",
    LongDashed = "longDashed"
}
export declare class AnnotationLayer extends SpeakeasyBase {
    annotationType?: AnnotationLayerAnnotationTypeEnum;
    color?: string;
    descriptionColumns?: string[];
    hideLine?: boolean;
    intervalEndColumn?: string;
    name: string;
    opacity?: AnnotationLayerOpacityEnum;
    overrides?: Map<string, any>;
    show: boolean;
    showMarkers: boolean;
    sourceType?: AnnotationLayerSourceTypeEnum;
    style?: AnnotationLayerStyleEnum;
    timeColumn?: string;
    titleColumn?: string;
    value: any;
    width?: number;
}
