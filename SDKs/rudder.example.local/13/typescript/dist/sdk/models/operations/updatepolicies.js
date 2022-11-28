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
export var UpdatePolicies200ApplicationJsonActionEnum;
(function (UpdatePolicies200ApplicationJsonActionEnum) {
    UpdatePolicies200ApplicationJsonActionEnum["UpdatePolicies"] = "updatePolicies";
})(UpdatePolicies200ApplicationJsonActionEnum || (UpdatePolicies200ApplicationJsonActionEnum = {}));
export var UpdatePolicies200ApplicationJsonDataPoliciesEnum;
(function (UpdatePolicies200ApplicationJsonDataPoliciesEnum) {
    UpdatePolicies200ApplicationJsonDataPoliciesEnum["Started"] = "Started";
})(UpdatePolicies200ApplicationJsonDataPoliciesEnum || (UpdatePolicies200ApplicationJsonDataPoliciesEnum = {}));
var UpdatePolicies200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdatePolicies200ApplicationJsonData, _super);
    function UpdatePolicies200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies" }),
        __metadata("design:type", String)
    ], UpdatePolicies200ApplicationJsonData.prototype, "policies", void 0);
    return UpdatePolicies200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdatePolicies200ApplicationJsonData };
export var UpdatePolicies200ApplicationJsonResultEnum;
(function (UpdatePolicies200ApplicationJsonResultEnum) {
    UpdatePolicies200ApplicationJsonResultEnum["Success"] = "success";
    UpdatePolicies200ApplicationJsonResultEnum["Error"] = "error";
})(UpdatePolicies200ApplicationJsonResultEnum || (UpdatePolicies200ApplicationJsonResultEnum = {}));
var UpdatePolicies200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePolicies200ApplicationJson, _super);
    function UpdatePolicies200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdatePolicies200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdatePolicies200ApplicationJsonData)
    ], UpdatePolicies200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdatePolicies200ApplicationJson.prototype, "result", void 0);
    return UpdatePolicies200ApplicationJson;
}(SpeakeasyBase));
export { UpdatePolicies200ApplicationJson };
var UpdatePoliciesResponse = /** @class */ (function (_super) {
    __extends(UpdatePoliciesResponse, _super);
    function UpdatePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePoliciesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePolicies200ApplicationJson)
    ], UpdatePoliciesResponse.prototype, "updatePolicies200ApplicationJsonObject", void 0);
    return UpdatePoliciesResponse;
}(SpeakeasyBase));
export { UpdatePoliciesResponse };
