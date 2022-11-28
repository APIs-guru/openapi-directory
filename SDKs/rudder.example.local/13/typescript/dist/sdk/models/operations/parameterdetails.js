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
var ParameterDetailsPathParams = /** @class */ (function (_super) {
    __extends(ParameterDetailsPathParams, _super);
    function ParameterDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameterId" }),
        __metadata("design:type", String)
    ], ParameterDetailsPathParams.prototype, "parameterId", void 0);
    return ParameterDetailsPathParams;
}(SpeakeasyBase));
export { ParameterDetailsPathParams };
export var ParameterDetails200ApplicationJsonActionEnum;
(function (ParameterDetails200ApplicationJsonActionEnum) {
    ParameterDetails200ApplicationJsonActionEnum["ParameterDetails"] = "parameterDetails";
})(ParameterDetails200ApplicationJsonActionEnum || (ParameterDetails200ApplicationJsonActionEnum = {}));
// ParameterDetails200ApplicationJsonData
/**
 * Parameters
**/
var ParameterDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ParameterDetails200ApplicationJsonData, _super);
    function ParameterDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter }),
        __metadata("design:type", Array)
    ], ParameterDetails200ApplicationJsonData.prototype, "parameters", void 0);
    return ParameterDetails200ApplicationJsonData;
}(SpeakeasyBase));
export { ParameterDetails200ApplicationJsonData };
export var ParameterDetails200ApplicationJsonResultEnum;
(function (ParameterDetails200ApplicationJsonResultEnum) {
    ParameterDetails200ApplicationJsonResultEnum["Success"] = "success";
    ParameterDetails200ApplicationJsonResultEnum["Error"] = "error";
})(ParameterDetails200ApplicationJsonResultEnum || (ParameterDetails200ApplicationJsonResultEnum = {}));
var ParameterDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(ParameterDetails200ApplicationJson, _super);
    function ParameterDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ParameterDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ParameterDetails200ApplicationJsonData)
    ], ParameterDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ParameterDetails200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ParameterDetails200ApplicationJson.prototype, "result", void 0);
    return ParameterDetails200ApplicationJson;
}(SpeakeasyBase));
export { ParameterDetails200ApplicationJson };
var ParameterDetailsRequest = /** @class */ (function (_super) {
    __extends(ParameterDetailsRequest, _super);
    function ParameterDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ParameterDetailsPathParams)
    ], ParameterDetailsRequest.prototype, "pathParams", void 0);
    return ParameterDetailsRequest;
}(SpeakeasyBase));
export { ParameterDetailsRequest };
var ParameterDetailsResponse = /** @class */ (function (_super) {
    __extends(ParameterDetailsResponse, _super);
    function ParameterDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ParameterDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ParameterDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ParameterDetails200ApplicationJson)
    ], ParameterDetailsResponse.prototype, "parameterDetails200ApplicationJsonObject", void 0);
    return ParameterDetailsResponse;
}(SpeakeasyBase));
export { ParameterDetailsResponse };
