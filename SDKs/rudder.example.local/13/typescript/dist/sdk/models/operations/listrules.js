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
export var ListRules200ApplicationJsonActionEnum;
(function (ListRules200ApplicationJsonActionEnum) {
    ListRules200ApplicationJsonActionEnum["ListRules"] = "listRules";
})(ListRules200ApplicationJsonActionEnum || (ListRules200ApplicationJsonActionEnum = {}));
var ListRules200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListRules200ApplicationJsonData, _super);
    function ListRules200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.Rule }),
        __metadata("design:type", Array)
    ], ListRules200ApplicationJsonData.prototype, "rules", void 0);
    return ListRules200ApplicationJsonData;
}(SpeakeasyBase));
export { ListRules200ApplicationJsonData };
export var ListRules200ApplicationJsonResultEnum;
(function (ListRules200ApplicationJsonResultEnum) {
    ListRules200ApplicationJsonResultEnum["Success"] = "success";
    ListRules200ApplicationJsonResultEnum["Error"] = "error";
})(ListRules200ApplicationJsonResultEnum || (ListRules200ApplicationJsonResultEnum = {}));
var ListRules200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListRules200ApplicationJson, _super);
    function ListRules200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListRules200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListRules200ApplicationJsonData)
    ], ListRules200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListRules200ApplicationJson.prototype, "result", void 0);
    return ListRules200ApplicationJson;
}(SpeakeasyBase));
export { ListRules200ApplicationJson };
var ListRulesResponse = /** @class */ (function (_super) {
    __extends(ListRulesResponse, _super);
    function ListRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRules200ApplicationJson)
    ], ListRulesResponse.prototype, "listRules200ApplicationJsonObject", void 0);
    return ListRulesResponse;
}(SpeakeasyBase));
export { ListRulesResponse };
