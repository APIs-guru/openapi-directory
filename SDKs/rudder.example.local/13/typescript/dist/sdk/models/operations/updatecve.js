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
// UpdateCveRequestBody
/**
 * CVE update config
**/
var UpdateCveRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCveRequestBody, _super);
    function UpdateCveRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UpdateCveRequestBody.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=years" }),
        __metadata("design:type", Array)
    ], UpdateCveRequestBody.prototype, "years", void 0);
    return UpdateCveRequestBody;
}(SpeakeasyBase));
export { UpdateCveRequestBody };
export var UpdateCve200ApplicationJsonActionEnum;
(function (UpdateCve200ApplicationJsonActionEnum) {
    UpdateCve200ApplicationJsonActionEnum["UpdateCve"] = "updateCVE";
})(UpdateCve200ApplicationJsonActionEnum || (UpdateCve200ApplicationJsonActionEnum = {}));
var UpdateCve200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateCve200ApplicationJsonData, _super);
    function UpdateCve200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CVEs" }),
        __metadata("design:type", Number)
    ], UpdateCve200ApplicationJsonData.prototype, "cvEs", void 0);
    return UpdateCve200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateCve200ApplicationJsonData };
export var UpdateCve200ApplicationJsonResultEnum;
(function (UpdateCve200ApplicationJsonResultEnum) {
    UpdateCve200ApplicationJsonResultEnum["Success"] = "success";
    UpdateCve200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateCve200ApplicationJsonResultEnum || (UpdateCve200ApplicationJsonResultEnum = {}));
var UpdateCve200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCve200ApplicationJson, _super);
    function UpdateCve200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateCve200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateCve200ApplicationJsonData)
    ], UpdateCve200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateCve200ApplicationJson.prototype, "result", void 0);
    return UpdateCve200ApplicationJson;
}(SpeakeasyBase));
export { UpdateCve200ApplicationJson };
var UpdateCveRequest = /** @class */ (function (_super) {
    __extends(UpdateCveRequest, _super);
    function UpdateCveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCveRequestBody)
    ], UpdateCveRequest.prototype, "request", void 0);
    return UpdateCveRequest;
}(SpeakeasyBase));
export { UpdateCveRequest };
var UpdateCveResponse = /** @class */ (function (_super) {
    __extends(UpdateCveResponse, _super);
    function UpdateCveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCve200ApplicationJson)
    ], UpdateCveResponse.prototype, "updateCve200ApplicationJsonObject", void 0);
    return UpdateCveResponse;
}(SpeakeasyBase));
export { UpdateCveResponse };
