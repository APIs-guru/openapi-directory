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
export var GetRuleTree200ApplicationJsonActionEnum;
(function (GetRuleTree200ApplicationJsonActionEnum) {
    GetRuleTree200ApplicationJsonActionEnum["GetRuleTree"] = "GetRuleTree";
})(GetRuleTree200ApplicationJsonActionEnum || (GetRuleTree200ApplicationJsonActionEnum = {}));
var GetRuleTree200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRuleTree200ApplicationJsonData, _super);
    function GetRuleTree200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleCategories" }),
        __metadata("design:type", Map)
    ], GetRuleTree200ApplicationJsonData.prototype, "ruleCategories", void 0);
    return GetRuleTree200ApplicationJsonData;
}(SpeakeasyBase));
export { GetRuleTree200ApplicationJsonData };
export var GetRuleTree200ApplicationJsonResultEnum;
(function (GetRuleTree200ApplicationJsonResultEnum) {
    GetRuleTree200ApplicationJsonResultEnum["Success"] = "success";
    GetRuleTree200ApplicationJsonResultEnum["Error"] = "error";
})(GetRuleTree200ApplicationJsonResultEnum || (GetRuleTree200ApplicationJsonResultEnum = {}));
var GetRuleTree200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRuleTree200ApplicationJson, _super);
    function GetRuleTree200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetRuleTree200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetRuleTree200ApplicationJsonData)
    ], GetRuleTree200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetRuleTree200ApplicationJson.prototype, "result", void 0);
    return GetRuleTree200ApplicationJson;
}(SpeakeasyBase));
export { GetRuleTree200ApplicationJson };
var GetRuleTreeResponse = /** @class */ (function (_super) {
    __extends(GetRuleTreeResponse, _super);
    function GetRuleTreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRuleTreeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRuleTree200ApplicationJson)
    ], GetRuleTreeResponse.prototype, "getRuleTree200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRuleTreeResponse.prototype, "statusCode", void 0);
    return GetRuleTreeResponse;
}(SpeakeasyBase));
export { GetRuleTreeResponse };
