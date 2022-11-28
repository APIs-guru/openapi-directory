import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";



// TemplateDefinitionDataSettings
/** 
 * Defines filter and sort option for root data set.
**/
export class TemplateDefinitionDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterBy" })
  filterBy?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: Map<string, any>[];
}


// TemplateDefinitionEditor
/** 
 * Configuration preferences for the editor
**/
export class TemplateDefinitionEditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heightMultiplier" })
  heightMultiplier?: number;
}

export enum TemplateDefinitionLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}


// TemplateDefinitionLayoutMargins
/** 
 * Page margins in units
**/
export class TemplateDefinitionLayoutMargins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottom" })
  bottom?: number;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=right" })
  right?: number;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;
}

export enum TemplateDefinitionLayoutOrientationEnum {
    Portrait = "portrait",
    Landscape = "landscape"
}

export enum TemplateDefinitionLayoutRepeatLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}


// TemplateDefinitionLayoutRepeatLayout
/** 
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
export class TemplateDefinitionLayoutRepeatLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TemplateDefinitionLayoutRepeatLayoutFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}

export enum TemplateDefinitionLayoutUnitEnum {
    Cm = "cm",
    In = "in"
}


// TemplateDefinitionLayout
/** 
 * Defines template layout (e.g page format, margins).
**/
export class TemplateDefinitionLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emptyLabels" })
  emptyLabels?: number;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TemplateDefinitionLayoutFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionLayoutMargins;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: TemplateDefinitionLayoutOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=repeatLayout" })
  repeatLayout?: TemplateDefinitionLayoutRepeatLayout;

  @SpeakeasyMetadata({ data: "json, name=rotation" })
  rotation?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: TemplateDefinitionLayoutUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class TemplateDefinitionPagesMargins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottom" })
  bottom?: number;

  @SpeakeasyMetadata({ data: "json, name=right" })
  right?: number;
}


export class TemplateDefinitionPages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: Component })
  components?: Component[];

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionPagesMargins;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class TemplateDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSettings" })
  dataSettings?: TemplateDefinitionDataSettings;

  @SpeakeasyMetadata({ data: "json, name=editor" })
  editor?: TemplateDefinitionEditor;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isDraft" })
  isDraft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: TemplateDefinitionLayout;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: TemplateDefinitionPages })
  pages?: TemplateDefinitionPages[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
