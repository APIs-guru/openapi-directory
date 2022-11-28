import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPayeeListResponseCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingName" })
  operatingName?: string;
}
