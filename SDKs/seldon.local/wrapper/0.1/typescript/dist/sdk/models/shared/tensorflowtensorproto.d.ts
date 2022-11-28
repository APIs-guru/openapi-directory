import { SpeakeasyBase } from "../../../internal/utils";
import { TensorflowDataTypeEnum } from "./tensorflowdatatypeenum";
import { TensorflowResourceHandleProto } from "./tensorflowresourcehandleproto";
import { TensorflowTensorShapeProto } from "./tensorflowtensorshapeproto";
import { TensorflowVariantTensorDataProto } from "./tensorflowvarianttensordataproto";
/**
 * Protocol buffer representing a tensor.
**/
export declare class TensorflowTensorProto extends SpeakeasyBase {
    boolVal?: boolean[];
    dcomplexVal?: number[];
    doubleVal?: number[];
    dtype?: TensorflowDataTypeEnum;
    floatVal?: number[];
    halfVal?: number[];
    int64Val?: string[];
    intVal?: number[];
    resourceHandleVal?: TensorflowResourceHandleProto[];
    scomplexVal?: number[];
    stringVal?: string[];
    tensorContent?: string;
    tensorShape?: TensorflowTensorShapeProto;
    uint32Val?: number[];
    uint64Val?: string[];
    variantVal?: TensorflowVariantTensorDataProto[];
    versionNumber?: number;
}
