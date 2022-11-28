import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestDto
/** 
 * The TestDTO Class.
 * Contains relevant fields of Test DTO by masking actual Test entity's fields in application.
 *             
**/
export class TestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
