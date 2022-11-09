import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Tensor } from "./tensor";
import { TensorflowTensorProto } from "./tensorflowtensorproto";


export class DefaultData extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];

  @Metadata({ data: "json, name=ndarry" })
  ndarry?: any[];

  @Metadata({ data: "json, name=tensor" })
  tensor?: Tensor;

  @Metadata({ data: "json, name=tftensor" })
  tftensor?: TensorflowTensorProto;
}
