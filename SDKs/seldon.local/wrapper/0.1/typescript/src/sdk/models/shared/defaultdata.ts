import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tensor } from "./tensor";
import { TensorflowTensorProto } from "./tensorflowtensorproto";



export class DefaultData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=ndarry" })
  ndarry?: any[];

  @SpeakeasyMetadata({ data: "json, name=tensor" })
  tensor?: Tensor;

  @SpeakeasyMetadata({ data: "json, name=tftensor" })
  tftensor?: TensorflowTensorProto;
}
