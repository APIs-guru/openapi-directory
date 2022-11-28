var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TensorflowDataTypeEnum } from "./tensorflowdatatypeenum";
import { TensorflowResourceHandleProto } from "./tensorflowresourcehandleproto";
import { TensorflowTensorShapeProto } from "./tensorflowtensorshapeproto";
import { TensorflowVariantTensorDataProto } from "./tensorflowvarianttensordataproto";
// TensorflowTensorProto
/**
 * Protocol buffer representing a tensor.
**/
var TensorflowTensorProto = /** @class */ (function (_super) {
    __extends(TensorflowTensorProto, _super);
    function TensorflowTensorProto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bool_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "boolVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dcomplex_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "dcomplexVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=double_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "doubleVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dtype" }),
        __metadata("design:type", String)
    ], TensorflowTensorProto.prototype, "dtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=float_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "floatVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=half_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "halfVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=int64_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "int64Val", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=int_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "intVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_handle_val", elemType: TensorflowResourceHandleProto }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "resourceHandleVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scomplex_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "scomplexVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=string_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "stringVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tensor_content" }),
        __metadata("design:type", String)
    ], TensorflowTensorProto.prototype, "tensorContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tensor_shape" }),
        __metadata("design:type", TensorflowTensorShapeProto)
    ], TensorflowTensorProto.prototype, "tensorShape", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uint32_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "uint32Val", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uint64_val" }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "uint64Val", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variant_val", elemType: TensorflowVariantTensorDataProto }),
        __metadata("design:type", Array)
    ], TensorflowTensorProto.prototype, "variantVal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version_number" }),
        __metadata("design:type", Number)
    ], TensorflowTensorProto.prototype, "versionNumber", void 0);
    return TensorflowTensorProto;
}(SpeakeasyBase));
export { TensorflowTensorProto };
