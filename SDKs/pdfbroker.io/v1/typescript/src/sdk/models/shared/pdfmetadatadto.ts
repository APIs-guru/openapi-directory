import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PdfMetadataDto
/** 
 * Enter meta data for pdf document
**/
export class PdfMetadataDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableAdd" })
  enableAdd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableCopy" })
  enableCopy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableModify" })
  enableModify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnablePrinting" })
  enablePrinting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=OwnerPassword" })
  ownerPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPassword" })
  userPassword?: string;
}
