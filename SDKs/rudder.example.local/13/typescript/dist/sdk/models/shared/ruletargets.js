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
// RuleTargetsExclude
/**
 * list of groups to exclude from rule application
**/
var RuleTargetsExclude = /** @class */ (function (_super) {
    __extends(RuleTargetsExclude, _super);
    function RuleTargetsExclude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=or" }),
        __metadata("design:type", Array)
    ], RuleTargetsExclude.prototype, "or", void 0);
    return RuleTargetsExclude;
}(SpeakeasyBase));
export { RuleTargetsExclude };
// RuleTargetsInclude
/**
 * list of groups to include in rule application
**/
var RuleTargetsInclude = /** @class */ (function (_super) {
    __extends(RuleTargetsInclude, _super);
    function RuleTargetsInclude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=or" }),
        __metadata("design:type", Array)
    ], RuleTargetsInclude.prototype, "or", void 0);
    return RuleTargetsInclude;
}(SpeakeasyBase));
export { RuleTargetsInclude };
var RuleTargets = /** @class */ (function (_super) {
    __extends(RuleTargets, _super);
    function RuleTargets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclude" }),
        __metadata("design:type", RuleTargetsExclude)
    ], RuleTargets.prototype, "exclude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=include" }),
        __metadata("design:type", RuleTargetsInclude)
    ], RuleTargets.prototype, "include", void 0);
    return RuleTargets;
}(SpeakeasyBase));
export { RuleTargets };
