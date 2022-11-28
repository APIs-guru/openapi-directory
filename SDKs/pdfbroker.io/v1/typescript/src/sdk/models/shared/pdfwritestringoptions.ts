import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FontDtoInput } from "./fontdto";



// PdfWriteStringOptionsInput
/** 
 * Options for writing string in pdf page;
**/
export class PdfWriteStringOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Font" })
  font?: FontDtoInput;

  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=XOrigin" })
  xOrigin?: number;

  @SpeakeasyMetadata({ data: "json, name=XPosition" })
  xPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=YOrigin" })
  yOrigin?: number;

  @SpeakeasyMetadata({ data: "json, name=YPosition" })
  yPosition?: number;
}
