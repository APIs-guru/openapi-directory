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
export var RegeneratePolicies200ApplicationJsonActionEnum;
(function (RegeneratePolicies200ApplicationJsonActionEnum) {
    RegeneratePolicies200ApplicationJsonActionEnum["RegeneratePolicies"] = "regeneratePolicies";
})(RegeneratePolicies200ApplicationJsonActionEnum || (RegeneratePolicies200ApplicationJsonActionEnum = {}));
export var RegeneratePolicies200ApplicationJsonDataPoliciesEnum;
(function (RegeneratePolicies200ApplicationJsonDataPoliciesEnum) {
    RegeneratePolicies200ApplicationJsonDataPoliciesEnum["Started"] = "Started";
})(RegeneratePolicies200ApplicationJsonDataPoliciesEnum || (RegeneratePolicies200ApplicationJsonDataPoliciesEnum = {}));
var RegeneratePolicies200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(RegeneratePolicies200ApplicationJsonData, _super);
    function RegeneratePolicies200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies" }),
        __metadata("design:type", String)
    ], RegeneratePolicies200ApplicationJsonData.prototype, "policies", void 0);
    return RegeneratePolicies200ApplicationJsonData;
}(SpeakeasyBase));
export { RegeneratePolicies200ApplicationJsonData };
export var RegeneratePolicies200ApplicationJsonResultEnum;
(function (RegeneratePolicies200ApplicationJsonResultEnum) {
    RegeneratePolicies200ApplicationJsonResultEnum["Success"] = "success";
    RegeneratePolicies200ApplicationJsonResultEnum["Error"] = "error";
})(RegeneratePolicies200ApplicationJsonResultEnum || (RegeneratePolicies200ApplicationJsonResultEnum = {}));
var RegeneratePolicies200ApplicationJson = /** @class */ (function (_super) {
    __extends(RegeneratePolicies200ApplicationJson, _super);
    function RegeneratePolicies200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], RegeneratePolicies200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", RegeneratePolicies200ApplicationJsonData)
    ], RegeneratePolicies200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], RegeneratePolicies200ApplicationJson.prototype, "result", void 0);
    return RegeneratePolicies200ApplicationJson;
}(SpeakeasyBase));
export { RegeneratePolicies200ApplicationJson };
var RegeneratePoliciesResponse = /** @class */ (function (_super) {
    __extends(RegeneratePoliciesResponse, _super);
    function RegeneratePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RegeneratePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RegeneratePoliciesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RegeneratePolicies200ApplicationJson)
    ], RegeneratePoliciesResponse.prototype, "regeneratePolicies200ApplicationJsonObject", void 0);
    return RegeneratePoliciesResponse;
}(SpeakeasyBase));
export { RegeneratePoliciesResponse };
