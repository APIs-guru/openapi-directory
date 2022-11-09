import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPayeeListResponseCompany extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operatingName" })
  operatingName?: string;
}
