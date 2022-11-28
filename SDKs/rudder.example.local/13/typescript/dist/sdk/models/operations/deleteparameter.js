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
var DeleteParameterPathParams = /** @class */ (function (_super) {
    __extends(DeleteParameterPathParams, _super);
    function DeleteParameterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameterId" }),
        __metadata("design:type", String)
    ], DeleteParameterPathParams.prototype, "parameterId", void 0);
    return DeleteParameterPathParams;
}(SpeakeasyBase));
export { DeleteParameterPathParams };
export var DeleteParameter200ApplicationJsonActionEnum;
(function (DeleteParameter200ApplicationJsonActionEnum) {
    DeleteParameter200ApplicationJsonActionEnum["DeleteParameter"] = "deleteParameter";
})(DeleteParameter200ApplicationJsonActionEnum || (DeleteParameter200ApplicationJsonActionEnum = {}));
// DeleteParameter200ApplicationJsonData
/**
 * Parameters
**/
var DeleteParameter200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteParameter200ApplicationJsonData, _super);
    function DeleteParameter200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter }),
        __metadata("design:type", Array)
    ], DeleteParameter200ApplicationJsonData.prototype, "parameters", void 0);
    return DeleteParameter200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteParameter200ApplicationJsonData };
export var DeleteParameter200ApplicationJsonResultEnum;
(function (DeleteParameter200ApplicationJsonResultEnum) {
    DeleteParameter200ApplicationJsonResultEnum["Success"] = "success";
    DeleteParameter200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteParameter200ApplicationJsonResultEnum || (DeleteParameter200ApplicationJsonResultEnum = {}));
var DeleteParameter200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteParameter200ApplicationJson, _super);
    function DeleteParameter200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteParameter200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteParameter200ApplicationJsonData)
    ], DeleteParameter200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteParameter200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteParameter200ApplicationJson.prototype, "result", void 0);
    return DeleteParameter200ApplicationJson;
}(SpeakeasyBase));
export { DeleteParameter200ApplicationJson };
export var DeleteParameter500ApplicationJsonActionEnum;
(function (DeleteParameter500ApplicationJsonActionEnum) {
    DeleteParameter500ApplicationJsonActionEnum["DeleteParameter"] = "deleteParameter";
})(DeleteParameter500ApplicationJsonActionEnum || (DeleteParameter500ApplicationJsonActionEnum = {}));
export var DeleteParameter500ApplicationJsonResultEnum;
(function (DeleteParameter500ApplicationJsonResultEnum) {
    DeleteParameter500ApplicationJsonResultEnum["Error"] = "error";
})(DeleteParameter500ApplicationJsonResultEnum || (DeleteParameter500ApplicationJsonResultEnum = {}));
var DeleteParameter500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteParameter500ApplicationJson, _super);
    function DeleteParameter500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteParameter500ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDetails" }),
        __metadata("design:type", String)
    ], DeleteParameter500ApplicationJson.prototype, "errorDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteParameter500ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteParameter500ApplicationJson.prototype, "result", void 0);
    return DeleteParameter500ApplicationJson;
}(SpeakeasyBase));
export { DeleteParameter500ApplicationJson };
var DeleteParameterRequest = /** @class */ (function (_super) {
    __extends(DeleteParameterRequest, _super);
    function DeleteParameterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteParameterPathParams)
    ], DeleteParameterRequest.prototype, "pathParams", void 0);
    return DeleteParameterRequest;
}(SpeakeasyBase));
export { DeleteParameterRequest };
var DeleteParameterResponse = /** @class */ (function (_super) {
    __extends(DeleteParameterResponse, _super);
    function DeleteParameterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteParameterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteParameterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteParameter200ApplicationJson)
    ], DeleteParameterResponse.prototype, "deleteParameter200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteParameter500ApplicationJson)
    ], DeleteParameterResponse.prototype, "deleteParameter500ApplicationJsonObject", void 0);
    return DeleteParameterResponse;
}(SpeakeasyBase));
export { DeleteParameterResponse };
