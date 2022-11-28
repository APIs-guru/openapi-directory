import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VaccineStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Documento" })
  documento: string;
}
