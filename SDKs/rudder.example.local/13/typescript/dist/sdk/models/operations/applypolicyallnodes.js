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
export var ApplyPolicyAllNodes200ApplicationJsonActionEnum;
(function (ApplyPolicyAllNodes200ApplicationJsonActionEnum) {
    ApplyPolicyAllNodes200ApplicationJsonActionEnum["ApplyPolicyAllNodes"] = "applyPolicyAllNodes";
})(ApplyPolicyAllNodes200ApplicationJsonActionEnum || (ApplyPolicyAllNodes200ApplicationJsonActionEnum = {}));
var ApplyPolicyAllNodes200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ApplyPolicyAllNodes200ApplicationJsonData, _super);
    function ApplyPolicyAllNodes200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], ApplyPolicyAllNodes200ApplicationJsonData.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApplyPolicyAllNodes200ApplicationJsonData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ApplyPolicyAllNodes200ApplicationJsonData.prototype, "result", void 0);
    return ApplyPolicyAllNodes200ApplicationJsonData;
}(SpeakeasyBase));
export { ApplyPolicyAllNodes200ApplicationJsonData };
export var ApplyPolicyAllNodes200ApplicationJsonResultEnum;
(function (ApplyPolicyAllNodes200ApplicationJsonResultEnum) {
    ApplyPolicyAllNodes200ApplicationJsonResultEnum["Success"] = "success";
    ApplyPolicyAllNodes200ApplicationJsonResultEnum["Error"] = "error";
})(ApplyPolicyAllNodes200ApplicationJsonResultEnum || (ApplyPolicyAllNodes200ApplicationJsonResultEnum = {}));
var ApplyPolicyAllNodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(ApplyPolicyAllNodes200ApplicationJson, _super);
    function ApplyPolicyAllNodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ApplyPolicyAllNodes200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: ApplyPolicyAllNodes200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], ApplyPolicyAllNodes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ApplyPolicyAllNodes200ApplicationJson.prototype, "result", void 0);
    return ApplyPolicyAllNodes200ApplicationJson;
}(SpeakeasyBase));
export { ApplyPolicyAllNodes200ApplicationJson };
var ApplyPolicyAllNodesResponse = /** @class */ (function (_super) {
    __extends(ApplyPolicyAllNodesResponse, _super);
    function ApplyPolicyAllNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplyPolicyAllNodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplyPolicyAllNodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplyPolicyAllNodes200ApplicationJson)
    ], ApplyPolicyAllNodesResponse.prototype, "applyPolicyAllNodes200ApplicationJsonObject", void 0);
    return ApplyPolicyAllNodesResponse;
}(SpeakeasyBase));
export { ApplyPolicyAllNodesResponse };
