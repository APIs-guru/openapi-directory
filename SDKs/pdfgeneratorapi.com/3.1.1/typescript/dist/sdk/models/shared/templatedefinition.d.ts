import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Component } from "./component";
/**
 * Defines filter and sort option for root data set.
**/
export declare class TemplateDefinitionDataSettings extends SpeakeasyBase {
    filterBy?: Map<string, any>[];
    sortBy?: Map<string, any>[];
}
/**
 * Configuration preferences for the editor
**/
export declare class TemplateDefinitionEditor extends SpeakeasyBase {
    heightMultiplier?: number;
}
export declare enum TemplateDefinitionLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Page margins in units
**/
export declare class TemplateDefinitionLayoutMargins extends SpeakeasyBase {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
export declare enum TemplateDefinitionLayoutOrientationEnum {
    Portrait = "portrait",
    Landscape = "landscape"
}
export declare enum TemplateDefinitionLayoutRepeatLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
export declare class TemplateDefinitionLayoutRepeatLayout extends SpeakeasyBase {
    format?: TemplateDefinitionLayoutRepeatLayoutFormatEnum;
    height?: number;
    width?: number;
}
export declare enum TemplateDefinitionLayoutUnitEnum {
    Cm = "cm",
    In = "in"
}
/**
 * Defines template layout (e.g page format, margins).
**/
export declare class TemplateDefinitionLayout extends SpeakeasyBase {
    emptyLabels?: number;
    format?: TemplateDefinitionLayoutFormatEnum;
    height?: number;
    margins?: TemplateDefinitionLayoutMargins;
    orientation?: TemplateDefinitionLayoutOrientationEnum;
    repeatLayout?: TemplateDefinitionLayoutRepeatLayout;
    rotation?: number;
    unit?: TemplateDefinitionLayoutUnitEnum;
    width?: number;
}
export declare class TemplateDefinitionPagesMargins extends SpeakeasyBase {
    bottom?: number;
    right?: number;
}
export declare class TemplateDefinitionPages extends SpeakeasyBase {
    components?: Component[];
    height?: number;
    margins?: TemplateDefinitionPagesMargins;
    width?: number;
}
export declare class TemplateDefinition extends SpeakeasyBase {
    dataSettings?: TemplateDefinitionDataSettings;
    editor?: TemplateDefinitionEditor;
    id?: number;
    isDraft?: boolean;
    layout?: TemplateDefinitionLayout;
    name?: string;
    pages?: TemplateDefinitionPages[];
    tags?: string[];
}
