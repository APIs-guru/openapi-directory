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
import * as shared from "../shared";
var UpdateParameterPathParams = /** @class */ (function (_super) {
    __extends(UpdateParameterPathParams, _super);
    function UpdateParameterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameterId" }),
        __metadata("design:type", String)
    ], UpdateParameterPathParams.prototype, "parameterId", void 0);
    return UpdateParameterPathParams;
}(SpeakeasyBase));
export { UpdateParameterPathParams };
export var UpdateParameter200ApplicationJsonActionEnum;
(function (UpdateParameter200ApplicationJsonActionEnum) {
    UpdateParameter200ApplicationJsonActionEnum["UpdateParameter"] = "updateParameter";
})(UpdateParameter200ApplicationJsonActionEnum || (UpdateParameter200ApplicationJsonActionEnum = {}));
// UpdateParameter200ApplicationJsonData
/**
 * Parameters
**/
var UpdateParameter200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateParameter200ApplicationJsonData, _super);
    function UpdateParameter200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter }),
        __metadata("design:type", Array)
    ], UpdateParameter200ApplicationJsonData.prototype, "parameters", void 0);
    return UpdateParameter200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateParameter200ApplicationJsonData };
export var UpdateParameter200ApplicationJsonResultEnum;
(function (UpdateParameter200ApplicationJsonResultEnum) {
    UpdateParameter200ApplicationJsonResultEnum["Success"] = "success";
    UpdateParameter200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateParameter200ApplicationJsonResultEnum || (UpdateParameter200ApplicationJsonResultEnum = {}));
var UpdateParameter200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateParameter200ApplicationJson, _super);
    function UpdateParameter200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateParameter200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateParameter200ApplicationJsonData)
    ], UpdateParameter200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateParameter200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateParameter200ApplicationJson.prototype, "result", void 0);
    return UpdateParameter200ApplicationJson;
}(SpeakeasyBase));
export { UpdateParameter200ApplicationJson };
var UpdateParameterRequest = /** @class */ (function (_super) {
    __extends(UpdateParameterRequest, _super);
    function UpdateParameterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateParameterPathParams)
    ], UpdateParameterRequest.prototype, "pathParams", void 0);
    return UpdateParameterRequest;
}(SpeakeasyBase));
export { UpdateParameterRequest };
var UpdateParameterResponse = /** @class */ (function (_super) {
    __extends(UpdateParameterResponse, _super);
    function UpdateParameterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateParameterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateParameterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateParameter200ApplicationJson)
    ], UpdateParameterResponse.prototype, "updateParameter200ApplicationJsonObject", void 0);
    return UpdateParameterResponse;
}(SpeakeasyBase));
export { UpdateParameterResponse };
