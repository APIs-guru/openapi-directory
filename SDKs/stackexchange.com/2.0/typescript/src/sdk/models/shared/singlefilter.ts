import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleFilter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  filter?: string;

  @SpeakeasyMetadata()
  filterType?: string;

  @SpeakeasyMetadata()
  includedFields?: any[];
}
