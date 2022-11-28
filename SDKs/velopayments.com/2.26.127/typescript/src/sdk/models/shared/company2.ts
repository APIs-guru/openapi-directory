import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Company2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=operatingName" })
  operatingName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxId" })
  taxId?: string;
}
