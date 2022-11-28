import { SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";
export declare enum TemplateDefinitionNewLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Page margins in units
**/
export declare class TemplateDefinitionNewLayoutMargins extends SpeakeasyBase {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
export declare enum TemplateDefinitionNewLayoutOrientationEnum {
    Portrait = "portrait",
    Landscape = "landscape"
}
export declare enum TemplateDefinitionNewLayoutRepeatLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
export declare class TemplateDefinitionNewLayoutRepeatLayout extends SpeakeasyBase {
    format?: TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;
    height?: number;
    width?: number;
}
export declare enum TemplateDefinitionNewLayoutUnitEnum {
    Cm = "cm",
    In = "in"
}
/**
 * Defines template layout (e.g page format, margins).
**/
export declare class TemplateDefinitionNewLayout extends SpeakeasyBase {
    emptyLabels?: number;
    format?: TemplateDefinitionNewLayoutFormatEnum;
    height?: number;
    margins?: TemplateDefinitionNewLayoutMargins;
    orientation?: TemplateDefinitionNewLayoutOrientationEnum;
    repeatLayout?: TemplateDefinitionNewLayoutRepeatLayout;
    rotaion?: number;
    unit?: TemplateDefinitionNewLayoutUnitEnum;
    width?: number;
}
export declare class TemplateDefinitionNewPagesMargins extends SpeakeasyBase {
    bottom?: number;
    right?: number;
}
export declare class TemplateDefinitionNewPages extends SpeakeasyBase {
    components?: Component[];
    height?: number;
    margins?: TemplateDefinitionNewPagesMargins;
    width?: number;
}
/**
 * Template configuration
**/
export declare class TemplateDefinitionNew extends SpeakeasyBase {
    isDraft?: boolean;
    layout?: TemplateDefinitionNewLayout;
    name: string;
    pages?: TemplateDefinitionNewPages[];
    tags?: string[];
}
