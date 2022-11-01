// ==UserScript==
// @name         mahjong-helper-majsoul
// @namespace    https://github.com/Avenshy
// @version      20221102
// @description  majsoul for mahjong-helper
// @author       Avenshy
// @iconURL      https://www.maj-soul.com/homepage/character/1/yiji_0.png
// @homepageURL  https://github.com/Avenshy/mahjong-helper-majsoul
// @supportURL   https://github.com/Avenshy/mahjong-helper-majsoul/issues
// @match        https://game.maj-soul.com/1/
// @match        https://game.maj-soul.net/1/
// @match        https://game.mahjongsoul.com/index.html
// @match        https://mahjongsoul.game.yo-star.com/
// @grant        GM_xmlhttpRequest
// @connect      localhost
// @license      GPL-3.0
// ==/UserScript==

let API_URL = 'https://localhost:12121/'

! function mahjong_helper_majsoul() {
    try {
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionLockTile play data:" + JSON["stringify"](r));
                            var m = r.seat;
                            r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1);
                            var j = mjcore["MJPai"]["Create"](r.tile ? r.tile : '5z'),
                                V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)];
                            if (r["operation"] && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }), void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])), Z["DesktopMgr"].Inst["setScores"](r["scores"]), 0 == r["lock_state"] ? V["RevealFailed"](j) : 1 == r["lock_state"] && V["PlaySound"]("act_locktile"), 3 == r["lock_state"]) {
                                V["PlaySound"]("act_unveil");
                                var I = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])];
                                I["RevealFailed"](j),
                                    Z["DesktopMgr"].Inst["onRevealStateChange"](Z["DesktopMgr"].Inst["lastpai_seat"], !1);
                            } else
                                Z["DesktopMgr"].Inst["onRevealStateChange"](m, !1);
                            Z["DesktopMgr"].Inst["ActionRunComplete"](),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionLockTile fastplay data:" + JSON["stringify"](r) + " usetime:" + m);
                            var j = r.seat;
                            r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1);
                            var V = mjcore["MJPai"]["Create"](r.tile ? r.tile : '5z'),
                                I = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)];
                            if (r["operation"] && -1 != m && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m);
                                }), void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])), Z["DesktopMgr"].Inst["setScores"](r["scores"]), 0 == r["lock_state"] && I["RevealFailed"](V, !1), 3 == r["lock_state"]) {
                                var v = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])];
                                v["RevealFailed"](V, !1),
                                    Z["DesktopMgr"].Inst["onRevealStateChange"](Z["DesktopMgr"].Inst["lastpai_seat"], !1);
                            } else
                                Z["DesktopMgr"].Inst["onRevealStateChange"](j, !1);
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"], !1);
                        },
                        m["record"] = function(r, m) {
                            if (void 0 === m && (m = 0), app.Log.log("ActionLockTile record data:" + JSON["stringify"](r)), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var j = 0; j < r["operations"]["length"]; j++)
                                    Z["ActionOperation"].ob(r["operations"][j], m, 450);
                            r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]);
                            var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](r.seat)],
                                I = mjcore["MJPai"]["Create"](r.tile ? r.tile : '5z');
                            if (0 == r["lock_state"] ? V["RevealFailed"](I) : 1 == r["lock_state"] && V["PlaySound"]("act_locktile"), 3 == r["lock_state"]) {
                                V["PlaySound"]("act_unveil");
                                var v = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])];
                                v["RevealFailed"](I),
                                    Z["DesktopMgr"].Inst["onRevealStateChange"](Z["DesktopMgr"].Inst["lastpai_seat"], !1);
                            } else
                                Z["DesktopMgr"].Inst["onRevealStateChange"](r.seat, !1);
                            return uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]),
                                1000;
                        },
                        m["fastrecord"] = function(r, m) {
                            if (void 0 === m && (m = -1), app.Log.log("ActionLockTile record data:" + JSON["stringify"](r)), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operations"])
                                for (var j = 0; j < r["operations"]["length"]; j++)
                                    Z["ActionOperation"].ob(r["operations"][j], m, 450);
                            Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1);
                            var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](r.seat)],
                                I = mjcore["MJPai"]["Create"](r.tile ? r.tile : '5z');
                            if (0 == r["lock_state"] && V["RevealFailed"](I, !1), 3 == r["lock_state"]) {
                                var v = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])];
                                v["RevealFailed"](I, !1),
                                    Z["DesktopMgr"].Inst["onRevealStateChange"](Z["DesktopMgr"].Inst["lastpai_seat"], !1);
                            } else
                                Z["DesktopMgr"].Inst["onRevealStateChange"](r.seat, !1);
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"], !1);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionLockTile"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            Z["PAIMODEL_HEIGHT"] = "0.043225" * 0.94,
                Z["PAIMODEL_WIDTH"] = "0.032775" * 0.94,
                Z["PAIMODEL_THICKNESS"] = "0.0235" * 0.95 * 0.94,
                Z["PAI_COUNT"] = 136;
            var r;
            ! function(Z) {
                Z[Z.NULL = 0] = "NULL",
                    Z[Z.AUTH = 1] = "AUTH",
                    Z[Z["SYNCING"] = 2] = "SYNCING",
                    Z[Z["READY"] = 3] = "READY";
            }
            (r = Z["ELink_State"] || (Z["ELink_State"] = {}));
            var m;
            ! function(Z) {
                Z[Z["Liqi4"] = 0] = "Liqi4",
                    Z[Z["Liqi3"] = 1] = "Liqi3";
            }
            (m = Z["ERuleMode"] || (Z["ERuleMode"] = {}));
            var j;
            ! function(Z) {
                Z[Z.play = 0] = "play",
                    Z[Z["paipu"] = 1] = "paipu",
                    Z[Z["live_broadcast"] = 2] = "live_broadcast";
            }
            (j = Z["EMJMode"] || (Z["EMJMode"] = {}));
            var V = function(V) {
                    function I() {
                        var r = V.call(this) || this;
                        return r["rule_mode"] = m["Liqi4"],
                            r.mode = j.play,
                            r["active"] = !1,
                            r["game_config"] = null,
                            r.seat = 0,
                            r.dora = [],
                            r["xuezhan"] = !1,
                            r["anpai"] = !1,
                            r["last_anpai_score"] = 0,
                            r["players"] = null,
                            r["mainrole"] = null,
                            r["num_left_show"] = new Array(),
                            r["container_other"] = null,
                            r["plane_chang"] = null,
                            r["plane_ju"] = null,
                            r["container_other_reveal"] = null,
                            r["plane_chang_reveal"] = null,
                            r["plane_ju_reveal"] = null,
                            r["num_left_show_reveal"] = new Array(),
                            r["score_reveal"] = new Array(),
                            r["trans_container_effect"] = null,
                            r["effect_pai_canchi"] = null,
                            r["effect_dora3D"] = null,
                            r["effect_dora3D_touying"] = null,
                            r["effect_doraPlane"] = null,
                            r["effect_shadow"] = null,
                            r["effect_shadow_touming"] = null,
                            r["effect_recommend"] = null,
                            r["auto_hule"] = !1,
                            r["auto_nofulu"] = !1,
                            r["auto_moqie"] = !1,
                            r["auto_liqi"] = !0,
                            r["emoji_switch"] = !1,
                            r["duringReconnect"] = !1,
                            r["gameing"] = !1,
                            r["lastpai_seat"] = 0,
                            r["lastqipai"] = null,
                            r["oplist"] = [],
                            r["liqi_select"] = [],
                            r["operation_showing"] = !1,
                            r["myaccountid"] = 0,
                            r["player_datas"] = [],
                            r["player_effects"] = [],
                            r["mjp_res_name"] = '',
                            r["last_gang"] = 0,
                            r["gameEndResult"] = null,
                            r["levelchangeinfo"] = null,
                            r["activity_reward"] = null,
                            r["rewardinfo"] = null,
                            r["choosed_pai"] = null,
                            r["muyu_info"] = null,
                            r["muyu_effect"] = null,
                            r["actionList"] = [],
                            r["action_index"] = 0,
                            r["current_step"] = 0,
                            r["actionMap"] = null,
                            r["tingpais"] = [],
                            r["record_show_hand"] = !1,
                            r["record_show_paopai"] = !1,
                            r["record_show_anim"] = !0,
                            r["ptchange"] = 0,
                            r["waiting_lingshang_deal_tile"] = !1,
                            r.md5 = '',
                            r["paipu_config"] = 0,
                            r["ai_level"] = 1,
                            r["timestoped"] = !1,
                            r["handles_after_timerun"] = [],
                            r["doactioncd"] = 0,
                            r["dochain_fast"] = !1,
                            r["action_running"] = !1,
                            r["hangupCount"] = 0,
                            r["state_cache"] = {},
                            r["mind_voice_seat"] = -1,
                            r["mind_voice_type"] = '',
                            r["during_playing_mind_voice"] = !1,
                            I.Inst = r,
                            r["actionMap"] = {},
                            r["actionMap"]["ActionMJStart"] = new Laya["Handler"](r, function(Z) {
                                Z.msg;
                                return app.Log.log("ActionMJStart begin"),
                                    r["ClearOperationShow"](),
                                    GameMgr.Inst["EnterMJ"](),
                                    uiscript["UI_FightBegin"].show(Laya["Handler"]["create"](r, function() {
                                        uiscript["UI_Loading"].Inst["close"](),
                                            r["ActionRunComplete"]();
                                    })),
                                    2000;
                            }, null, !1),
                            r["actionMap"]["ActionNewRound"] = new Laya["Handler"](r, function(m) {
                                app.Log.log("ActionNewRound begin");
                                var j = m.msg,
                                    V = m.fast;
                                if (r["ClearOperationShow"](), uiscript["UI_Loading"].Inst["close"](), GameMgr.Inst["EnterMJ"](), V)
                                    return uiscript["UI_FightBegin"].hide(), Z["ActionNewRound"]["fastplay"](j, -1), 0;
                                var I = uiscript["UI_FightBegin"].hide();
                                return Laya["timer"].once(I + 200, r, function() {
                                        Z["ActionNewRound"].play(j);
                                    }),
                                    j.al && (I += 1300),
                                    r["is_jiuchao_mode"]() && (I += 150),
                                    I + 200 + 1200 + 400;
                            }, null, !1),
                            r["actionMap"]["ActionNewCard"] = new Laya["Handler"](r, function(m) {
                                app.Log.log("ActionNewCard begin");
                                var j = m.msg,
                                    V = m.fast;
                                return r["ClearOperationShow"](),
                                    uiscript["UI_Loading"].Inst["close"](),
                                    GameMgr.Inst["EnterMJ"](),
                                    V ? (Z["ActionNewCard"]["fastplay"](j, -1), 0) : Z["ActionNewCard"].play(j);
                            }, null, !1),
                            r["actionMap"]["ActionDiscardTile"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionDiscardTile"]["fastplay"](j, -1), 0) : (Z["ActionDiscardTile"].play(j), Laya["timer"].once(500, r, r["ActionRunComplete"]), 500);
                            }, null, !1),
                            r["actionMap"]["ActionDealTile"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionDealTile"]["fastplay"](j, -1), 0) : (Z["ActionDealTile"].play(j), 500);
                            }, null, !1),
                            r["actionMap"]["ActionChiPengGang"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionChiPengGang"]["fastplay"](j, -1), 0) : (Z["ActionChiPengGang"].play(j), 1100);
                            }, null, !1),
                            r["actionMap"]["ActionAnGangAddGang"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionAnGangAddGang"]["fastplay"](j, -1), 0) : (Z["ActionAnGangAddGang"].play(j), 1100);
                            }, null, !1),
                            r["actionMap"]["ActionHule"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg;
                                return Z["ActionHule"].play(j),
                                    5000;
                            }, null, !1),
                            r["actionMap"]["ActionHuleXueZhanMid"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg;
                                return Z["ActionHuleXueZhanMid"].play(j),
                                    1000;
                            }, null, !1),
                            r["actionMap"]["ActionHuleXueZhanEnd"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg;
                                return Z["ActionHuleXueZhanEnd"].play(j),
                                    1000;
                            }, null, !1),
                            r["actionMap"]["ActionNoTile"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg;
                                return Z["ActionNoTile"].play(j),
                                    5000;
                            }, null, !1),
                            r["actionMap"]["ActionLiuJu"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg;
                                return Z["ActionLiuJu"].play(j),
                                    5000;
                            }, null, !1),
                            r["actionMap"]["ActionBaBei"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionBabei"]["fastplay"](j, -1), 0) : (Z["ActionBabei"].play(j), 1000);
                            }, null, !1),
                            r["actionMap"]["ActionChangeTile"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionChangeTile"]["fastplay"](j, -1), 0) : (Z["ActionChangeTile"].play(j), 3000);
                            }, null, !1),
                            r["actionMap"]["ActionSelectGap"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionSelectGap"]["fastplay"](j, -1), 0) : (Z["ActionSelectGap"].play(j), 800);
                            }, null, !1),
                            r["actionMap"]["ActionGangResult"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionGangResult"]["fastplay"](j, -1), 0) : (Z["ActionGangResult"].play(j), 1000);
                            }, null, !1),
                            r["actionMap"]["ActionGangResultEnd"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionGangResultEnd"]["fastplay"](j, -1), 0) : (Z["ActionGangResultEnd"].play(j), 2000);
                            }, null, !1),
                            r["actionMap"]["ActionRevealTile"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionRevealTile"]["fastplay"](j, -1), 0) : (Z["ActionRevealTile"].play(j), Laya["timer"].once(500, r, r["ActionRunComplete"]), 500);
                            }, null, !1),
                            r["actionMap"]["ActionLockTile"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionLockTile"]["fastplay"](j, -1), 0) : (Z["ActionLockTile"].play(j), 1000);
                            }, null, !1),
                            r["actionMap"]["ActionUnveilTile"] = new Laya["Handler"](r, function(m) {
                                r["ClearOperationShow"]();
                                var j = m.msg,
                                    V = m.fast;
                                return V ? (Z["ActionUnveilTile"]["fastplay"](j, -1), 0) : (Z["ActionUnveilTile"].play(j), 1000);
                            }, null, !1),
                            app["NetAgent"]["AddListener2MJ"]("NotifyGameEndResult", Laya["Handler"]["create"](r, function(Z) {
                                r["gameEndResult"] = Z["result"],
                                    uiscript["UI_Hangup_Warn"].Inst["enable"] && uiscript["UI_Hangup_Warn"].Inst["close"](),
                                    r.mode == j.play && (uiscript["UI_Activity"]["need_check_activity"] = !0),
                                    Laya["timer"].once(10000, r, function() {
                                        game["MJNetMgr"].Inst["Close"]();
                                    });
                            })),
                            app["NetAgent"]["AddListener2MJ"]("ActionPrototype", Laya["Handler"]["create"](r, function(Z) {
                                if (app.Log.log("Receive Action: " + JSON["stringify"](Z)), r["duringReconnect"])
                                    r["actionList"].push(Z);
                                else if (r["actionList"]["length"] > 0)
                                    r["actionList"].push(Z);
                                else {
                                    r["actionList"].push(Z);
                                    var m = r["doactioncd"] - Laya["timer"]["currTimer"];
                                    0 > m && (m = 0),
                                        r["StartChainAction"](m);
                                }
                            })),
                            app["NetAgent"]["AddListener2MJ"]("NotifyGameTerminate", Laya["Handler"]["create"](r, function(m) {
                                app.Log.log("NotifyGameTerminate:" + JSON["stringify"](m)),
                                    Z["AudioMgr"]["StopMusic"](),
                                    "user-manual-terminate" != m["reason"] && uiscript["UI_SecondConfirm"].Inst["show_only_confirm"](game["Tools"]["strOfLocalization"](2227), Laya["Handler"]["create"](r, function() {
                                        r["Reset"](),
                                            game["Scene_MJ"].Inst["GameEnd"]();
                                    })),
                                    uiscript["UI_VoteProgress"].Inst["enable"] && uiscript["UI_VoteProgress"].Inst["close"]();
                            })),
                            Z["ModelAnimationController"]["init_data"](),
                            app["NetAgent"]["AddListener2MJ"]("NotifyGamePause", Laya["Handler"]["create"](r, function(Z) {
                                app.Log.log("NotifyGamePause:" + JSON["stringify"](Z));
                                var m = Z["paused"];
                                r["setGameStop"](m);
                            })),
                            app["NetAgent"]["AddListener2MJ"]("NotifyGameFinishReward", Laya["Handler"]["create"](r, function(Z) {
                                app.Log.log("NotifyGameFinishReward: " + JSON["stringify"](Z)),
                                    r["levelchangeinfo"] = Z["level_change"],
                                    r["rewardinfo"] = Z;
                            })),
                            app["NetAgent"]["AddListener2MJ"]("NotifyActivityReward", Laya["Handler"]["create"](r, function(Z) {
                                app.Log.log("NotifyActivityReward: " + JSON["stringify"](Z)),
                                    r["activity_reward"] = Z;
                            })),
                            app["NetAgent"]["AddListener2MJ"]("NotifyActivityPoint", Laya["Handler"]["create"](r, function(Z) {
                                for (var r = Z["activity_points"], m = 0; m < r["length"]; m++) {
                                    var j = r[m];
                                    j["activity_id"] == uiscript["UI_Activity_DuanWu_Point"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Point"]["point"] = j["point"], uiscript["UI_Chunjie"]["need_refresh_rank"] = !0);
                                }
                            })),
                            app["NetAgent"]["AddListener2MJ"]("NotifyLeaderboardPoint", Laya["Handler"]["create"](r, function(Z) {
                                for (var r = Z["leaderboard_points"], m = 0; m < r["length"]; m++) {
                                    var j = r[m];
                                    j["leaderboard_id"] == uiscript["UI_Activity_DuanWu_Rank"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Rank"]["point"] = j["point"]);
                                }
                            })),
                            app["NetAgent"]["AddListener2Lobby"]("NotifyGameFinishRewardV2", Laya["Handler"]["create"](r, function(Z) {
                                app.Log.log("NotifyGameFinishReward: " + JSON["stringify"](Z)),
                                    r["levelchangeinfo"] = Z["level_change"],
                                    r["rewardinfo"] = Z;
                            })),
                            app["NetAgent"]["AddListener2Lobby"]("NotifyActivityRewardV2", Laya["Handler"]["create"](r, function(Z) {
                                app.Log.log("NotifyActivityReward: " + JSON["stringify"](Z)),
                                    r["activity_reward"] = Z;
                            })),
                            app["NetAgent"]["AddListener2Lobby"]("NotifyActivityPointV2", Laya["Handler"]["create"](r, function(Z) {
                                for (var r = Z["activity_points"], m = 0; m < r["length"]; m++) {
                                    var j = r[m];
                                    j["activity_id"] == uiscript["UI_Activity_DuanWu_Point"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Point"]["point"] = j["point"], uiscript["UI_Chunjie"]["need_refresh_rank"] = !0);
                                }
                            })),
                            app["NetAgent"]["AddListener2Lobby"]("NotifyLeaderboardPointV2", Laya["Handler"]["create"](r, function(Z) {
                                for (var r = Z["leaderboard_points"], m = 0; m < r["length"]; m++) {
                                    var j = r[m];
                                    j["leaderboard_id"] == uiscript["UI_Activity_DuanWu_Rank"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Rank"]["point"] = j["point"]);
                                }
                            })),
                            app["NetAgent"]["AddListener2MJ"]("PlayerLeaving", Laya["Handler"]["create"](r, function(Z) {
                                Z && Z.seat == r.seat && uiscript["UI_Hangup_Warn"].Inst.show();
                            })),
                            r;
                    }
                    return __extends(I, V),
                        I["is_yuren_type"] = function(Z) {
                            if (void 0 === Z && (Z = !1), Z) {
                                var r = new Date();
                                this["_is_yuren_type"] = 3 == r["getMonth"]() && 1 == r["getDate"]();
                            }
                            return this["_is_yuren_type"];
                        },
                        Object["defineProperty"](I["prototype"], "round_id", {
                            get: function() {
                                return this["index_change"] + '-' + this["index_ju"] + '-' + this["index_ben"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](I["prototype"], "main_role_character_info", {
                            get: function() {
                                return this["player_datas"][this.seat]["character"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](I["prototype"], "player_count", {
                            get: function() {
                                return this["rule_mode"] == m["Liqi3"] ? 3 : 4;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        I["prototype"]["seat2LocalPosition"] = function(Z) {
                            if (this["rule_mode"] == m["Liqi3"]) {
                                for (var r = this.seat, j = 0; 4 > j; j++) {
                                    if (Z == r)
                                        return j;
                                    r++,
                                    r >= 3 && (r = -1);
                                }
                                return 0;
                            }
                            return (Z - this.seat + 4) % 4;
                        },
                        I["prototype"]["localPosition2Seat"] = function(Z) {
                            if (this["rule_mode"] == m["Liqi3"]) {
                                for (var r = this.seat, j = 0; Z > j; j++)
                                    r++, r >= 3 && (r = -1);
                                return r;
                            }
                            return (this.seat + Z) % 4;
                        },
                        I["prototype"]["getPlayerName"] = function(Z) {
                            var r = this["player_datas"][Z]["account_id"];
                            if (this.mode == j["paipu"] && uiscript["UI_Replay"].Inst["hide_name"]) {
                                var m = this["seat2LocalPosition"](Z);
                                switch (m) {
                                    case 0:
                                        return {
                                            account_id: r,
                                            nickname: game["Tools"]["strOfLocalization"](3076),
                                            verified: 0
                                        };
                                    case 1:
                                        return {
                                            account_id: r,
                                            nickname: game["Tools"]["strOfLocalization"](3073),
                                            verified: 0
                                        };
                                    case 2:
                                        return {
                                            account_id: r,
                                            nickname: game["Tools"]["strOfLocalization"](3074),
                                            verified: 0
                                        };
                                    case 3:
                                        return {
                                            account_id: r,
                                            nickname: game["Tools"]["strOfLocalization"](3075),
                                            verified: 0
                                        };
                                }
                                return {
                                    account_id: r,
                                    nickname: '',
                                    verified: 0
                                };
                            }
                            var V = this["player_datas"][Z]["nickname"];
                            return r && !game["Tools"]["is_same_zone"](GameMgr.Inst["account_id"], r) && (GameMgr.Inst["nickname_replace_enable"] && GameMgr.Inst["nickname_replace_lst"]["length"] > 0 ? GameMgr.Inst["nickname_replace_table"][r] ? V = GameMgr.Inst["nickname_replace_table"][r] : (V = GameMgr.Inst["nickname_replace_lst"][Math["floor"](Math["random"]() * GameMgr.Inst["nickname_replace_lst"]["length"])], GameMgr.Inst["nickname_replace_table"][r] = V) : null != app["Taboo"].test(V) && (V = game["Tools"]["strOfLocalization"](3060))), {
                                account_id: r,
                                nickname: V,
                                verified: this["player_datas"][Z]["verified"]
                            };
                        },
                        Object["defineProperty"](I["prototype"], "showingPaopai", {
                            get: function() {
                                return this.mode != j.play;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        I["prototype"]["is_dora3_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["dora3_mode"] ? !0 : !1;
                        },
                        I["prototype"]["is_peipai_open_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["begin_open_mode"] ? !0 : !1;
                        },
                        I["prototype"]["is_muyu_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["muyu_mode"] ? !0 : !1;
                        },
                        I["prototype"]["is_open_hand"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["open_hand"] ? !0 : !1;
                        },
                        I["prototype"]["is_shilian_mode"] = function() {
                            return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"]["shilian"] ? !0 : !1;
                        },
                        I["prototype"]["is_xiuluo_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["xuezhandaodi"] ? !0 : !1;
                        },
                        I["prototype"]["is_jiuchao_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["jiuchao_mode"] ? !0 : !1;
                        },
                        I["prototype"]["is_reveal_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["reveal_discard"] ? !0 : !1;
                        },
                        I["prototype"]["is_hesu_mode"] = function() {
                            return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"].hesu ? !0 : !1;
                        },
                        I["prototype"]["is_huansanzhang_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["huansanzhang"] ? !0 : !1;
                        },
                        I["prototype"]["is_chuanma_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["chuanma"] ? !0 : !1;
                        },
                        I["prototype"]["is_jjc_mode"] = function() {
                            return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"].jjc ? !0 : !1;
                        },
                        I["prototype"]["is_top_match"] = function() {
                            var Z = 0;
                            if (this["game_config"] && this["game_config"].meta && (Z = this["game_config"].meta["mode_id"]), (15 == Z || 16 == Z || 25 == Z || 26 == Z) && this["player_datas"]) {
                                for (var r = 0, j = this["player_datas"]; r < j["length"]; r++) {
                                    var V = j[r],
                                        I = this["rule_mode"] == m["Liqi4"] ? V["level"].id : V["level3"].id;
                                    if (6 != cfg["level_definition"]["level_definition"].get(I)["primary_level"])
                                        return !1;
                                }
                                return !0;
                            }
                            return !1;
                        },
                        I["prototype"]["ActionRunComplete"] = function() {
                            this["action_running"] = !1;
                        },
                        I["prototype"]["StartChainAction"] = function(Z) {
                            this["doactioncd"] = Laya["timer"]["currTimer"] + Z,
                                Laya["timer"]["frameLoop"](1, this, this["DoChainAction"]);
                        },
                        I["prototype"]["DoChainAction"] = function() {
                            var Z = this;
                            if (this["action_index"] >= this["actionList"]["length"])
                                this["action_index"] = 0, this["actionList"] = [], this["dochain_fast"] = !1, Laya["timer"]["clear"](this, this["DoChainAction"]), this["duringReconnect"] && (app.Log.log("finishSyncGame0"), app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function() {}), this["duringReconnect"] = !1);
                            else {
                                if (!this["dochain_fast"]) {
                                    if (this["action_running"])
                                        return;
                                    if (Laya["timer"]["currTimer"] <= this["doactioncd"] - Laya["timer"]["delta"])
                                        return;
                                    Laya["timer"]["clear"](this, this["DoChainAction"]);
                                }
                                this["action_index"] == this["actionList"]["length"] - 1 && this["duringReconnect"] && (this["duringReconnect"] = !1, app.Log.log("finishSyncGame1"), app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function() {})),
                                    this["dochain_fast"] ? this["action_index"] + 2 < this["actionList"]["length"] ? this["DoMJAction"](this["actionList"][this["action_index"]++], !0) : (this["dochain_fast"] = !1, this["DoMJAction"](this["actionList"][this["action_index"]++], !1)) : (this["dochain_fast"] = !1, this["action_index"] + 4 < this["actionList"]["length"] && (this["dochain_fast"] = !0), this["dochain_fast"] ? Laya["timer"].once(800, this, function() {
                                        for (var r = Z["actionList"]["length"] - 1; r >= Z["action_index"]; r--)
                                            if ("ActionNewRound" == Z["actionList"][r].name) {
                                                Z["action_index"] = r;
                                                break;
                                            }
                                        Z["DoMJAction"](Z["actionList"][Z["action_index"]++], !0);
                                    }) : this["DoMJAction"](this["actionList"][this["action_index"]++], !1));
                            }
                        },
                        I["EnDecode"] = function(Z) {
                            for (var r = [132, 94, 78, 66, 57, 162, 31, 96, 28], m = 0; m < Z["byteLength"]; m++) {
                                var j = (23 ^ Z["byteLength"]) + 5 * m + r[m % r["length"]] & 255;
                                Z[m] ^= j;
                            }
                            return Z;
                        },
                        I["prototype"]["DoMJAction"] = function(Z, r) {
                            var m = this;
                            if (this["active"]) {
                                var j = net["ProtobufManager"]["lookupType"]("lq." + Z.name);
                                if (!j)
                                    throw new Error("ERR_CANNOT_FIND_MESSAGE_TYPE, lq." + Z.name);
                                var V = Z.step,
                                    v = j["decode"](I["EnDecode"](Z.data));
                                if (app.Log.log("DoMJAction step:" + V + ' [' + Z.name + "]:  " + JSON["stringify"](v) + " fast:" + r), V > 1 && V != this["current_step"] + 1)
                                    return app.Log.log("step 不对 强制触发全数据重连 step:" + V + " current_step:" + this["current_step"]), this["trySyncGame"](), void 0;
                                var q = 0;
                                if (this["current_step"] = V, this["actionMap"]["hasOwnProperty"](Z.name))
                                    try {
                                        r || (this["action_running"] = !0),
                                            q = this["actionMap"][Z.name]["runWith"]({
                                                msg: v,
                                                fast: r
                                            });
                                    } catch (t) {
                                        var x = {};
                                        return x["error"] = t["message"],
                                            x["stack"] = t["stack"],
                                            x["method"] = "DoMJAction",
                                            x.name = Z.name,
                                            x.data = Z,
                                            x.step = V,
                                            GameMgr.Inst["onFatalError"](x),
                                            void 0;
                                    }
                                else
                                    app.Log["Error"]("没有监听操作：" + Z.name);
                                r ? this["DoChainAction"]() : Laya["timer"]["frameOnce"](1, this, function() {
                                    m["StartChainAction"](q);
                                });
                            }
                        },
                        I["prototype"]["_load"] = function(r) {
                            this["desktop3D"] = r,
                                this["desktop3D"]["getChildByName"]("all")["active"] = !1;
                            var m = this["desktop3D"]["getChildByName"]("poss");
                            this["players"] = new Array(),
                                this["mainrole"] = m["getChildByName"]("man_1")["addComponent"](Z["ViewPlayer_Me"]),
                                this["mainrole"]["InitMe"](this, 0, game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands"), m),
                                this["players"].push(this["mainrole"]);
                            for (var j = 2; 4 >= j; j++) {
                                var V = m["getChildByName"]("man_" + j)["addComponent"](Z["ViewPlayer_Other"]);
                                V.Init(this, j - 1, m),
                                    this["players"].push(V);
                            }
                            var I = this["desktop3D"]["getChildByName"]("other"),
                                v = I["getChildByName"]("left");
                            this["num_left_show"].push(v["getChildByName"]('0')),
                                this["num_left_show"].push(v["getChildByName"]('1'));
                            var q = I["getChildByName"]("chang");
                            this["container_other"] = I,
                                this["plane_chang"] = q["getChildByName"]("chang"),
                                this["plane_ju"] = q["getChildByName"]('ju'),
                                this["container_other"] = I,
                                this["container_other_reveal"] = this["desktop3D"]["getChildByName"]("other_reveal");
                            var t = this["container_other_reveal"]["getChildByName"]("left");
                            this["num_left_show_reveal"].push(t["getChildByName"]('0')),
                                this["num_left_show_reveal"].push(t["getChildByName"]('1'));
                            var x = this["container_other_reveal"]["getChildByName"]("chang");
                            if (this["plane_chang_reveal"] = x["getChildByName"]("chang"), this["plane_ju_reveal"] = x["getChildByName"]('ju'), 'kr' == GameMgr["client_language"]) {
                                var E = "scene/Assets/Resource/table/tablemid/",
                                    e = this["plane_chang_reveal"]["meshRender"]["material"];
                                e["albedoTexture"] = Laya["Loader"]["getRes"](E + "chang_kr.png"),
                                    e = x["getChildByName"]("juzi")["meshRender"]["material"],
                                    e["albedoTexture"] = Laya["Loader"]["getRes"](E + "chang_kr.png"),
                                    e = t["getChildByName"]("left")["meshRender"]["material"],
                                    e["albedoTexture"] = Laya["Loader"]["getRes"](E + "left_kr.png"),
                                    e = this["plane_chang"]["meshRender"]["material"],
                                    e["albedoTexture"] = Laya["Loader"]["getRes"](E + "chang_kr.png"),
                                    e = q["getChildByName"]("juzi")["meshRender"]["material"],
                                    e["albedoTexture"] = Laya["Loader"]["getRes"](E + "chang_kr.png"),
                                    e = v["getChildByName"]("left")["meshRender"]["material"],
                                    e["albedoTexture"] = Laya["Loader"]["getRes"](E + "left_kr.png");
                            }
                            for (var o = this["container_other_reveal"]["getChildByName"]("score"), j = 0; 6 > j; j++)
                                this["score_reveal"].push(o["getChildAt"](j));
                            this["SetLeftPaiShow"](0),
                                this["SetChangJuShow"](0, 0, 0),
                                this["trans_container_effect"] = this["desktop3D"]["getChildByName"]("effect"),
                                this["effect_dora3D"] = this["trans_container_effect"]["getChildByName"]("effect_dora"),
                                this["effect_dora3D_touying"] = this["trans_container_effect"]["getChildByName"]("effect_touming_dora");
                            var N = this["effect_dora3D"]["getChildAt"](0)["meshRender"]["material"];
                            N["disableLight"](),
                                this["effect_shadow"] = this["trans_container_effect"]["getChildByName"]("effect_shadow"),
                                this["effect_shadow_touming"] = this["trans_container_effect"]["getChildByName"]("effect_shadow_touming"),
                                this["effect_dora3D"]["active"] = !0,
                                this["effect_shadow"]["active"] = !0,
                                this["effect_shadow_touming"]["active"] = !0,
                                this["effect_dora3D_touying"]["active"] = !0,
                                this["effect_doraPlane"] = game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands")["getChildByName"]("effect_dora"),
                                this["effect_recommend"] = game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands")["getChildByName"]("effect_recommend"),
                                this["effect_doraPlane"]["active"] = !1,
                                this["effect_recommend"]["active"] = !1;
                            var P = this["effect_recommend"]["getChildAt"](0)["meshRender"]["material"],
                                R = "myres2/mjp/recommend.png";
                            "chs" != GameMgr["client_language"] && (R = GameMgr["client_language"] + '/' + R),
                                Laya["loader"]["getRes"](R) && (P["diffuseTexture"] = Laya["loader"]["getRes"](R));
                        },
                        I["prototype"]["initRoom"] = function(r, V, v, q, t) {
                            var x = this;
                            uiscript["UI_Rpg"]["needShow"] = !1,
                                uiscript["UI_WaitingRoom"].Inst["resetData"](),
                                GameMgr.Inst["in_hesu"] = !1,
                                this["game_config"] = r,
                                this["rule_mode"] = m["Liqi4"],
                                r.mode.mode && (this["rule_mode"] = r.mode.mode < 10 ? m["Liqi4"] : m["Liqi3"]),
                                this["xuezhan"] = !1,
                                r.mode && r.mode["detail_rule"] && (this["xuezhan"] = !!r.mode["detail_rule"]["xuezhandaodi"]),
                                r.mode && r.mode["detail_rule"] && (this["field_spell"] = r.mode["detail_rule"]["field_spell_mode"]),
                                r.mode && r.mode["detail_rule"] && r.mode["detail_rule"]["reveal_discard"] ? (this["container_other"]["active"] = !1, this["container_other_reveal"]["active"] = !0, this["anpai"] = !0) : (this["anpai"] = !1, this["container_other"]["active"] = !0, this["container_other_reveal"]["active"] = !1),
                                this.mode = q,
                                this.seat = -1,
                                this["player_datas"] = V,
                                this["gameEndResult"] = null,
                                this["levelchangeinfo"] = null,
                                this["activity_reward"] = null,
                                this["rewardinfo"] = null,
                                this["active"] = !0,
                                this["ptchange"] = 0,
                                this["timestoped"] = !1,
                                this["action_running"] = !1,
                                this["hangupCount"] = 0,
                                this["handles_after_timerun"] = [],
                                this["muyu_info"] = null,
                                this["muyu_effect"] && (this["muyu_effect"]["destroy"](), this["muyu_effect"] = null),
                                uiscript["UI_GameStop"].Inst["close"](),
                                uiscript["UI_Replay"].Inst["hide_name"] = !1,
                                this.mode == j["paipu"] ? (this["record_show_hand"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_hand"), this["record_show_paopai"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_paopai"), this["record_show_anim"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_anim")) : (this["record_show_anim"] = !0, this["record_show_hand"] = this["record_show_paopai"] = !1),
                                this.mode == j.play ? (uiscript["UI_Invite"].Inst["enable"] = !1, 4 == r["category"] && (GameMgr.Inst["custom_match_id"] = r.meta["contest_uid"])) : uiscript["UI_Invite"].Inst["enable"] = !0,
                                this["myaccountid"] = v;
                            for (var E = {}, e = 0; e < V["length"]; e++)
                                for (var o = cfg["item_definition"].skin.get(V[e]["avatar_id"]), N = cfg["item_definition"]["character"].get(o["character_id"]), P = cfg["voice"]["sound"]["getGroup"](N["sound"]), R = 0; R < P["length"]; R++)
                                    if (V[e]["character"] && 2 == P[R]["category"] && P[R]["level_limit"] <= V[e]["character"]["level"]) {
                                        var T = P[R].path + Z["AudioMgr"]["suffix"];
                                        E["hasOwnProperty"](T) || (E[T] = 1);
                                    }
                            for (var S in E)
                                Laya["loader"].load(S, null, null, null, 3);
                            for (var e = 0; e < this["player_datas"]["length"]; e++)
                                this["player_datas"][e]["account_id"] == v && (this.seat = e);
                            if (GameMgr["sakiLimited"])
                                for (var e = 0; e < this["player_datas"]["length"]; e++)
                                    if (this["player_datas"][e]["account_id"] != GameMgr.Inst["account_id"]) {
                                        game["GameUtility"]["char_limited"](this["player_datas"][e]["character"]["charid"]) && (this["player_datas"][e]["character"]["charid"] = game["GameUtility"]["get_default_ai_character"](), this["player_datas"][e]["character"].skin = game["GameUtility"]["get_default_ai_skin"](), this["player_datas"][e]["avatar_id"] = game["GameUtility"]["get_default_ai_skin"]());
                                        var J = this["player_datas"][e]["views"];
                                        if (J)
                                            for (var R = J["length"] - 1; R >= 0; R--) {
                                                var X = J[R]["item_id"];
                                                X && 1 == cfg["item_definition"].item.get(X)["collaboration"] && J["splice"](R, 1);
                                            }
                                    }
                            if (-1 == this.seat) {
                                if (this.mode == j.play)
                                    return uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2228)), app.Log["Error"](JSON["stringify"](V)), void 0;
                                this.seat = 0;
                            }
                            if (this["emoji_switch"] = !1, r.mode && r.mode["game_setting"] && (this["emoji_switch"] = !!r.mode["game_setting"]["emoji_switch"]), uiscript["UI_Replay"].Inst["enable"] = this.mode == j["paipu"], uiscript["UI_Ob_Replay"].Inst["enable"] = !1, I["bianjietishi"] = !0, q == j.play) {
                                if (r.mode && r.mode["detail_rule"]) {
                                    var b = r.mode["detail_rule"];
                                    null != b["bianjietishi"] && (I["bianjietishi"] = b["bianjietishi"]);
                                }
                                if (2 == r["category"] && r.meta) {
                                    var M = cfg["desktop"]["matchmode"].get(r.meta["mode_id"]);
                                    M && 6 == M.room && (I["bianjietishi"] = !1);
                                }
                                uiscript["UI_MJTask_Progress"]["record"]();
                            }
                            this["mjp_res_name"] = game["GameUtility"]["get_view_res_name"](game["EView"].mjp),
                                this["player_effects"] = [];
                            for (var W = game["EView"]["liqibang"], B = game["EView"]["lobby_bg"], e = 0; e < this["player_datas"]["length"]; e++) {
                                for (var l = this["player_datas"][e]["character"], C = {}, k = W; B >= k; k++) {
                                    var n = game["GameUtility"]["get_view_default_item_id"](k);
                                    C[k] = n;
                                }
                                if (l) {
                                    var J = this["player_datas"][e]["views"],
                                        w = cfg["item_definition"]["character"].get(l["charid"]);
                                    if (w && (C[game["EView"]["hand_model"]] = w.hand), J)
                                        for (var R = 0; R < J["length"]; R++) {
                                            var D = J[R].slot,
                                                X = J[R]["item_id"];
                                            X && (C[D] = X);
                                        }
                                } else
                                    this["player_datas"][e]["character"] = {
                                        charid: game["GameUtility"]["get_default_ai_character"](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game["GameUtility"]["get_default_ai_skin"](),
                                        is_upgraded: !1
                                    };
                                this["player_effects"].push(C);
                            }
                            uiscript["UI_DesktopInfo"].Inst["initRoom"](),
                                uiscript["UI_DesktopInfo"].Inst["refreshSeat"](),
                                uiscript["UI_Hangup_Warn"].Inst["enable"] = !1,
                                uiscript["UI_TingPai"].Inst["enable"] = !0,
                                uiscript["UI_HuanSanZhange"].Inst["enable"] = !1,
                                uiscript["UI_HuanSanZhange_ChangeType"].Inst["enable"] = !1,
                                uiscript["UI_Dingque"].Inst["enable"] = !1,
                                this["index_change"] = 0,
                                this["index_ju"] = 0,
                                this["index_ben"] = 0,
                                this["index_player"] = 0,
                                this["index_chuanma_ju"] = 0,
                                this["gameing"] = !0,
                                this["left_tile_count"] = 69,
                                this["duringReconnect"] = !1,
                                this["current_step"] = 0,
                                this["action_index"] = 0,
                                this["dochain_fast"] = !1,
                                this["actionList"] = [],
                                this["setAutoHule"](!1),
                                this["setAutoMoQie"](!1),
                                this["setAutoNoFulu"](!1),
                                uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                                this["SetChangJuShow"](this["index_change"], this["index_ju"], this["index_chuanma_ju"]),
                                uiscript["UI_DesktopInfo"].Inst["setBen"](this["index_ben"]),
                                uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1);
                            for (var e = 0; 4 > e; e++)
                                this["players"][e]["onInitRoom"](this["localPosition2Seat"](e)), this["players"][e]["SetScore"](0, 0), this["players"][e]["trans_ind"]["active"] = !1, this["players"][e]["RefreshDir"]();
                            if (this["RefreshPaiLeft"](), uiscript["UI_GameEnd"].Inst["forceclose"](), uiscript["UI_RankChange"].Inst["close"](), uiscript["UI_MJReward"].Inst["close"](), Laya["timer"]["frameOnce"](6, this, function() {
                                    x["Reset"](),
                                        app.Log.log("场景init结束：" + Laya.Stat["currentMemorySize"] / 1024 / 1024 + " MB"),
                                        t && t.run();
                                }), this["state_cache"] = {}, uiscript["UI_Activity"]["activity_is_running"](uiscript["UI_Activity_DuanWu_Point"]["activity_id"]) && (this["state_cache"]["duanwu_point"] = uiscript["UI_Activity_DuanWu_Point"]["point"], this["state_cache"]["duanwu_rank"] = uiscript["UI_Activity_DuanWu_Rank"]["point"]), this["is_muyu_mode"]()) {
                                var c = "scene/effect_muyu_" + GameMgr["client_language"] + ".lh";
                                this["muyu_effect"] = new game["EffectBase"](c),
                                    this["muyu_effect"].root["active"] = !1,
                                    this["trans_container_effect"]["addChild"](this["muyu_effect"].root);
                            }
                        },
                        I["prototype"]["changeMainbody"] = function(Z) {
                            if (this.mode != j.play && this["gameing"]) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({ 'change_seat_to': Z }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'change_seat_to': Z }));
                                    }
                                }));
                                this.seat = Z,
                                    uiscript["UI_DesktopInfo"].Inst["refreshSeat"](!0);
                                for (var r = 0; 4 > r; r++)
                                    this["players"][r]["onInitRoom"](this["localPosition2Seat"](r)), this["players"][r]["trans_ind"]["active"] = !1, this["players"][r]["RefreshDir"]();
                                this["Reset"](),
                                    this.mode == j["paipu"] && uiscript["UI_Replay"].Inst["onChangeMainBody"](),
                                    this.mode == j["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["onChangeMainbody"](),
                                    this.mode == j["live_broadcast"] && uiscript["UI_Live_Broadcast1"].Inst["onChangeMainbody"]();
                            }
                        },
                        I["prototype"]["trySyncGame"] = function() {
                            var Z = this;
                            this["Reset"](),
                                this["duringReconnect"] = !0,
                                this["hangupCount"] = 0,
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                    round_id: this["round_id"],
                                    step: 0
                                }, function(r, m) {
                                    r || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", r, m), game["Scene_MJ"].Inst["ForceOut"]()) : (app.Log.log("[syncGame2] " + JSON["stringify"](m)), m["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2229)), game["Scene_MJ"].Inst["GameEnd"]()) : (Z["fetchLinks"](), Z["Reset"](), Z["duringReconnect"] = !0, Z["syncGameByStep"](m["game_restore"])));
                                });
                        },
                        I["prototype"]["syncGameByStep"] = function(r) {
                            var m = this,
                                j = !1;
                            if (this["timestoped"] = !1, this["handles_after_timerun"] = [], this["action_running"] = !1, uiscript["UI_GameStop"].Inst["close"](), this["hangupCount"] = 0, uiscript["UI_Hangup_Warn"].Inst["enable"] = !1, r && 5 === r["game_state"] && (this["timestoped"] = !0), GameMgr.Inst["EnterMJ"](), r && r["actions"] && r["actions"]["length"] > 0) {
                                var actions = [];
                                for (var idx = 0; idx < r.actions.length; idx++) {
                                    var rawAction = r.actions[idx];
                                    var action = net.ProtobufManager.lookupType("lq." + rawAction.name).decode(rawAction.data);
                                    actions.push({
                                        name: rawAction.name,
                                        data: action
                                    });
                                }

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'sync_game_actions': actions
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'sync_game_actions': actions
                                        }));
                                    }
                                }));
                                this["actionList"] = [];
                                var V = -1;
                                null != r["passed_waiting_time"] && void 0 != r["passed_waiting_time"] && (V = 1000 * r["passed_waiting_time"]);
                                for (var v = 0; v < r["actions"]["length"]; v++) {
                                    var q = r["actions"][v],
                                        t = v == r["actions"]["length"] - 1 ? V : -1,
                                        x = net["ProtobufManager"]["lookupType"]("lq." + q.name);
                                    if (!x)
                                        throw new Error("ERR_CANNOT_FIND_MESSAGE_TYPE, lq." + q.name);
                                    var E = x["decode"](q.data);
                                    this["current_step"] = q.step;
                                    try {
                                        switch (q.name) {
                                            case "ActionNewRound":
                                                Z["ActionNewRound"]["fastplay"](E, t);
                                                break;
                                            case "ActionChangeTile":
                                                Z["ActionChangeTile"]["fastplay"](E, t);
                                                break;
                                            case "ActionDiscardTile":
                                                Z["ActionDiscardTile"]["fastplay"](E, t);
                                                break;
                                            case "ActionDealTile":
                                                Z["ActionDealTile"]["fastplay"](E, t);
                                                break;
                                            case "ActionChiPengGang":
                                                Z["ActionChiPengGang"]["fastplay"](E, t);
                                                break;
                                            case "ActionAnGangAddGang":
                                                Z["ActionAnGangAddGang"]["fastplay"](E, t);
                                                break;
                                            case "ActionHule":
                                                Z["ActionHule"]["fastplay"](E, t),
                                                    j = !0;
                                                break;
                                            case "ActionHuleXueZhanMid":
                                                Z["ActionHuleXueZhanMid"]["fastplay"](E, t),
                                                    j = !0;
                                                break;
                                            case "ActionHuleXueZhanEnd":
                                                Z["ActionHuleXueZhanEnd"]["fastplay"](E, t),
                                                    j = !0;
                                                break;
                                            case "ActionLiuJu":
                                                Z["ActionLiuJu"]["fastplay"](E, t),
                                                    j = !0;
                                                break;
                                            case "ActionNoTile":
                                                Z["ActionNoTile"]["fastplay"](E, t),
                                                    j = !0;
                                                break;
                                            case "ActionBaBei":
                                                Z["ActionBabei"]["fastplay"](E, t);
                                                break;
                                            case "ActionSelectGap":
                                                Z["ActionSelectGap"]["fastplay"](E, t);
                                                break;
                                            case "ActionGangResult":
                                                Z["ActionGangResult"]["fastplay"](E, t);
                                                break;
                                            case "ActionGangResultEnd":
                                                Z["ActionGangResultEnd"]["fastplay"](E, t);
                                                break;
                                            case "ActionLockTile":
                                                Z["ActionLockTile"]["fastplay"](E, t);
                                                break;
                                            case "ActionRevealTile":
                                                Z["ActionRevealTile"]["fastplay"](E, t);
                                                break;
                                            case "ActionUnveilTile":
                                                Z["ActionUnveilTile"]["fastplay"](E, t);
                                                break;
                                            case "ActionNewCard":
                                                Z["ActionNewCard"]["fastplay"](E, t);
                                        }
                                    } catch (e) {
                                        var o = {};
                                        o["error"] = e["message"],
                                            o["stack"] = e["stack"],
                                            o["method"] = "syncGameByStep",
                                            o.name = q.name,
                                            o.data = q,
                                            o.step = v,
                                            GameMgr.Inst["onFatalError"](o);
                                        break;
                                    }
                                }
                                Laya["timer"].once(1000, this, function() {
                                    m["duringReconnect"] = !1,
                                        uiscript["UI_Loading"].Inst["close"](),
                                        j || Z["BgmListMgr"]["PlayMJBgm"](),
                                        m["DoChainAction"]();
                                });
                            } else
                                this["duringReconnect"] = !1, this["timestoped"] ? this["handles_after_timerun"].push(Laya["Handler"]["create"](this, function() {
                                    app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function() {});
                                })) : app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function() {});
                            app.Log.log("finishSyncGame11"),
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function() {}),
                                I.Inst["fetchLinks"](),
                                this["timestoped"] && uiscript["UI_GameStop"].Inst.show();
                        },
                        I["prototype"]["setGameStop"] = function(Z) {
                            if (Z != this["timestoped"])
                                if (this["timestoped"] = Z, this["timestoped"])
                                    this["handles_after_timerun"] = [], uiscript["UI_GameStop"].Inst.show();
                                else {
                                    if (uiscript["UI_GameStop"].Inst["close"](), this["handles_after_timerun"])
                                        for (var r = 0; r < this["handles_after_timerun"]["length"]; r++)
                                            this["handles_after_timerun"][r].run();
                                    this["handles_after_timerun"] = [],
                                        this["hangupCount"] = 0;
                                }
                        },
                        I["prototype"]["CreatePai3D"] = function(Z) {
                            var r = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("mjp")["getChildByName"](Z["touming"] ? "touming" : Z["toString"]())["clone"](),
                                m = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("maque_outline")["clone"](),
                                j = r,
                                V = (new caps["BaseMaterial"](caps["Cartoon"]["filename"]), "scene/Assets/Resource/mjpai/");
                            if (Z["touming"]) {
                                var v = new caps["Material_TouMingPai"](caps["TouMingPai"]["filename"]),
                                    q = "scene/Assets/Resource/mjpai/";
                                ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (q += "en_kr/"),
                                q += I["en_mjp"] ? "toumingpai_0/mjp.png" : "toumingpai/mjp.png",
                                    v["setTexture"](caps["TouMingPai"]["TEXTURE"], Laya["loader"]["getRes"](q)),
                                    j["meshRender"]["sharedMaterial"] = v;
                            } else {
                                var t = new caps["BaseMaterial"](caps["Cartoon"]["filename"]),
                                    x = "scene/Assets/Resource/mjpai/";
                                ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (x += "en_kr/"),
                                x += this["mjp_res_name"] + "/mjp.png",
                                    t["setTexture"](caps["Cartoon"]["TEXTURE"], Laya["loader"]["getRes"](x)),
                                    t["setNumber"](caps["Cartoon"]["SPLIT"], 0.4),
                                    t["setColor"](caps["Cartoon"]["COLOR_LIGHT"], new Laya["Vector3"](1, 1, 1)),
                                    t["setColor"](caps["Cartoon"]["COLOR_UNLIGHT"], new Laya["Vector3"](0.788, 0.788, "0.8235")),
                                    t["setColor"](caps["Cartoon"]["COLOR"], new Laya["Vector3"](1, 1, 1)),
                                    j["meshRender"]["sharedMaterial"] = t;
                            }
                            var E = m;
                            r["addChild"](E),
                                E["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0),
                                E["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1),
                                E["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0);
                            var e = E,
                                o = new caps["Material_Outline"](caps["Outline"]["filename"]);
                            o["renderQueue"] = 2999,
                                o["setColor"](caps["Outline"]["OUTLINE_COLOR"], new Laya["Vector3"](0.165, 0.192, 0.204)),
                                o["setNumber"](caps["Outline"]["OUTLINE_ALPHA"], 0.6),
                                o["setNumber"](caps["Outline"]["OUTLINE"], "0.0012"),
                                e["meshRender"]["sharedMaterial"] = o;
                            var N = new Laya["Sprite3D"]();
                            if (N.name = "effect", N["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0), N["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1), N["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0), r["addChild"](N), Z["touming"]) {
                                var P = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("touming")["clone"]();
                                P.name = "touming",
                                    r["addChild"](P),
                                    P["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0.00001),
                                    P["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1),
                                    P["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0);
                                var R = new caps["Material_TwoSided"](caps["TwoSided"]["filename"]),
                                    T = 0;
                                switch (Z.type) {
                                    case mjcore["E_MJPai"].m:
                                        T = 0;
                                        break;
                                    case mjcore["E_MJPai"].p:
                                        T = 10;
                                        break;
                                    case mjcore["E_MJPai"].s:
                                        T = 20;
                                        break;
                                    default:
                                        T = 29;
                                }
                                Z.dora || (T += Z["index"]);
                                var S = (6 + T % 7 * 104) / 1024,
                                    J = (6 + 144 * Math["floor"](T / 7)) / 1024,
                                    V = "scene/Assets/Resource/mjpai/";
                                ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (V += "en_kr/"),
                                V += I["en_mjp"] ? "toumingpai_0/mjp.png" : "toumingpai/mjp.png",
                                    R["setTexture"](caps["TwoSided"]["TEXTURE"], Laya["loader"]["getRes"](V)),
                                    R["setColor"](caps["TwoSided"]["COLOR"], new Laya["Vector3"](1, 1, 1)),
                                    R["setNumber"](caps["TwoSided"]["OFFSET_X"], S),
                                    R["setNumber"](caps["TwoSided"]["OFFSET_Y"], J),
                                    R["renderQueue"] = 3000,
                                    P["getChildByName"]("twosided")["meshRender"]["sharedMaterial"] = R,
                                    P["getChildByName"]("touying")["getChildByName"]("pai")["meshRender"]["sharedMaterial"] = R,
                                    P["getChildByName"]("touying")["getChildByName"]('bg')["meshRender"]["sharedMaterial"]["renderQueue"] = 2998;
                            }
                            return r;
                        },
                        I["prototype"]["RefreshPlayerIndicator"] = function() {
                            for (var Z = 0; 4 > Z; Z++)
                                this["players"][Z]["trans_ind"]["active"] = Z == this["seat2LocalPosition"](this["index_player"]), this["players"][Z]["RefreshScore"](this["mainrole"]["score"]);
                        },
                        I["prototype"]["setAutoHule"] = function(Z) {
                            this["auto_hule"] = Z,
                                this["_PendingAuto"]();
                        },
                        I["prototype"]["setAutoNoFulu"] = function(Z) {
                            this["auto_nofulu"] = Z,
                                this["_PendingAuto"]();
                        },
                        I["prototype"]["setAutoMoQie"] = function(Z) {
                            this["auto_moqie"] = Z,
                                this["_PendingAuto"]();
                        },
                        I["prototype"]["setAutoLiPai"] = function(Z) {
                            this["auto_liqi"] = Z,
                                Z && this["gameing"] && this["mainrole"] && this["mainrole"]["LiPai"](!1, !1, !0);
                        },
                        I["prototype"]["setScoreDelta"] = function(Z) {
                            for (var r = 1; 4 > r; r++)
                                this["players"][r]["duringShowDetla"] = Z, this["players"][r]["RefreshScore"](this["mainrole"]["score"]);
                        },
                        I["prototype"]["SetChangJuShow"] = function(Z, r, m) {
                            if (this["is_chuanma_mode"]()) {
                                var j = new Laya["Vector4"]("0.1666", 1, 0, 0);
                                'en' == GameMgr["client_language"] && (j = new Laya["Vector4"](1, 0.2, 0, -0.8)),
                                    this["plane_chang"]["meshRender"]["material"]["tilingOffset"] = j;
                                var V = new Laya["Vector4"](0.1, 1, 0.1 * m, 0);
                                this["plane_ju"]["meshRender"]["material"]["tilingOffset"] = V;
                            } else {
                                var j = new Laya["Vector4"](0.166, 1, 0.166 + Z % 4 * 0.166, 0);
                                'en' == GameMgr["client_language"] && (j = new Laya["Vector4"](1, 0.2, 0, 0.2 * (Z % 4 - 3))),
                                    this["plane_chang"]["meshRender"]["material"]["tilingOffset"] = j,
                                    this["plane_chang_reveal"]["meshRender"]["material"]["tilingOffset"] = j;
                                var V = new Laya["Vector4"](0.1, 1, 0.1 * r, 0);
                                this["plane_ju"]["meshRender"]["material"]["tilingOffset"] = V,
                                    this["plane_ju_reveal"]["meshRender"]["material"]["tilingOffset"] = V;
                            }
                        },
                        I["prototype"]["SetLeftPaiShow"] = function(Z) {
                            Z >= 100 ? Z = 99 : 0 > Z && (Z = 0);
                            for (var r = [Z % 10, Math["floor"](Z / 10)], m = 0; m < r["length"]; m++) {
                                var j = new Laya["Vector4"](0.1, 1, 0.1 * r[m], 0);
                                this["num_left_show"][m]["meshRender"]["material"]["tilingOffset"] = j,
                                    this["num_left_show_reveal"][m]["meshRender"]["material"]["tilingOffset"] = j;
                            }
                        },
                        I["prototype"]["RefreshPaiLeft"] = function() {
                            this["SetLeftPaiShow"](this["left_tile_count"]);
                        },
                        I["prototype"]["Reset"] = function() {
                            app.Log.log("DesktopMgr.Reset"),
                                this["operation_showing"] = !1,
                                this["oplist"] = [],
                                Laya["timer"]["clearAll"](Z["ActionAnGangAddGang"]),
                                Laya["timer"]["clearAll"](Z["ActionChiPengGang"]),
                                Laya["timer"]["clearAll"](Z["ActionDealTile"]),
                                Laya["timer"]["clearAll"](Z["ActionDiscardTile"]),
                                Laya["timer"]["clearAll"](Z["ActionHule"]),
                                Laya["timer"]["clearAll"](Z["ActionHuleXueZhanEnd"]),
                                Laya["timer"]["clearAll"](Z["ActionHuleXueZhanMid"]),
                                Laya["timer"]["clearAll"](Z["ActionLiqi"]),
                                Laya["timer"]["clearAll"](Z["ActionLiuJu"]),
                                Laya["timer"]["clearAll"](Z["ActionNewRound"]),
                                Laya["timer"]["clearAll"](Z["ActionNoTile"]),
                                Laya["timer"]["clearAll"](Z["ActionOperation"]),
                                Laya["timer"]["clearAll"](Z["ActionChangeTile"]),
                                Laya["timer"]["clearAll"](Z["ActionSelectGap"]),
                                Laya["timer"]["clearAll"](Z["ActionGangResult"]),
                                Laya["timer"]["clearAll"](Z["ActionGangResultEnd"]),
                                Laya["timer"]["clearAll"](Z["ActionRevealTile"]),
                                Laya["timer"]["clearAll"](Z["ActionUnveilTile"]),
                                Laya["timer"]["clearAll"](Z["ActionLockTile"]),
                                Laya["timer"]["clearAll"](Z["ActionNewCard"]),
                                Laya["timer"]["clearAll"](this),
                                uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                                uiscript["UI_Replay"].Inst["reset"](),
                                this["effect_pai_canchi"] && (this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                            for (var r = 0; 4 > r; r++)
                                this["players"][r]["Reset"]();
                            this["tingpais"] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                this.md5 = '',
                                this["current_step"] = -1,
                                this["muyu_info"] = null,
                                this["muyu_effect"] && (this["muyu_effect"].root["active"] = !1, Laya["timer"]["clearAll"](this["muyu_effect"])),
                                this["mind_voice_seat"] = -1,
                                this["mind_voice_type"] = '',
                                this["during_playing_mind_voice"] = !1;
                        },
                        I["prototype"]["setScores"] = function(r) {
                            for (var m = 0; m < r["length"]; m++)
                                this["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["SetScore"](r[m], r[this.seat]);
                        },
                        I["prototype"]["_PendingAuto"] = function() {
                            if (null == this["oplist"] || 0 == this["oplist"]["length"])
                                return !1;
                            try {
                                var r = !1,
                                    m = !1,
                                    j = !1,
                                    V = !1,
                                    I = !1,
                                    v = !1,
                                    q = !1,
                                    t = this["operation_showing"];
                                this["operation_showing"] = !0;
                                var x = null,
                                    E = 0;
                                this["liqi_select"] = [];
                                for (var e = !0, o = 0; o < this["oplist"]["length"]; o++) {
                                    var N = this["oplist"][o],
                                        P = N.type;
                                    switch (P) {
                                        case mjcore["E_PlayOperation"].eat:
                                        case mjcore["E_PlayOperation"].peng:
                                        case mjcore["E_PlayOperation"]["ming_gang"]:
                                        case mjcore["E_PlayOperation"].rong:
                                        case mjcore["E_PlayOperation"]["unveil"]:
                                            r = !0;
                                            break;
                                        case mjcore["E_PlayOperation"]["an_gang"]:
                                        case mjcore["E_PlayOperation"]["add_gang"]:
                                        case mjcore["E_PlayOperation"].liqi:
                                        case mjcore["E_PlayOperation"].zimo:
                                        case mjcore["E_PlayOperation"]["babei"]:
                                        case mjcore["E_PlayOperation"]["revealliqi"]:
                                        case mjcore["E_PlayOperation"]["reveal"]:
                                        case mjcore["E_PlayOperation"]["locktile"]:
                                            m = !0;
                                        case mjcore["E_PlayOperation"]["jiuzhongjiupai"]:
                                            m = !0;
                                            break;
                                        case mjcore["E_PlayOperation"]["huansanzhang"]:
                                            j = !0;
                                            break;
                                        case mjcore["E_PlayOperation"]["dingque"]:
                                            V = !0,
                                                E = N["gap_type"];
                                    }
                                    if (P == mjcore["E_PlayOperation"]["dapai"])
                                        q = !0, x = this["oplist"][o]["combination"];
                                    else if (P == mjcore["E_PlayOperation"].liqi) {
                                        q = !0,
                                            this["liqi_select"] = [];
                                        for (var R = 0; R < this["oplist"][o]["combination"]["length"]; R++)
                                            this["liqi_select"].push(mjcore["MJPai"]["Create"](this["oplist"][o]["combination"][R]));
                                    } else
                                        P == mjcore["E_PlayOperation"].rong ? I = !0 : P == mjcore["E_PlayOperation"].zimo ? v = !0 : P == mjcore["E_PlayOperation"]["huansanzhang"] && Z["DesktopMgr"].Inst["mainrole"]["setHuanSanZhangDefaultTile"](N["change_tiles"], N["change_tile_states"]);
                                    P != mjcore["E_PlayOperation"]["dapai"] && P != mjcore["E_PlayOperation"]["reveal"] && (e = !1);
                                }
                                var T = this["auto_hule"],
                                    S = this["auto_nofulu"],
                                    J = this["auto_moqie"];
                                if (this["anpai"] && e && J) {
                                    if (this["mainrole"]["trans_liqi"]["active"])
                                        return app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                            cancel_operation: !0
                                        }, function() {}), void 0;
                                    if (null != this["mainrole"]["last_tile"])
                                        return this["Action_QiPai"](this["mainrole"]["last_tile"].val, !0, !0, this["mainrole"]["last_tile"]["is_open"]), !1;
                                }
                                if (T && (I || v))
                                    return Laya["timer"].once(800, this, function() {
                                        I ? app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                            type: mjcore["E_PlayOperation"].rong,
                                            index: 0
                                        }, function() {}) : v && app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                            type: mjcore["E_PlayOperation"].zimo,
                                            index: 0
                                        }, function() {});
                                    }), this["ClearOperationShow"](), !1;
                                if (V)
                                    uiscript["UI_Dingque"].Inst.show(E);
                                else if (j)
                                    uiscript["UI_HuanSanZhange"].Inst.show();
                                else if (r) {
                                    if (S && !I && !v)
                                        return app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                            cancel_operation: !0
                                        }, function() {}), this["ClearOperationShow"](), !1;
                                    t || uiscript["UIMgr"].Inst["ShowChipenghu"](this["oplist"]);
                                } else if (m && (t || uiscript["UIMgr"].Inst["ShowLiqiZimo"](this["oplist"])), q) {
                                    if (J && !uiscript["UI_LiQiZiMo"].Inst["enable"] && null != this["mainrole"]["last_tile"])
                                        return this["Action_QiPai"](this["mainrole"]["last_tile"].val, !0, !0, this["mainrole"]["last_tile"]["is_open"]), !1;
                                    if (!t && (this["mainrole"]["can_discard"] = !0, x && x["length"] > 0)) {
                                        for (var X = [], o = 0; o < x["length"]; o++)
                                            X.push(mjcore["MJPai"]["Create"](x[o]));
                                        this["mainrole"]["ChiTiSelect"](X);
                                    }
                                } else
                                    this["mainrole"]["can_discard"] = !1;
                            } catch (b) {
                                var M = {};
                                M["error"] = b["message"],
                                    M["stack"] = b["stack"],
                                    M["method"] = "_PendingAuto",
                                    M.name = "DesktopMgr",
                                    GameMgr.Inst["onFatalError"](M);
                            }
                            return !0;
                        },
                        I["prototype"]["OperationTimeOut"] = function() {
                            if (null != this["oplist"] && 0 != this["oplist"]["length"]) {
                                {
                                    var Z = !1,
                                        r = !1,
                                        m = !1,
                                        j = !1,
                                        V = !1;
                                    this["operation_showing"];
                                }
                                this["operation_showing"] = !0;
                                for (var I = null, v = 0; v < this["oplist"]["length"]; v++) {
                                    switch (this["oplist"][v].type) {
                                        case mjcore["E_PlayOperation"].eat:
                                        case mjcore["E_PlayOperation"].peng:
                                        case mjcore["E_PlayOperation"]["ming_gang"]:
                                        case mjcore["E_PlayOperation"].rong:
                                            Z = !0;
                                            break;
                                        case mjcore["E_PlayOperation"]["an_gang"]:
                                        case mjcore["E_PlayOperation"]["add_gang"]:
                                        case mjcore["E_PlayOperation"].liqi:
                                        case mjcore["E_PlayOperation"].zimo:
                                        case mjcore["E_PlayOperation"]["babei"]:
                                            r = !0;
                                    }
                                    (this["oplist"][v].type == mjcore["E_PlayOperation"]["dapai"] || this["oplist"][v].type == mjcore["E_PlayOperation"].liqi) && (V = !0, this["oplist"][v].type == mjcore["E_PlayOperation"]["dapai"] && (I = this["oplist"][v]["combination"])),
                                    this["oplist"][v].type == mjcore["E_PlayOperation"].rong && (m = !0),
                                        this["oplist"][v].type == mjcore["E_PlayOperation"].zimo && (j = !0);
                                }
                                if (Z)
                                    m ? app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        type: mjcore["E_PlayOperation"].rong,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {}) : app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this["ClearOperationShow"]();
                                else if (j)
                                    app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                        type: mjcore["E_PlayOperation"].zimo,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {});
                                else if (V)
                                    if (this["mainrole"]["during_liqi"]) {
                                        for (var q = -1, v = 0; v < this["mainrole"].hand["length"]; v++)
                                            if (this["mainrole"].hand[v]["valid"]) {
                                                q = v;
                                                break;
                                            }
                                        this["Action_LiQi"](this["mainrole"].hand[q].val, this["mainrole"].hand[q] === this["mainrole"]["last_tile"], this["mainrole"].hand[q]["is_open"]);
                                    } else {
                                        var t = null,
                                            x = !1,
                                            E = !1;
                                        if (null == t && this["mainrole"]["last_tile"] && this["mainrole"]["last_tile"]["valid"] && (t = this["mainrole"]["last_tile"].val, x = !0, E = this["mainrole"]["last_tile"]["is_open"]), null == t)
                                            for (var v = this["mainrole"].hand["length"] - 1; v >= 0; v--)
                                                if (this["mainrole"].hand[v]["valid"]) {
                                                    t = this["mainrole"].hand[v].val,
                                                        x = !1,
                                                        E = this["mainrole"].hand[v]["is_open"];
                                                    break;
                                                }
                                        this["Action_QiPai"](t, x, !0, E);
                                    }
                                else
                                    r && (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this["ClearOperationShow"]());
                            }
                        },
                        I["prototype"]["WhenDoOperation"] = function() {
                            this["hangupCount"] = 0,
                                this["ClearOperationShow"]();
                        },
                        I["prototype"]["ClearOperationShow"] = function() {
                            this["operation_showing"] = !1,
                                this["oplist"] = [],
                                uiscript["UI_Huleshow"].Inst["enable"] = !1,
                                uiscript["UIMgr"].Inst["CloseLiuJu"](),
                                uiscript["UIMgr"].Inst["CloseWin"](),
                                uiscript["UIMgr"].Inst["CloseChipenghu"](),
                                uiscript["UIMgr"].Inst["CloseLiqiZimo"](),
                                uiscript["UI_Hu_Xuezhan"].Inst["enable"] = !1,
                                Laya["timer"]["clearAll"](Z["ActionOperation"]),
                                uiscript["UI_ScoreChange"].Inst["enable"] = !1,
                                this["mainrole"]["can_discard"] = !1,
                                uiscript["UI_DesktopInfo"].Inst["closeCountDown"]();
                        },
                        I["prototype"]["WhenLiqiInfo"] = function(Z) {
                            var r = this;
                            Z && Laya["timer"].once(300, this, function() {
                                var m = Z.seat,
                                    j = Z["score"];
                                r["players"][r["seat2LocalPosition"](m)]["ShowLiqi"](),
                                    r["players"][r["seat2LocalPosition"](m)]["SetScore"](j, r["mainrole"]["score"]),
                                    uiscript["UI_DesktopInfo"].Inst["setLiqibang"](Z["liqibang"]);
                            });
                        },
                        I["prototype"]["WhenDoras"] = function(r, m) {
                            var j = this;
                            if (!(null == r || void 0 == r || 0 == r["length"] || r["length"] <= this.dora["length"]) && r) {
                                for (var V = 0; V < r["length"]; V++)
                                    this.dora["length"] > V ? this.dora[V] = mjcore["MJPai"]["Create"](r[V]) : this.dora.push(mjcore["MJPai"]["Create"](r[V])), uiscript["UI_DesktopInfo"].Inst["setDora"](V, this.dora[V]);
                                Laya["timer"]["frameOnce"](1, this, function() {
                                        for (var Z = 0; 4 > Z; Z++)
                                            j["players"][Z]["OnDoraRefresh"]();
                                    }),
                                    m || Z["AudioMgr"]["PlayAudio"](215);
                            }
                        },
                        I["prototype"]["Action_QiPai"] = function(Z, r, m, j) {
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                    type: mjcore["E_PlayOperation"]["dapai"],
                                    tile: Z["toString"](),
                                    moqie: r,
                                    timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                                    tile_state: j ? 1 : 0
                                }, function(Z) {
                                    Z ? app.Log["Error"]("Action_QiPai 失败") : app.Log.info("Action_QiPai 成功");
                                }),
                                m ? this["ClearOperationShow"]() : this["WhenDoOperation"]();
                        },
                        I["prototype"]["Action_AnPai"] = function(Z, r, m, j) {
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                    type: mjcore["E_PlayOperation"]["reveal"],
                                    tile: Z["toString"](),
                                    moqie: r,
                                    timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                                    tile_state: j ? 1 : 0
                                }, function(Z) {
                                    Z ? app.Log["Error"]("Action_AnPai 失败") : app.Log.info("Action_AnPai 成功");
                                }),
                                m ? this["ClearOperationShow"]() : this["WhenDoOperation"]();
                        },
                        I["prototype"]["Action_LiQi"] = function(Z, r, m) {
                            if (!this["liqi_select"] || 0 == this["liqi_select"]["length"])
                                return !1;
                            for (var j = !1, V = 0; V < this["liqi_select"]["length"]; V++)
                                if (0 == mjcore["MJPai"]["Distance"](this["liqi_select"][V], Z)) {
                                    j = !0;
                                    break;
                                }
                            return j ? (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                type: mjcore["E_PlayOperation"].liqi,
                                tile: Z["toString"](),
                                moqie: r,
                                timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                                tile_state: m ? 1 : 0
                            }, function(Z) {
                                Z ? app.Log["Error"]("Action_LiQi 失败") : app.Log.info("Action_LiQi 成功");
                            }), this["WhenDoOperation"](), !0) : !1;
                        },
                        I["prototype"]["Action_AnPaiLiQi"] = function(Z, r, m) {
                            if (!this["liqi_select"] || 0 == this["liqi_select"]["length"])
                                return !1;
                            for (var j = !1, V = 0; V < this["liqi_select"]["length"]; V++)
                                if (0 == mjcore["MJPai"]["Distance"](this["liqi_select"][V], Z)) {
                                    j = !0;
                                    break;
                                }
                            return j ? (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                type: mjcore["E_PlayOperation"]["revealliqi"],
                                tile: Z["toString"](),
                                moqie: r,
                                timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                                tile_state: m ? 1 : 0
                            }, function(Z) {
                                Z ? app.Log["Error"]("Action_LiQi 失败") : app.Log.info("Action_LiQi 成功");
                            }), this["WhenDoOperation"](), !0) : !1;
                        },
                        I["prototype"]["Action_HuanSanZhange"] = function(Z, r) {
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                    type: mjcore["E_PlayOperation"]["huansanzhang"],
                                    timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                                    tile_states: r,
                                    change_tiles: Z
                                }, function(Z) {
                                    Z ? app.Log["Error"]("Action_HuanSanZhange 失败") : app.Log.info("Action_HuanSanZhange 成功");
                                }),
                                this["WhenDoOperation"]();
                        },
                        I["prototype"]["SetLastQiPai"] = function(Z, r) {
                            this["lastqipai"] = r,
                                this["lastpai_seat"] = Z,
                                this["effect_pai_canchi"] && (this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                        },
                        I["prototype"]["ShowHuleEffect"] = function(r, m, j, V, I) {
                            var v = this;
                            if (void 0 === I && (I = 0), null != r) {
                                m.y = 0;
                                var q = "scene/effect_hupai_default.lh",
                                    t = 213;
                                if (j) {
                                    var x = cfg["item_definition"].view.get(j);
                                    x && (q = "scene/" + x["res_name"] + ".lh", t = x["audio_id"]);
                                }
                                var E = new game["EffectBase"](q);
                                if (this["trans_container_effect"]["addChild"](E.root), E.root["transform"]["position"] = m, E.root["active"] = !0, "scene/ron_hl.lh" == q) {
                                    var e = this["seat2LocalPosition"](V);
                                    E.root["transform"]["localRotationEuler"] = 0 == e ? new Laya["Vector3"](0, 0, 0) : 1 == e ? new Laya["Vector3"](0, 90, 0) : 2 == e ? new Laya["Vector3"](0, 180, 0) : new Laya["Vector3"](0, 270, 0);
                                } else if ("scene/effect_hupai_yanhua.lh" == q)
                                    Laya["timer"].once(600, this, function() {
                                        var Z = new game["EffectBase"]("scene/effect_hupai_yanhua_bang.lh");
                                        v["desktop3D"]["addChild"](Z.root),
                                            Z.root["transform"]["position"] = new Laya["Vector3"](0, 0, 0),
                                            Z.root["active"] = !0,
                                            Laya["timer"].once(2000, v, function() {
                                                Z["destroy"]();
                                            });
                                    });
                                else if ("scene/ron_22chunjie.lh" == q) {
                                    var o = new game["EffectBase"]("scene/ron_22chunjie_hongdi.lh");
                                    this["desktop3D"]["addChild"](o.root),
                                        o["addLoadedListener"](Laya["Handler"]["create"](this, function() {
                                            for (var Z = game["Tools"]["GetNodeByNameInChildren"](o.root, "hongdi"), r = 0, m = Z["_childs"]; r < m["length"]; r++) {
                                                var j = m[r];
                                                j["particleRender"]["material"]["renderQueue"] = 3001;
                                            }
                                        })),
                                        o.root["transform"]["position"] = new Laya["Vector3"](0, 0, 0),
                                        o.root["active"] = !0,
                                        Laya["timer"].once(3000, this, function() {
                                            o["destroy"]();
                                        });
                                }
                                var N = !1,
                                    P = r["model"]["parent"],
                                    R = r["model"]["transform"]["rotation"]["clone"](),
                                    T = r["model"]["transform"]["worldMatrix"]["clone"]();
                                E["addLoadedListener"](Laya["Handler"]["create"](this, function() {
                                    if (!N) {
                                        Z["AudioMgr"]["PlayAudio"](t);
                                        var m = game["Tools"]["GetNodeByNameInChildren"](E.root, "pai");
                                        m && 1 == I && (m["destroyChildren"](), m["addChild"](r["model"]), r["model"]["transform"]["rotation"] = R["clone"](), r["model"]["transform"]["worldMatrix"] = T["clone"](), Laya["timer"].once(1800, v, function() {
                                            N || (P["addChild"](r["model"]), r["model"]["transform"]["rotation"] = R["clone"](), r["model"]["transform"]["worldMatrix"] = T["clone"]());
                                        }));
                                        var j = game["Tools"]["GetNodeByNameInChildren"](E.root, "pai_anim");
                                        !j || 1 != I && 0 != I || (j["destroyChildren"](), j["addChild"](r["model"]), r["model"]["transform"]["rotation"] = R["clone"](), r["model"]["transform"]["worldMatrix"] = T["clone"](), Laya["timer"].once(1800, v, function() {
                                                N || (P["addChild"](r["model"]), r["model"]["transform"]["rotation"] = R["clone"](), r["model"]["transform"]["worldMatrix"] = T["clone"]());
                                            })),
                                            v["setSpecialHuleEffect"](q, E, r);
                                    }
                                }));
                                var S = 2000;
                                "scene/ron_xiyuansi.lh" == q || "scene/ron_beiyuan.lh" == q ? S = 4600 : "scene/ron_22chunjie.lh" == q && (S = 3000),
                                    Laya["timer"].once(S, this, function() {
                                        N = !0,
                                            r && r["model"] && r["model"]["transform"] && ("scene/ron_xiyuansi.lh" == q && (r["model"]["getChildAt"](0)["getChildAt"](0) ? (r["model"]["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 2000, r["model"]["getChildAt"](0)["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3001) : r["model"]["meshRender"] && (r["model"]["meshRender"]["sharedMaterial"]["renderQueue"] = 2000, r["model"]["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3001)), P["addChild"](r["model"]), r["model"]["transform"]["rotation"] = R["clone"](), r["model"]["transform"]["worldMatrix"] = T["clone"]()),
                                            E["destroy"]();
                                    });
                            }
                        },
                        I["prototype"]["setSpecialHuleEffect"] = function(Z, r, m) {
                            if ("scene/ron_akagi.lh" == Z) {
                                var j = game["Tools"]["GetNodeByNameInChildren"](r.root, "heidi");
                                j["transform"]["position"] = new Laya["Vector3"](0, 0.101, 0.718);
                            }
                            if ("scene/ron_22summer.lh" == Z) {
                                var V = game["Tools"]["GetNodeByNameInChildren"](r.root, "ya02");
                                V["meshRender"]["material"]["depthWrite"] = !0,
                                    V["meshRender"]["material"]["depthTest"] = 0,
                                    V["meshRender"]["material"]["renderQueue"] = 3005,
                                    V["meshRender"]["material"]["disableLight"]();
                            }
                            if ("scene/ron_beiyuan.lh" == Z) {
                                var I = game["Tools"]["GetNodeByNameInChildren"](r.root, "global");
                                I["transform"]["rotation"] = new Laya["Quaternion"](0, 0, 0, 1),
                                    I["transform"]["position"] = new Laya["Vector3"](0, 0, 0);
                                var v = game["Tools"]["GetNodeByNameInChildren"](r.root, "plane1X1");
                                v["meshRender"]["material"]["disableLight"](),
                                    v["meshRender"]["material"]["renderQueue"] = 3002;
                                var q = game["Tools"]["GetNodeByNameInChildren"](r.root, "shiziguang02");
                                q["particleRender"]["material"]["depthTest"] = 0,
                                    q["particleRender"]["material"]["renderQueue"] = 3003;
                                for (var t = 0; t < q["_childs"]["length"]; t++)
                                    q["getChildAt"](t)["particleRender"]["material"]["depthTest"] = 0, q["getChildAt"](t)["particleRender"]["material"]["renderQueue"] = 3003;
                                var x = game["Tools"]["GetNodeByNameInChildren"](r.root, "suipian");
                                x["particleRender"]["material"]["depthTest"] = 0,
                                    x["particleRender"]["material"]["renderQueue"] = 3003,
                                    x = game["Tools"]["GetNodeByNameInChildren"](r.root, "xuehua01"),
                                    x["particleRender"]["material"]["depthTest"] = 0,
                                    x["particleRender"]["material"]["renderQueue"] = 3003,
                                    x = game["Tools"]["GetNodeByNameInChildren"](r.root, "xuehua02"),
                                    x["particleRender"]["material"]["depthTest"] = 0,
                                    x["particleRender"]["material"]["renderQueue"] = 3003,
                                    x = game["Tools"]["GetNodeByNameInChildren"](r.root, "suipian01"),
                                    x["particleRender"]["material"]["depthTest"] = 0,
                                    x["particleRender"]["material"]["renderQueue"] = 3003;
                            }
                            if ("scene/ron_xiyuansi.lh" == Z) {
                                Laya["timer"].once(1800, this, function() {
                                    m["model"]["getChildAt"](0)["getChildAt"](0) ? (m["model"]["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3003, m["model"]["getChildAt"](0)["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3004) : m["model"]["meshRender"] && (m["model"]["meshRender"]["sharedMaterial"]["renderQueue"] = 3003, m["model"]["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3004);
                                });
                                var v = game["Tools"]["GetNodeByNameInChildren"](r.root, "plane1X1");
                                v["meshRender"]["material"]["disableLight"](),
                                    v["meshRender"]["material"]["renderQueue"] = 3002;
                                var E = game["LoadMgr"]["getResImage"]("extendRes/charactor/xiyuansiyiyu_0/full.png");
                                E && E["active"](),
                                    v["meshRender"]["material"]["diffuseTexture"] = Laya["Texture2D"].load(game["LoadMgr"]["getResImageSkin"]("extendRes/charactor/xiyuansiyiyu_0/full.png"));
                                for (var e = game["Tools"]["GetNodeByNameInChildren"](r.root, "lizi"), t = 0; t < e["numChildren"]; t++)
                                    e["getChildAt"](t)["particleRender"]["material"]["renderQueue"] = 3002, e["getChildAt"](t)["particleRender"]["material"]["depthTest"] = 0;
                                var I = game["Tools"]["GetNodeByNameInChildren"](r.root, "global");
                                I["transform"]["rotation"] = new Laya["Quaternion"](0, 0, 0, 1),
                                    I["transform"]["position"] = new Laya["Vector3"](0, 0, 0);
                                for (var t = 0; 3 > t; t++)
                                    I["getChildByName"]("heidi01")["getChildAt"](t)["particleRender"]["material"]["renderQueue"] = 3002;
                                for (var t = 0; 3 > t; t++)
                                    I["getChildByName"]("daoguang")["getChildByName"]("lizi")["getChildAt"](t)["particleRender"]["material"]["renderQueue"] = 3002;
                                I["getChildByName"]("baodian")["getChildByName"]("shiziguang02")["particleRender"]["material"]["renderQueue"] = 3002;
                                for (var t = 0; 4 > t; t++)
                                    I["getChildByName"]("baodian")["getChildByName"]("shiziguang02")["getChildAt"](t)["particleRender"]["material"]["renderQueue"] = 3002;
                                for (var t = 4; 8 > t; t++) {
                                    var o = I["getChildByName"]("quxian_amin01")["getChildAt"](t)["meshRender"]["material"];
                                    o["renderQueue"] = 3002,
                                        o["disableLight"]();
                                }
                            }
                        },
                        I["prototype"]["ShowChiPengEffect"] = function() {
                            var r = this;
                            if (this["lastqipai"]["model"] && this["lastqipai"]["model"]["transform"]) {
                                this["effect_pai_canchi"] || (this["effect_pai_canchi"] = new game["EffectBase"]("scene/" + game["GameUtility"]["get_view_res_name"](game["EView"]["mingpai_zhishi"]) + ".lh"), this["trans_container_effect"]["addChild"](this["effect_pai_canchi"].root), this["effect_pai_canchi"].root["active"] = !0),
                                    this["effect_pai_canchi"].root["transform"]["worldMatrix"] = this["lastqipai"]["model"]["transform"]["worldMatrix"]["clone"]();
                                var m = this["effect_pai_canchi"],
                                    j = this["lastqipai"];
                                if (this["lastqipai"]["revealState"] == Z["ERevealState"]["reveal"]) {
                                    var V = this["effect_pai_canchi"].root["transform"]["localPosition"]["clone"]();
                                    V.y -= Z["PAIMODEL_THICKNESS"],
                                        this["effect_pai_canchi"].root["transform"]["localPosition"] = V;
                                }
                                Laya["timer"]["frameLoop"](1, this["effect_pai_canchi"], function() {
                                    if (j["model"]["activeInHierarchy"] && j["model"]["active"] && j["model"]["parent"]["active"]) {
                                        if (m.root["transform"]["worldMatrix"] = j["model"]["transform"]["worldMatrix"]["clone"](), j["revealState"] == Z["ERevealState"]["reveal"]) {
                                            var V = m.root["transform"]["localPosition"]["clone"]();
                                            V.y -= Z["PAIMODEL_THICKNESS"],
                                                m.root["transform"]["localPosition"] = V;
                                        }
                                        r["effect_pai_canchi"].root["active"] = !0;
                                    } else
                                        r["effect_pai_canchi"].root["active"] = !1;
                                });
                            }
                        },
                        I["prototype"]["CloseChiPngEffect"] = function() {
                            this["effect_pai_canchi"] && (Laya["timer"]["clearAll"](this["effect_pai_canchi"]), this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                        },
                        I["prototype"]["setChoosedPai"] = function(Z) {
                            var r = !1;
                            if (r || !Z || this["choosed_pai"] || (r = !0), r || Z || !this["choosed_pai"] || (r = !0), !r && Z && this["choosed_pai"] && 0 != mjcore["MJPai"]["Distance"](this["choosed_pai"], Z) && (r = !0), r && (this["choosed_pai"] = Z ? Z["Clone"]() : null, I["bianjietishi"])) {
                                for (var m = 0; 4 > m; m++)
                                    this["players"][m]["OnChoosePai"]();
                                uiscript["UI_TingPai"].Inst["onChooseTile"](Z);
                            }
                        },
                        I["prototype"]["setTingpai"] = function(r, m) {
                            for (var j = !1, V = [], I = 0; I < m["length"]; I++)
                                V.push(mjcore["MJPai"]["Create"](m[I].tile));
                            this["tingpais"][r]["length"] != V["length"] && (j = !0);
                            for (var I = 0; I < V["length"] && !j; I++)
                                0 != mjcore["MJPai"]["Distance"](V[I], this["tingpais"][r][I]) && (j = !0);
                            if (j) {
                                this["tingpais"][r] = V;
                                for (var I = 0; I < Z["DesktopMgr"].Inst["players"]["length"]; I++) {
                                    var v = this["localPosition2Seat"](I);
                                    if (!(0 > v)) {
                                        for (var q = 0; q < Z["DesktopMgr"].Inst["players"][I]["container_qipai"].pais["length"]; q++) {
                                            var t = Z["DesktopMgr"].Inst["players"][I]["container_qipai"].pais[q];
                                            t["ispaopai"] = this["isPaoPai"](t.val),
                                                t["OnChoosedPai"]();
                                        }
                                        for (var q = 0; q < Z["DesktopMgr"].Inst["players"][I]["container_ming"].pais["length"]; q++) {
                                            var t = Z["DesktopMgr"].Inst["players"][I]["container_ming"].pais[q];
                                            t["ispaopai"] = this["isPaoPai"](t.val),
                                                t["OnChoosedPai"]();
                                        }
                                        for (var q = 0; q < Z["DesktopMgr"].Inst["players"][I]["container_babei"].pais["length"]; q++) {
                                            var t = Z["DesktopMgr"].Inst["players"][I]["container_babei"].pais[q];
                                            t["ispaopai"] = this["isPaoPai"](t.val),
                                                t["OnChoosedPai"]();
                                        }
                                        var t = Z["DesktopMgr"].Inst["players"][I]["container_qipai"]["last_pai"];
                                        if (t && (t["ispaopai"] = this["isPaoPai"](t.val), t["OnChoosedPai"]()), 0 == I)
                                            for (var x = Z["DesktopMgr"].Inst["players"][I], q = 0; q < x.hand["length"]; q++) {
                                                var t = x.hand[q];
                                                t["ispaopai"] = this["isPaoPai"](t.val),
                                                    t["OnChoosedPai"]();
                                            }
                                        else
                                            for (var x = Z["DesktopMgr"].Inst["players"][I], q = 0; q < x.hand["length"]; q++) {
                                                var t = x.hand[q]["pai3D"];
                                                t["ispaopai"] = this["record_show_hand"] || t["is_open"] ? this["isPaoPai"](t.val) : !1,
                                                    t["OnChoosedPai"]();
                                            }
                                    }
                                }
                            }
                        },
                        I["prototype"]["isPaoPai"] = function(Z) {
                            if (!this["record_show_paopai"])
                                return !1;
                            for (var r = 0; r < this["tingpais"]["length"]; r++)
                                for (var m = 0; m < this["tingpais"][r]["length"]; m++)
                                    if (0 == mjcore["MJPai"]["Distance"](this["tingpais"][r][m], Z))
                                        return !0;
                            return !1;
                        },
                        I["prototype"]["getPaiLeft"] = function(r) {
                            for (var m = 0, j = 0; 4 > j; j++) {
                                for (var V = this["players"][j], I = 0; I < V["container_babei"].pais["length"]; I++)
                                    0 == mjcore["MJPai"]["Distance"](V["container_babei"].pais[I].val, r) && m++;
                                for (var I = 0; I < V["container_ming"].pais["length"]; I++)
                                    0 == mjcore["MJPai"]["Distance"](V["container_ming"].pais[I].val, r) && m++;
                                for (var I = 0; I < V["container_qipai"].pais["length"]; I++)
                                    V["container_qipai"].pais[I]["revealState"] != Z["ERevealState"]["reveal"] && 0 == mjcore["MJPai"]["Distance"](V["container_qipai"].pais[I].val, r) && m++;
                                V["container_qipai"]["last_pai"] && V["container_qipai"]["last_pai"]["revealState"] != Z["ERevealState"]["reveal"] && 0 == mjcore["MJPai"]["Distance"](V["container_qipai"]["last_pai"].val, r) && m++,
                                    V["pai_xuezhan_mid_zimo"] && 0 == mjcore["MJPai"]["Distance"](V["pai_xuezhan_mid_zimo"], r) && m++;
                            }
                            for (var j = 0; j < this["mainrole"].hand["length"]; j++)
                                0 == mjcore["MJPai"]["Distance"](this["mainrole"].hand[j].val, r) && m++;
                            for (var j = 0; j < this.dora["length"]; j++)
                                this.dora[j] && 0 == mjcore["MJPai"]["Distance"](this.dora[j], r) && m++;
                            var v = 4 - m;
                            return 0 > v ? 0 : v > 4 ? 4 : v;
                        },
                        I["prototype"]["get_gang_count"] = function() {
                            for (var Z = 0, r = 0; r < this["players"]["length"]; r++) {
                                var m = this["localPosition2Seat"](r);
                                if (m >= 0)
                                    for (var j = this["players"][r]["container_ming"]["mings"], V = 0; V < j["length"]; V++)
                                        (j[V].type == mjcore["E_Ming"]["gang_an"] || j[V].type == mjcore["E_Ming"]["gang_ming"]) && Z++;
                            }
                            return Z;
                        },
                        I["prototype"]["get_babei_count"] = function() {
                            for (var Z = 0, r = 0; r < this["players"]["length"]; r++) {
                                var m = this["localPosition2Seat"](r);
                                m >= 0 && (Z += this["players"][r]["container_babei"].pais["length"]);
                            }
                            return Z;
                        },
                        I["prototype"]["fetchLinks"] = function() {
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "fetchGamePlayerState", {}, function(Z, r) {
                                if (Z || r["error"])
                                    uiscript["UIMgr"].Inst["showNetReqError"]("fetchGamePlayerState", Z, r);
                                else {
                                    app.Log.log(JSON["stringify"](r)),
                                        I["player_link_state"] = [];
                                    for (var m = 0; m < r["state_list"]["length"]; m++)
                                        I["player_link_state"].push(r["state_list"][m]);
                                    uiscript["UI_DesktopInfo"].Inst["refreshLinks"]();
                                }
                            });
                        },
                        I["prototype"]["onShowHandChange"] = function(Z) {
                            if (this["record_show_hand"] = Z, Laya["LocalStorage"]["setItem"]("record_show_hand", Z ? '1' : '0'), this["gameing"])
                                for (var r = 1; 4 > r; r++)
                                    this["players"][r]["onShowHandChange"](Z);
                        },
                        I["prototype"]["onShowPaopaiChange"] = function(r) {
                            if (this["record_show_paopai"] = r, Laya["LocalStorage"]["setItem"]("record_show_paopai", r ? '1' : '0'), this["gameing"]) {
                                this["mainrole"]["onShowPaopaiChange"]();
                                for (var m = 1; 4 > m; m++)
                                    this["players"][m]["onShowPaopaiChange"]();
                                for (var m = 0; m < Z["DesktopMgr"].Inst["players"]["length"]; m++) {
                                    var j = this["localPosition2Seat"](m);
                                    if (!(0 > j)) {
                                        for (var V = 0; V < Z["DesktopMgr"].Inst["players"][m]["container_qipai"].pais["length"]; V++) {
                                            var I = Z["DesktopMgr"].Inst["players"][m]["container_qipai"].pais[V];
                                            I["ispaopai"] = this["isPaoPai"](I.val),
                                                I["OnChoosedPai"]();
                                        }
                                        for (var V = 0; V < Z["DesktopMgr"].Inst["players"][m]["container_ming"].pais["length"]; V++) {
                                            var I = Z["DesktopMgr"].Inst["players"][m]["container_ming"].pais[V];
                                            I["ispaopai"] = this["isPaoPai"](I.val),
                                                I["OnChoosedPai"]();
                                        }
                                        for (var V = 0; V < Z["DesktopMgr"].Inst["players"][m]["container_babei"].pais["length"]; V++) {
                                            var I = Z["DesktopMgr"].Inst["players"][m]["container_babei"].pais[V];
                                            I["ispaopai"] = this["isPaoPai"](I.val),
                                                I["OnChoosedPai"]();
                                        }
                                        var I = Z["DesktopMgr"].Inst["players"][m]["container_qipai"]["last_pai"];
                                        I && (I["ispaopai"] = this["isPaoPai"](I.val), I["OnChoosedPai"]());
                                    }
                                }
                            }
                        },
                        I["prototype"]["onRoundEnd"] = function(r, m) {
                            var j = Z["DesktopMgr"].Inst["seat2LocalPosition"](r);
                            this["players"][j]["OnRoundEnd"](m);
                        },
                        I["prototype"]["onMuyuChange"] = function(r, m) {
                            var j = this;
                            if (void 0 === m && (m = !0), this["is_muyu_mode"]()) {
                                var V = !1;
                                if (this["muyu_info"] && this["muyu_info"].id == r.id || (V = !0), this["muyu_effect"] && !this["muyu_effect"]["destroyed"])
                                    if (m) {
                                        if (V) {
                                            var I,
                                                v;
                                            if (this["muyu_info"] ? (I = this["muyu_effect"]["clone"](), this["muyu_effect"].root["parent"]["addChild"](I.root), v = this["muyu_effect"], this["muyu_effect"] = I) : I = this["muyu_effect"], this["muyu_info"]) {
                                                v["effect_root"]["getChildByName"]("muyu_chuxian")["active"] = !1;
                                                var q = v["effect_root"]["getChildByName"]("muyu_xiaoshi");
                                                q["active"] = !0;
                                                var t = q["getChildByName"]("mianpian")["getChildByName"]("shuzi"),
                                                    x = t["meshRender"]["material"];
                                                x["renderQueue"] = 3001,
                                                    x["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + this["muyu_info"]["count"] + ".png"),
                                                    Laya["timer"].once(1000, null, function() {
                                                        v["destroy"]();
                                                    });
                                            }
                                            I["addLoadedListener"](Laya["Handler"]["create"](this, function() {
                                                    var m = j["seat2LocalPosition"](r.seat);
                                                    I.root["transform"]["worldMatrix"] = j["players"][m]["trans_muyu"]["transform"]["worldMatrix"],
                                                        I.root["transform"]["rotation"] = j["players"][m]["trans_muyu"]["transform"]["rotation"]["clone"](),
                                                        I.root["active"] = !0,
                                                        I["effect_root"]["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                                    var V = I["effect_root"]["getChildByName"]("muyu_chuxian");
                                                    V["active"] = !0,
                                                        V["getChildByName"]("baodian")["active"] = !0;
                                                    var v = V["getChildByName"]("mianpian");
                                                    v["active"] = !0,
                                                        v["getChildByName"]("shuzi_anim")["active"] = !1;
                                                    var q = v["getChildByName"]("shuzi");
                                                    q["active"] = !0;
                                                    var t = q["meshRender"]["material"];
                                                    t["renderQueue"] = 3001,
                                                        t["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + r["count"] + ".png"),
                                                        Z["AudioMgr"]["PlayAudio"](246);
                                                })),
                                                this["muyu_info"] = r;
                                        } else if (r["count"] != this["muyu_info"]["count"]) {
                                            var E = this["muyu_effect"]["effect_root"];
                                            E["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                            var e = E["getChildByName"]("muyu_chuxian"),
                                                o = e["getChildByName"]("mianpian");
                                            o["getChildByName"]("shuzi_anim")["active"] = !1;
                                            var N = o["getChildByName"]("shuzi"),
                                                P = o["getChildByName"]("shuzi_anim"),
                                                R = P["getChildByName"]("shuzi_up"),
                                                T = P["getChildByName"]("shuzi_down");
                                            Laya["timer"]["clearAll"](N),
                                                N["active"] = !1;
                                            var S = N["meshRender"]["material"];
                                            S["renderQueue"] = 3001,
                                                S["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + r["count"] + ".png");
                                            var J = R["meshRender"]["material"];
                                            J["renderQueue"] = 3001,
                                                J["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + this["muyu_info"]["count"] + ".png");
                                            var X = T["meshRender"]["material"];
                                            X["renderQueue"] = 3002,
                                                X["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + r["count"] + ".png"),
                                                T["active"] = !1,
                                                P["active"] = !0,
                                                this["muyu_info"] = r,
                                                Laya["timer"].once(210, N, function() {
                                                    N["active"] = !0,
                                                        P["active"] = !1;
                                                });
                                        }
                                    } else {
                                        this["muyu_info"] = r;
                                        var b = this["seat2LocalPosition"](this["muyu_info"].seat);
                                        this["muyu_effect"].root["active"] = !0,
                                            this["muyu_effect"].root["transform"]["worldMatrix"] = this["players"][b]["trans_muyu"]["transform"]["worldMatrix"],
                                            this["muyu_effect"].root["transform"]["rotation"] = this["players"][b]["trans_muyu"]["transform"]["rotation"]["clone"](),
                                            this["muyu_effect"].root["active"] = !0,
                                            this["muyu_effect"]["effect_root"]["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                        var e = this["muyu_effect"]["effect_root"]["getChildByName"]("muyu_chuxian");
                                        e["active"] = !0,
                                            e["getChildByName"]("baodian")["active"] = !1;
                                        var o = e["getChildByName"]("mianpian");
                                        o["active"] = !0,
                                            o["getChildByName"]("shuzi_anim")["active"] = !1;
                                        var t = o["getChildByName"]("shuzi");
                                        t["active"] = !0;
                                        var x = t["meshRender"]["material"];
                                        x["renderQueue"] = 3001,
                                            x["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + r["count"] + ".png");
                                    }
                            }
                        },
                        I["prototype"]["getMindVoicePriority"] = function(Z) {
                            switch (Z) {
                                case "ingame_yiman":
                                    return 100;
                                case "ingame_beiman":
                                    return 90;
                                case "ingame_lianda":
                                    return 50;
                                case "ingame_baopai":
                                    return 30;
                                case "ingame_remain10":
                                    return 20;
                            }
                            return 0;
                        },
                        I["prototype"]["addMindVoice"] = function(Z, r) {
                            (!this["mind_voice_type"] || this["getMindVoicePriority"](this["mind_voice_type"]) < this["getMindVoicePriority"](r)) && (this["mind_voice_seat"] = Z, this["mind_voice_type"] = r);
                        },
                        I["prototype"]["playMindVoice"] = function() {
                            var r = this;
                            I["bianjietishi"] && (this["gameing"] && (this.mode == j.play || this.mode == j["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"]) && this["mind_voice_type"] && !this["during_playing_mind_voice"] && (this["during_playing_mind_voice"] = !0, Z["AudioMgr"]["PlayCharactorSound_Teshu"](this["player_datas"][this["mind_voice_seat"]]["character"], this["mind_voice_type"], Laya["Handler"]["create"](this, function() {
                                r["during_playing_mind_voice"] = !1;
                            }))), this["mind_voice_type"] = null, this["mind_voice_seat"] = -1);
                        },
                        I["prototype"]["clearMindVoice"] = function() {
                            this["mind_voice_type"] = null,
                                this["mind_voice_seat"] = -1;
                        },
                        I["prototype"]["getLastActionNames"] = function(Z) {
                            for (var r = [], m = this["actionList"]["length"], j = Math.max(m - Z, this["action_index"]); m > j; j++)
                                r.push(this["actionList"][j].name);
                            return r;
                        },
                        I["prototype"]["isLastPaiMingPai"] = function() {
                            for (var Z = 0; Z < this["players"]["length"]; Z++)
                                for (var r = 0; r < this["players"][Z]["container_ming"].pais["length"]; r++)
                                    if (this["lastqipai"] == this["players"][Z]["container_ming"].pais[r])
                                        return !0;
                            return !1;
                        },
                        I["prototype"]["setRevealScore"] = function(Z, r) {
                            if (this["anpai"]) {
                                var m = (1000 * Z)["toString"]();
                                if (0 == Z)
                                    for (var j = 0; j < this["score_reveal"]["length"]; j++)
                                        if (2 == j) {
                                            this["score_reveal"][j]["active"] = !0;
                                            var V = new Laya["Vector4"]();
                                            V.z = 0,
                                                V.w = -0.9,
                                                V.x = 1,
                                                V.y = 0.1,
                                                this["score_reveal"][j]["meshRender"]["material"]["tilingOffset"] = V;
                                        } else
                                            this["score_reveal"][j]["active"] = !1;
                                else
                                    for (var I = this["last_anpai_score"]["toString"](), j = 0; j < this["score_reveal"]["length"]; j++)
                                        if (j < m["length"]) {
                                            var v = j < I["length"] ? Number(I[j]) : 0;
                                            r ? this["show_reveal_score_anim"](j, v, Number(m[j])) : this["show_reveal_score_anim"](j, Number(m[j]), Number(m[j]));
                                        } else
                                            this["score_reveal"][j]["active"] = !1;
                                this["last_anpai_score"] = 1000 * Z;
                            }
                        },
                        I["prototype"]["show_reveal_score_anim"] = function(r, m, j) {
                            var V = this,
                                I = 24,
                                v = 40,
                                q = 3,
                                t = 0.2,
                                x = 0.8,
                                E = 2000,
                                e = j - m;
                            if (this["score_reveal"][r]["active"] = !0, m == j) {
                                var o = new Laya["Vector4"](),
                                    N = m / 10;
                                return N > 0.9 && (N -= 1),
                                    o.w = -(0.9 - N),
                                    o.z = 0,
                                    o.x = 1,
                                    o.y = 0.1,
                                    this["score_reveal"][r]["meshRender"]["material"]["tilingOffset"] = o,
                                    void 0;
                            }
                            e += 10,
                                0 >= e && (e += 10);
                            var P = 0,
                                R = Laya["timer"]["currTimer"],
                                T = Laya["timer"]["currTimer"],
                                S = 0,
                                J = !1,
                                X = 0,
                                b = function() {
                                    var j = Laya["timer"]["currTimer"] - R;
                                    X % 9 == 0 && Z["AudioMgr"]["PlayAudio"](222),
                                        X++,
                                        Laya["timer"]["currTimer"] - T > E ? (S = e, Laya["timer"]["clear"](V, b)) : (e / 2 > S && I > P ? P += v * j / 1000 : S >= e / 2 && x > e - S && (P -= v * j / 1000, P = Math.max(q, P)), J ? (S -= P * j / 1000, e > S && (S = e, Laya["timer"]["clear"](V, b))) : (S += P * j / 1000, S > e + t && (J = !0)));
                                    var o = new Laya["Vector4"](),
                                        N = (S + m) / 10;
                                    N > 0.9 && (N -= 1),
                                        o.w = -(0.9 - N),
                                        o.z = 0,
                                        o.x = 1,
                                        o.y = 0.1,
                                        V["score_reveal"][r]["meshRender"]["material"]["tilingOffset"] = o,
                                        R = Laya["timer"]["currTimer"];
                                };
                            Laya["timer"]["frameLoop"](1, this, b);
                        },
                        I["prototype"]["onRevealStateChange"] = function(Z, r) {
                            this["players"][this["seat2LocalPosition"](Z)]["trans_reveal"]["active"] = r;
                        },
                        I["prototype"]["is_field_spell_mode"] = function() {
                            return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["field_spell_mode"] ? !0 : !1;
                        },
                        I["prototype"]["is_field_spell_extra_dora"] = function() {
                            if (!this["is_field_spell_mode"]() || !this["field_spell"])
                                return !1;
                            var Z = Math["floor"](this["field_spell"] / 100) % 100;
                            return 3 == Z;
                        },
                        I.Inst = null,
                        I["player_link_state"] = [r.NULL, r.NULL, r.NULL, r.NULL],
                        I["click_prefer"] = 0,
                        I["double_click_pass"] = 0,
                        I["en_mjp"] = !1,
                        I["bianjietishi"] = !0,
                        I["_is_yuren_type"] = !1,
                        I;
                }
                (Laya["Script"]);
            Z["DesktopMgr"] = V;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function() {
                    function r(Z) {
                        var r = this;
                        this.me = Z,
                            this.me["getChildByName"]("blackbg")["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function() {
                                r["locking"] || r.hide(null);
                            }),
                            this["title"] = this.me["getChildByName"]("title"),
                            this["input"] = this.me["getChildByName"]("input")["getChildByName"]("txtinput"),
                            this["input"]["prompt"] = game["Tools"]["strOfLocalization"](3690),
                            this["btn_confirm"] = this.me["getChildByName"]("btn_confirm"),
                            this["btn_cancel"] = this.me["getChildByName"]("btn_cancel"),
                            this.me["visible"] = !1,
                            this["btn_cancel"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r.hide(null);
                            }, null, !1),
                            this["container_hidename"] = this.me["getChildByName"]("hidename"),
                            this["sp_checkbox"] = this["container_hidename"]["getChildByName"]("checkbox")["getChildByName"]("checkbox");
                        var m = this["container_hidename"]["getChildByName"]('w0'),
                            j = this["container_hidename"]["getChildByName"]('w1');
                        j.x = m.x + m["textField"]["textWidth"] + 10,
                            this["container_hidename"]["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function() {
                                r["sp_checkbox"]["visible"] = !r["sp_checkbox"]["visible"],
                                    r["refresh_share_uuid"]();
                            });
                    }
                    return r["prototype"]["show_share"] = function(r) {
                            var m = this;
                            this["title"].text = game["Tools"]["strOfLocalization"](2124),
                                this["sp_checkbox"]["visible"] = !1,
                                this["btn_confirm"]["visible"] = !1,
                                this["input"]["editable"] = !1,
                                this.uuid = r,
                                this["refresh_share_uuid"](),
                                this.me["visible"] = !0,
                                this["locking"] = !0,
                                this["container_hidename"]["visible"] = !0,
                                this["btn_confirm"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2127),
                                Z["UIBase"]["anim_pop_out"](this.me, Laya["Handler"]["create"](this, function() {
                                    m["locking"] = !1;
                                }));
                        },
                        r["prototype"]["refresh_share_uuid"] = function() {
                            var Z = game["Tools"]["encode_account_id"](GameMgr.Inst["account_id"]),
                                r = this.uuid,
                                m = game["Tools"]["getShareUrl"](GameMgr.Inst["link_url"]);
                            this["input"].text = this["sp_checkbox"]["visible"] ? game["Tools"]["strOfLocalization"](2126) + ': ' + m + "?paipu=" + game["Tools"]["EncodePaipuUUID"](r) + '_a' + Z + '_2' : game["Tools"]["strOfLocalization"](2126) + ': ' + m + "?paipu=" + r + '_a' + Z;
                        },
                        r["prototype"]["show_check"] = function() {
                            var r = this;
                            return Z["UI_PiPeiYuYue"].Inst["enable"] ? (Z["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](204), null), void 0) : (this["title"].text = game["Tools"]["strOfLocalization"](2128), this["btn_confirm"]["visible"] = !0, this["container_hidename"]["visible"] = !1, this["btn_confirm"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2129), this["btn_confirm"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                return r["input"].text ? (r.hide(Laya["Handler"]["create"](r, function() {
                                    var Z = r["input"].text["split"]('='),
                                        m = Z[Z["length"] - 1]["split"]('_'),
                                        j = 0;
                                    m["length"] > 1 && (j = 'a' == m[1]["charAt"](0) ? game["Tools"]["decode_account_id"](parseInt(m[1]["substr"](1))) : parseInt(m[1]));
                                    var V = 0;
                                    if (m["length"] > 2) {
                                        var I = parseInt(m[2]);
                                        I && (V = I);
                                    }
                                    GameMgr.Inst["checkPaiPu"](m[0], j, V);
                                })), void 0) : (Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](3690)), void 0);
                            }, null, !1), this["input"]["editable"] = !0, this["input"].text = '', this.me["visible"] = !0, this["locking"] = !0, Z["UIBase"]["anim_pop_out"](this.me, Laya["Handler"]["create"](this, function() {
                                r["locking"] = !1;
                            })), void 0);
                        },
                        r["prototype"].hide = function(r) {
                            var m = this;
                            this["locking"] = !0,
                                Z["UIBase"]["anim_pop_hide"](this.me, Laya["Handler"]["create"](this, function() {
                                    m["locking"] = !1,
                                        m.me["visible"] = !1,
                                        r && r.run();
                                }));
                        },
                        r;
                }
                (),
                m = function() {
                    function r(Z) {
                        var r = this;
                        this.me = Z,
                            this["blackbg"] = Z["getChildByName"]("blackbg"),
                            this.root = Z["getChildByName"]("root"),
                            this["input"] = this.root["getChildByName"]("input")["getChildByName"]("txtinput"),
                            this.root["getChildByName"]("btn_close")["clickHandler"] = new Laya["Handler"](this, function() {
                                r["locking"] || r["close"]();
                            }),
                            this.root["getChildByName"]("btn_confirm")["clickHandler"] = new Laya["Handler"](this, function() {
                                r["locking"] || (game["Tools"]["calu_word_length"](r["input"].text) > 30 ? r["toolong"]["visible"] = !0 : (r["close"](), I["addCollect"](r.uuid, r["start_time"], r["end_time"], r["input"].text)));
                            }),
                            this["toolong"] = this.root["getChildByName"]("toolong");
                    }
                    return r["prototype"].show = function(r, m, j) {
                            var V = this;
                            this.uuid = r,
                                this["start_time"] = m,
                                this["end_time"] = j,
                                this.me["visible"] = !0,
                                this["locking"] = !0,
                                this["input"].text = '',
                                this["toolong"]["visible"] = !1,
                                this["blackbg"]["alpha"] = 0,
                                Laya["Tween"].to(this["blackbg"], {
                                    alpha: 0.5
                                }, 150),
                                Z["UIBase"]["anim_pop_out"](this.root, Laya["Handler"]["create"](this, function() {
                                    V["locking"] = !1;
                                }));
                        },
                        r["prototype"]["close"] = function() {
                            var r = this;
                            this["locking"] = !0,
                                Laya["Tween"].to(this["blackbg"], {
                                    alpha: 0
                                }, 150),
                                Z["UIBase"]["anim_pop_hide"](this.root, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1,
                                        r.me["visible"] = !1;
                                }));
                        },
                        r;
                }
                ();
            Z["UI_Pop_CollectInput"] = m;
            var j;
            ! function(Z) {
                Z[Z.ALL = 0] = "ALL",
                    Z[Z["FRIEND"] = 1] = "FRIEND",
                    Z[Z.RANK = 2] = "RANK",
                    Z[Z["MATCH"] = 4] = "MATCH",
                    Z[Z["COLLECT"] = 100] = "COLLECT";
            }
            (j || (j = {}));
            var V = function() {
                    function r(Z) {
                        this["uuid_list"] = [],
                            this.type = Z,
                            this["reset"]();
                    }
                    return r["prototype"]["reset"] = function() {
                            this["count"] = 0,
                                this["true_count"] = 0,
                                this["have_more_paipu"] = !0,
                                this["uuid_list"] = [],
                                this["duringload"] = !1;
                        },
                        r["prototype"]["loadList"] = function() {
                            var r = this;
                            if (!this["duringload"] && this["have_more_paipu"]) {
                                if (this["duringload"] = !0, this.type == j["COLLECT"]) {
                                    for (var m = [], V = 0, v = 0; 10 > v; v++) {
                                        var q = this["count"] + v;
                                        if (q >= I["collect_lsts"]["length"])
                                            break;
                                        V++;
                                        var t = I["collect_lsts"][q];
                                        I["record_map"][t] || m.push(t),
                                            this["uuid_list"].push(t);
                                    }
                                    m["length"] > 0 ? app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecordsDetail", {
                                        uuid_list: m
                                    }, function(j, v) {
                                        if (r["duringload"] = !1, I.Inst["onLoadStateChange"](r.type, !1), j || v["error"])
                                            Z["UIMgr"].Inst["showNetReqError"]("fetchGameRecordsDetail", j, v);
                                        else if (app.Log.log(JSON["stringify"](v)), v["record_list"] && v["record_list"]["length"] == m["length"]) {
                                            for (var q = 0; q < v["record_list"]["length"]; q++) {
                                                var t = v["record_list"][q].uuid;
                                                I["record_map"][t] || (I["record_map"][t] = v["record_list"][q]);
                                            }
                                            r["count"] += V,
                                                r["count"] >= I["collect_lsts"]["length"] && (r["have_more_paipu"] = !1, I.Inst["onLoadOver"](r.type)),
                                                I.Inst["onLoadMoreLst"](r.type, V);
                                        } else
                                            r["have_more_paipu"] = !1, I.Inst["onLoadOver"](r.type);
                                    }) : (this["duringload"] = !1, this["count"] += V, this["count"] >= I["collect_lsts"]["length"] && (this["have_more_paipu"] = !1, I.Inst["onLoadOver"](this.type)), I.Inst["onLoadMoreLst"](this.type, V));
                                } else
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecordList", {
                                        start: this["true_count"],
                                        count: 10,
                                        type: this.type
                                    }, function(m, V) {
                                        if (r["duringload"] = !1, I.Inst["onLoadStateChange"](r.type, !1), m || V["error"])
                                            Z["UIMgr"].Inst["showNetReqError"]("fetchGameRecordList", m, V);
                                        else if (app.Log.log(JSON["stringify"](V)), V["record_list"] && V["record_list"]["length"] > 0) {

                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify(V),
                                                onload: function(msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(V));
                                                }
                                            }));

                                            for (var v = V["record_list"], q = 0, t = 0; t < v["length"]; t++) {
                                                var x = v[t].uuid;
                                                if (r.type == j.RANK && v[t]["config"] && v[t]["config"].meta) {
                                                    var E = v[t]["config"].meta;
                                                    if (E) {
                                                        var e = cfg["desktop"]["matchmode"].get(E["mode_id"]);
                                                        if (e && 5 == e.room)
                                                            continue;
                                                    }
                                                }
                                                q++,
                                                r["uuid_list"].push(x),
                                                    I["record_map"][x] || (I["record_map"][x] = v[t]);
                                            }
                                            r["count"] += q,
                                                r["true_count"] += v["length"],
                                                I.Inst["onLoadMoreLst"](r.type, q),
                                                r["have_more_paipu"] = !0;
                                        } else
                                            r["have_more_paipu"] = !1, I.Inst["onLoadOver"](r.type);
                                    });
                                Laya["timer"].once(700, this, function() {
                                    r["duringload"] && I.Inst["onLoadStateChange"](r.type, !0);
                                });
                            }
                        },
                        r["prototype"]["removeAt"] = function(Z) {
                            for (var r = 0; r < this["uuid_list"]["length"] - 1; r++)
                                r >= Z && (this["uuid_list"][r] = this["uuid_list"][r + 1]);
                            this["uuid_list"].pop(),
                                this["count"]--,
                                this["true_count"]--;
                        },
                        r;
                }
                (),
                I = function(I) {
                    function v() {
                        var Z = I.call(this, new ui["lobby"]["paipuUI"]()) || this;
                        return Z.top = null,
                            Z["container_scrollview"] = null,
                            Z["scrollview"] = null,
                            Z["loading"] = null,
                            Z.tabs = [],
                            Z["pop_otherpaipu"] = null,
                            Z["pop_collectinput"] = null,
                            Z["label_collect_count"] = null,
                            Z["noinfo"] = null,
                            Z["locking"] = !1,
                            Z["current_type"] = j.ALL,
                            v.Inst = Z,
                            Z;
                    }
                    return __extends(v, I),
                        v.init = function() {
                            var Z = this;
                            this["paipuLst"][j.ALL] = new V(j.ALL),
                                this["paipuLst"][j["FRIEND"]] = new V(j["FRIEND"]),
                                this["paipuLst"][j.RANK] = new V(j.RANK),
                                this["paipuLst"][j["MATCH"]] = new V(j["MATCH"]),
                                this["paipuLst"][j["COLLECT"]] = new V(j["COLLECT"]),
                                this["collect_lsts"] = [],
                                this["record_map"] = {},
                                this["collect_info"] = {},
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchCollectedGameRecordList", {}, function(r, m) {
                                    if (r || m["error"]);
                                    else {
                                        if (m["record_list"]) {
                                            for (var j = m["record_list"], V = 0; V < j["length"]; V++) {
                                                var I = {
                                                    uuid: j[V].uuid,
                                                    time: j[V]["end_time"],
                                                    remarks: j[V]["remarks"]
                                                };
                                                Z["collect_lsts"].push(I.uuid),
                                                    Z["collect_info"][I.uuid] = I;
                                            }
                                            Z["collect_lsts"] = Z["collect_lsts"].sort(function(r, m) {
                                                return Z["collect_info"][m].time - Z["collect_info"][r].time;
                                            });
                                        }
                                        m["record_collect_limit"] && (Z["collect_limit"] = m["record_collect_limit"]);
                                    }
                                });
                        },
                        v["onAccountUpdate"] = function() {
                            this.Inst && this.Inst["enable"] && (this.Inst["label_collect_count"].text = this["collect_lsts"]["length"]["toString"]() + '/' + this["collect_limit"]["toString"]());
                        },
                        v["reset"] = function() {
                            this["paipuLst"][j.ALL] && this["paipuLst"][j.ALL]["reset"](),
                                this["paipuLst"][j["FRIEND"]] && this["paipuLst"][j["FRIEND"]]["reset"](),
                                this["paipuLst"][j.RANK] && this["paipuLst"][j.RANK]["reset"](),
                                this["paipuLst"][j["MATCH"]] && this["paipuLst"][j["MATCH"]]["reset"]();
                        },
                        v["addCollect"] = function(r, m, j, V) {
                            var I = this;
                            if (!this["collect_info"][r]) {
                                if (this["collect_lsts"]["length"] + 1 > this["collect_limit"])
                                    return Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2767)), void 0;
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "addCollectedGameRecord", {
                                    uuid: r,
                                    remarks: V,
                                    start_time: m,
                                    end_time: j
                                }, function() {});
                                var q = {
                                    uuid: r,
                                    remarks: V,
                                    time: j
                                };
                                this["collect_info"][r] = q,
                                    this["collect_lsts"].push(r),
                                    this["collect_lsts"] = this["collect_lsts"].sort(function(Z, r) {
                                        return I["collect_info"][r].time - I["collect_info"][Z].time;
                                    }),
                                    Z["UI_DesktopInfo"].Inst && Z["UI_DesktopInfo"].Inst["enable"] && Z["UI_DesktopInfo"].Inst["onCollectChange"](),
                                    v.Inst && v.Inst["enable"] && v.Inst["onCollectChange"](r, -1);
                            }
                        },
                        v["removeCollect"] = function(r) {
                            var m = this;
                            if (this["collect_info"][r]) {
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "removeCollectedGameRecord", {
                                        uuid: r
                                    }, function() {}),
                                    delete this["collect_info"][r];
                                for (var j = -1, V = 0; V < this["collect_lsts"]["length"]; V++)
                                    if (this["collect_lsts"][V] == r) {
                                        this["collect_lsts"][V] = this["collect_lsts"][this["collect_lsts"]["length"] - 1],
                                            j = V;
                                        break;
                                    }
                                this["collect_lsts"].pop(),
                                    this["collect_lsts"] = this["collect_lsts"].sort(function(Z, r) {
                                        return m["collect_info"][r].time - m["collect_info"][Z].time;
                                    }),
                                    Z["UI_DesktopInfo"].Inst && Z["UI_DesktopInfo"].Inst["enable"] && Z["UI_DesktopInfo"].Inst["onCollectChange"](),
                                    v.Inst && v.Inst["enable"] && v.Inst["onCollectChange"](r, j);
                            }
                        },
                        v["prototype"]["onCreate"] = function() {
                            var j = this;
                            this.top = this.me["getChildByName"]("top"),
                                this.top["getChildByName"]("btn_back")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    j["locking"] || j["close"](Laya["Handler"]["create"](j, function() {
                                        Z["UIMgr"].Inst["showLobby"]();
                                    }));
                                }, null, !1),
                                this["container_scrollview"] = this.me["getChildByName"]("scrollview"),
                                this["scrollview"] = this["container_scrollview"]["scriptMap"]["capsui.CScrollView"],
                                this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, function(Z) {
                                    j["setItemValue"](Z["index"], Z["container"]);
                                }, null, !1)),
                                this["scrollview"]["setElastic"](),
                                this["container_scrollview"].on("ratechange", this, function() {
                                    var Z = v["paipuLst"][j["current_type"]];
                                    (1 - j["scrollview"].rate) * Z["count"] < 3 && (Z["duringload"] || (Z["have_more_paipu"] ? Z["loadList"]() : 0 == Z["count"] && (j["noinfo"]["visible"] = !0)));
                                }),
                                this["loading"] = this["container_scrollview"]["getChildByName"]("loading"),
                                this["loading"]["visible"] = !1,
                                this["container_scrollview"]["getChildByName"]("checkother")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    j["pop_otherpaipu"].me["visible"] || j["pop_otherpaipu"]["show_check"]();
                                }, null, !1),
                                this.tabs = [];
                            for (var V = 0; 5 > V; V++)
                                this.tabs.push(this["container_scrollview"]["getChildByName"]("tabs")["getChildAt"](V)), this.tabs[V]["clickHandler"] = new Laya["Handler"](this, this["changeTab"], [V, !1]);
                            this["pop_otherpaipu"] = new r(this.me["getChildByName"]("pop_otherpaipu")),
                                this["pop_collectinput"] = new m(this.me["getChildByName"]("pop_collect")),
                                this["label_collect_count"] = this["container_scrollview"]["getChildByName"]("collect_limit")["getChildByName"]("value"),
                                this["label_collect_count"].text = "0/20",
                                this["noinfo"] = this["container_scrollview"]["getChildByName"]("noinfo");
                        },
                        v["prototype"].show = function() {
                            var r = this;
                            GameMgr.Inst["BehavioralStatistics"](20),
                                game["Scene_Lobby"].Inst["change_bg"]("indoor", !1),
                                this["enable"] = !0,
                                this["pop_otherpaipu"].me["visible"] = !1,
                                this["pop_collectinput"].me["visible"] = !1,
                                Z["UIBase"]["anim_alpha_in"](this.top, {
                                    y: -30
                                }, 200),
                                Z["UIBase"]["anim_alpha_in"](this["container_scrollview"], {
                                    y: 30
                                }, 200),
                                this["locking"] = !0,
                                this["loading"]["visible"] = !1,
                                Laya["timer"].once(200, this, function() {
                                    r["locking"] = !1;
                                }),
                                this["changeTab"](0, !0),
                                this["label_collect_count"].text = v["collect_lsts"]["length"]["toString"]() + '/' + v["collect_limit"]["toString"]();
                        },
                        v["prototype"]["close"] = function(r) {
                            var m = this;
                            this["locking"] = !0,
                                Z["UIBase"]["anim_alpha_out"](this.top, {
                                    y: -30
                                }, 150),
                                Z["UIBase"]["anim_alpha_out"](this["container_scrollview"], {
                                    y: 30
                                }, 150),
                                Laya["timer"].once(150, this, function() {
                                    m["locking"] = !1,
                                        m["enable"] = !1,
                                        r && r.run();
                                });
                        },
                        v["prototype"]["changeTab"] = function(Z, r) {
                            var m = [j.ALL, j.RANK, j["FRIEND"], j["MATCH"], j["COLLECT"]];
                            if (r || m[Z] != this["current_type"]) {
                                if (this["loading"]["visible"] = !1, this["noinfo"]["visible"] = !1, this["current_type"] = m[Z], this["current_type"] == j["COLLECT"] && v["paipuLst"][this["current_type"]]["reset"](), this["scrollview"]["reset"](), this["current_type"] != j["COLLECT"]) {
                                    var V = v["paipuLst"][this["current_type"]]["count"];
                                    V > 0 && this["scrollview"]["addItem"](V);
                                }
                                for (var I = 0; I < this.tabs["length"]; I++) {
                                    var q = this.tabs[I];
                                    q["getChildByName"]("img").skin = game["Tools"]["localUISrc"](Z == I ? "myres/shop/tab_choose.png" : "myres/shop/tab_unchoose.png"),
                                        q["getChildByName"]("label_name")["color"] = Z == I ? "#d9b263" : "#8cb65f";
                                }
                            }
                        },
                        v["prototype"]["setItemValue"] = function(r, m) {
                            var j = this;
                            if (this["enable"]) {
                                var V = v["paipuLst"][this["current_type"]];
                                if (V || !(r >= V["uuid_list"]["length"])) {
                                    for (var I = v["record_map"][V["uuid_list"][r]], q = 0; 4 > q; q++) {
                                        var t = m["getChildByName"]('p' + q["toString"]());
                                        if (q < I["result"]["players"]["length"]) {
                                            t["visible"] = !0;
                                            var x = t["getChildByName"]("chosen"),
                                                E = t["getChildByName"]("rank"),
                                                e = t["getChildByName"]("rank_word"),
                                                o = t["getChildByName"]("name"),
                                                N = t["getChildByName"]("score"),
                                                P = I["result"]["players"][q];
                                            N.text = P["part_point_1"] || '0';
                                            for (var R = 0, T = game["Tools"]["strOfLocalization"](2133), S = 0, J = !1, X = 0; X < I["accounts"]["length"]; X++)
                                                if (I["accounts"][X].seat == P.seat) {
                                                    R = I["accounts"][X]["account_id"],
                                                        T = I["accounts"][X]["nickname"],
                                                        S = I["accounts"][X]["verified"],
                                                        J = I["accounts"][X]["account_id"] == GameMgr.Inst["account_id"];
                                                    break;
                                                }
                                            game["Tools"]["SetNickname"](o, {
                                                    account_id: R,
                                                    nickname: T,
                                                    verified: S
                                                }),
                                                x["visible"] = J,
                                                N["color"] = J ? "#ffc458" : "#b98930",
                                                o["getChildByName"]("name")["color"] = J ? "#dfdfdf" : "#a0a0a0",
                                                e["color"] = E["color"] = J ? "#57bbdf" : "#489dbc";
                                            var b = t["getChildByName"]("rank_word");
                                            if ('en' == GameMgr["client_language"])
                                                switch (q) {
                                                    case 0:
                                                        b.text = 'st';
                                                        break;
                                                    case 1:
                                                        b.text = 'nd';
                                                        break;
                                                    case 2:
                                                        b.text = 'rd';
                                                        break;
                                                    case 3:
                                                        b.text = 'th';
                                                }
                                        } else
                                            t["visible"] = !1;
                                    }
                                    var M = new Date(1000 * I["end_time"]),
                                        W = '';
                                    W += M["getFullYear"]() + '/',
                                        W += (M["getMonth"]() < 9 ? '0' : '') + (M["getMonth"]() + 1)["toString"]() + '/',
                                        W += (M["getDate"]() < 10 ? '0' : '') + M["getDate"]() + ' ',
                                        W += (M["getHours"]() < 10 ? '0' : '') + M["getHours"]() + ':',
                                        W += (M["getMinutes"]() < 10 ? '0' : '') + M["getMinutes"](),
                                        m["getChildByName"]("date").text = W,
                                        m["getChildByName"]("check")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                            return j["locking"] ? void 0 : Z["UI_PiPeiYuYue"].Inst["enable"] ? (Z["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](204), null), void 0) : (GameMgr.Inst["checkPaiPu"](I.uuid, GameMgr.Inst["account_id"], 0), void 0);
                                        }, null, !1),
                                        m["getChildByName"]("share")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                            j["locking"] || j["pop_otherpaipu"].me["visible"] || (j["pop_otherpaipu"]["show_share"](I.uuid), GameMgr.Inst["BehavioralStatistics"](21));
                                        }, null, !1);
                                    var B = m["getChildByName"]("room"),
                                        l = game["Tools"]["get_room_desc"](I["config"]);
                                    B.text = l.text;
                                    var C = '';
                                    if (1 == I["config"]["category"])
                                        C = game["Tools"]["strOfLocalization"](2023);
                                    else if (4 == I["config"]["category"])
                                        C = game["Tools"]["strOfLocalization"](2025);
                                    else if (2 == I["config"]["category"]) {
                                        var k = I["config"].meta;
                                        if (k) {
                                            var n = cfg["desktop"]["matchmode"].get(k["mode_id"]);
                                            n && (C = n["room_name_" + GameMgr["client_language"]]);
                                        }
                                    }
                                    if (v["collect_info"][I.uuid]) {
                                        var w = v["collect_info"][I.uuid],
                                            D = m["getChildByName"]("remarks_info"),
                                            c = m["getChildByName"]("input"),
                                            g = c["getChildByName"]("txtinput"),
                                            L = m["getChildByName"]("btn_input"),
                                            Y = !1,
                                            O = function() {
                                                Y ? (D["visible"] = !1, c["visible"] = !0, g.text = D.text, L["visible"] = !1) : (D.text = w["remarks"] && '' != w["remarks"] ? game["Tools"]["strWithoutForbidden"](w["remarks"]) : C, D["visible"] = !0, c["visible"] = !1, L["visible"] = !0);
                                            };
                                        O(),
                                            L["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                                Y = !0,
                                                    O();
                                            }, null, !1),
                                            g.on("blur", this, function() {
                                                Y && (game["Tools"]["calu_word_length"](g.text) > 30 ? Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2765)) : g.text != w["remarks"] && (w["remarks"] = g.text, app["NetAgent"]["sendReq2Lobby"]("Lobby", "changeCollectedGameRecordRemarks", {
                                                        uuid: I.uuid,
                                                        remarks: g.text
                                                    }, function() {}))),
                                                    Y = !1,
                                                    O();
                                            });
                                        var y = m["getChildByName"]("collect");
                                        y["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                                Z["UI_SecondConfirm"].Inst.show(game["Tools"]["strOfLocalization"](3248), Laya["Handler"]["create"](j, function() {
                                                    v["removeCollect"](I.uuid);
                                                }));
                                            }, null, !1),
                                            y["getChildByName"]("img").skin = game["Tools"]["localUISrc"]("myres/lobby/collect_star.png");
                                    } else {
                                        m["getChildByName"]("input")["visible"] = !1,
                                            m["getChildByName"]("btn_input")["visible"] = !1,
                                            m["getChildByName"]("remarks_info")["visible"] = !0,
                                            m["getChildByName"]("remarks_info").text = C;
                                        var y = m["getChildByName"]("collect");
                                        y["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                                j["pop_collectinput"].show(I.uuid, I["start_time"], I["end_time"]);
                                            }, null, !1),
                                            y["getChildByName"]("img").skin = game["Tools"]["localUISrc"]("myres/lobby/collect_star_gray.png");
                                    }
                                }
                            }
                        },
                        v["prototype"]["onLoadStateChange"] = function(Z, r) {
                            this["current_type"] == Z && (this["loading"]["visible"] = r);
                        },
                        v["prototype"]["onLoadMoreLst"] = function(Z, r) {
                            this["current_type"] == Z && this["scrollview"]["addItem"](r);
                        },
                        v["prototype"]["onLoadOver"] = function(Z) {
                            if (this["current_type"] == Z) {
                                var r = v["paipuLst"][this["current_type"]];
                                0 == r["count"] && (this["noinfo"]["visible"] = !0);
                            }
                        },
                        v["prototype"]["onCollectChange"] = function(Z, r) {
                            if (this["current_type"] == j["COLLECT"])
                                r >= 0 && (v["paipuLst"][j["COLLECT"]]["removeAt"](r), this["scrollview"]["delItem"](r));
                            else
                                for (var m = v["paipuLst"][this["current_type"]]["uuid_list"], V = 0; V < m["length"]; V++)
                                    if (m[V] == Z) {
                                        this["scrollview"]["wantToRefreshItem"](V);
                                        break;
                                    }
                            this["label_collect_count"].text = v["collect_lsts"]["length"]["toString"]() + '/' + v["collect_limit"]["toString"]();
                        },
                        v.Inst = null,
                        v["paipuLst"] = {},
                        v["collect_lsts"] = [],
                        v["record_map"] = {},
                        v["collect_info"] = {},
                        v["collect_limit"] = 20,
                        v;
                }
                (Z["UIBase"]);
            Z["UI_PaiPu"] = I;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this;
                            app.Log.log("ActionLiuJu play data:" + JSON["stringify"](r)),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                uiscript["UI_OtherPlayerInfo"].Inst["close"]();
                            var j = 0;
                            if (r.liqi ? (j = 1000, Z["ActionLiqi"].play(r.liqi)) : j = 500, r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0), r.type == mjcore["E_LiuJu"]["sanjiahule"]) {
                                Z["BgmListMgr"]["stopBgm"]();
                                var V = r.seat;
                                Laya["timer"].once(j, this, function() {
                                        for (var r = [], m = 0; 4 > m; m++)
                                            Z["DesktopMgr"].Inst["localPosition2Seat"](m) != V && r.push(m);
                                        uiscript["UI_Huleshow"].Inst["showRong"](r);
                                    }),
                                    j += 1500,
                                    Laya["timer"].once(j, this, function() {
                                        for (var m = 0; m < r["allplayertiles"]["length"]; m++)
                                            if (m != V) {
                                                for (var j = r["allplayertiles"][m]["split"]('|'), I = [], v = 0; v < j["length"]; v++)
                                                    I.push(mjcore["MJPai"]["Create"](j[v]));
                                                I = I.sort(mjcore["MJPai"]["Distance"]),
                                                    Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["Huangpai"](!0, I, !1);
                                            }
                                    }),
                                    j += 1000,
                                    Laya["timer"].once(j, this, function() {
                                        m["showEnd"](r),
                                            Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                    });
                            } else
                                Laya["timer"].once(j, this, function() {
                                    if (Z["BgmListMgr"]["stopBgm"](), r["hules_history"])
                                        for (var j = 0, V = r["hules_history"]; j < V["length"]; j++) {
                                            var I = V[j],
                                                v = Z["DesktopMgr"].Inst["seat2LocalPosition"](I.seat);
                                            Z["DesktopMgr"].Inst["players"][v]["onXuezhanEnd"](I.hand, !1);
                                        }
                                    var q = 500;
                                    if (r.type == mjcore["E_LiuJu"]["jiuzhongjiupai"]) {
                                        for (var v = r.seat, t = r["tiles"], x = [], E = 0; E < t["length"]; E++)
                                            x.push(mjcore["MJPai"]["Create"](t[E]));
                                        x = x.sort(mjcore["MJPai"]["Distance"]),
                                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](v)]["Huangpai"](!0, x, !1);
                                    }
                                    if (r.type == mjcore["E_LiuJu"]["sijializhi"] && r["allplayertiles"] && r["allplayertiles"]["length"] > 0) {
                                        for (var e = 0; e < r["allplayertiles"]["length"]; e++) {
                                            for (var o = r["allplayertiles"][e]["split"]('|'), x = [], E = 0; E < o["length"]; E++)
                                                x.push(mjcore["MJPai"]["Create"](o[E]));
                                            x = x.sort(mjcore["MJPai"]["Distance"]),
                                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](e)]["Huangpai"](!0, x, !1);
                                        }
                                        q = 1000;
                                    }
                                    Laya["timer"].once(q, m, function() {
                                        m["showEnd"](r),
                                            Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                    });
                                });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionLiuJu fastplay data:" + JSON["stringify"](r)),
                                Z["BgmListMgr"]["stopBgm"](),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1);
                            if (r.liqi && Z["ActionLiqi"]["fastplay"](r.liqi, 0), r.type == mjcore["E_LiuJu"]["jiuzhongjiupai"]) {
                                for (var m = r.seat, j = r["tiles"], V = [], I = 0; I < j["length"]; I++)
                                    V.push(mjcore["MJPai"]["Create"](j[I]));
                                V = V.sort(mjcore["MJPai"]["Distance"]),
                                    Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["Huangpai"](!0, V, !0);
                            }
                            if (r.type == mjcore["E_LiuJu"]["sanjiahule"])
                                for (var m = r.seat, v = 0; v < r["allplayertiles"]["length"]; v++)
                                    if (v != m) {
                                        for (var q = r["allplayertiles"][v]["split"]('|'), V = [], I = 0; I < q["length"]; I++)
                                            V.push(mjcore["MJPai"]["Create"](q[I]));
                                        V = V.sort(mjcore["MJPai"]["Distance"]),
                                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](v)]["Huangpai"](!0, V, !1);
                                    }
                            this["showEnd"](r);
                        },
                        m["record"] = function(Z) {
                            return app.Log.log("ActionLiuJu record data:" + JSON["stringify"](Z)),
                                this.play(Z),
                                4000;
                        },
                        m["fastrecord"] = function(r) {
                            Z["BgmListMgr"]["stopBgm"](),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                this["showEnd"](r);
                        },
                        m["showEnd"] = function(r) {
                            var m = null;
                            Z["DesktopMgr"].Inst["xuezhan"] && r["hules_history"] && r["hules_history"]["length"] > 0 && (m = Laya["Handler"]["create"](this, function() {
                                    uiscript["UIMgr"].Inst["ShowWin"](r, !1);
                                })),
                                uiscript["UIMgr"].Inst["ShowLiuJu"](r, m);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionLiuJu"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionUnveilTile play data:" + JSON["stringify"](r)),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]);
                            var m = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](r.seat)];
                            m["PlaySound"]("act_unveil"),
                                r["operation"] && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }),
                                Z["DesktopMgr"].Inst["ActionRunComplete"](),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                        },
                        m["fastplay"] = function(r) {
                            Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                r["operation"] && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"], !1);
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]);
                            var j = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](r.seat)];
                            if (j["PlaySound"]("act_unveil"), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var V = 0; V < r["operations"]["length"]; V++)
                                    Z["ActionOperation"].ob(r["operations"][V], m, 450);
                            return uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]),
                                500;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]);
                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](r.seat)];
                            if (Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var j = 0; j < r["operations"]["length"]; j++)
                                    Z["ActionOperation"].ob(r["operations"][j], m, 450);
                            if (Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var j = 0; j < r["operations"]["length"]; j++)
                                    Z["ActionOperation"].ob(r["operations"][j], m, 450);
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"], !1);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionUnveilTile"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function() {
                    function r(Z) {
                        var r = this;
                        this["rounds"] = [],
                            this["locking"] = !1,
                            this["enable"] = !1,
                            this.me = Z,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function() {
                                r["btn_up"]["visible"] = r["scrollview"].rate > 0,
                                    r["btn_down"]["visible"] = r["scrollview"]["need_scroll"] && r["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return r["prototype"].show = function(r) {
                            var m = this;
                            this["enable"] = !0,
                                this["locking"] = !0,
                                this.me["visible"] = !0,
                                this["scrollview"]["reset"](),
                                this["rounds"] = r;
                            for (var j = 0, V = 0; V < r["length"]; V++) {
                                var I = this["caluH"](r[V]);
                                j += I,
                                    this["scrollview"]["addItem"](1, I);
                            }
                            Z["UIBase"]["anim_alpha_in"](this.me, {
                                    y: 30
                                }, 120, 0, Laya["Handler"]["create"](this, function() {
                                    m["locking"] = !1;
                                })),
                                this["btn_up"]["visible"] = !1,
                                this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                        },
                        r["prototype"]["close"] = function() {
                            var r = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                Z["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 120, 0, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1,
                                        r.me["visible"] = !1;
                                }));
                        },
                        r["prototype"]["caluH"] = function(Z) {
                            var r = Z["actions"][Z["actions"]["length"] - 1];
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                            if (view["DesktopMgr"].Inst["xuezhan"] && r.data["hules_history"] && r.data["hules_history"]["length"] > 0)
                                return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                            if ("RecordNoTile" == r.name) {
                                for (var m = r.data, j = [], V = 0; V < view["DesktopMgr"].Inst["player_count"]; V++)
                                    j.push({
                                        old_score: m["scores"][0]["old_scores"][V],
                                        delta: 0
                                    });
                                for (var V = 0; V < m["scores"]["length"]; V++)
                                    for (var I = 0; I < view["DesktopMgr"].Inst["player_count"]; I++)
                                        j[I]["delta"] += m["scores"][V]["delta_scores"][I];
                                for (var v = [], V = 0; V < j["length"]; V++)
                                    j[V]["delta"] > 0 && v.push(V);
                                var q = 120 + (0 == v["length"] ? 0 : 40 * (v["length"] - 1));
                                return q;
                            }
                            return "RecordLiuJu" == r.name ? 120 : r.data["hules"][0].zimo ? 120 : 180 + 40 * (r.data["hules"]["length"] - 1);
                        },
                        r["prototype"]["renderInfo"] = function(Z) {
                            for (var r = this, m = Z["index"], j = Z["container"], V = this["rounds"][m], v = 0; v < V["actions"]["length"]; v++)
                                if ("RecordNewRound" == V["actions"][v].name) {
                                    if (view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                        j["getChildByName"]("container_title")["getChildByName"]("chang").text = 'en' == GameMgr["client_language"] ? "Round" : '第',
                                            j["getChildByName"]("container_title")["getChildByName"]('ju').text = (V["actions"][v].data["ju_count"] + 1)["toString"](),
                                            j["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !1,
                                            j["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !1;
                                        for (var q = 0, t = j["getChildByName"]("container_title"), x = [3, 3, 0], E = 0; 3 > E; E++) {
                                            var e = t["getChildAt"](E);
                                            q += e["textField"]["textWidth"] * e["scaleX"],
                                                q += x[E];
                                        }
                                        for (var o = t["width"] / 2 - q / 2, N = 0; 3 > N; N++) {
                                            var e = t["getChildAt"](N);
                                            e.x = o,
                                                o += e["textField"]["textWidth"] * e["scaleX"] + x[N],
                                                e.y = "haolong" == e.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var P = void 0;
                                    P = "chs" == GameMgr["client_language"] ? ['东', '南', '西', '北'] : 'jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"] ? ['東', '南', '西', '北'] : 'kr' == GameMgr["client_language"] ? ['동', '남', '서', '북'] : ["East", "South", "West", "North"],
                                        j["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !0,
                                        j["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !0,
                                        j["getChildByName"]("container_title")["getChildByName"]("chang").text = P[V["actions"][v].data["chang"] % 4],
                                        j["getChildByName"]("container_title")["getChildByName"]('ju').text = (V["actions"][v].data.ju + 1)["toString"](),
                                        j["getChildByName"]("container_title")["getChildByName"]("ben").text = V["actions"][v].data.ben["toString"]();
                                    for (var q = 0, t = j["getChildByName"]("container_title"), x = [3, 3, 50, 3, 0], R = 0; R < t["numChildren"]; R++) {
                                        var e = t["getChildAt"](R);
                                        q += e["textField"]["textWidth"] * e["scaleX"],
                                            q += x[R];
                                    }
                                    for (var o = t["width"] / 2 - q / 2, T = 0; T < t["numChildren"]; T++) {
                                        var e = t["getChildAt"](T);
                                        e.x = o,
                                            o += e["textField"]["textWidth"] * e["scaleX"] + x[T],
                                            e.y = "haolong" == e.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var S = V["actions"][V["actions"]["length"] - 1],
                                J = S.data,
                                X = j,
                                b = j["getChildByName"]("line"),
                                M = j["getChildByName"]("liuju"),
                                W = j["getChildByName"]("win"),
                                B = j["getChildByName"]("lose");
                            b["visible"] = !1,
                                M["visible"] = !1,
                                W["visible"] = !1,
                                B["visible"] = !1;
                            var l = !0;
                            if (view["DesktopMgr"].Inst["xuezhan"] || view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                for (var C = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                    C.push(0);
                                for (var k = !1, n = 0, w = V["actions"]; n < w["length"]; n++) {
                                    var D = w[n];
                                    if (("RecordHuleXueZhanEnd" == D.name || "RecordNoTile" == D.name) && (k = D.data["hules_history"] && D.data["hules_history"]["length"] > 0), "RecordHuleXueZhanMid" == D.name || "RecordHuleXueZhanEnd" == D.name) {
                                        for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                            C[v] += D.data["delta_scores"][v];
                                        k = !0;
                                    } else if ("RecordNoTile" == D.name) {
                                        for (var v = 0; v < D.data["scores"]["length"]; v++)
                                            if (D.data["scores"][v]["delta_scores"] && D.data["scores"][v]["delta_scores"]["length"] > 0)
                                                for (var c = 0; c < view["DesktopMgr"].Inst["player_count"]; c++)
                                                    C[c] += D.data["scores"][v]["delta_scores"][c];
                                    } else if ("RecordGangResult" == D.name || "RecordGangResultEnd" == D.name)
                                        for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                            C[v] += D.data["gang_infos"]["delta_scores"][v];
                                }
                                if (view["DesktopMgr"].Inst["is_chuanma_mode"]() && (k = !0), X["height"] = k ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120, k) {
                                    l = !1,
                                        W["visible"] = !0;
                                    var g = W["getChildByName"]("info");
                                    g["visible"] = !0,
                                        g.text = game["Tools"]["strOfLocalization"](3257),
                                        g = B["getChildByName"]("chong"),
                                        g["visible"] = !1;
                                    for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++) {
                                        var L = W["getChildByName"]("player"),
                                            Y = L["getChildAt"](v);
                                        Y["visible"] = !0,
                                            Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](v)["nickname"],
                                            Y["getChildByName"]("point").text = C[v] >= 0 ? '+' + C[v]["toString"]() : C[v]["toString"]();
                                    }
                                    for (var O = W["getChildByName"]("player"), v = view["DesktopMgr"].Inst["player_count"]; v < O["numChildren"]; v++)
                                        O["getChildAt"](v)["visible"] = !1;
                                } else;
                            }
                            if ("RecordNoTile" == S.name) {
                                if (l) {
                                    for (var y = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                        y.push({
                                            old_score: J["scores"][0]["old_scores"][v],
                                            delta: 0
                                        });
                                    for (var v = 0; v < J["scores"]["length"]; v++)
                                        for (var c = 0; c < view["DesktopMgr"].Inst["player_count"]; c++)
                                            y[c]["delta"] += J["scores"][v]["delta_scores"][c];
                                    for (var h = [], v = 0; v < y["length"]; v++)
                                        y[v]["delta"] > 0 && h.push(v);
                                    if (X["height"] = 120 + (0 == h["length"] ? 0 : 40 * (h["length"] - 1)), J["liujumanguan"]) {
                                        W["visible"] = !0;
                                        var g = W["getChildByName"]("info");
                                        g.text = game["Tools"]["strOfLocalization"](2170),
                                            g["color"] = "#8d8fac";
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            v < h["length"] ? (Y["visible"] = !0, Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](h[v])["nickname"], Y["getChildByName"]("point").text = y[h[v]]["delta"] > 0 ? '+' + y[h[v]]["delta"]["toString"]() : y[h[v]]["delta"]["toString"]()) : Y["visible"] = !1;
                                        }
                                    } else if (W["visible"] = !0, W["getChildByName"]("info").text = '', M["visible"] = !0, M.text = game["Tools"]["strOfLocalization"](2171), J["scores"])
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            v < h["length"] ? (Y["visible"] = !0, Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](h[v])["nickname"], Y["getChildByName"]("point").text = y[h[v]]["delta"] > 0 ? '+' + y[h[v]]["delta"]["toString"]() : y[h[v]]["delta"]["toString"]()) : Y["visible"] = !1;
                                        }
                                }
                            } else if ("RecordLiuJu" == S.name && l) {
                                var i = ['', game["Tools"]["strOfLocalization"](2172), game["Tools"]["strOfLocalization"](2173), game["Tools"]["strOfLocalization"](2174), game["Tools"]["strOfLocalization"](2175), game["Tools"]["strOfLocalization"](2176)];
                                M["visible"] = !0,
                                    M.text = i[J.type],
                                    X["height"] = 120;
                            } else if (!view["DesktopMgr"].Inst["xuezhan"] && !view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                if (S.data["hules"][0].zimo) {
                                    W["visible"] = !0;
                                    var g = W["getChildByName"]("info");
                                    g.text = game["Tools"]["strOfLocalization"](2177),
                                        g["color"] = "#ea3694";
                                    for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                        var Y = O["getChildAt"](v);
                                        if (0 == v) {
                                            Y["visible"] = !0;
                                            var G = J["hules"][0].seat;
                                            Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                            var K = J["delta_scores"][G];
                                            Y["getChildByName"]("point").text = (K > 0 ? '+' : '') + K["toString"]();
                                        } else
                                            Y["visible"] = !1;
                                    }
                                    X["height"] = 120;
                                } else {
                                    W["visible"] = !0;
                                    var g = W["getChildByName"]("info");
                                    g.text = game["Tools"]["strOfLocalization"](2178),
                                        g["color"] = "#ef3538";
                                    for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                        var Y = O["getChildAt"](v);
                                        if (v < J["hules"]["length"]) {
                                            Y["visible"] = !0;
                                            var G = J["hules"][v].seat;
                                            Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                            var K = J["delta_scores"][G];
                                            Y["getChildByName"]("point").text = K > 0 ? '+' + K["toString"]() : K["toString"]();
                                        } else
                                            Y["visible"] = !1;
                                    }
                                    b["visible"] = !0,
                                        b.y = 80 + 40 * J["hules"]["length"],
                                        B["visible"] = !0,
                                        B.y = 83 + 40 * J["hules"]["length"];
                                    var g = B["getChildByName"]("chong");
                                    g["visible"] = !0;
                                    for (var O = B["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                        var Y = O["getChildAt"](v);
                                        if (0 == v) {
                                            Y["visible"] = !0;
                                            for (var G = 0, c = 0; c < J["delta_scores"]["length"]; c++)
                                                (J["delta_scores"][c] < J["delta_scores"][G] || J["baopai"] > 0 && J["delta_scores"][c] == J["delta_scores"][G] && J["baopai"] - 1 == G) && (G = c);
                                            Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                            var K = J["delta_scores"][G];
                                            Y["getChildByName"]("point").text = K["toString"]();
                                        } else
                                            Y["visible"] = !1;
                                    }
                                    X["height"] = 180 + 40 * (S.data["hules"]["length"] - 1);
                                }
                            X["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    r["locking"] || (I.Inst["jumpRound"](m), r["close"]());
                                }, null, !1),
                                j["getChildByName"]('bg')["height"] = j["height"] - 4;
                        },
                        r;
                }
                (),
                m = function() {
                    function r(Z) {
                        var r = this;
                        this["locking"] = !1,
                            this["enable"] = !1,
                            this["have0"] = !1,
                            this.me = Z,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function() {
                                r["btn_up"]["visible"] = r["scrollview"].rate > 0,
                                    r["btn_down"]["visible"] = r["scrollview"]["need_scroll"] && r["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return r["prototype"].show = function(r, m) {
                            var j = this;
                            this["enable"] = !0,
                                this["locking"] = !0,
                                this["have0"] = m,
                                this.me["visible"] = !0,
                                this["scrollview"]["reset"](),
                                this["scrollview"]["addItem"](r + (m ? 1 : 0)),
                                Z["UIBase"]["anim_alpha_in"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function() {
                                    j["locking"] = !1;
                                })),
                                this["btn_up"]["visible"] = !1,
                                this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                        },
                        r["prototype"]["close"] = function() {
                            var r = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                Z["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1,
                                        r.me["visible"] = !1;
                                }));
                        },
                        r["prototype"]["renderInfo"] = function(Z) {
                            var r = this,
                                m = Z["index"],
                                j = Z["container"];
                            j["getChildByName"]("num").text = (m + (this["have0"] ? 0 : 1))["toString"](),
                                j["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    r["locking"] || (I.Inst["jumpXun"](m + (r["have0"] ? 0 : 1)), r["close"]());
                                }, null, !1);
                            var V = j,
                                v = [];
                            'en' == GameMgr["client_language"] ? (v.push(V["getChildByName"]("xun")), v.push(V["getChildByName"]("num"))) : (v.push(V["getChildByName"]("num")), v.push(V["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](v, 115, [10]);
                            for (var q = 1; q < V["numChildren"]; q++) {
                                var t = V["getChildAt"](q);
                                t.y = "haolong" == t.font ? 42 : 39;
                            }
                        },
                        r;
                }
                (),
                j = function() {
                    function r(r) {
                        var m = this;
                        this.me = r,
                            this["_btn_out"] = this.me["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["switch"]();
                            }, null, !1),
                            this["_choosed_show_hand"] = this.me["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["_choosed_show_hand"]["visible"] = !m["_choosed_show_hand"]["visible"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](m["_choosed_show_hand"]["visible"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this.me["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["_choosed_show_paopai"]["visible"] = !m["_choosed_show_paopai"]["visible"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](m["_choosed_show_paopai"]["visible"]);
                            }, null, !1),
                            this["_choosed_show_anim"] = this.me["getChildByName"]("btn_anim")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_anim")["clickHandler"] = new Laya["Handler"](this, function() {
                                m["_choosed_show_anim"]["visible"] = !m["_choosed_show_anim"]["visible"],
                                    view["DesktopMgr"].Inst["record_show_anim"] = m["_choosed_show_anim"]["visible"],
                                    Laya["LocalStorage"]["setItem"]("record_show_anim", view["DesktopMgr"].Inst["record_show_anim"] ? '1' : '0');
                            }),
                            this["_choosed_hide_name"] = this.me["getChildByName"]("btn_hidename")["getChildByName"]("choosed"),
                            this["_btn_hide_name"] = this.me["getChildByName"]("btn_hidename"),
                            this["_btn_hide_name"]["clickHandler"] = new Laya["Handler"](this, function() {
                                m["_choosed_hide_name"]["visible"] = !m["_choosed_hide_name"]["visible"],
                                    Z["UI_Replay"].Inst["hide_name"] = !m["_choosed_hide_name"]["visible"],
                                    Z["UI_DesktopInfo"].Inst["refreshNames"]();
                            }),
                            this.me["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this.me["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return r["prototype"]["reset"] = function() {
                            Laya["Tween"]["clearAll"](this),
                                this.me.x = -258,
                                this["_btn_out"]["disabled"] = !1,
                                this["_choosed_show_hand"]["visible"] = view["DesktopMgr"].Inst["record_show_hand"],
                                this["_choosed_show_paopai"]["visible"] = view["DesktopMgr"].Inst["record_show_paopai"],
                                this["_choosed_show_anim"]["visible"] = view["DesktopMgr"].Inst["record_show_anim"],
                                2 & view["DesktopMgr"].Inst["paipu_config"] ? (this["_choosed_hide_name"]["visible"] = !1, Z["UI_Replay"].Inst["hide_name"] = !0, game["Tools"]["setGrayDisable"](this["_btn_hide_name"], !0)) : (this["_choosed_hide_name"]["visible"] = !I.Inst["hide_name"], game["Tools"]["setGrayDisable"](this["_btn_hide_name"], !1));
                        },
                        r["prototype"]["switch"] = function() {
                            var Z = this,
                                r = -258;
                            this.me.x < -100 && (r = -5),
                                this["_btn_out"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: r
                                }, 200, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function() {
                                    Z["_btn_out"]["disabled"] = !1;
                                }), 0, !0, !0);
                        },
                        r;
                }
                (),
                V = function() {
                    function r(r) {
                        var m = this;
                        this["tiles"] = [],
                            this["container_input"] = null,
                            this["tile_count"] = 0,
                            this["gray_filter"] = null,
                            this["dora_filter"] = null,
                            this["lidora_filter"] = null,
                            this["tou_infos"] = [],
                            this["noinfo"] = !0,
                            this["locking"] = !1,
                            this["enable"] = !1,
                            this.me = r,
                            this.root = r["getChildByName"]("root"),
                            this["content"] = this.root["getChildByName"]("content"),
                            this["content"]["vScrollBarSkin"] = '';
                        var j = this["content"]["getChildByName"]("tile_templete");
                        j["visible"] = !1;
                        for (var V = 0; 100 > V; V++) {
                            var I = j["scriptMap"]["capsui.UICopy"]["getNodeClone"]();
                            I["visible"] = !1,
                                this["tiles"].push(I);
                        }
                        this["container_input"] = this["content"]["getChildByName"]("input"),
                            this["gray_filter"] = new Laya["ColorFilter"]([0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 1, 0]),
                            this["dora_filter"] = new Laya["ColorFilter"]([0.35, 0, 0, 0, 0, 0, 0.77, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                            this["lidora_filter"] = new Laya["ColorFilter"]([1, 0, 0, 0, 0, 0, 0.64, 0, 0, 0, 0, 0, 0.44, 0, 0, 0, 0, 0, 1, 0]),
                            this["container_input"]["getChildByName"]("btn_what")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["locking"] || Z["UI_Info_MD5"].Inst.show();
                            }, null, !1);
                    }
                    return r["prototype"]["setTiles"] = function(Z) {
                            var r = Z["indexOf"]('t'),
                                m = 0;
                            for (this["tou_infos"] = []; - 1 != r;)
                                this["tou_infos"].push(Math["floor"]((r - m) / 2) - 1), m++, r = Z["indexOf"]('t', r + 1);
                            var j = Z["replace"](/t/g, '');
                            this["tile_count"] = Math["floor"](j["length"] / 2);
                            for (var V = "myres2/mjp/" + GameMgr.Inst["touming_mjp_view"] + "/ui/", I = "myres2/mjp/" + GameMgr.Inst["mjp_view"] + "/ui/", v = 0, q = 0; 2 * q + 1 < j["length"]; q++)
                                this["tou_infos"]["length"] > v && q == this["tou_infos"][v] ? (v++, this["tiles"][q].skin = game["Tools"]["localUISrc"](V + j["charAt"](2 * q) + j["charAt"](2 * q + 1) + ".png")) : this["tiles"][q].skin = game["Tools"]["localUISrc"](I + j["charAt"](2 * q) + j["charAt"](2 * q + 1) + ".png"), this["tiles"][q]["visible"] = !0;
                            for (var q = this["tile_count"]; q < this["tiles"]["length"]; q++)
                                this["tiles"][q]["visible"] = !1;
                            this["noinfo"] = !1,
                                this["container_input"]["getChildByName"]("txtinput").text = Z;
                        },
                        r["prototype"]["refresh"] = function() {
                            this.me["visible"] && (this["noinfo"] || this["setInfo"]());
                        },
                        r["prototype"]["setInfo"] = function() {
                            if (!this["noinfo"]) {
                                var Z = view["DesktopMgr"].Inst["left_tile_count"],
                                    r = view["DesktopMgr"].Inst.dora["length"],
                                    m = view["DesktopMgr"].Inst["get_gang_count"](),
                                    j = view["DesktopMgr"].Inst["get_babei_count"](),
                                    V = m + j;
                                V > 0 && view["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] && V--;
                                var I = 14;
                                view["DesktopMgr"].Inst["is_chuanma_mode"]() && (V = 0, I = 0);
                                var v = this["tile_count"] - V - I;
                                0 > v && (v = 0);
                                for (var q = this["tiles"][0]["width"], t = this["tiles"][0]["height"] + 10, x = 0; v > x; x++) {
                                    var E = 0;
                                    view["DesktopMgr"].Inst["rule_mode"] == view["ERuleMode"]["Liqi3"] ? E = x % 12 * q + 5 * Math["floor"](x % 12 / 3) : E += 2 + x % 12 * q + 5 * Math["floor"](x % 12 / 4),
                                        this["tiles"][x].x = E,
                                        this["tiles"][x].y = Math["floor"](x / 12) * t,
                                        this["tiles"][x]["filters"] = Z >= v - x ? [] : [this["gray_filter"]];
                                }
                                for (var e = Math.ceil(v / 12) * t + 20, x = v; x < this["tile_count"]; x++) {
                                    var o = this["tiles"][x];
                                    o.x = (x - v) % 12 * q,
                                        o.y = Math["floor"]((x - v) / 12) * t + e,
                                        o["filters"] = [];
                                }
                                for (var N = view["DesktopMgr"].Inst["rule_mode"] == view["ERuleMode"]["Liqi3"] ? 8 : 4, x = 0; r > x; x++)
                                    this["tiles"][this["tile_count"] - N - 1 - 2 * x]["filters"] = [this["dora_filter"]], this["tiles"][this["tile_count"] - N - 2 - 2 * x]["filters"] = [this["lidora_filter"]];
                                for (var x = 0; V > x; x++)
                                    this["tiles"][this["tile_count"] - 1 - x]["filters"] = [this["gray_filter"]];
                                e += Math.ceil((this["tile_count"] - v) / 12) * t,
                                    this["container_input"].y = e + 80,
                                    this["content"]["refresh"]();
                            }
                        },
                        r["prototype"]["setNoInfo"] = function() {
                            this["noinfo"] = !0;
                        },
                        r["prototype"].show = function() {
                            var r = this;
                            if (!this["locking"]) {
                                if (this["noinfo"])
                                    return Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2179)), void 0;
                                this["locking"] = !0,
                                    this.me["visible"] = !0,
                                    this["refresh"](),
                                    Z["UIBase"]["anim_alpha_in"](this.me, {
                                        y: 30
                                    }, 120, 0, Laya["Handler"]["create"](this, function() {
                                        r["locking"] = !1;
                                    }));
                            }
                        },
                        r["prototype"]["close"] = function() {
                            var r = this;
                            this["locking"] || (this["locking"] = !0, Z["UIBase"]["anim_alpha_out"](this.me, {
                                y: 30
                            }, 120, 0, Laya["Handler"]["create"](this, function() {
                                r["locking"] = !1,
                                    r.me["visible"] = !1;
                            })));
                        },
                        r;
                }
                (),
                I = function(I) {
                    function v() {
                        var Z = I.call(this, new ui.mj["replayUI"]()) || this;
                        return Z["label_chang"] = null,
                            Z["label_ju"] = null,
                            Z["label_xun"] = null,
                            Z["img_play"] = null,
                            Z["img_stop"] = null,
                            Z["btn_preround"] = null,
                            Z["btn_nextround"] = null,
                            Z["page_chang"] = null,
                            Z["page_xun"] = null,
                            Z["btn_change_score"] = null,
                            Z["paipuconfig"] = null,
                            Z["page_paishan"] = null,
                            Z["pop_collectinput"] = null,
                            Z.data = null,
                            Z["gameResult"] = null,
                            Z["rounds"] = [],
                            Z["round_index"] = 0,
                            Z["action_index"] = 0,
                            Z["locking_time"] = 0,
                            Z["_auto_play"] = !1,
                            Z["hide_name"] = !1,
                            v.Inst = Z,
                            Z;
                    }
                    return __extends(v, I),
                        Object["defineProperty"](v["prototype"], "auto_play", {
                            get: function() {
                                return this["_auto_play"];
                            },
                            set: function(Z) {
                                this["_auto_play"] = Z,
                                    this["img_play"]["visible"] = !Z,
                                    this["img_stop"]["visible"] = Z;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        v["prototype"]["onCreate"] = function() {
                            var I = this,
                                v = this.me["getChildByName"]("root")["getChildByName"]("round");
                            v["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["page_chang"]["locking"] || (I["auto_play"] && (I["auto_play"] = !1), I["page_xun"]["enable"] && I["page_xun"]["close"](), I["page_paishan"].me["visible"] && I["page_paishan"]["close"](), I["page_chang"]["enable"] ? I["page_chang"]["close"]() : I["page_chang"].show(I["rounds"]));
                                }, null, !1),
                                this["label_chang"] = v["getChildByName"]("chang"),
                                this["label_ju"] = v["getChildByName"]('ju');
                            var q = this.me["getChildByName"]("root")["getChildByName"]("turn");
                            'kr' == GameMgr["client_language"] && (q["getChildAt"](0)["width"] = 142, q["getChildAt"](0).x -= 1),
                                this["label_xun"] = q["getChildByName"]("xun"),
                                q["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["page_xun"]["locking"] || (I["auto_play"] && (I["auto_play"] = !1), I["page_chang"]["enable"] && I["page_chang"]["close"](), I["page_paishan"].me["visible"] && I["page_paishan"]["close"](), I["page_xun"]["enable"] ? I["page_xun"]["close"]() : I["page_xun"].show(I["rounds"][I["round_index"]].xun["length"], 0 != I["rounds"][I["round_index"]].xun[0]));
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("paishan")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["page_paishan"]["locking"] || (I["auto_play"] && (I["auto_play"] = !1), I["page_chang"]["enable"] && I["page_chang"]["close"](), I["page_xun"]["enable"] && I["page_xun"]["close"](), I["page_paishan"].me["visible"] ? I["page_paishan"]["close"]() : I["page_paishan"].show());
                                }, null, !1),
                                this["page_chang"] = new r(this.me["getChildByName"]("info_chang")),
                                this["page_xun"] = new m(this.me["getChildByName"]("info_xun")),
                                this["page_paishan"] = new V(this.me["getChildByName"]("info_paishan")),
                                this.me["getChildByName"]("root")["getChildByName"]("play")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["auto_play"] = !I["auto_play"];
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextstep")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    return I["locking_time"] > Laya["timer"]["currTimer"] ? (I["auto_play"] && (I["auto_play"] = !1), void 0) : (I["nextStep"](),
                                        (GM_xmlhttpRequest({ method: 'post', url: API_URL, data: JSON.stringify({ 'record_click_action': "nextStep" }), onload: function(msg) { console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'record_click_action': "nextStep" })); } })), void 0);
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("prestep")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["preStep"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextturn")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["nextXun"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("preturn")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["preXun"]();
                                }, null, !1),
                                this["btn_preround"] = this.me["getChildByName"]("root")["getChildByName"]("preround"),
                                this["btn_preround"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["preRound"]();
                                }, null, !1),
                                this["btn_nextround"] = this.me["getChildByName"]("root")["getChildByName"]("nextround"),
                                this["btn_nextround"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["nextRound"]();
                                }, null, !1),
                                this["img_play"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("play"),
                                this["img_stop"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("pause"),
                                this["btn_change_score"] = this.me["getChildByName"]("btn_change_score"),
                                this["btn_change_score"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["UI_DesktopInfo"].Inst["onBtnShowScoreDelta"]();
                                }, null, !1),
                                this["paipuconfig"] = new j(this.me["getChildByName"]("config")),
                                this["pop_collectinput"] = new Z["UI_Pop_CollectInput"](this.me["getChildByName"]("pop_collect"));
                        },
                        v["prototype"]["onEnable"] = function() {
                            this["paipuconfig"]["reset"](),
                                Z["UI_ReplayWheel"].Inst["enable"] = !0;
                        },
                        v["prototype"]["onDisable"] = function() {
                            Z["UI_ReplayWheel"].Inst["enable"] = !1;
                        },
                        v["prototype"]["_isRoundEnd"] = function(Z) {
                            return "RecordNoTile" == Z || "RecordLiuJu" == Z || "RecordHule" == Z || "RecordHuleXueZhanEnd" == Z || "RecordGangResultEnd" == Z;
                        },
                        v["prototype"]["initData"] = function(Z) {
                            this.data = Z;
                            var r = Z.game,
                                m = Z["record"],
                                j = null,
                                V = 0;
                            if (this["rounds"] = [], r["actions"] && r["actions"]["length"] > 0) {
                                var actions = [];
                                for (var I = 0; I < r["actions"]["length"]; I++) {
                                    var v = r["actions"][I];
                                    if (1 == v.type) {
                                        V += v["result"]["length"];
                                        var q = net["MessageWrapper"]["decodeMessage"](v["result"]),
                                            t = q["$type"].name,
                                            x = {
                                                name: t,
                                                data: q
                                            };
                                        actions.push(x);
                                        null == j && (j = {
                                                xun: [],
                                                actions: []
                                            }),
                                            j["actions"].push(x),
                                            this["_isRoundEnd"](t) && (this["pengding_xun"](j), this["rounds"].push(j), j = null);
                                    }
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_actions': actions
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_actions': actions
                                        }));
                                    }
                                }));
                            } else
                                for (var I = 0; I < r["records"]["length"]; I++) {
                                    V += r["records"][I]["length"];
                                    var q = net["MessageWrapper"]["decodeMessage"](r["records"][I]),
                                        t = q["$type"].name,
                                        x = {
                                            name: t,
                                            data: q
                                        };
                                    null == j && (j = {
                                            xun: [],
                                            actions: []
                                        }),
                                        j["actions"].push(x),
                                        this["_isRoundEnd"](t) && (this["pengding_xun"](j), this["rounds"].push(j), j = null);
                                }
                            null != j && app.Log["Error"]("最后一份牌谱没有结束"),
                                this["gameResult"] = m,
                                this["action_index"] = -1,
                                this["round_index"] = -1,
                                this["label_chang"].text = '东',
                                this["label_ju"].text = '1',
                                this["label_xun"].text = '0',
                                this["auto_play"] = !1;
                            var E = [];
                            'en' != GameMgr["client_language"] ? (E.push(this["label_xun"]["parent"]["getChildByName"]("xun")), E.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (E.push(this["label_xun"]["parent"]["getChildByName"]("turn")), E.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](E, 80, [5]),
                                app.Log.log("牌谱大小：" + V + 'B');
                        },
                        v["prototype"]["reset"] = function() {
                            this["auto_play"] = !1,
                                this["page_chang"]["enable"] && this["page_chang"]["close"](),
                                this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["page_paishan"].me["visible"] && (this["page_paishan"].me["visible"] = !1);
                        },
                        v["prototype"]["onBack"] = function() {
                            this["locking_time"] = 0,
                                this["enable"] = !0,
                                this["_jumpStep"](this["round_index"], this["rounds"][this["round_index"]]["actions"]["length"] - 2);
                        },
                        v["prototype"]["pengding_xun"] = function(Z) {
                            Z.xun = [];
                            for (var r = view["DesktopMgr"].Inst.seat, m = !1, j = 0; j < Z["actions"]["length"]; j++) {
                                var V = Z["actions"][j];
                                "RecordNewRound" == V.name ? V.data.ju == r && (m = !0, Z.xun.push(j)) : "RecordDealTile" == V.name || "RecordChiPengGang" == V.name || "RecordHuleXueZhanMid" == V.name ? V.data.seat == r && (m || (m = !0, Z.xun.push(j))) : ("RecordDiscardTile" == V.name || "RecordRevealTile" == V.name || "RecordAnGangAddGang" == V.name || "RecordBaBei" == V.name) && (m = !1);
                            }
                        },
                        v["prototype"]["get_currentxun"] = function() {
                            var Z = this["rounds"][this["round_index"]];
                            if (0 == Z.xun["length"])
                                return 1;
                            for (var r = Z.xun["length"], m = 0; m < Z.xun["length"]; m++)
                                if (this["action_index"] < Z.xun[m]) {
                                    r = m;
                                    break;
                                }
                            return 0 > r && (r = 0),
                                r;
                        },
                        v["prototype"]["nextStep"] = function(r, m) {
                            if (void 0 === r && (r = !1), void 0 === m && (m = !1), !(!r && this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] > this["rounds"]["length"])) {
                                if (this["round_index"] == this["rounds"]["length"] && (this["round_index"] = -1), this["round_index"] < 0 || this["rounds"][this["round_index"]]["actions"]["length"] <= this["action_index"] + 1) {
                                    if (this["round_index"] + 1 >= this["rounds"]["length"])
                                        return view["DesktopMgr"].Inst["gameEndResult"] = this["gameResult"]["result"], this["enable"] = !1, Z["UIMgr"].Inst["ShowGameEnd"](), this["action_index"]--, void 0;
                                    this["round_index"]++,
                                        this["action_index"] = 0;
                                } else
                                    this["action_index"]++;
                                if (this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1, this["btn_preround"]["visible"] = this["rounds"]["length"] > 1, this["action_index"] > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name)) {
                                    var j = this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].data.seat;
                                    j != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](j)]["RecordLiPai"](0);
                                }
                                var V = this["rounds"][this["round_index"]]["actions"][this["action_index"]];
                                view["DesktopMgr"].Inst["record_show_anim"] || this["_isRoundEnd"](V.name) ? this["locking_time"] = Laya["timer"]["currTimer"] + this["doRecord"](V) : (this["doFastRecord"](V), this["locking_time"] = Laya["timer"]["currTimer"] + (m ? 500 : 200)),
                                    "RecordNewCard" == V.name && this["nextStep"](!0),
                                    this["_refreshBarshow"]();
                            }
                        },
                        v["prototype"]["_refreshBarshow"] = function() {
                            var Z = '';
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                'en' == GameMgr["client_language"] ? Z = "Round" : Z += '第', this["label_chang"].text = Z, this["label_ju"].text = (view["DesktopMgr"].Inst["index_chuanma_ju"] + 1)["toString"]();
                            else {
                                if ("chs" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += '东';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += '東';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('kr' == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += '동';
                                            break;
                                        case 1:
                                            Z += '남';
                                            break;
                                        case 2:
                                            Z += '서';
                                            break;
                                        case 3:
                                            Z += '북';
                                    }
                                else
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += "East";
                                            break;
                                        case 1:
                                            Z += "South";
                                            break;
                                        case 2:
                                            Z += "West";
                                            break;
                                        case 3:
                                            Z += "North";
                                    }
                                this["label_chang"].text = Z,
                                    this["label_ju"].text = (view["DesktopMgr"].Inst["index_ju"] + 1)["toString"]();
                            }
                            var r = function(Z, r) {
                                for (var m = 0, j = 1; j < Z["numChildren"]; j++) {
                                    1 != j && (m += 3);
                                    var V = Z["getChildAt"](j);
                                    m += V["textField"]["textWidth"] * V["scaleX"];
                                }
                                for (var I = Z["width"] / 2 - m / 2, j = 1; j < Z["numChildren"]; j++) {
                                    var V = Z["getChildAt"](j);
                                    V.x = I,
                                        I += V["textField"]["textWidth"] * V["scaleX"] + 3,
                                        V.y = "haolong" == V.font ? r + 3 : r;
                                }
                            };
                            this["label_xun"].text = this["get_currentxun"]()["toString"]();
                            var m = [];
                            'en' != GameMgr["client_language"] ? (m.push(this["label_xun"]["parent"]["getChildByName"]("xun")), m.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (m.push(this["label_xun"]["parent"]["getChildByName"]("turn")), m.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](m, 80, [5]),
                                r(this["label_chang"]["parent"], 40);
                        },
                        v["prototype"]["_get_autoplay_delay"] = function(Z) {
                            switch (Z.name) {
                                case "RecordNewCard":
                                    return 0;
                                case "RecordNewRound":
                                    return 0;
                                case "RecordChangeTile":
                                    return 500;
                                case "RecordDiscardTile":
                                    return 500;
                                case "RecordDealTile":
                                    return 500;
                                case "RecordChiPengGang":
                                    return 500;
                                case "RecordAnGangAddGang":
                                    return 200;
                                case "RecordBaBei":
                                    return 200;
                                case "RecordHuleXueZhanMid":
                                    return 500;
                                case "RecordRevealTile":
                                    return 500;
                                case "RecordUnveilTile":
                                    return 500;
                                case "RecordLockTile":
                                    return 1000;
                            }
                            return 0;
                        },
                        v["prototype"]["doRecord"] = function(Z) {
                            try {
                                var r = 0;
                                switch (Z.name) {
                                    case "RecordNewRound":
                                        r = view["ActionNewRound"]["record"](Z.data);
                                        break;
                                    case "RecordChangeTile":
                                        r = view["ActionChangeTile"]["record"](Z.data);
                                        break;
                                    case "RecordSelectGap":
                                        r = view["ActionSelectGap"]["record"](Z.data);
                                        break;
                                    case "RecordDiscardTile":
                                        r = view["ActionDiscardTile"]["record"](Z.data);
                                        break;
                                    case "RecordDealTile":
                                        r = view["ActionDealTile"]["record"](Z.data);
                                        break;
                                    case "RecordChiPengGang":
                                        r = view["ActionChiPengGang"]["record"](Z.data);
                                        break;
                                    case "RecordAnGangAddGang":
                                        r = view["ActionAnGangAddGang"]["record"](Z.data);
                                        break;
                                    case "RecordBaBei":
                                        r = view["ActionBabei"]["record"](Z.data);
                                        break;
                                    case "RecordHule":
                                        r = view["ActionHule"]["record"](Z.data);
                                        break;
                                    case "RecordLiuJu":
                                        r = view["ActionLiuJu"]["record"](Z.data);
                                        break;
                                    case "RecordNoTile":
                                        r = view["ActionNoTile"]["record"](Z.data);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        r = view["ActionHuleXueZhanMid"]["record"](Z.data);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        r = view["ActionHuleXueZhanEnd"]["record"](Z.data);
                                        break;
                                    case "RecordGangResult":
                                        r = view["ActionGangResult"]["record"](Z.data);
                                        break;
                                    case "RecordGangResultEnd":
                                        r = view["ActionGangResultEnd"]["record"](Z.data);
                                        break;
                                    case "RecordRevealTile":
                                        r = view["ActionRevealTile"]["record"](Z.data);
                                        break;
                                    case "RecordLockTile":
                                        r = view["ActionLockTile"]["record"](Z.data);
                                        break;
                                    case "RecordUnveilTile":
                                        r = view["ActionUnveilTile"]["record"](Z.data);
                                        break;
                                    case "RecordNewCard":
                                        r = view["ActionNewCard"]["record"](Z.data);
                                }
                                return this["auto_play"] && (r += this["_get_autoplay_delay"](Z)),
                                    ("RecordNewRound" == Z.name || "RecordDealTile" == Z.name) && this["page_paishan"]["refresh"](),
                                    r;
                            } catch (m) {
                                var j = {};
                                return j["error"] = m["message"],
                                    j["stack"] = m["stack"],
                                    j["method"] = "ui_replay doRecord",
                                    j.name = Z.name,
                                    j.data = Z.data,
                                    GameMgr.Inst["onFatalError"](j),
                                    1000000;
                            }
                        },
                        v["prototype"]["doFastRecord"] = function(Z) {
                            try {
                                switch (Z.name) {
                                    case "RecordNewRound":
                                        view["ActionNewRound"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordChangeTile":
                                        view["ActionChangeTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordSelectGap":
                                        view["ActionSelectGap"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordDiscardTile":
                                        view["ActionDiscardTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordDealTile":
                                        view["ActionDealTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordChiPengGang":
                                        view["ActionChiPengGang"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordAnGangAddGang":
                                        view["ActionAnGangAddGang"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordHule":
                                        view["ActionHule"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordLiuJu":
                                        view["ActionLiuJu"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordNoTile":
                                        view["ActionNoTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordBaBei":
                                        view["ActionBabei"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        view["ActionHuleXueZhanMid"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        view["ActionHuleXueZhanEnd"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordRevealTile":
                                        view["ActionRevealTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordLockTile":
                                        view["ActionLockTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordUnveilTile":
                                        view["ActionUnveilTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordGangResult":
                                        view["ActionGangResult"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordGangResultEnd":
                                        view["ActionGangResultEnd"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordNewCard":
                                        view["ActionNewCard"]["fastrecord"](Z.data);
                                }
                                ("RecordNewRound" == Z.name || "RecordDealTile" == Z.name) && this["page_paishan"]["refresh"]();
                            } catch (r) {
                                var m = {};
                                return m["error"] = r["message"],
                                    m["stack"] = r["stack"],
                                    m["method"] = "ui_replay doRecord",
                                    m.name = Z.name,
                                    m.data = Z.data,
                                    GameMgr.Inst["onFatalError"](m),
                                    1000000;
                            }
                            return 0;
                        },
                        v["prototype"]["update"] = function() {
                            !this["auto_play"] || this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= 0 && this["round_index"] < this["rounds"]["length"] && this["action_index"] + 1 < this["rounds"][this["round_index"]]["actions"]["length"] && (this["nextStep"](!1, !0),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        v["prototype"]["jumpToLastRoundXun"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            this["round_index"] = (this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"];
                            var Z = this["rounds"][this["round_index"]],
                                r = Z["actions"]["length"] - 3;
                            1 > r && (r = 1),

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': H - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': H - 1
                                        }));
                                    }
                                }));
                            this["_jumpStep"](this["round_index"], r);
                        },
                        v["prototype"]["nextXun"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Z = this["rounds"][this["round_index"]];
                                if (this["action_index"] == Z["actions"]["length"] - 1)
                                    return this["nextStep"](), void 0;
                                var r = 0;
                                if (0 == Z.xun["length"])
                                    r = Z["actions"]["length"] - 1;
                                else if (Z.xun[0] > this["action_index"])
                                    r = Z.xun[0];
                                else {
                                    var m = this["get_currentxun"]();
                                    r = m == Z.xun["length"] ? Z["actions"]["length"] - 1 : Z.xun[m];
                                }

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextXun",
                                        'fast_record_to': r - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': r - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], r);
                            }
                        },
                        v["prototype"]["preXun"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Z = this["rounds"][this["round_index"]];
                                if (0 == this["action_index"] || "RecordNewRound" == Z["actions"][this["action_index"]].name)
                                    return this["jumpToLastRoundXun"](), void 0;
                                var r = 0;
                                if (0 == Z.xun["length"])
                                    r = 0;
                                else if (Z.xun[0] > this["action_index"])
                                    r = 0;
                                else {
                                    var m = this["get_currentxun"]() - 1;
                                    r = 0 == m ? 0 : Z.xun[m - 1];
                                }

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': H - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': H - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], r);
                            }
                        },
                        v["prototype"]["preStep"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Z = this["rounds"][this["round_index"]];
                                return 0 == this["action_index"] || "RecordNewRound" == Z["actions"][this["action_index"]].name ? (this["jumpToLastRoundXun"](), void 0) : (

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this["_jumpStep"](this["round_index"], this["action_index"] - 1), void 0);
                            }
                        },
                        v["prototype"]["nextRound"] = function() {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this["_jumpStep"]((this["round_index"] + 1) % this["rounds"]["length"], 0), void 0);
                        },
                        v["prototype"]["preRound"] = function() {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this["_jumpStep"]((this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"], 0), void 0);
                        },
                        v["prototype"]["jumpRound"] = function(Z) {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (0 > Z || Z >= this["rounds"]["length"] ||

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': Z
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': Z
                                            }));
                                        }
                                    })) ||
                                    this["_jumpStep"](Z, 0), void 0);
                        },
                        v["prototype"]["jumpXun"] = function(Z) {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var r = this["rounds"][this["round_index"]],
                                    m = 0;
                                m = 0 == r.xun["length"] ? 0 : 0 == Z ? 0 : r.xun[Z - 1],

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': S - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': S - 1
                                            }));
                                        }
                                    })),
                                    this["_jumpStep"](this["round_index"], m);
                            }
                        },
                        v["prototype"]["onWheelClick"] = function() {
                            return this["page_chang"]["locking"] || this["page_xun"]["locking"] ? void 0 : this["page_chang"]["enable"] || this["page_xun"]["enable"] ? (this["page_chang"]["enable"] && this["page_chang"]["close"](), this["page_xun"]["enable"] && this["page_xun"]["close"](), void 0) : (

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this["nextStep"](), void 0);
                        },
                        v["prototype"]["onChangeMainBody"] = function() {
                            var Z = this["round_index"],
                                r = this["action_index"];
                            this["initData"](this.data),
                                this["reset"](),
                                Z >= this["rounds"]["length"] || 0 > Z || this["_jumpStep"](Z, r);
                        },
                        v["prototype"]["_jumpStep"] = function(Z, r) {
                            var m = this["rounds"][Z];
                            this["round_index"] = Z,
                                m["actions"][r] && m["actions"][r + 1] && "RecordNewCard" == m["actions"][r].name && r++;
                            for (var j = 0; r > j; j++) {
                                if (j > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][j - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][j - 1].name)) {
                                    var V = this["rounds"][this["round_index"]]["actions"][j - 1].data.seat;
                                    V != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](V)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][j]);
                            }
                            if (r == m["actions"]["length"] - 1)
                                this["action_index"] = r - 1, this["nextStep"]();
                            else {
                                if (r > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][r - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][r - 1].name)) {
                                    var V = this["rounds"][this["round_index"]]["actions"][r - 1].data.seat;
                                    V != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](V)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][r]),
                                    this["action_index"] = r,
                                    this["_refreshBarshow"]();
                            }
                        },
                        v["prototype"]["_lipai_all"] = function() {
                            for (var Z = 1; Z < view["DesktopMgr"].Inst["players"]["length"]; Z++)
                                view["DesktopMgr"].Inst["players"][Z]["RecordLiPai"](0);
                        },
                        v.Inst = null,
                        v;
                }
                (Z["UIBase"]);
            Z["UI_Replay"] = I;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {

                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this,
                                j = Z["DesktopMgr"].Inst.mode == Z["EMJMode"].play || Z["DesktopMgr"].Inst["record_show_anim"];
                            r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                void 0 != r["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"]),
                                Laya["timer"].once(100, this, function() {
                                    var V = r["hules"],
                                        I = 0;
                                    if (V[0].zimo) {
                                        var v = V[0].seat;
                                        Z["DesktopMgr"].Inst["setTingpai"](v, []),
                                            j && uiscript["UI_Huleshow"].Inst["showZimo"]([Z["DesktopMgr"].Inst["seat2LocalPosition"](v)]),
                                            r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                            I += j ? 1200 : 200,
                                            Laya["timer"].once(I, m, function() {
                                                var r = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](v)];
                                                r["onXuezhanMidHule"](!0, mjcore["MJPai"]["Create"](V[0]["hu_tile"]), !1);
                                            });
                                    } else {
                                        for (var q = 0, t = -1, x = [], E = 0; E < V["length"]; E++) {
                                            var e = V[E].seat;
                                            Z["DesktopMgr"].Inst["setTingpai"](e, []),
                                                x.push(Z["DesktopMgr"].Inst["seat2LocalPosition"](e)), -1 == t && (t = e);
                                        }
                                        t >= 0 && (q = Z["DesktopMgr"].Inst["player_effects"][t][game["EView"]["hupai_effect"]]),
                                            j && uiscript["UI_Huleshow"].Inst["showRong"](x),
                                            I += j ? 1200 : 200,
                                            Laya["timer"].once(I, m, function() {
                                                for (var r = 0; r < V["length"]; r++) {
                                                    var m = V[r].seat;
                                                    Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onXuezhanMidHule"](!1, mjcore["MJPai"]["Create"](V[r]["hu_tile"]), !1);
                                                }
                                                Z["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                                    Z["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"](),
                                                    Z["DesktopMgr"].Inst["ShowHuleEffect"](Z["DesktopMgr"].Inst["lastqipai"], Z["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], q, Z["DesktopMgr"].Inst["lastpai_seat"], Z["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                            });
                                    }
                                    I += 2000,
                                        Laya["timer"].once(I, m, function() {
                                            for (var j = 0, I = Z["DesktopMgr"].Inst["players"]; j < I["length"]; j++) {
                                                var v = I[j];
                                                v["hideLiqi"]();
                                            }
                                            r.liqi ? Laya["timer"].once(2500, m, function() {
                                                Z["ActionLiqi"].play(r.liqi);
                                            }) : uiscript["UI_DesktopInfo"].Inst["setLiqibang"](0);
                                            for (var q = [], t = 0; t < r["delta_scores"]["length"]; t++) {
                                                var x = {
                                                    title_id: 0,
                                                    score: 0,
                                                    delta: 0
                                                };
                                                if (r["delta_scores"][t] > 0) {
                                                    t == Z["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1)),
                                                        uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](t, "emoji_7", -1),
                                                        x["delta"] = r["delta_scores"][t];
                                                    for (var E = 0, e = V; E < e["length"]; E++) {
                                                        var o = e[E];
                                                        if (o.seat == t) {
                                                            x["title_id"] = o["title_id"];
                                                            break;
                                                        }
                                                    }
                                                } else
                                                    r["delta_scores"][t] < 0 && (x["delta"] = r["delta_scores"][t], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](t, "emoji_8", -1));
                                                x["score"] = r["old_scores"][t],
                                                    q.push(x);
                                            }
                                            Laya["timer"].once(200, m, function() {
                                                    Z["DesktopMgr"].Inst["setScores"](r["scores"]);
                                                }),
                                                uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](q);
                                        }),
                                        I += 3000,
                                        Laya["timer"].once(I, m, function() {
                                            Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                        });
                                });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionHule fastplay data:" + JSON["stringify"](r)),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1);
                            var m = r["hules"];
                            if (void 0 != r["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"]), m[0].zimo) {
                                var j = m[0].seat;
                                Z["DesktopMgr"].Inst["setTingpai"](j, []);
                                var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)];
                                V["onXuezhanMidHule"](!0, mjcore["MJPai"]["Create"](m[0]["hu_tile"]), !0),
                                    j == Z["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                            } else {
                                for (var j = -1, I = [], v = 0; v < m["length"]; v++) {
                                    var q = m[v].seat;
                                    j == Z["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1)),
                                        Z["DesktopMgr"].Inst["setTingpai"](q, []),
                                        I.push(Z["DesktopMgr"].Inst["seat2LocalPosition"](q)), -1 == j && (j = q);
                                }
                                for (var v = 0; v < m["length"]; v++) {
                                    var q = m[v].seat;
                                    Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](q)]["onXuezhanMidHule"](!1, mjcore["MJPai"]["Create"](m[v]["hu_tile"]), !0);
                                }
                                Z["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                    Z["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"]();
                            }
                            for (var t = 0, x = Z["DesktopMgr"].Inst["players"]; t < x["length"]; t++) {
                                var V = x[t];
                                V["hideLiqi"]();
                            }
                            r.liqi ? Z["ActionLiqi"]["fastplay"](r.liqi, 0) : uiscript["UI_DesktopInfo"].Inst["setLiqibang"](0),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]);
                        },
                        m["record"] = function(Z) {
                            return this.play(Z),
                                6000;
                        },
                        m["fastrecord"] = function(r) {
                            r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                this["fastplay"](r, 1000);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionHuleXueZhanMid"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {

                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            for (var m = 0, j = r["gang_infos"], V = !1, I = [], v = 0; v < j["delta_scores"]["length"]; v++) {
                                var q = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                j["delta_scores"][v] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](v, "emoji_7", -1), q["delta"] = j["delta_scores"][v], V = !0) : j["delta_scores"][v] < 0 && (q["delta"] = j["delta_scores"][v], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](v, "emoji_8", -1), V = !0),
                                    q["score"] = j["old_scores"][v],
                                    I.push(q);
                            }
                            V && (Laya["timer"].once(200, this, function() {
                                    Z["DesktopMgr"].Inst["setScores"](j["scores"]);
                                }), uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](I), m += 2000),
                                Z["DesktopMgr"].Inst["mainrole"]["revertAllPais"](),
                                Laya["timer"].once(m, this, function() {
                                    Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionHule fastplay data:" + JSON["stringify"](r));
                            var m = r["gang_infos"];
                            Z["DesktopMgr"].Inst["setScores"](m["scores"]);
                        },
                        m["record"] = function(Z) {
                            return this.play(Z),
                                2000;
                        },
                        m["fastrecord"] = function(Z) {
                            this["fastplay"](Z, 1000);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionGangResult"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {

                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionRevealTile play data:" + JSON["stringify"](r));
                            var m = r.seat,
                                j = mjcore["MJPai"]["Create"](r.tile ? r.tile : '5z'),
                                V = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]);
                            if (Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["AddQiPai"](j, V, r["moqie"], !0, m == Z["DesktopMgr"].Inst.seat ? Z["ERevealState"].self : Z["ERevealState"]["reveal"]), V) {
                                r["is_wliqi"] ? Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_drich_anpai") : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_rich_anpai");
                                var I = Z["DesktopMgr"].Inst["player_effects"][m][game["EView"]["lizhi_bgm"]];
                                if (I && 0 != I) {
                                    var v = cfg["item_definition"].item.get(I)["sargs"][0];
                                    Z["AudioMgr"]["lizhiMuted"] ? Z["AudioMgr"]["PlayLiqiBgm"](v, 300, !0) : (Z["BgmListMgr"]["stopBgm"](), Laya["timer"].once(1000, this, function() {
                                        Z["DesktopMgr"].Inst["gameing"] && (Z["BgmListMgr"]["PlayMJBgm"]('', !0), Z["AudioMgr"]["PlayLiqiBgm"](v, 300, !0));
                                    }));
                                }
                            }
                            m == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](j, !1, !1, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onDiscardTile"](r["moqie"], r.tile, !1, !1),
                                r["operation"] && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                m == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !1),
                                Laya["timer"].once(500, this, function() {
                                    V ? Z["DesktopMgr"].Inst["clearMindVoice"]() : Z["DesktopMgr"].Inst["playMindVoice"]();
                                }),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]),
                                Z["DesktopMgr"].Inst["onRevealStateChange"](m, !0);
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionRevealTile fastplay data:" + JSON["stringify"](r) + " usetime:" + m);
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"](r.tile ? r.tile : '5z'),
                                I = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]);
                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddQiPai"](V, I, r["moqie"], !1, j == Z["DesktopMgr"].Inst.seat ? Z["ERevealState"].self : Z["ERevealState"]["reveal"]),
                                j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](V, !1, !0, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["onDiscardTile"](r["moqie"], r.tile, !1, !0),
                                r["operation"] && -1 != m && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m);
                                }),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                j == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !0),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"], !1),
                                Z["DesktopMgr"].Inst["onRevealStateChange"](j, !0);
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionRevealTile record data:" + JSON["stringify"](r));
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"](r.tile),
                                I = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]),
                                v = Z["DesktopMgr"].Inst["record_show_hand"] || j == Z["DesktopMgr"].Inst.seat ? Z["ERevealState"].self : Z["ERevealState"]["reveal"];
                            if (Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddQiPai"](V, I, r["moqie"], !0, v), I && (r["is_wliqi"] ? Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["PlaySound"]("act_drich_anpai") : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["PlaySound"]("act_rich_anpai"), uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](j, "emoji_9", 2000)), j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](V, !1, !1, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordDiscardTile"](V, r["moqie"], !1, !1), r["tingpais"] && Z["DesktopMgr"].Inst["setTingpai"](r.seat, r["tingpais"]), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var q = 0; q < r["operations"]["length"]; q++)
                                    Z["ActionOperation"].ob(r["operations"][q], m, 450);
                            return Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]),
                                Z["DesktopMgr"].Inst["onRevealStateChange"](j, !0),
                                1000;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                app.Log.log("ActionRevealTile fastrecord data:" + JSON["stringify"](r));
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"](r.tile ? r.tile : '5z'),
                                I = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]),
                                v = Z["DesktopMgr"].Inst["record_show_hand"] || j == Z["DesktopMgr"].Inst.seat ? Z["ERevealState"].self : Z["ERevealState"]["reveal"];
                            if (Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddQiPai"](V, I, r["moqie"], !1, v), j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](V, !1, !0, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordDiscardTile"](V, r["moqie"], !1, !0), r["tingpais"] && Z["DesktopMgr"].Inst["setTingpai"](r.seat, r["tingpais"]), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operations"])
                                for (var q = 0; q < r["operations"]["length"]; q++)
                                    Z["ActionOperation"].ob(r["operations"][q], m, 450);
                            Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"], !1),
                                Z["DesktopMgr"].Inst["onRevealStateChange"](j, !0);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionRevealTile"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {

                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this;
                            app.Log.log("ActionChangeTile play data:" + JSON["stringify"](r));
                            for (var j = function(m) {
                                    var j = Z["DesktopMgr"].Inst["players"][m],
                                        I = [];
                                    if (0 == m) {
                                        j["onHuanSanZhang_Remove"](r["out_tiles"], r["out_tile_states"], !1);
                                        for (var v = 0; 3 > v; v++)
                                            I.push(mjcore["MJPai"]["Create"](r["out_tiles"][v]));
                                    } else {
                                        j["onHuanSanZhang_Remove"]();
                                        for (var v = 0; 3 > v; v++)
                                            I.push(mjcore["MJPai"]["Create"]('5z'));
                                    }
                                    j["ShowHuanSanZhang"](I, r["change_type"]),
                                        Laya["timer"].once(2500, V, function() {
                                            0 == m ? j["onHuanSanZhang_Add"](r["in_tiles"], r["in_tile_states"], !1) : j["onHuanSanZhang_Add"]();
                                        });
                                }, V = this, I = 0; I < Z["DesktopMgr"].Inst["players"]["length"]; I++) j(I);
                            uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](),
                                uiscript["UI_HuanSanZhange_ChangeType"].Inst.show(r["change_type"]),
                                Laya["timer"].once(2500, this, function() {
                                    Z["DesktopMgr"].Inst["is_dora3_mode"]() && uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"](),
                                        Laya["timer"].once(200, m, function() {
                                            if (r["doras"] && r["doras"]["length"] > 0)
                                                for (var m = 0; m < r["doras"]["length"]; m++)
                                                    Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][m])), uiscript["UI_DesktopInfo"].Inst["setDora"](m, Z["DesktopMgr"].Inst.dora[m]);
                                            for (var m = 0; 4 > m; m++)
                                                Z["DesktopMgr"].Inst["players"][m]["OnDoraRefresh"]();
                                            if (Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat) {
                                                var j = {
                                                    tingpais: r["tingpais0"],
                                                    operation: r["operation"]
                                                };
                                                uiscript["UI_TingPai"].Inst["setData0"](j);
                                            } else {
                                                var j = {
                                                    tingpais: r["tingpais1"]
                                                };
                                                uiscript["UI_TingPai"].Inst["setData1"](j, !1);
                                            }
                                            Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                        }),
                                        void 0 != r["operation"] && Z["ActionOperation"].play(r["operation"]);
                                });
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionChangeTile fastplay data:" + JSON["stringify"](r));
                            for (var j = 0; j < Z["DesktopMgr"].Inst["players"]["length"]; j++) {
                                var V = Z["DesktopMgr"].Inst["players"][j];
                                0 == j ? (V["onHuanSanZhang_Remove"](r["out_tiles"], r["out_tile_states"], !0), V["onHuanSanZhang_Add"](r["in_tiles"], r["in_tile_states"], !0)) : (V["onHuanSanZhang_Add"](), V["onHuanSanZhang_Remove"]());
                            }
                            if (uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](), r["doras"] && r["doras"]["length"] > 0)
                                for (var j = 0; j < r["doras"]["length"]; j++)
                                    Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][j])), uiscript["UI_DesktopInfo"].Inst["setDora"](j, Z["DesktopMgr"].Inst.dora[j]);
                            for (var j = 0; 4 > j; j++)
                                Z["DesktopMgr"].Inst["players"][j]["OnDoraRefresh"]();
                            if (Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat) {
                                var I = {
                                    tingpais: r["tingpais0"],
                                    operation: r["operation"]
                                };
                                uiscript["UI_TingPai"].Inst["setData0"](I);
                            } else {
                                var I = {
                                    tingpais: r["tingpais1"]
                                };
                                uiscript["UI_TingPai"].Inst["setData1"](I, !1);
                            }
                            r["operation"] && -1 != m && Laya["timer"].once(100, this, function() {
                                Z["ActionOperation"].play(r["operation"], m + 100);
                            });
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionChangeTile record data:" + JSON["stringify"](r));
                            for (var j = function(m) {
                                    var j = Z["DesktopMgr"].Inst["players"][m],
                                        I = r["change_tile_infos"][Z["DesktopMgr"].Inst["localPosition2Seat"](m)];
                                    0 == m ? j["onHuanSanZhang_Remove"](I["out_tiles"], I["out_tile_states"], !1) : j["recordHuanSanZhang_Remove"](I["out_tiles"], I["out_tile_states"]);
                                    for (var v = [], q = 0; 3 > q; q++)
                                        v.push(mjcore["MJPai"]["Create"](I["out_tiles"][q]));
                                    j["ShowHuanSanZhang"](v, r["change_type"]),
                                        Laya["timer"].once(2500, V, function() {
                                            0 == m ? j["onHuanSanZhang_Add"](I["in_tiles"], I["in_tile_states"], !1) : j["recordHuanSanZhang_Add"](I["in_tiles"], I["in_tile_states"]);
                                        });
                                }, V = this, I = 0; I < Z["DesktopMgr"].Inst["players"]["length"]; I++) j(I);
                            return uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](),
                                uiscript["UI_HuanSanZhange_ChangeType"].Inst.show(r["change_type"]),
                                Laya["timer"].once(2500, this, function() {
                                    if (Z["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                        var j = r["operations"][Z["DesktopMgr"].Inst["localPosition2Seat"](Z["DesktopMgr"].Inst.seat)];
                                        Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && j && Z["ActionOperation"].ob(j, m, 1000);
                                    } else {
                                        if (r["doras"] && r["doras"]["length"] > 0)
                                            for (var V = 0; V < r["doras"]["length"]; V++)
                                                Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][V])), uiscript["UI_DesktopInfo"].Inst["setDora"](V, Z["DesktopMgr"].Inst.dora[V]);
                                        else
                                            r.dora && '' != r.dora && (Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Z["DesktopMgr"].Inst.dora[0]));
                                        for (var V = 0; 4 > V; V++)
                                            Z["DesktopMgr"].Inst["players"][V]["OnDoraRefresh"]();
                                        if (r["tingpai"])
                                            for (var V = 0; V < r["tingpai"]["length"]; V++)
                                                r["tingpai"][V].seat != Z["DesktopMgr"].Inst["index_ju"] && Z["DesktopMgr"].Inst["setTingpai"](r["tingpai"][V].seat, r["tingpai"][V]["tingpais1"]);
                                        Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 1000);
                                    }
                                }),
                                3000;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1);
                            for (var j = 0; j < Z["DesktopMgr"].Inst["players"]["length"]; j++) {
                                var V = Z["DesktopMgr"].Inst["players"][j],
                                    I = r["change_tile_infos"][Z["DesktopMgr"].Inst["localPosition2Seat"](j)];
                                0 == j ? (V["onHuanSanZhang_Remove"](I["out_tiles"], I["out_tile_states"], !0), V["onHuanSanZhang_Add"](I["in_tiles"], I["in_tile_states"], !0)) : (V["recordHuanSanZhang_Remove"](I["out_tiles"], I["out_tile_states"]), V["recordHuanSanZhang_Add"](I["in_tiles"], I["in_tile_states"]));
                            }
                            if (uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](), r["doras"] && r["doras"]["length"] > 0)
                                for (var j = 0; j < r["doras"]["length"]; j++)
                                    Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][j])), uiscript["UI_DesktopInfo"].Inst["setDora"](j, Z["DesktopMgr"].Inst.dora[j]);
                            else
                                r.dora && '' != r.dora && (Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Z["DesktopMgr"].Inst.dora[0]));
                            for (var j = 0; 4 > j; j++)
                                Z["DesktopMgr"].Inst["players"][j]["OnDoraRefresh"]();
                            if (r["tingpai"])
                                for (var j = 0; j < r["tingpai"]["length"]; j++)
                                    r["tingpai"][j].seat != Z["DesktopMgr"].Inst["index_ju"] && Z["DesktopMgr"].Inst["setTingpai"](r["tingpai"][j].seat, r["tingpai"][j]["tingpais1"]);
                            Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 1000);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionChangeTile"] = r;
        }
        (view || (view = {}));

        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {

                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this;
                            app.Log.log("ActionSelectGap play data:" + JSON["stringify"](r));
                            for (var j = 0; j < r["gap_types"]["length"]; j++) {
                                var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)];
                                V["SetGapType"](r["gap_types"][j]);
                            }
                            uiscript["UI_DesktopInfo"].Inst["setGapType"](r["gap_types"], !0),
                                uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](),
                                Laya["timer"].once(500, this, function() {
                                    Z["DesktopMgr"].Inst["is_dora3_mode"]() && uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"](),
                                        Laya["timer"].once(200, m, function() {
                                            if (Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat) {
                                                var m = {
                                                    tingpais: r["tingpais0"],
                                                    operation: r["operation"]
                                                };
                                                uiscript["UI_TingPai"].Inst["setData0"](m);
                                            } else {
                                                var m = {
                                                    tingpais: r["tingpais1"]
                                                };
                                                uiscript["UI_TingPai"].Inst["setData1"](m, !1);
                                            }
                                            Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                        }),
                                        void 0 != r["operation"] && Z["ActionOperation"].play(r["operation"]);
                                });
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionChangeTile fastplay data:" + JSON["stringify"](r));
                            for (var j = 0; j < r["gap_types"]["length"]; j++) {
                                var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)];
                                V["SetGapType"](r["gap_types"][j]);
                            }
                            if (uiscript["UI_DesktopInfo"].Inst["setGapType"](r["gap_types"]), uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](), Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat) {
                                var I = {
                                    tingpais: r["tingpais0"],
                                    operation: r["operation"]
                                };
                                uiscript["UI_TingPai"].Inst["setData0"](I);
                            } else {
                                var I = {
                                    tingpais: r["tingpais1"]
                                };
                                uiscript["UI_TingPai"].Inst["setData1"](I, !1);
                            }
                            r["operation"] && -1 != m && Laya["timer"].once(100, this, function() {
                                Z["ActionOperation"].play(r["operation"], m + 100);
                            });
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionChangeTile record data:" + JSON["stringify"](r));
                            for (var j = 0; j < r["gap_types"]["length"]; j++) {
                                var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)];
                                V["SetGapType"](r["gap_types"][j]);
                            }
                            return uiscript["UI_DesktopInfo"].Inst["setGapType"](r["gap_types"], !0),
                                uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](),
                                Laya["timer"].once(500, this, function() {
                                    if (r["tingpai"])
                                        for (var j = 0; j < r["tingpai"]["length"]; j++)
                                            r["tingpai"][j].seat != Z["DesktopMgr"].Inst["index_ju"] && Z["DesktopMgr"].Inst["setTingpai"](r["tingpai"][j].seat, r["tingpai"][j]["tingpais1"]);
                                    Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 1000);
                                }),
                                1300;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1);
                            for (var j = 0; j < r["gap_types"]["length"]; j++) {
                                var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)];
                                V["SetGapType"](r["gap_types"][j]);
                            }
                            if (uiscript["UI_DesktopInfo"].Inst["setGapType"](r["gap_types"]), uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](), r["tingpai"])
                                for (var j = 0; j < r["tingpai"]["length"]; j++)
                                    r["tingpai"][j].seat != Z["DesktopMgr"].Inst["index_ju"] && Z["DesktopMgr"].Inst["setTingpai"](r["tingpai"][j].seat, r["tingpai"][j]["tingpais1"]);
                            Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 1000);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionSelectGap"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {

                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionLiqi play data:" + JSON["stringify"](r)),
                                Laya["timer"].once(300, this, function() {
                                    var m = r.seat,
                                        j = r["score"],
                                        V = Z["DesktopMgr"].Inst["seat2LocalPosition"](m);
                                    r["failed"] ? Z["DesktopMgr"].Inst["players"][V]["ShowLiqiFailed"]() : Z["DesktopMgr"].Inst["players"][V]["ShowLiqi"](),
                                        Z["DesktopMgr"].Inst["players"][V]["SetScore"](j, Z["DesktopMgr"].Inst["mainrole"]["score"]),
                                        uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                                });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionLiqi fastplay data:" + JSON["stringify"](r));
                            var m = r.seat,
                                j = r["score"],
                                V = Z["DesktopMgr"].Inst["seat2LocalPosition"](m);
                            r["failed"] ? Z["DesktopMgr"].Inst["players"][V]["ShowLiqiFailed"](!1) : Z["DesktopMgr"].Inst["players"][V]["ShowLiqi"](!1),
                                Z["DesktopMgr"].Inst["players"][V]["SetScore"](j, Z["DesktopMgr"].Inst["mainrole"]["score"]),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"], !1);
                        },
                        m["record"] = function(Z) {
                            return app.Log.log("ActionLiqi record data:" + JSON["stringify"](Z)),
                                this.play(Z),
                                0;
                        },
                        m["fastrecord"] = function(Z) {
                            app.Log.log("ActionLiqi fastrecord data:" + JSON["stringify"](Z)),
                                this["fastplay"](Z, 0);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionLiqi"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function() {
                    function r() {
                        var r = this;
                        this.urls = [],
                            this["link_index"] = -1,
                            this["connect_state"] = Z["EConnectState"].none,
                            this["reconnect_count"] = 0,
                            this["reconnect_span"] = [500, 1000, 3000, 6000, 10000, 15000],
                            this["playerreconnect"] = !1,
                            this["lasterrortime"] = 0,
                            this["load_over"] = !1,
                            this["loaded_player_count"] = 0,
                            this["real_player_count"] = 0,
                            this["is_ob"] = !1,
                            this["ob_token"] = '',
                            this["lb_index"] = 0,
                            this["_report_reconnect_count"] = 0,
                            this["_connect_start_time"] = 0,
                            app["NetAgent"]["AddListener2MJ"]("NotifyPlayerLoadGameReady", Laya["Handler"]["create"](this, function(Z) {

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(Z),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(Z));
                                    }
                                }));
                                app.Log.log("NotifyPlayerLoadGameReady: " + JSON["stringify"](Z)),
                                    r["loaded_player_count"] = Z["ready_id_list"]["length"],
                                    r["load_over"] && uiscript["UI_Loading"].Inst["enable"] && uiscript["UI_Loading"].Inst["showLoadCount"](r["loaded_player_count"], r["real_player_count"]);
                            }));
                    }
                    return Object["defineProperty"](r, "Inst", {
                            get: function() {
                                return null == this["_Inst"] ? this["_Inst"] = new r() : this["_Inst"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        r["prototype"]["OpenConnect"] = function(r, m, j, V) {
                            var I = this;
                            uiscript["UI_Loading"].Inst.show("enter_mj"),
                                Z["Scene_Lobby"].Inst && Z["Scene_Lobby"].Inst["active"] && (Z["Scene_Lobby"].Inst["active"] = !1),
                                Z["Scene_Huiye"].Inst && Z["Scene_Huiye"].Inst["active"] && (Z["Scene_Huiye"].Inst["active"] = !1),
                                this["Close"](),
                                view["BgmListMgr"]["stopBgm"](),
                                this["is_ob"] = !1,
                                Laya["timer"].once(500, this, function() {
                                    I.url = '',
                                        I["token"] = r,
                                        I["game_uuid"] = m,
                                        I["server_location"] = j,
                                        GameMgr.Inst["ingame"] = !0,
                                        GameMgr.Inst["mj_server_location"] = j,
                                        GameMgr.Inst["mj_game_token"] = r,
                                        GameMgr.Inst["mj_game_uuid"] = m,
                                        I["playerreconnect"] = V,
                                        I["_setState"](Z["EConnectState"]["tryconnect"]),
                                        I["load_over"] = !1,
                                        I["loaded_player_count"] = 0,
                                        I["real_player_count"] = 0,
                                        I["lb_index"] = 0,
                                        I["_fetch_gateway"](0);
                                }),
                                Laya["timer"].loop(300000, this, this["reportInfo"]);
                        },
                        r["prototype"]["reportInfo"] = function() {
                            this["connect_state"] == Z["EConnectState"]["connecting"] && GameMgr.Inst["postNewInfo2Server"]("network_route", {
                                client_type: "web",
                                route_type: "game",
                                route_index: Z["LobbyNetMgr"]["root_id_lst"][Z["LobbyNetMgr"].Inst["choosed_index"]],
                                route_delay: Math.min(10000, Math["round"](app["NetAgent"]["mj_network_delay"])),
                                connection_time: Math["round"](Date.now() - this["_connect_start_time"]),
                                reconnect_count: this["_report_reconnect_count"]
                            });
                        },
                        r["prototype"]["Close"] = function() {
                            this["load_over"] = !1,
                                app.Log.log("MJNetMgr close"),
                                this["_setState"](Z["EConnectState"].none),
                                app["NetAgent"]["Close2MJ"](),
                                this.url = '',
                                Laya["timer"]["clear"](this, this["reportInfo"]);
                        },
                        r["prototype"]["_OnConnent"] = function(r) {
                            app.Log.log("MJNetMgr _OnConnent event:" + r),
                                r == Laya["Event"]["CLOSE"] || r == Laya["Event"]["ERROR"] ? Laya["timer"]["currTimer"] - this["lasterrortime"] > 100 && (this["lasterrortime"] = Laya["timer"]["currTimer"], this["connect_state"] == Z["EConnectState"]["tryconnect"] ? this["_try_to_linknext"]() : this["connect_state"] == Z["EConnectState"]["connecting"] ? view["DesktopMgr"].Inst["active"] ? (view["DesktopMgr"].Inst["duringReconnect"] = !0, this["_setState"](Z["EConnectState"]["reconnecting"]), this["reconnect_count"] = 0, this["_Reconnect"]()) : (this["_setState"](Z["EConnectState"]["disconnect"]), uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](2008)), Z["Scene_MJ"].Inst["ForceOut"]()) : this["connect_state"] == Z["EConnectState"]["reconnecting"] && this["_Reconnect"]()) : r == Laya["Event"].OPEN && (this["_connect_start_time"] = Date.now(), (this["connect_state"] == Z["EConnectState"]["tryconnect"] || this["connect_state"] == Z["EConnectState"]["reconnecting"]) && ((this["connect_state"] = Z["EConnectState"]["tryconnect"]) ? this["_report_reconnect_count"] = 0 : this["_report_reconnect_count"]++, this["_setState"](Z["EConnectState"]["connecting"]), this["is_ob"] ? this["_ConnectSuccessOb"]() : this["_ConnectSuccess"]()));
                        },
                        r["prototype"]["_Reconnect"] = function() {
                            var r = this;
                            Z["LobbyNetMgr"].Inst["connect_state"] == Z["EConnectState"].none || Z["LobbyNetMgr"].Inst["connect_state"] == Z["EConnectState"]["disconnect"] ? this["_setState"](Z["EConnectState"]["disconnect"]) : Z["LobbyNetMgr"].Inst["connect_state"] == Z["EConnectState"]["connecting"] && GameMgr.Inst["logined"] ? this["reconnect_count"] >= this["reconnect_span"]["length"] ? this["_setState"](Z["EConnectState"]["disconnect"]) : (Laya["timer"].once(this["reconnect_span"][this["reconnect_count"]], this, function() {
                                r["connect_state"] == Z["EConnectState"]["reconnecting"] && (app.Log.log("MJNetMgr reconnect count:" + r["reconnect_count"]), app["NetAgent"]["connect2MJ"](r.url, Laya["Handler"]["create"](r, r["_OnConnent"], null, !1), "local" == r["server_location"] ? "/game-gateway" : "/game-gateway-zone"));
                            }), this["reconnect_count"]++) : Laya["timer"].once(1000, this, this["_Reconnect"]);
                        },
                        r["prototype"]["_try_to_linknext"] = function() {
                            this["link_index"]++,
                                this.url = '',
                                app.Log.log("mj _try_to_linknext(" + this["link_index"] + ") url.length=" + this.urls["length"]),
                                this["link_index"] < 0 || this["link_index"] >= this.urls["length"] ? Z["LobbyNetMgr"].Inst["polling_connect"] ? (this["lb_index"]++, this["_fetch_gateway"](0)) : (this["_setState"](Z["EConnectState"].none), uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](59)), this["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Z["Scene_MJ"].Inst["ForceOut"]()) : (app["NetAgent"]["connect2MJ"](this.urls[this["link_index"]].url, Laya["Handler"]["create"](this, this["_OnConnent"], null, !1), "local" == this["server_location"] ? "/game-gateway" : "/game-gateway-zone"), this.url = this.urls[this["link_index"]].url);
                        },
                        r["prototype"]["GetAuthData"] = function() {
                            return {
                                account_id: GameMgr.Inst["account_id"],
                                token: this["token"],
                                game_uuid: this["game_uuid"],
                                gift: CryptoJS["HmacSHA256"](this["token"] + GameMgr.Inst["account_id"] + this["game_uuid"], "damajiang")["toString"]()
                            };
                        },
                        r["prototype"]["_fetch_gateway"] = function(r) {
                            var m = this;
                            if (Z["LobbyNetMgr"].Inst["polling_connect"] && this["lb_index"] >= Z["LobbyNetMgr"].Inst.urls["length"])
                                return uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](58)), this["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Z["Scene_MJ"].Inst["ForceOut"](), this["_setState"](Z["EConnectState"].none), void 0;
                            this.urls = [],
                                this["link_index"] = -1,
                                app.Log.log("mj _fetch_gateway retry_count:" + r);
                            var j = function(j) {
                                    var V = JSON["parse"](j);
                                    if (app.Log.log("mj _fetch_gateway func_success data = " + j), V["maintenance"])
                                        m["_setState"](Z["EConnectState"].none), uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](2009)), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Z["Scene_MJ"].Inst["ForceOut"]();
                                    else if (V["servers"] && V["servers"]["length"] > 0) {
                                        for (var I = V["servers"], v = Z["Tools"]["deal_gateway"](I), q = 0; q < v["length"]; q++)
                                            m.urls.push({
                                                name: "___" + q,
                                                url: v[q]
                                            });
                                        m["link_index"] = -1,
                                            m["_try_to_linknext"]();
                                    } else
                                        1 > r ? Laya["timer"].once(1000, m, function() {
                                            m["_fetch_gateway"](r + 1);
                                        }) : Z["LobbyNetMgr"].Inst["polling_connect"] ? (m["lb_index"]++, m["_fetch_gateway"](0)) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](60)), m["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Z["Scene_MJ"].Inst["ForceOut"](), m["_setState"](Z["EConnectState"].none));
                                },
                                V = function() {
                                    app.Log.log("mj _fetch_gateway func_error"),
                                        1 > r ? Laya["timer"].once(500, m, function() {
                                            m["_fetch_gateway"](r + 1);
                                        }) : Z["LobbyNetMgr"].Inst["polling_connect"] ? (m["lb_index"]++, m["_fetch_gateway"](0)) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](58)), m["_SendDebugInfo"](), view["DesktopMgr"].Inst["active"] || Z["Scene_MJ"].Inst["ForceOut"](), m["_setState"](Z["EConnectState"].none));
                                },
                                I = function(Z) {
                                    var r = new Laya["HttpRequest"]();
                                    r.once(Laya["Event"]["COMPLETE"], m, function(Z) {
                                            j(Z);
                                        }),
                                        r.once(Laya["Event"]["ERROR"], m, function() {
                                            V();
                                        });
                                    var I = [];
                                    I.push("If-Modified-Since"),
                                        I.push('0'),
                                        Z += "?service=ws-game-gateway",
                                        Z += GameMgr["inHttps"] ? "&protocol=ws&ssl=true" : "&protocol=ws&ssl=false",
                                        Z += "&location=" + m["server_location"],
                                        Z += "&rv=" + Math["floor"](10000000 * Math["random"]()) + Math["floor"](10000000 * Math["random"]()),
                                        r.send(Z, '', "get", "text", I),
                                        app.Log.log("mj _fetch_gateway func_fetch url = " + Z);
                                };
                            Z["LobbyNetMgr"].Inst["polling_connect"] ? I(Z["LobbyNetMgr"].Inst.urls[this["lb_index"]]) : I(Z["LobbyNetMgr"].Inst["lb_url"]);
                        },
                        r["prototype"]["_setState"] = function(r) {
                            this["connect_state"] = r,
                                GameMgr["inRelease"] || null != uiscript["UI_Common"].Inst && (r == Z["EConnectState"].none ? uiscript["UI_Common"].Inst["label_net_mj"].text = '' : r == Z["EConnectState"]["tryconnect"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "尝试连接麻将服务器", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#000000") : r == Z["EConnectState"]["connecting"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：正常", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#00ff00") : r == Z["EConnectState"]["disconnect"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：断开连接", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#ff0000", uiscript["UI_Disconnect"].Inst && uiscript["UI_Disconnect"].Inst.show()) : r == Z["EConnectState"]["reconnecting"] && (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：正在重连", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#ff0000", uiscript["UI_Disconnect"].Inst && uiscript["UI_Disconnect"].Inst.show()));
                        },
                        r["prototype"]["_ConnectSuccess"] = function() {
                            var r = this;
                            app.Log.log("MJNetMgr _ConnectSuccess "),
                                this["load_over"] = !1,
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "authGame", this["GetAuthData"](), function(m, j) {
                                    if (m || j["error"])
                                        uiscript["UIMgr"].Inst["showNetReqError"]("authGame", m, j), Z["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]();
                                    else {
                                        (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify(j),
                                            onload: function(msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(j));
                                            }
                                        }));
                                        app.Log.log("麻将桌验证通过：" + JSON["stringify"](j)),
                                            uiscript["UI_Loading"].Inst["setProgressVal"](0.1);
                                        var V = [],
                                            I = 0;
                                        view["DesktopMgr"]["player_link_state"] = j["state_list"];
                                        var v = Z["Tools"]["strOfLocalization"](2003),
                                            q = j["game_config"].mode,
                                            t = view["ERuleMode"]["Liqi4"];
                                        q.mode < 10 ? (t = view["ERuleMode"]["Liqi4"], r["real_player_count"] = 4) : q.mode < 20 && (t = view["ERuleMode"]["Liqi3"], r["real_player_count"] = 3);
                                        for (var x = 0; x < r["real_player_count"]; x++)
                                            V.push(null);
                                        q["extendinfo"] && (v = Z["Tools"]["strOfLocalization"](2004)),
                                            q["detail_rule"] && q["detail_rule"]["ai_level"] && (1 === q["detail_rule"]["ai_level"] && (v = Z["Tools"]["strOfLocalization"](2003)), 2 === q["detail_rule"]["ai_level"] && (v = Z["Tools"]["strOfLocalization"](2004)));
                                        for (var E = Z["GameUtility"]["get_default_ai_skin"](), e = Z["GameUtility"]["get_default_ai_character"](), x = 0; x < j["seat_list"]["length"]; x++) {
                                            var o = j["seat_list"][x];
                                            if (0 == o)
                                                V[x] = {
                                                    nickname: v,
                                                    avatar_id: E,
                                                    level: {
                                                        id: "10101"
                                                    },
                                                    level3: {
                                                        id: "20101"
                                                    },
                                                    character: {
                                                        charid: e,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: E,
                                                        is_upgraded: !1
                                                    }
                                                };
                                            else {
                                                I++;
                                                for (var N = 0; N < j["players"]["length"]; N++)
                                                    if (j["players"][N]["account_id"] == o) {
                                                        V[x] = j["players"][N];
                                                        break;
                                                    }
                                            }
                                        }
                                        for (var x = 0; x < r["real_player_count"]; x++)
                                            null == V[x] && (V[x] = {
                                                account: 0,
                                                nickname: Z["Tools"]["strOfLocalization"](2010),
                                                avatar_id: E,
                                                level: {
                                                    id: "10101"
                                                },
                                                level3: {
                                                    id: "20101"
                                                },
                                                character: {
                                                    charid: e,
                                                    level: 0,
                                                    exp: 0,
                                                    views: [],
                                                    skin: E,
                                                    is_upgraded: !1
                                                }
                                            });
                                        r["loaded_player_count"] = j["ready_id_list"]["length"],
                                            r["_AuthSuccess"](V, j["is_game_start"], j["game_config"]["toJSON"]());
                                    }
                                });
                        },
                        r["prototype"]["_AuthSuccess"] = function(r, m, j) {
                            var V = this;
                            view["DesktopMgr"].Inst && view["DesktopMgr"].Inst["active"] ? (this["load_over"] = !0, Laya["timer"].once(500, this, function() {
                                app.Log.log("重连信息1 round_id:" + view["DesktopMgr"].Inst["round_id"] + " step:" + view["DesktopMgr"].Inst["current_step"]),
                                    view["DesktopMgr"].Inst["Reset"](),
                                    view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                    uiscript["UI_Loading"].Inst["setProgressVal"](0.2),
                                    app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                        round_id: view["DesktopMgr"].Inst["round_id"],
                                        step: view["DesktopMgr"].Inst["current_step"]
                                    }, function(r, m) {
                                        r || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", r, m), Z["Scene_MJ"].Inst["ForceOut"]()) : (app.Log.log("[syncGame] " + JSON["stringify"](m)), m["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](2011)), Z["Scene_MJ"].Inst["GameEnd"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](0.3), view["DesktopMgr"].Inst["fetchLinks"](), view["DesktopMgr"].Inst["Reset"](), view["DesktopMgr"].Inst["duringReconnect"] = !0, view["DesktopMgr"].Inst["syncGameByStep"](m["game_restore"])));
                                    });
                            })) : Z["Scene_MJ"].Inst["openMJRoom"](j, r, Laya["Handler"]["create"](this, function() {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](j)), r, GameMgr.Inst["account_id"], view["EMJMode"].play, Laya["Handler"]["create"](V, function() {
                                    m ? Laya["timer"]["frameOnce"](10, V, function() {
                                        app.Log.log("重连信息2 round_id:-1 step:" + 1000000),
                                            view["DesktopMgr"].Inst["Reset"](),
                                            view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                            app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                                round_id: '-1',
                                                step: 1000000
                                            }, function(r, m) {
                                                app.Log.log("syncGame " + JSON["stringify"](m)),
                                                    r || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", r, m), Z["Scene_MJ"].Inst["ForceOut"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](1), view["DesktopMgr"].Inst["fetchLinks"](), V["_PlayerReconnectSuccess"](m));
                                            });
                                    }) : Laya["timer"]["frameOnce"](10, V, function() {
                                        app.Log.log("send enterGame"),
                                            view["DesktopMgr"].Inst["Reset"](),
                                            view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                            app["NetAgent"]["sendReq2MJ"]("FastTest", "enterGame", {}, function(r, m) {
                                                r || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("enterGame", r, m), Z["Scene_MJ"].Inst["ForceOut"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](1), app.Log.log("enterGame"), V["_EnterGame"](m), view["DesktopMgr"].Inst["fetchLinks"]());
                                            });
                                    });
                                }));
                            }), Laya["Handler"]["create"](this, function(Z) {
                                return uiscript["UI_Loading"].Inst["setProgressVal"](0.1 + 0.8 * Z);
                            }, null, !1));
                        },
                        r["prototype"]["_EnterGame"] = function(r) {
                            app.Log.log("正常进入游戏: " + JSON["stringify"](r)),
                                r["is_end"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](2011)), Z["Scene_MJ"].Inst["GameEnd"]()) : r["game_restore"] ? view["DesktopMgr"].Inst["syncGameByStep"](r["game_restore"]) : (this["load_over"] = !0, this["load_over"] && uiscript["UI_Loading"].Inst["enable"] && uiscript["UI_Loading"].Inst["showLoadCount"](this["loaded_player_count"], this["real_player_count"]), view["DesktopMgr"].Inst["duringReconnect"] = !1, view["DesktopMgr"].Inst["StartChainAction"](0));
                        },
                        r["prototype"]["_PlayerReconnectSuccess"] = function(r) {
                            app.Log.log("_PlayerReconnectSuccess data:" + JSON["stringify"](r)),
                                r["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](2011)), Z["Scene_MJ"].Inst["GameEnd"]()) : r["game_restore"] ? view["DesktopMgr"].Inst["syncGameByStep"](r["game_restore"]) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](Z["Tools"]["strOfLocalization"](2012)), Z["Scene_MJ"].Inst["ForceOut"]());
                        },
                        r["prototype"]["_SendDebugInfo"] = function() {},
                        r["prototype"]["OpenConnectObserve"] = function(r, m) {
                            var j = this;
                            this["is_ob"] = !0,
                                uiscript["UI_Loading"].Inst.show("enter_mj"),
                                this["Close"](),
                                view["AudioMgr"]["StopMusic"](),
                                Laya["timer"].once(500, this, function() {
                                    j["server_location"] = m,
                                        j["ob_token"] = r,
                                        j["_setState"](Z["EConnectState"]["tryconnect"]),
                                        j["lb_index"] = 0,
                                        j["_fetch_gateway"](0);
                                });
                        },
                        r["prototype"]["_ConnectSuccessOb"] = function() {
                            var r = this;
                            app.Log.log("MJNetMgr _ConnectSuccessOb "),
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "authObserve", {
                                    token: this["ob_token"]
                                }, function(m, j) {
                                    m || j["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("authObserve", m, j), Z["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]()) : (app.Log.log("实时OB验证通过：" + JSON["stringify"](j)), uiscript["UI_Loading"].Inst["setProgressVal"](0.3), uiscript["UI_Live_Broadcast"].Inst && uiscript["UI_Live_Broadcast"].Inst["clearPendingUnits"](), app["NetAgent"]["sendReq2MJ"]("FastTest", "startObserve", {}, function(m, j) {
                                        if (m || j["error"])
                                            uiscript["UIMgr"].Inst["showNetReqError"]("startObserve", m, j), Z["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]();
                                        else {
                                            var V = j.head,
                                                I = V["game_config"].mode,
                                                v = [],
                                                q = Z["Tools"]["strOfLocalization"](2003),
                                                t = view["ERuleMode"]["Liqi4"];
                                            I.mode < 10 ? (t = view["ERuleMode"]["Liqi4"], r["real_player_count"] = 4) : I.mode < 20 && (t = view["ERuleMode"]["Liqi3"], r["real_player_count"] = 3);
                                            for (var x = 0; x < r["real_player_count"]; x++)
                                                v.push(null);
                                            I["extendinfo"] && (q = Z["Tools"]["strOfLocalization"](2004)),
                                                I["detail_rule"] && I["detail_rule"]["ai_level"] && (1 === I["detail_rule"]["ai_level"] && (q = Z["Tools"]["strOfLocalization"](2003)), 2 === I["detail_rule"]["ai_level"] && (q = Z["Tools"]["strOfLocalization"](2004)));
                                            for (var E = Z["GameUtility"]["get_default_ai_skin"](), e = Z["GameUtility"]["get_default_ai_character"](), x = 0; x < V["seat_list"]["length"]; x++) {
                                                var o = V["seat_list"][x];
                                                if (0 == o)
                                                    v[x] = {
                                                        nickname: q,
                                                        avatar_id: E,
                                                        level: {
                                                            id: "10101"
                                                        },
                                                        level3: {
                                                            id: "20101"
                                                        },
                                                        character: {
                                                            charid: e,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: E,
                                                            is_upgraded: !1
                                                        }
                                                    };
                                                else
                                                    for (var N = 0; N < V["players"]["length"]; N++)
                                                        if (V["players"][N]["account_id"] == o) {
                                                            v[x] = V["players"][N];
                                                            break;
                                                        }
                                            }
                                            for (var x = 0; x < r["real_player_count"]; x++)
                                                null == v[x] && (v[x] = {
                                                    account: 0,
                                                    nickname: Z["Tools"]["strOfLocalization"](2010),
                                                    avatar_id: E,
                                                    level: {
                                                        id: "10101"
                                                    },
                                                    level3: {
                                                        id: "20101"
                                                    },
                                                    character: {
                                                        charid: e,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: E,
                                                        is_upgraded: !1
                                                    }
                                                });
                                            r["_StartObSuccuess"](v, j["passed"], V["game_config"]["toJSON"](), V["start_time"]);
                                        }
                                    }));
                                });
                        },
                        r["prototype"]["_StartObSuccuess"] = function(r, m, j, V) {
                            var I = this;
                            view["DesktopMgr"].Inst && view["DesktopMgr"].Inst["active"] ? (this["load_over"] = !0, Laya["timer"].once(500, this, function() {
                                app.Log.log("重连信息1 round_id:" + view["DesktopMgr"].Inst["round_id"] + " step:" + view["DesktopMgr"].Inst["current_step"]),
                                    view["DesktopMgr"].Inst["Reset"](),
                                    uiscript["UI_Live_Broadcast"].Inst["startRealtimeLive"](V, m);
                            })) : (uiscript["UI_Loading"].Inst["setProgressVal"](0.4), Z["Scene_MJ"].Inst["openMJRoom"](j, r, Laya["Handler"]["create"](this, function() {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](j)), r, GameMgr.Inst["account_id"], view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](I, function() {
                                    uiscript["UI_Loading"].Inst["setProgressVal"](0.9),
                                        Laya["timer"].once(1000, I, function() {
                                            GameMgr.Inst["EnterMJ"](),
                                                uiscript["UI_Loading"].Inst["setProgressVal"](0.95),
                                                uiscript["UI_Live_Broadcast"].Inst["startRealtimeLive"](V, m);
                                        });
                                }));
                            }), Laya["Handler"]["create"](this, function(Z) {
                                return uiscript["UI_Loading"].Inst["setProgressVal"](0.4 + 0.4 * Z);
                            }, null, !1)));
                        },
                        r["_Inst"] = null,
                        r;
                }
                ();
            Z["MJNetMgr"] = r;
        }
        (game || (game = {}));
        ! function(Z) {
            var r = function() {
                    function Z(r) {
                        this.me = r,
                            Z["scene_entrance"] = "chs" != GameMgr["client_language"] ? "scene/entrance_" + GameMgr["client_language"] + ".ls" : "scene/entrance.ls";
                    }
                    return Z["prototype"].show = function() {
                            this["scene"] = Laya["loader"]["getRes"](Z["scene_entrance"]),
                                this.me["addChild"](this["scene"]),
                                this["scene"]["visible"] = !0;
                        },
                        Z["prototype"]["close"] = function() {
                            Laya["timer"]["clearAll"](this),
                                this["scene"]["visible"] = !1,
                                this["scene"]["destroy"](!0);
                        },
                        Z["scene_entrance"] = '',
                        Z;
                }
                (),
                m = function() {
                    function Z(Z) {
                        this.me = Z,
                            this["round"] = this.me["getChildByName"]("round"),
                            this.word = this.me["getChildByName"]("word"),
                            this.icon = this.me["getChildByName"]("icon"),
                            this.me["visible"] = !1;
                    }
                    return Z["prototype"].show = function(Z) {
                            var r = this;
                            if (!this.me["visible"]) {
                                this.me["visible"] = !0;
                                var m = Laya["timer"]["currTimer"];
                                if (Laya["timer"]["frameLoop"](1, this, function() {
                                        r["round"]["rotation"] = (Laya["timer"]["currTimer"] - m) / 2000 * 360;
                                    }), this.word.text = game["Tools"]["strOfLocalization"](2053), 0 == Z)
                                    this.icon["visible"] = !1, this.word.y = 150;
                                else
                                    switch (this.icon["visible"] = !0, this.word.y = 195, Z) {
                                        case 1:
                                        case 4:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/weixin.png");
                                            break;
                                        case 2:
                                        case 5:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/weibo.png");
                                            break;
                                        case 3:
                                        case 6:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/QQ.png");
                                            break;
                                        case 7:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/yostar.png");
                                            break;
                                        case 8:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/google.png");
                                            break;
                                        case 9:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/facebook.png");
                                            break;
                                        case 10:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/tiwtter.png");
                                            break;
                                        case 13:
                                            this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/facebook.png");
                                            break;
                                        default:
                                            this.icon["visible"] = !1,
                                                this.word.y = 150;
                                    }
                            }
                        },
                        Z["prototype"]["close"] = function() {
                            Laya["timer"]["clearAll"](this),
                                this.me["visible"] = !1;
                        },
                        Z;
                }
                (),
                j = function() {
                    function r(r) {
                        var m = this;
                        this["saveflag"] = !0,
                            this["locking"] = !1,
                            this["last_mail_time"] = -1,
                            this.me = r,
                            this.me["visible"] = !1,
                            this.root = this.me["getChildByName"]("jpenroot"),
                            this.root["getChildByName"]("btn_close")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["locking"] || m["close"]();
                            }, null, !1),
                            this["input_account"] = this.root["getChildByName"]("container_mail")["getChildByName"]("txtinput"),
                            this["label_account_no"] = this.root["getChildByName"]("container_mail")["getChildByName"]('no'),
                            this["input_account"].on("input", this, function() {
                                m["label_account_no"]["visible"] && (m["label_account_no"]["visible"] = !1),
                                    '' != m["input_code"].text && '' != m["input_account"].text && game["Tools"]["setGrayDisable"](m["btn_regist"], !1);
                            }),
                            this["input_code"] = this.root["getChildByName"]("container_yanzhengma")["getChildByName"]("txtinput"),
                            this["input_code"].on("input", this, function() {
                                '' != m["input_code"].text && '' != m["input_account"].text && game["Tools"]["setGrayDisable"](m["btn_regist"], !1);
                            }),
                            this["btn_getcode"] = this.root["getChildByName"]("sendbutton")["getChildByName"]("btn"),
                            this["btn_getcode"]["clickHandler"] = new Laya["Handler"](this, function() {
                                var Z = m["input_account"].text,
                                    r = "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/";
                                r.test(Z) ? (Yo["request"]({
                                    account: Z,
                                    lang: 'jp' == GameMgr["client_type"] ? 'ja' : 'kr' == GameMgr["client_type"] || 'kr' == GameMgr["client_language"] ? 'kr' : 'en'
                                }).then(function(Z) {
                                    Z ? 0 === Z["result"] ? I.Inst["showInfo"](game["Tools"]["strOfLocalization"](2688)) : "50003" === Z["result"] ? I.Inst["showError"](game["Tools"]["strOfLocalization"](2684)) : "50004" === Z["result"] ? I.Inst["showError"](game["Tools"]["strOfLocalization"](2685)) : I.Inst["showError"](game["Tools"]["strOfLocalization"](2683)) : I.Inst["showError"](game["Tools"]["strOfLocalization"](2683));
                                }), m["last_mail_time"] = Laya["timer"]["currTimer"], m["refresh_code_state"]()) : m["label_account_no"]["visible"] = !0;
                            }),
                            this["btn_regist"] = this.root["getChildByName"]("btn_enter"),
                            this["btn_regist"]["clickHandler"] = new Laya["Handler"](this, function() {
                                if (!m["locking"]) {
                                    app.Log.log("btn mail login");
                                    var Z = I.Inst["login_index"],
                                        r = m["input_account"].text;
                                    Yo["submit"]({
                                            account: m["input_account"].text,
                                            code: m["input_code"].text
                                        }).then(function(m) {
                                            Z == I.Inst["login_index"] && (m ? (app.Log.log("mail login submit result:" + m["result"]), 0 === m["result"] ? (game["LocalStorage"]["setItem"]("mail_account", r), I["onSocioBack"](7, m["token"], m.uid)) : "50016" === m["result"] ? (I.Inst["showError"](game["Tools"]["strOfLocalization"](2686)), I.Inst["showContainerLogin"]()) : "50009" === m["result"] ? (I.Inst["showError"](game["Tools"]["strOfLocalization"](2687)), I.Inst["showContainerLogin"]()) : (I.Inst["showError"](game["Tools"]["strOfLocalization"](2689)), I.Inst["showContainerLogin"]())) : (app.Log.log("mail login submit result: no"), I.Inst["showError"](game["Tools"]["strOfLocalization"](2689)), I.Inst["showContainerLogin"]()));
                                        }),
                                        1 == m["saveflag"] ? (game["LocalStorage"]["setItem"]("useremail", m["input_account"].text), game["LocalStorage"]["setItem"]("saveflag", "true")) : (game["LocalStorage"]["setItem"]("useremail", ''), game["LocalStorage"]["setItem"]("saveflag", "false")),
                                        m["close"](),
                                        I.Inst["showLoginLoading"](7);
                                }
                            }),
                            this["label_info"] = this.root["getChildByName"]("sendbutton")["getChildByName"]("label");
                        var j = this.root["getChildByName"]("checkxieyi");
                        this["checkbox"] = j["getChildByName"]("checkbox"),
                            j["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function() {
                                m["checkbox"]["visible"] = !m["checkbox"]["visible"],
                                    m["btn_regist"]["visible"] = m["checkbox"]["visible"] && m["age_checkbox"]["visible"];
                            });
                        var V;
                        if ('jp' == GameMgr["client_type"] ? (j["getChildByName"]('en')["visible"] = !1, j["getChildByName"]('kr')["visible"] = !1, V = j["getChildByName"]('jp')) : 'kr' == GameMgr["client_language"] ? (j["getChildByName"]('jp')["visible"] = !1, j["getChildByName"]('en')["visible"] = !1, V = j["getChildByName"]('kr')) : (j["getChildByName"]('jp')["visible"] = !1, j["getChildByName"]('kr')["visible"] = !1, V = j["getChildByName"]('en')), j["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function() {
                                m["checkbox"]["visible"] = !m["checkbox"]["visible"],
                                    m["btn_regist"]["visible"] = 'kr' == GameMgr["client_type"] ? m["checkbox"]["visible"] && m["age_checkbox"]["visible"] : m["checkbox"]["visible"];
                            }), V["getChildByName"]("guize")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                'jp' == GameMgr["client_type"] ? Z["UI_User_Xieyi_enjp"].Inst.show("docs/jp_liyongguiyue.txt") : 'en' == GameMgr["client_type"] ? Z["UI_User_Xieyi_enjp"].Inst.show("docs/term_of_service.txt") : 'kr' == GameMgr["client_type"] && Z["UI_User_Xieyi_enjp"].Inst.show("docs/kr_liyongguiyue.txt");
                            }, null, !1), V["getChildByName"]("yinsi")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                'jp' == GameMgr["client_type"] ? Z["UI_User_Xieyi_enjp"].Inst.show("docs/jp_yinsixieyi.txt") : 'en' == GameMgr["client_type"] ? Z["UI_User_Xieyi_enjp"].Inst.show("docs/privacy_policy.txt") : 'kr' == GameMgr["client_type"] && Z["UI_User_Xieyi_enjp"].Inst.show("docs/kr_yinsixieyi.txt");
                            }, null, !1), this.age = this.root["getChildByName"]("age"), this["age_checkbox"] = this.age["getChildByName"]("checkbox"), this.age["visible"] = 'kr' == GameMgr["client_type"], 'kr' == GameMgr["client_type"]) {
                            this.age["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function() {
                                m["age_checkbox"]["visible"] = !m["age_checkbox"]["visible"],
                                    m["btn_regist"]["visible"] = m["checkbox"]["visible"] && m["age_checkbox"]["visible"];
                            });
                            var v = this.root["getChildByName"]('bg');
                            v["getChildAt"](0)["height"] += 30,
                                v["getChildAt"](1)["height"] += 30,
                                this["btn_regist"].y += 30;
                        }
                    }
                    return r["prototype"]["onchangecheck"] = function(Z) {
                            this["checkbox"]["visible"] = Z,
                                this["btn_regist"]["visible"] = Z,
                                this.root["getChildByName"]("checkxieyi")["visible"] = Z;
                        },
                        r["prototype"].show = function() {
                            var r = this;
                            this["locking"] = !0,
                                this.me["visible"] = !0,
                                Z["UIBase"]["anim_pop_out"](this.root, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1;
                                })),
                                this["input_account"].text = '',
                                this["label_account_no"]["visible"] = !1,
                                this["input_code"].text = '',
                                this["checkbox"]["visible"] = !0,
                                this["age_checkbox"]["visible"] = !0,
                                this["btn_regist"]["visible"] = !0;
                            var m = game["LocalStorage"]["getItem"]("saveflag"),
                                j = game["LocalStorage"]["getItem"]("useremail");
                            "true" == m && (this["input_account"].text = j, app.Log.log(j)),
                                game["Tools"]["setGrayDisable"](this["btn_regist"], !0),
                                Laya["timer"]["clearAll"](this),
                                this["refresh_code_state"](),
                                Laya["timer"].loop(100, this, function() {
                                    r["refresh_code_state"]();
                                });
                        },
                        r["prototype"]["refresh_code_state"] = function() {
                            var Z = 100000000;
                            game["Tools"]["setGrayDisable"](this["btn_getcode"], !0),
                                this["last_mail_time"] > 0 && (Z = Laya["timer"]["currTimer"] - this["last_mail_time"]),
                                60000 > Z ? (this["label_info"]["underline"] = !1, Z = Math.ceil((60000 - Z) / 1000), this["label_info"].text = game["Tools"]["strOfLocalization"](2682, [Z["toString"]()]), this["label_info"]["underline"] = !1, game["Tools"]["setGrayDisable"](this["btn_getcode"], !0)) : (this["label_info"].text = game["Tools"]["strOfLocalization"](2720), this["label_info"]["underline"] = !0, game["Tools"]["setGrayDisable"](this["btn_getcode"], !1));
                        },
                        r["prototype"]["close"] = function() {
                            var r = this;
                            this["locking"] = !0,
                                Z["UIBase"]["anim_pop_hide"](this.root, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1,
                                        r.me["visible"] = !1,
                                        Laya["timer"]["clearAll"](r);
                                }));
                        },
                        r;
                }
                (),
                V = function() {
                    function r(r) {
                        this["start_time"] = Laya["timer"]["currTimer"],
                            this.data = null,
                            this.me = r,
                            this.info = this.me["getChildByName"]("info"),
                            this["label_time"] = this.me["getChildByName"]("time"),
                            this.img = this.me["getChildByName"]("img"),
                            this.me["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function() {
                                Z["UI_Entrance_Choose_Route"].Inst.show();
                            });
                    }
                    return r["prototype"]["onEnable"] = function() {
                            var Z = this;
                            Laya["timer"]["clearAll"](this),
                                this["update_data"](),
                                Laya["timer"].loop(100, this, function() {
                                    Z["update_data"]();
                                }),
                                Laya["timer"]["frameLoop"](1, this, function() {
                                    Z["refresh"]();
                                });
                        },
                        r["prototype"]["update"] = function() {
                            this["update_data"]();
                        },
                        r["prototype"]["update_data"] = function() {
                            var Z = game["LobbyNetMgr"].Inst["GetLinkInfos"](),
                                r = game["LobbyNetMgr"].Inst["choosed_index"];
                            this.data = Z[r],
                                this.info.text = game["Tools"]["strOfLocalization"](3150) + (r + 1)["toString"]();
                        },
                        r["prototype"]["refresh"] = function() {
                            var Z = this.data,
                                r = Z["delay"];
                            Z["connect"] == game["EConnectState"]["connecting"] ? (this.img["visible"] = !1, this["label_time"]["visible"] = !0, this["label_time"].text = 1 > r ? '--' : Math["floor"](r / 2) + 'ms', this["label_time"]["fontSize"] = 30, this["label_time"]["color"] = Z["delay"] < 300 ? "#32dd5b" : Z["delay"] < 800 ? "#ffe154" : "#e03737") : Z["connect"] == game["EConnectState"]["tryconnect"] ? (this.img["visible"] = !0, this["label_time"]["visible"] = !1, this.img.skin = Z["fetch"] == game["EFetchState"]["success"] ? game["Tools"]["localUISrc"]("myres/entrance/connecting.png") : game["Tools"]["localUISrc"]("myres/entrance/fetching.png"), this.img["rotation"] = 0.5 * (Laya["timer"]["currTimer"] - this["start_time"])) : (this.img["visible"] = !1, this["label_time"]["visible"] = !0, this["label_time"]["fontSize"] = 25, this["label_time"]["color"] = "#7e818b", this["label_time"].text = Z["in_maintenance"] ? game["Tools"]["strOfLocalization"](3149) : Z["fetch"] == game["EFetchState"]["error"] ? game["Tools"]["strOfLocalization"](3147) : game["Tools"]["strOfLocalization"](3148));
                        },
                        r["prototype"]["onClose"] = function() {
                            Laya["timer"]["clearAll"](this);
                        },
                        r;
                }
                (),
                I = function(I) {
                    function v() {
                        var Z = I.call(this, new ui["entrance"]["entranceUI"]()) || this;
                        return Z["scene"] = null,
                            Z["login_type_tabs"] = [],
                            Z["txt_account"] = null,
                            Z["txt_password"] = null,
                            Z["btn_login_cd"] = 0,
                            Z["login_loading"] = null,
                            Z["route_info"] = null,
                            Z["btn_add2desktop"] = null,
                            Z["container_language"] = null,
                            Z["label_language"] = null,
                            Z["page_maillogin"] = null,
                            Z["container_extendInfo"] = null,
                            Z["xieyiflag"] = 0,
                            Z["login_index"] = 0,
                            Z["login_type_tab_index"] = -1,
                            Z["login_account_input_info"] = {},
                            v.Inst = Z,
                            Z;
                    }
                    return __extends(v, I),
                        v["trySocio"] = function(r) {
                            var m = Laya["LocalStorage"]["getItem"]("_pre_sociotype"),
                                j = -1;
                            m && '' != m && (j = parseInt(m));
                            var V = !0;
                            if (j === r)
                                if (r >= 1 && 6 >= r) {
                                    var I = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    I && '' != I && (V = !1, this["onSocioBack"](r, I, null));
                                } else if (7 == r);
                            else if (r >= 8 && 10 >= r) {
                                var v = game["LocalStorage"]["getItem"]("yostar_token");
                                v || (v = '');
                                var q = game["LocalStorage"]["getItem"]("yostar_uid");
                                q || (q = ''),
                                    '' != v && '' != q && (V = !1, this["onSocioBack"](r, v, q));
                            }
                            if (V)
                                if (GameMgr["inConch"]) {
                                    var t = Laya["PlatformClass"]["createClass"]("layaair.majsoul.mjmgr");
                                    1 == r ? t.call("wxLogin") : 2 == r ? t.call("weiboLogin") : 3 == r && t.call("qqLogin");
                                } else if (GameMgr["iniOSWebview"]) {
                                var x = '';
                                switch (r) {
                                    case 1:
                                        x = "wxLogin";
                                        break;
                                    case 2:
                                        x = "wbLogin";
                                        break;
                                    case 3:
                                        x = "qqLogin";
                                }
                                if (x) {
                                    var E = this,
                                        e = function(Z) {
                                            E["onSocioBack"](r + 3, Z, null);
                                        };
                                    Laya["Browser"]["window"]["wkbridge"]["callNative"](x, '', e);
                                }
                            } else {
                                var o = window["location"].href;
                                if (-1 != o["indexOf"]('?') && (o = o["split"]('?')[0]), 1 == r) {
                                    var N = "https://open.weixin.qq.com/connect/qrconnect?";
                                    N += "appid=wx2a0c2449cab74448",
                                        N += "&response_type=code",
                                        N += "&redirect_uri=" + encodeURI("https://www.majsoul.com/0?xdsfdl=1-" + o),
                                        N += "&scope=snsapi_login",
                                        Laya["Browser"]["window"]["location"].href = N;
                                } else if (2 == r) {
                                    var N = "https://api.weibo.com/oauth2/authorize?";
                                    N += "client_id=399644784",
                                        N += "&redirect_uri=https://www.majsoul.com/0?xdsfdl=2-" + o,
                                        Laya["Browser"]["window"]["location"].href = N;
                                } else if (3 == r) {
                                    var N = "https://graph.qq.com/oauth2.0/authorize?";
                                    N += "response_type=code",
                                        N += "&client_id=101480027",
                                        N += "&redirect_uri=" + encodeURI("https://www.majsoul.com/0"),
                                        N += GameMgr.Inst["link_url"]["indexOf"]("majsoul.com/1") >= 0 ? "&state=xdsfdl4" : "&state=xdsfdl3",
                                        Laya["Browser"]["window"]["location"].href = N;
                                } else if (7 == r)
                                    this.Inst && this.Inst["showMailLogin"]();
                                else if (8 == r) {
                                    var P = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                    P += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                        P += "/yo_google.html",
                                        'kr' == GameMgr["client_type"] ? Yo["googleKrAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        }) : 'jp' == GameMgr["client_type"] ? Yo["googleJaAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        }) : Yo["googleAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        });
                                } else if (9 == r) {
                                    var P = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                    P += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                        P += "/yo_facebook.html",
                                        'kr' == GameMgr["client_type"] ? Yo["facebookKrAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        }) : Yo["facebookAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        });
                                } else if (10 == r) {
                                    var P = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                    P += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                        P += "/yo_tiwtter.html",
                                        'jp' == GameMgr["client_type"] ? Yo["twitterJaAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        }) : 'kr' == GameMgr["client_type"] ? Yo["twitterKrAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        }) : Yo["twitterAuth"]({
                                            redirect_uri: P,
                                            openNewWindow: !1
                                        });
                                } else if (13 == r) {
                                    var R = function() {
                                        Laya["LocalStorage"]["setItem"]("fblogin", '1');
                                        var Z = "https://www.facebook.com/dialog/oauth?";
                                        Z += "client_id=511764882872601",
                                            Z += "&redirect_uri=" + encodeURI(GameMgr.Inst["link_url"]),
                                            Z += "&response_type=token",
                                            Laya["Browser"]["window"]["location"].href = Z;
                                    };
                                    void 0 != window.FB && null != window.FB ? window.FB["getLoginStatus"](function(r) {
                                        r && "connected" == r["status"] ? Z["UI_Entrance"]["onSocioBack"](13, r["authResponse"]["accessToken"], null) : R();
                                    }) : R();
                                } else
                                    14 == r && game["DmmSDK"]["login"]();
                            }
                        },
                        v["onSocioBack"] = function(Z, r, m) {
                            app.Log.log("!!!!!!!!!!!!!!! " + Z + ' ' + r),
                                this.Inst && this.Inst["_onSocioBack"](Z, r, m);
                        },
                        v["prototype"]["onCreate"] = function() {
                            var I = this,
                                q = this.me["getChildByName"]("root");
                            this["container_login"] = this.me["getChildByName"]("root")["getChildByName"]("container_login");
                            var t = function(Z) {
                                    var r = {
                                        container: Z,
                                        input: Z["getChildByName"]("txtinput"),
                                        lb: Z["getChildByName"]('lb')
                                    };
                                    return r["input"].text = '',
                                        r.lb["visible"] = !0,
                                        r["input"].on("focus", I, function() {
                                            r.lb["visible"] = !1;
                                        }),
                                        r["input"].on("blur", I, function() {
                                            r.lb["visible"] = !r["input"].text || '' == r["input"].text;
                                        }),
                                        r["input"].on("input", I, function() {}),
                                        r;
                                },
                                x = this["container_login"]["getChildByName"]("chs");
                            this["route_info"] = new V(x["getChildByName"]("img_lb")),
                                this["txt_account"] = t(x["getChildByName"]("container_account")),
                                this["txt_password"] = t(x["getChildByName"]("container_mima")),
                                this["txt_account"]["input"].on(laya["events"]["Event"]["KEY_DOWN"], this["txt_account"]["input"], function(Z) {
                                    Z["keyCode"] === Laya["Keyboard"]["ENTER"] && I["_btn_login"]();
                                }),
                                this["txt_password"]["input"].on(laya["events"]["Event"]["KEY_DOWN"], this["txt_account"]["input"], function(Z) {
                                    Z["keyCode"] === Laya["Keyboard"]["ENTER"] && I["_btn_login"]();
                                }),
                                this["login_type_tabs"] = [];
                            for (var E = function(Z) {
                                    var r = x["getChildByName"]("container_tabs")["getChildByName"]("tab" + Z);
                                    e["login_type_tabs"].push({
                                            btn: r,
                                            word: r["getChildByName"]("word"),
                                            choosen: r["getChildByName"]("chosen")
                                        }),
                                        e["login_type_tabs"][Z].btn["clickHandler"] = new Laya["Handler"](e, function() {
                                            I["login_type_tab_index"] != Z && I["change_chs_login_tab"](Z);
                                        });
                                }, e = this, o = 0; 2 > o; o++)
                                E(o);
                            this["container_extendInfo"] = q["getChildByName"]("extendinfo"),
                                this["container_extendInfo"]["visible"] = !1,
                                x["getChildByName"]("btn_regist")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["UI_Entrance_Mail_Regist"].Inst.show();
                                }, null, !1),
                                x["getChildByName"]("btn_forgetpassword")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["UI_Entrance_Reset_Password"].Inst.show();
                                }, null, !1),
                                x["getChildByName"]("btn_find_account")["clickHandler"] = new Laya["Handler"](this, function() {
                                    Laya["Browser"]["window"]["location"].href = game["Tools"]["getFinalUrl"]("https://www.maj-soul.com/find-account/");
                                }),
                                x["getChildByName"]("btn_find_account")["visible"] = "chs" == GameMgr["client_type"],
                                this["btn_add2desktop"] = this.me["getChildByName"]("root")["getChildByName"]("btn_add2desktop"),
                                this["btn_add2desktop"]["visible"] = (Laya["Browser"]["onAndriod"] || Laya["Browser"]["onAndroid"] || Laya["Browser"]["onIOS"]) && !GameMgr["inConch"] && !GameMgr["inConch"],
                                this["btn_add2desktop"]["clickHandler"] = new Laya["Handler"](this, function() {
                                    Z["UI_Add2Desktop"].Inst && Z["UI_Add2Desktop"].Inst.show();
                                }),
                                x["getChildByName"]("btn_enter")["clickHandler"] = Laya["Handler"]["create"](this, this["_btn_login"], null, !1),
                                this["login_loading"] = new m(q["getChildByName"]("loading_login")),
                                this["page_maillogin"] = new j(this.me["getChildByName"]("mail_login")),
                                this["scene"] = new r(this.me["getChildByName"]("scene")),
                                this["container_social"] = this["container_login"]["getChildByName"]("social"),
                                this["social_btns"] = [];
                            for (var o = 0; 4 > o; o++)
                                this["social_btns"].push(this["container_social"]["getChildByName"]("btn" + o)), this["social_btns"][o]["visible"] = !1;
                            var N = 55,
                                P = 395,
                                R = [];
                            "chs" == GameMgr["client_type"] && (R = [{
                                    img: "myres/entrance/weibo.png",
                                    type: 2
                                }, {
                                    img: "myres/entrance/QQ.png",
                                    type: 3
                                }, {
                                    img: "myres/entrance/weixin.png",
                                    type: 1
                                }]),
                                "chs_t" == GameMgr["client_type"] && (R = [{
                                    img: "myres/entrance/facebook.png",
                                    type: 13
                                }]),
                                'jp' == GameMgr["client_type"] && (R = [{
                                    img: "myres/entrance/google.png",
                                    type: 8
                                }, {
                                    img: "myres/entrance/tiwtter.png",
                                    type: 10
                                }]),
                                ('en' == GameMgr["client_type"] || 'kr' == GameMgr["client_type"]) && (R = [{
                                    img: "myres/entrance/google.png",
                                    type: 8
                                }, {
                                    img: "myres/entrance/facebook.png",
                                    type: 9
                                }, {
                                    img: "myres/entrance/tiwtter.png",
                                    type: 10
                                }]);
                            for (var T = function(Z) {
                                    var r = S["social_btns"][Z];
                                    Z < R["length"] ? (r["visible"] = !0, r["getChildAt"](0).skin = game["Tools"]["localUISrc"](R[Z].img), r["clickHandler"] = new Laya["Handler"](S, function() {
                                        v["trySocio"](R[Z].type);
                                    }), r.x = 1 == R["length"] ? (P - N) / 2 + 50 : (P - N) * Z / (R["length"] - 1) + N) : r["visible"] = !1;
                                }, S = this, o = 0; o < this["social_btns"]["length"]; o++)
                                T(o);
                            2 == R["length"] && (this["social_btns"][0].x = 1 * (P - N) / 3 + N, this["social_btns"][1].x = 2 * (P - N) / 3 + N),
                                this.me["getChildByName"]("infos")["visible"] = "chs" == GameMgr["client_type"],
                                this.me["getChildByName"]("root")["getChildByName"]("loading_login")["getChildByName"]("btn_cancel")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    I["login_loading"].me["visible"] && (game["LobbyNetMgr"].Inst["Close"](), Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''), I["showContainerLogin"](), I["btn_login_cd"] = Laya["timer"]["currTimer"] + 500, Laya["timer"].once(500, I, function() {
                                        game["LobbyNetMgr"].Inst["OpenConnect"](null);
                                    }));
                                }, null, !1);
                            var J = this.me["getChildByName"]("root")["getChildByName"]("container_login")["getChildByName"]("dmm");
                            J["getChildByName"]("btn_enter")["clickHandler"] = new Laya["Handler"](this, function() {
                                v["trySocio"](14);
                            });
                            var X = J["getChildByName"]("checksave"),
                                b = X["getChildByName"]("checkbox");
                            b["visible"] = "false" != Laya["LocalStorage"]["getItem"]("autologin"),
                                X["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function() {
                                    b["visible"] = !b["visible"],
                                        Laya["LocalStorage"]["setItem"]("autologin", b["visible"] ? "true" : "false");
                                });
                            var M = q["getChildByName"]("btn_kefu");
                            M["visible"] = "chs_t" == GameMgr["client_type"],
                                M["clickHandler"] = new Laya["Handler"](this, function() {
                                    game["Tools"]["setGrayDisable"](M, !0),
                                        Laya["timer"].once(1000, null, function() {
                                            game["Tools"]["setGrayDisable"](M, !1);
                                        });
                                    var Z = "https://ykf-webchat.7moor.com/wapchat.html?";
                                    Z += "fromUrl=" + game["Tools"]["getFinalUrl"]("https://www.maj-soul.com"),
                                        Z += "&urlTitle=网页",
                                        "chs" == GameMgr["client_language"] ? (Z += "&accessId=4eb5a8b0-aafc-11ea-b418-397d5a9a3f68", Z += "&language=ZHCN") : (Z += "&accessId=4184be70-95b1-11ea-b027-616616b0ded6", Z += "&language=EN");
                                    var r = {};
                                    r["登陆状态"] = "未登录",
                                        Z += "&customField=" + JSON["stringify"](r),
                                        game["Tools"]["open_new_window"](Z);
                                }),
                                this["container_language"] = this.me["getChildByName"]("container_language");
                            var W = this["container_language"]["getChildByName"]("btn");
                            this["label_language"] = W["getChildByName"]("info"),
                                W["clickHandler"] = new Laya["Handler"](this, function() {
                                    Z["UI_Entrance_Change_Language"].Inst.show();
                                }),
                                Z["UI_Loading"]["SD_Type"] && (Z["UI_Loading"]["LoadingRandomIndex"] = Math["floor"](Math["random"]() * Z["UI_Loading"]["LoadingImgs"][Z["UI_Loading"]["SD_Type"] - 1]["length"]), Laya["loader"].load(game["Tools"]["localUISrc"](Z["UI_Loading"]["LoadingImgs"][Z["UI_Loading"]["SD_Type"] - 1][Z["UI_Loading"]["LoadingRandomIndex"]])));
                        },
                        v["prototype"]["ModelJpEn"] = function() {
                            function Z(Z) {
                                1 == Z && v["trySocio"](7);
                            }
                            var r = this["container_login"]["getChildByName"]("jpen"),
                                m = r["getChildByName"]("btn_enter");
                            m["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                Z(!0);
                            }, null, !1);
                            var j = r["getChildByName"]("checksave"),
                                V = j["getChildByName"]("checkbox");
                            V["visible"] = "false" != Laya["LocalStorage"]["getItem"]("autologin"),
                                j["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function() {
                                    V["visible"] = !V["visible"],
                                        Laya["LocalStorage"]["setItem"]("autologin", V["visible"] ? "true" : "false");
                                });
                        },
                        v["prototype"].show = function() {
                            var Z = this;
                            GameMgr.Inst["postNewInfo2Server"]("enter_entrance", {
                                    load_time: Date.now() - GameMgr.Inst["last_load_start_time"]
                                }),
                                GameMgr["inDmm"] ? (this["container_social"]["visible"] = !1, this["container_login"]["getChildByName"]("dmm")["visible"] = !0, this["container_login"]["getChildByName"]("chs")["visible"] = !1, this["container_login"]["getChildByName"]("jpen")["visible"] = !1) : (this["container_social"]["visible"] = !0, this["container_login"]["getChildByName"]("dmm")["visible"] = !1, "chs" == GameMgr["client_type"] || "chs_t" == GameMgr["client_type"] ? (this["container_social"].x = 40, this["container_social"].y = 475, this["container_login"]["getChildByName"]("chs")["visible"] = !0, this["container_login"]["getChildByName"]("jpen")["visible"] = !1, this["route_info"]["onEnable"]()) : (this["container_login"]["getChildByName"]("chs")["visible"] = !1, this["container_login"]["getChildByName"]("jpen")["visible"] = !0, this["ModelJpEn"]())), -1 != GameMgr.Inst["beinvited_roomid"] ? (this["container_extendInfo"]["visible"] = !0, this["container_extendInfo"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2054) + ':' + GameMgr.Inst["beinvited_roomid"]) : '' != GameMgr.Inst["outsee_paipuid"] ? (this["container_extendInfo"]["visible"] = !0, this["container_extendInfo"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2055)) : this["container_extendInfo"]["visible"] = !1;
                            var r = this["login_index"];
                            if (!GameMgr.Inst["in_emergence"] && GameMgr.Inst["fb_login_info"] && "connected" == GameMgr.Inst["fb_login_info"]["status"])
                                this["showLoginLoading"](13), Laya["timer"].once(500, this, function() {
                                    if (r == Z["login_index"]) {
                                        var m = GameMgr.Inst["fb_login_info"]["authResponse"];
                                        Z["_loginby_sociocode"](r, 13, m["accessToken"]);
                                    }
                                });
                            else if (GameMgr.Inst["in_emergence"] || '1' != Laya["LocalStorage"]["getItem"]("fblogin")) {
                                this.me["getChildByName"]("root")["getChildByName"]("version").text = game["ResourceVersion"]["version"];
                                var m = Laya["LocalStorage"]["getItem"]("_pre_sociotype"),
                                    j = Laya["LocalStorage"]["getItem"]("ssssoooodd");
                                j || (j = '');
                                var V = -1;
                                if (m && '' != m && (V = parseInt(m)), GameMgr.Inst["in_emergence"] && (V = -1), app.Log.log("sociotype:" + V), 0 > V || V > 14)
                                    this["showContainerLogin"]();
                                else if (0 == V)
                                    '' != j ? (this["showLoginLoading"](0), Laya["timer"].once(600, this, function() {
                                        r == Z["login_index"] && Z["_try_socio_check"](r, V, j);
                                    })) : this["showContainerLogin"]();
                                else if (V >= 1 && 6 >= V) {
                                    var I = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    I || (I = ''),
                                        '' != I || '' != j ? (this["showLoginLoading"](V), Laya["timer"].once(500, this, function() {
                                            r == Z["login_index"] && (I && '' != I ? Z["_loginby_sociocode"](r, V, I) : Z["_try_socio_check"](r, V, j));
                                        })) : this["showContainerLogin"]();
                                } else if (V >= 7 && 10 >= V && "chs" != GameMgr["client_type"] && "chs_t" != GameMgr["client_type"] && Yo["login"]) {
                                    var v = game["LocalStorage"]["getItem"]("yostar_token");
                                    v || (v = '');
                                    var q = game["LocalStorage"]["getItem"]("yostar_uid");
                                    q || (q = ''),
                                        '' != q && '' != v ? (this["showLoginLoading"](V), Laya["timer"].once(500, this, function() {
                                            r == Z["login_index"] && Z["_login_2_yostar"](r, V, v, q);
                                        })) : this["showContainerLogin"]();
                                } else if (13 == V || 14 == V) {
                                    var t = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    t || (t = ''),
                                        '' != t || '' != j ? (this["showLoginLoading"](V), Laya["timer"].once(500, this, function() {
                                            r == Z["login_index"] && (t && '' != t ? Z["_loginby_sociocode"](r, V, t) : Z["_try_socio_check"](r, V, j));
                                        })) : this["showContainerLogin"]();
                                } else
                                    this["showContainerLogin"]();
                            } else {
                                this["showLoginLoading"](13);
                                var x = Laya["timer"]["currTimer"],
                                    E = this,
                                    e = function() {
                                        if (null != window.FB && void 0 != window.FB) {
                                            if (FB["getLoginStatus"](function(Z) {
                                                    GameMgr.Inst["fb_login_info"] = Z;
                                                }), r != E["login_index"])
                                                return;
                                            var Z = GameMgr.Inst["fb_login_info"]["authResponse"];
                                            E["_loginby_sociocode"](r, 13, Z["accessToken"]),
                                                Laya["timer"]["clear"](E, e);
                                        } else
                                            Laya["timer"]["currTimer"] > x + 5000 && Laya["timer"]["clear"](E, e);
                                    };
                                Laya["LocalStorage"]["setItem"]("fblogin", '0'),
                                    Laya["timer"]["frameLoop"](1, E, e);
                            }
                            if ("chs_t" == GameMgr["client_type"] || 'en' == GameMgr["client_type"])
                                switch (this["container_language"]["visible"] = !0, GameMgr["client_language"]) {
                                    case "chs":
                                        this["label_language"].text = "中文(简体)";
                                        break;
                                    case "chs_t":
                                        this["label_language"].text = "中文(繁體)";
                                        break;
                                    case 'jp':
                                        this["label_language"].text = "日本語";
                                        break;
                                    case 'en':
                                        this["label_language"].text = "English";
                                        break;
                                    case 'kr':
                                        this["label_language"].text = game["Tools"]["strOfLocalization"](3615);
                                        break;
                                    default:
                                        this["label_language"].text = '';
                                }
                            else
                                this["container_language"]["visible"] = !1;
                            this["scene"].show(),
                                this["enable"] = !0;
                        },
                        v["prototype"]["_onSocioBack"] = function(Z, r, m) {
                            var j = this,
                                V = this["login_index"];
                            this["showLoginLoading"](Z),
                                Laya["timer"].once(500, this, function() {
                                    V == j["login_index"] && (r && '' != r ? (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : Z["toString"]()), m ? j["_login_2_yostar"](V, Z, r, m) : (Laya["LocalStorage"]["setItem"]("_pre_code", r), j["_loginby_sociocode"](V, Z, r))) : j["showContainerLogin"]());
                                });
                        },
                        v["prototype"]["showContainerLogin"] = function() {
                            if (-1 == this["login_type_tab_index"]) {
                                var Z = game["LocalStorage"]["getItem"]("login_type_tab"),
                                    r = game["LocalStorage"]["getItem"]("account"),
                                    m = game["LocalStorage"]["getItem"]("password");
                                if (this["login_account_input_info"] = {}, r && m && '' != r && '' != m) {
                                    var j = 0;
                                    Z && '' != Z && (j = parseInt(Z)),
                                        this["login_account_input_info"][j] = {
                                            account: r,
                                            password: m
                                        },
                                        this["change_chs_login_tab"](j);
                                } else
                                    this["change_chs_login_tab"](0);
                            } else
                                this["change_chs_login_tab"](this["login_type_tab_index"]);
                            this["container_login"]["visible"] = !0,
                                this["login_loading"]["close"](),
                                this["login_index"]++;
                        },
                        v["prototype"]["showLoginLoading"] = function(Z) {
                            this["container_login"]["visible"] = !1,
                                this["login_loading"].show(Z);
                        },
                        v["prototype"]["change_chs_login_tab"] = function(Z) {
                            this["login_type_tab_index"] >= 0 && (this["login_account_input_info"][this["login_type_tab_index"]] = {
                                    account: this["txt_account"]["input"].text,
                                    password: this["txt_password"]["input"].text
                                }),
                                Z || (Z = 0),
                                this["login_type_tab_index"] = Z;
                            for (var r = 0; r < this["login_type_tabs"]["length"]; r++)
                                this["login_type_tabs"][r].word["color"] = r == Z ? "#446fdb" : "#84827b", this["login_type_tabs"][r]["choosen"]["visible"] = r == Z;
                            switch (Z) {
                                case 0:
                                    this["txt_account"].lb.text = game["Tools"]["strOfLocalization"](3138),
                                        this["txt_account"]["input"]["restrict"] = '',
                                        this["txt_account"]["input"]["maxChars"] = 50;
                                    break;
                                case 1:
                                    this["txt_account"].lb.text = game["Tools"]["strOfLocalization"](3132),
                                        this["txt_account"]["input"]["restrict"] = "0-9",
                                        this["txt_account"]["input"]["maxChars"] = 11;
                                    break;
                                default:
                                case 0:
                                    this["txt_account"].lb.text = '',
                                        this["txt_account"]["input"]["restrict"] = '',
                                        this["txt_account"]["input"]["maxChars"] = 50;
                            }
                            var m = this["login_account_input_info"][Z],
                                j = '',
                                V = '';
                            m && (j = m["account"], V = m["password"]),
                                j && '' != j ? (this["txt_account"]["input"].text = j, this["txt_account"].lb["visible"] = !1) : (this["txt_account"]["input"].text = '', this["txt_account"].lb["visible"] = !0),
                                V && '' != V ? (this["txt_password"]["input"].text = V, this["txt_password"].lb["visible"] = !1) : (this["txt_password"]["input"].text = '', this["txt_password"].lb["visible"] = !0);
                        },
                        v["prototype"]["_btn_login"] = function() {
                            var r = this;
                            if (!this["showEmergency"]()) {
                                var m = this["txt_account"]["input"].text,
                                    j = this["txt_password"]["input"].text;
                                if (!m || '' == m)
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2056)), void 0;
                                if (!j || '' == j)
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2057)), void 0;
                                if (!(Laya["timer"]["currTimer"] < this["btn_login_cd"])) {
                                    if (this["multiLogin"]())
                                        return this["showInfo"](game["Tools"]["strOfLocalization"](2058)), void 0;
                                    this["btn_login_cd"] = Laya["timer"]["currTimer"] + 1000,
                                        this["showLoginLoading"](0);
                                    var V = this["login_index"];
                                    game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function(I) {
                                        Laya["timer"].once(800, r, function() {
                                            V == r["login_index"] && (I.open ? v.Inst["_try_login_account"](V, m, j) : (I["maintenance"] ? Z["UI_Entrance_Maintenance"].Inst.show(I["maintenance"]) : r["showInfo"](I.info), r["showContainerLogin"](), r["btn_login_cd"] = 0));
                                        });
                                    }));
                                }
                            }
                        },
                        v["prototype"]["_try_regist_account"] = function(Z, r, m, j) {
                            var V = this;
                            this["showEmergency"]() || app["NetAgent"]["sendReq2Lobby"]("Lobby", "signup", {
                                account: Z,
                                password: GameMgr["encodeP"](m),
                                code: r,
                                type: j,
                                device: GameMgr.Inst["get_device_info"](),
                                client_version_string: GameMgr.Inst["getClientVersion"]()
                            }, function(r, I) {
                                if (r)
                                    V["showError"](game["Tools"]["strOfLocalization"](2059), r), app.Log["Error"](r["message"]);
                                else if (I["error"])
                                    V["showError"](game["Tools"]["strOfLocalization"](2060), I["error"].code), app.Log["Error"](game["Tools"]["strOfLocalization"](2219, [JSON["stringify"](I)]));
                                else {
                                    var v = j - 1;
                                    V["login_account_input_info"][v] = {
                                            account: Z,
                                            password: m
                                        },
                                        V["change_chs_login_tab"](v),
                                        V["_try_login_account"](V["login_index"], Z, m);
                                }
                            });
                        },
                        v["prototype"]["_try_login_account"] = function(r, m, j) {
                            var V = this;
                            if (r == this["login_index"]) {
                                if (this["multiLogin"]())
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0;
                                var I = GameMgr.Inst["get_device_info"](),
                                    v = game["Tools"]["get_platform_currency"]();
                                game["LocalStorage"]["setItem"]("account", m),
                                    game["LocalStorage"]["setItem"]("password", j),
                                    game["LocalStorage"]["setItem"]("login_type_tab", this["login_type_tab_index"]["toString"]()),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "login", {
                                        account: m,
                                        password: GameMgr["encodeP"](j),
                                        reconnect: !1,
                                        device: I,
                                        random_key: GameMgr["device_id"],
                                        client_version: {
                                            resource: game["ResourceVersion"]["version"]
                                        },
                                        gen_access_token: !0,
                                        currency_platforms: v,
                                        type: this["login_type_tab_index"],
                                        client_version_string: GameMgr.Inst["getClientVersion"]()
                                    }, function(I, v) {
                                        r == V["login_index"] && (V["btn_login_cd"] = 0, I ? (V["showError"](game["Tools"]["strOfLocalization"](2061), I), V["showContainerLogin"]()) : v["error"] ? (503 == v["error"].code ? V["onLoginErrorProhibition"](v["error"]) : V["showError"]('', v["error"].code), V["showContainerLogin"]()) : (Laya["LocalStorage"]["setItem"]("_pre_sociotype", '0'), game["LocalStorage"]["setItem"]("account", m), game["LocalStorage"]["setItem"]("password", j), game["LocalStorage"]["setItem"]("login_type_tab", V["login_type_tab_index"]["toString"]()), GameMgr.Inst["account"] = m, GameMgr.Inst["password"] = j, GameMgr.Inst["sociotype"] = 0, GameMgr["country"] = v["country"], GameMgr.Inst["account_id"] = v["account_id"], GameMgr.Inst["account_data"] = v["account"], Z["UI_User_Xieyi_enjp"].init(Laya["Handler"]["create"](V, function() {
                                            Z["UI_User_Xieyi_enjp"]["needCheckVersion"] ? Z["UI_User_Xieyi_Update"].Inst.show(Laya["Handler"]["create"](V, function() {
                                                V["_onLoginSuccess"](0, v);
                                            })) : V["_onLoginSuccess"](0, v);
                                        }))));
                                    });
                            }
                        },
                        v["prototype"]["_login_2_yostar"] = function(r, m, j, V) {
                            var I = this;
                            if (!this["showEmergency"]() && r == this["login_index"]) {
                                app.Log.log("login_2_yostar sociotype:" + m + " token:" + j + " uid:" + V);
                                var v = this,
                                    q = function(r, m) {
                                        switch (void 0 === m && (m = 0), m = Math["floor"](m / 1000), r) {
                                            case 1:
                                                v["showError"](game["Tools"]["strOfLocalization"](2677));
                                                break;
                                            case 2:
                                                v["showError"](game["Tools"]["strOfLocalization"](2678));
                                                break;
                                            case 3:
                                                v["showError"](game["Tools"]["strOfLocalization"](2679));
                                                break;
                                            case 4:
                                                v["showError"](game["Tools"]["strOfLocalization"](2680));
                                                break;
                                            case 5:
                                                'kr' == GameMgr["client_type"] ? (Z["UI_Entrance_Account_Deleted"].Inst["setYoInfo"](V, j), Z["UI_Entrance_Account_Deleted"].Inst.show(game["Tools"]["strOfLocalization"](8026, [game["Tools"]["time2YearMounthDate"](m, '-') + ' ' + game["Tools"]["time2HourMinute"](m)]))) : v["showError"](game["Tools"]["strOfLocalization"](8031, [game["Tools"]["time2YearMounthDate"](m, '-') + ' ' + game["Tools"]["time2HourMinute"](m)]));
                                                break;
                                            default:
                                                v["showError"](game["Tools"]["strOfLocalization"](2676));
                                        }
                                        Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''),
                                            v["showContainerLogin"]();
                                    };
                                Yo["login"] && Yo["login"]({
                                    uid: V,
                                    token: j
                                }).then(function(t) {
                                    r == I["login_index"] && (t ? (app.Log.log("yo login data.result:" + t["result"]), 0 == t["result"] ? 'kr' == GameMgr["client_type"] && 1 != t["kr_kmc_status"] ? (Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''), v["showContainerLogin"](), Z["UI_ShiMingRenZheng_KR"].Inst.show(game["Tools"]["strOfLocalization"](2 == t["kr_kmc_status"] ? 8043 : 8044), Laya["Handler"]["create"](I, function() {
                                        Yo["kmcStart"]({
                                            accessToken: t["accessToken"]
                                        }).then(function() {});
                                    }))) : (game["LocalStorage"]["setItem"]("yostar_token", j), game["LocalStorage"]["setItem"]("yostar_uid", V), GameMgr.Inst["yostar_accessToken"] = t["accessToken"], GameMgr.Inst["yostar_uid"] = V, GameMgr.Inst["yostar_login_info"] = t, v["_loginby_sociocode"](r, m, t["accessToken"], V)) : q(t["result"], t["reborn_before_ms"])) : (app.Log.log("yo login data.result: no"), q(-1)));
                                });
                            }
                        },
                        v["prototype"]["_loginby_sociocode"] = function(r, m, j, V) {
                            var I = this;
                            if (void 0 === V && (V = ''), !this["showEmergency"]() && r == this["login_index"]) {
                                if (app.Log.log("_loginby_sociocode0 sociotype:" + m + ", code:" + j + ", uid:" + V), !game["LobbyNetMgr"].Inst.isOK)
                                    return game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function(v) {
                                        r == I["login_index"] && (v.open ? I["_loginby_sociocode"](r, m, j, V) : (v["maintenance"] ? Z["UI_Entrance_Maintenance"].Inst.show(v["maintenance"]) : I["showInfo"](v.info), I["showContainerLogin"]()));
                                    })), void 0;
                                Laya["LocalStorage"]["setItem"]("_pre_code", ''),
                                    Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''),
                                    app.Log.log("_loginby_sociocode1 sociotype" + m + " code:" + j + " uid:" + V);
                                var v = {
                                    type: m,
                                    code: j
                                };
                                V && (v.uid = V),
                                    v["client_version_string"] = GameMgr.Inst["getClientVersion"](),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Auth", v, function(Z, j) {
                                        r == I["login_index"] && (Z ? (app.Log.log("oauth2Auth err:" + Z), I["showError"](game["Tools"]["strOfLocalization"](2059), Z), app.Log["Error"](Z["message"]), I["showContainerLogin"]()) : (app.Log.log("oauth2Auth res: " + JSON["stringify"](j)), j["error"] ? (I["showError"](game["Tools"]["strOfLocalization"](2062), j["error"].code), I["showContainerLogin"]()) : I["_try_socio_check"](r, m, j["access_token"])));
                                    });
                            }
                        },
                        v["prototype"]["_try_socio_check"] = function(r, m, j) {
                            var V = this;
                            if (!this["showEmergency"]() && r == this["login_index"])
                                return this["multiLogin"]() ? (this["showInfo"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0) : game["LobbyNetMgr"].Inst.isOK ? (Laya["timer"].once(800, this, function() {
                                    r == V["login_index"] && (app.Log.log("_try_socio_check sociotype" + m + " access_token:" + j), app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Check", {
                                        type: m,
                                        access_token: j
                                    }, function(Z, I) {
                                        r == V["login_index"] && (Z ? (V["showError"](game["Tools"]["strOfLocalization"](2059), Z), app.Log["Error"](Z["message"]), V["showContainerLogin"]()) : (app.Log.log("oauth2Check res: " + JSON["stringify"](I)), I["error"] ? (V["showError"](game["Tools"]["strOfLocalization"](2062), I["error"].code), V["showContainerLogin"]()) : I["has_account"] ? V["_try_login_socio"](r, m, j) : V["_try_regist_socio"](r, m, j)));
                                    }));
                                }), void 0) : (game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function(I) {
                                    r == V["login_index"] && (I.open ? V["_try_socio_check"](r, m, j) : (I["maintenance"] ? Z["UI_Entrance_Maintenance"].Inst.show(I["maintenance"]) : V["showInfo"](I.info), V["showContainerLogin"]()));
                                })), void 0);
                        },
                        v["prototype"]["_try_regist_socio"] = function(Z, r, m) {
                            var j = this;
                            if (!this["showEmergency"]() && Z == this["login_index"]) {
                                app.Log.log("_try_regist_socio sociotype" + r + " access_token:" + m);
                                var V = Laya["LocalStorage"]["getItem"]("__ad_s");
                                V && (GameMgr.Inst["_ad_str"] = V);
                                var I = {};
                                I.type = r,
                                    I["access_token"] = m,
                                    I["device"] = GameMgr.Inst["get_device_info"](),
                                    GameMgr.Inst["_ad_str"] && (I["advertise_str"] = GameMgr.Inst["_ad_str"]),
                                    7 == r && (I["email"] = game["LocalStorage"]["getItem"]("mail_account")),
                                    I["client_version_string"] = GameMgr.Inst["getClientVersion"](),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Signup", I, function(V, I) {
                                        Z == j["login_index"] && (V ? (app.Log.log("oauth2Signup err:" + V), j["showError"](game["Tools"]["strOfLocalization"](2059), V), app.Log["Error"](V["message"]), j["showContainerLogin"]()) : (app.Log.log("oauth2Signup res: " + JSON["stringify"](I)), I["error"] ? (j["showError"](game["Tools"]["strOfLocalization"](2060), I["error"].code), app.Log["Error"](game["Tools"]["strOfLocalization"](2219, [JSON["stringify"](I)])), j["showContainerLogin"]()) : (app["PlayerBehaviorStatistic"]["fb_trace_force"](app["EBehaviorType"]["CompleteRegistration"]), app["PlayerBehaviorStatistic"]["google_trace_force"](app["EBehaviorType"]["G_Role_create"]), app["PlayerBehaviorStatistic"]["tw_trace_force"](app["EBehaviorType"]["TW_Signup"]), j["_try_login_socio"](Z, r, m))));
                                    });
                            }
                        },
                        v["prototype"]["_try_login_socio"] = function(r, m, j) {
                            var V = this;
                            if (r == this["login_index"]) {
                                if (this["multiLogin"]())
                                    return this["showError"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0;
                                app.Log.log("_try_login_socio sociotype" + m + " access_token:" + j);
                                var I = GameMgr.Inst["get_device_info"](),
                                    v = game["Tools"]["get_platform_currency"]();
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Login", {
                                    type: m,
                                    access_token: j,
                                    reconnect: !1,
                                    device: I,
                                    random_key: GameMgr["device_id"],
                                    client_version: {
                                        resource: game["ResourceVersion"]["version"]
                                    },
                                    currency_platforms: v,
                                    client_version_string: GameMgr.Inst["getClientVersion"]()
                                }, function(I, v) {
                                    r == V["login_index"] && (V["btn_login_cd"] = 0, I ? (app.Log.log("oauth2Login err:" + I), V["showError"](game["Tools"]["strOfLocalization"](2061), I), V["showContainerLogin"]()) : (app.Log.log("oauth2Login res: " + JSON["stringify"](v)), v["error"] ? (503 == v["error"].code ? V["onLoginErrorProhibition"](v["error"]) : V["showError"]('', v["error"].code), V["showContainerLogin"]()) : (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : m["toString"]()), Laya["LocalStorage"]["setItem"]("ssssoooodd", j), GameMgr.Inst["sociotype"] = m, GameMgr.Inst["access_token"] = j, GameMgr["country"] = v["country"], GameMgr.Inst["account_id"] = v["account_id"], GameMgr.Inst["account_data"] = v["account"], Z["UI_User_Xieyi_enjp"].init(Laya["Handler"]["create"](V, function() {
                                        Z["UI_User_Xieyi_enjp"]["needCheckVersion"] ? Z["UI_User_Xieyi_Update"].Inst.show(Laya["Handler"]["create"](V, function() {
                                            V["_onLoginSuccess"](m, v);
                                        })) : V["_onLoginSuccess"](m, v);
                                    })))));
                                });
                            }
                        },
                        v["prototype"]["_onLoginPengdingPhone"] = function() {},
                        v["prototype"]["_onLoginSuccess"] = function(r, m, j) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(m),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(m));
                                }
                            }));
                            var V = this;
                            if (void 0 === j && (j = !1), app.Log.log("登陆：" + JSON["stringify"](m)), GameMgr.Inst["account_id"] = m["account_id"], GameMgr.Inst["account_data"] = m["account"], Z["UI_ShiMingRenZheng"]["renzhenged"] = m["is_id_card_authed"], GameMgr.Inst["account_numerical_resource"] = {}, m["account"]["platform_diamond"])
                                for (var I = m["account"]["platform_diamond"], v = 0; v < I["length"]; v++)
                                    GameMgr.Inst["account_numerical_resource"][I[v].id] = I[v]["count"];
                            if (m["account"]["skin_ticket"] && (GameMgr.Inst["account_numerical_resource"]["100004"] = m["account"]["skin_ticket"]), m["account"]["platform_skin_ticket"])
                                for (var q = m["account"]["platform_skin_ticket"], v = 0; v < q["length"]; v++)
                                    GameMgr.Inst["account_numerical_resource"][q[v].id] = q[v]["count"];
                            GameMgr.Inst["account_refresh_time"] = Laya["timer"]["currTimer"],
                                m["game_info"] && (GameMgr.Inst["ingame"] = !0, GameMgr.Inst["mj_server_location"] = m["game_info"]["location"], GameMgr.Inst["mj_game_token"] = m["game_info"]["connect_token"], GameMgr.Inst["mj_game_uuid"] = m["game_info"]["game_uuid"]),
                                m["access_token"] && (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : r["toString"]()), Laya["LocalStorage"]["setItem"]("ssssoooodd", m["access_token"]), GameMgr.Inst["sociotype"] = r, GameMgr.Inst["access_token"] = m["access_token"]);
                            var t = this,
                                x = function() {
                                    GameMgr.Inst["onLoadStart"]("login"),
                                        Laya["LocalStorage"]["removeItem"]("__ad_s"),
                                        Z["UI_Loading"].Inst.show("load_lobby"),
                                        t["enable"] = !1,
                                        t["scene"]["close"](),
                                        Z["UI_Entrance_Mail_Regist"].Inst["close"](),
                                        t["login_loading"]["close"](),
                                        Z["UIMgr"].Inst["openLobbyUI"](Laya["Handler"]["create"](t, function() {
                                            GameMgr.Inst["afterLogin"](),
                                                t["route_info"]["onClose"](),
                                                GameMgr.Inst["account_data"]["anti_addiction"] && Z["UIMgr"].Inst["ShowPreventAddiction"](),
                                                t["destroy"](),
                                                t["disposeRes"](),
                                                Z["UI_Add2Desktop"].Inst && (Z["UI_Add2Desktop"].Inst["destroy"](), Z["UI_Add2Desktop"].Inst = null);
                                        }), Laya["Handler"]["create"](t, function(r) {
                                            return Z["UI_Loading"].Inst["setProgressVal"](0.2 * r);
                                        }, null, !1));
                                },
                                E = Laya["Handler"]["create"](this, function() {
                                    0 != GameMgr.Inst["account_data"]["frozen_state"] ? app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchRefundOrder", {}, function(r, m) {
                                        r ? (app.Log.log("fetchRefundOrder err:" + r), V["showError"](game["Tools"]["strOfLocalization"](2061), r), V["showContainerLogin"]()) : (Z["UI_Refund"]["orders"] = m["orders"], Z["UI_Refund"]["clear_deadline"] = m["clear_deadline"], Z["UI_Refund"]["message"] = m["message"], x());
                                    }) : x();
                                });
                            "chs" != GameMgr["client_type"] || m["account"]["phone_verify"] ? E.run() : (Z["UI_Entrance_Mail_Regist"].Inst["close"](), this["login_loading"]["close"](), this["container_login"]["visible"] = !1, Z["UI_Bind_Phone1"].Inst.show(!0, Laya["Handler"]["create"](this, function() {
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchPhoneLoginBind", {}, function(r, m) {
                                    r || m["error"] ? V["showError"](r, m["error"]) : 0 == m["phone_login"] ? Z["UI_Create_Phone_Account"].Inst.show(E) : Z["UI_Canot_Create_Phone_Account"].Inst.show(E);
                                });
                            })));
                        },
                        v["prototype"]["showMailLogin"] = function() {
                            this["page_maillogin"].show();
                        },
                        v["prototype"]["showInfo"] = function(r) {
                            var m = '';
                            r && (m += r),
                                Z["UI_Entrance_Error"].Inst.show(m, !1);
                        },
                        v["prototype"]["showError"] = function(r, m, j) {
                            void 0 === m && (m = -1),
                                void 0 === j && (j = '');
                            var V = '';
                            r && (V += r), -1 != m && (V["length"] > 0 && (V += ','), V += cfg.info["error"].get(m) ? cfg.info["error"].get(m)[GameMgr["client_language"]] + ' (' + m + ')' : game["Tools"]["strOfLocalization"](2063) + ' (' + m + ')'),
                                j && (V += ", info:" + j),
                                Z["UI_Entrance_Error"].Inst.show(V, !1);
                        },
                        v["prototype"]["updateServer"] = function() {
                            this["route_info"]["update"]();
                        },
                        v["prototype"]["multiLogin"] = function() {
                            var Z = Laya["LocalStorage"]["getItem"]("dolllt");
                            return Z && '' != Z ? game["Tools"]["currentTime"] < parseFloat(Z) + 1.5 && parseFloat(Z) < game["Tools"]["currentTime"] + 1800 : !1;
                        },
                        v["prototype"]["disposeRes"] = function() {
                            Laya["Loader"]["clearTextureRes"]("res/atlas/" + game["Tools"]["localUISrc"]("myres/entrance.atlas"));
                            var Z = '';
                            Z = "chs" != GameMgr["client_language"] ? "scene/Assets/Resource/entrance/icon_color_" + GameMgr["client_language"] + ".png" : "scene/Assets/Resource/entrance/icon_color.png";
                            var r = [];
                            r.push(Z),
                                r.push("scene/Assets/Resource/entrance/Materials/icon_color.lmat"),
                                r.push("scene/Assets/Resource/entrance/Materials/blackmask.lmat");
                            for (var m = 0; m < r["length"]; m++) {
                                var j = Laya["loader"]["getRes"](r[m]);
                                j && j["dispose"](!0);
                            }
                        },
                        v["prototype"]["showEmergency"] = function() {
                            return GameMgr.Inst["in_emergence"] && this["showInfo"](GameMgr.Inst["emergence_notice"]),
                                GameMgr.Inst["in_emergence"];
                        },
                        v["prototype"]["onLoginErrorProhibition"] = function(r) {
                            var m = 0;
                            r["u32_params"] && r["u32_params"]["length"] >= 1 && (m = r["u32_params"][0]),
                                6 == m ? 'kr' == GameMgr["client_type"] || "chs_t" == GameMgr["client_type"] ? Z["UI_Entrance_Account_Deleted"].Inst.show(game["Tools"]["strOfLocalization"]('kr' == GameMgr["client_type"] ? 8026 : 8035, [game["Tools"]["time2YearMounthDate"](r["u32_params"][1]) + ' ' + game["Tools"]["time2HourMinute"](r["u32_params"][1], "chs_t" == GameMgr["client_type"])])) : this["showError"](game["Tools"]["strOfLocalization"](8031, [game["Tools"]["time2YearMounthDate"](r["u32_params"][1]) + ' ' + game["Tools"]["time2HourMinute"](r["u32_params"][1])])) : Z["UI_Entrance_Prohibition"].Inst.show(r);
                        },
                        v.Inst = null,
                        v;
                }
                (Z["UIBase"]);
            Z["UI_Entrance"] = I;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionBabei play data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1);
                            var m = r.seat,
                                j = mjcore["MJPai"]["Create"]('4z');
                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["AddBabei"](j, r["moqie"], !0),
                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_babei");
                            var V = !1;
                            r["tile_state"] && r["tile_state"] > 0 && (V = !0),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                m == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["onBabei"](j, V, !1) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onBabei"](r["moqie"], V, !1),
                                r["operation"] && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                m == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !1),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionBabei fastplay data:" + JSON["stringify"](r) + " usetime:" + m),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"]('4z');
                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddBabei"](V, r["moqie"], !1);
                            var I = !1;
                            r["tile_state"] && r["tile_state"] > 0 && (I = !0),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["onBabei"](V, I, !0) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["onBabei"](r["moqie"], I, !0),
                                r["operation"] && -1 != m && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m);
                                }),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                j == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !0),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionBabei record data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"]('4z');
                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddBabei"](V, r["moqie"], !0),
                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["PlaySound"]("act_babei");
                            var I = !1;
                            if (r["tile_state"] && r["tile_state"] > 0 && (I = !0), r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0), j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["onBabei"](V, I, !1) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordBabei"](V, r["moqie"], I, !1), r["tingpais"] && Z["DesktopMgr"].Inst["setTingpai"](r.seat, r["tingpais"]), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var v = 0; v < r["operations"]["length"]; v++)
                                    Z["ActionOperation"].ob(r["operations"][v], m, 450);
                            return Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                                1000;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                app.Log.log("ActionBabei fastrecord data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"]('4z');
                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddBabei"](V, r["moqie"], !1);
                            var I = !1;
                            if (r["tile_state"] && r["tile_state"] > 0 && (I = !0), r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1), j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["onBabei"](V, I, !0) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordBabei"](V, r["moqie"], I, !0), r["tingpais"] && Z["DesktopMgr"].Inst["setTingpai"](r.seat, r["tingpais"]), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operations"])
                                for (var v = 0; v < r["operations"]["length"]; v++)
                                    Z["ActionOperation"].ob(r["operations"][v], m, 450);
                            Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionBabei"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this,
                                j = Z["DesktopMgr"].Inst.mode == Z["EMJMode"].play || Z["DesktopMgr"].Inst["record_show_anim"];
                            r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                                Z["BgmListMgr"]["stopBgm"]();
                            var V = !1;
                            Laya["timer"].once(100, this, function() {
                                var I = r["hules"],
                                    v = 0;
                                if (I[0].zimo) {
                                    for (var q = I[0].seat, t = [], x = 0; x < I[0].hand["length"]; x++)
                                        t.push(mjcore["MJPai"]["Create"](I[0].hand[x]));
                                    if (t = t.sort(mjcore["MJPai"]["Distance"]), uiscript["UI_Huleshow"].Inst["showZimo"]([Z["DesktopMgr"].Inst["seat2LocalPosition"](q)]), r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0), v += 1400, j && (I[0]["title"] && '' != I[0]["title"] || I[0]["title_id"]) && (Laya["timer"].once(v, m, function() {
                                            uiscript["UI_HuCutIn"].show(Z["DesktopMgr"].Inst["player_datas"][q]["avatar_id"]),
                                                V = !0;
                                        }), v += 2000), Laya["timer"].once(v, m, function() {
                                            q == Z["DesktopMgr"].Inst.seat && Z["DesktopMgr"].Inst["mainrole"]["HulePrepare"](t, I[0]["hu_tile"], I[0].zimo),
                                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](q)].Hule(t, mjcore["MJPai"]["Create"](I[0]["hu_tile"]), I[0].zimo);
                                        }), j) {
                                        var E = 0,
                                            e = I[0].seat;
                                        e >= 0 && (E = Z["DesktopMgr"].Inst["player_effects"][e][game["EView"]["hupai_effect"]]),
                                            v += "305215" == E || "305219" == E ? 5000 : "305217" == E ? 3800 : 2800;
                                    } else
                                        v += 500;
                                    q == Z["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                } else {
                                    if (Laya["timer"].once(v, m, function() {
                                            for (var r = [], m = 0; m < I["length"]; m++)
                                                r.push(Z["DesktopMgr"].Inst["seat2LocalPosition"](I[m].seat));
                                            uiscript["UI_Huleshow"].Inst["showRong"](r);
                                        }), v += 1500, j)
                                        for (var o = function(r) {
                                                var j = I[r].seat;
                                                (I[r]["title"] && '' != I[r]["title"] || I[r]["title_id"]) && (Laya["timer"].once(v, m, function() {
                                                    uiscript["UI_HuCutIn"].show(Z["DesktopMgr"].Inst["player_datas"][j]["avatar_id"]),
                                                        V = !0;
                                                }), v += 2000);
                                            }, x = 0; x < I["length"]; x++)
                                            o(x);
                                    for (var x = 0; x < I["length"]; x++) {
                                        var N = I[x].seat;
                                        if (N == Z["DesktopMgr"].Inst.seat) {
                                            for (var P = [], R = 0; R < I[x].hand["length"]; R++)
                                                P.push(mjcore["MJPai"]["Create"](I[x].hand[R]));
                                            P = P.sort(mjcore["MJPai"]["Distance"]),
                                                Z["DesktopMgr"].Inst["mainrole"]["HulePrepare"](P, I[x]["hu_tile"], I[x].zimo);
                                        }
                                    }
                                    if (Laya["timer"].once(v, m, function() {
                                            if (j) {
                                                var r = 0,
                                                    m = I[0].seat;
                                                m >= 0 && (r = Z["DesktopMgr"].Inst["player_effects"][m][game["EView"]["hupai_effect"]]),
                                                    Z["DesktopMgr"].Inst["ShowHuleEffect"](Z["DesktopMgr"].Inst["lastqipai"], Z["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], r, Z["DesktopMgr"].Inst["lastpai_seat"], Z["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                            }
                                            for (var V = 0; V < I["length"]; V++) {
                                                for (var v = [], q = 0; q < I[V].hand["length"]; q++)
                                                    v.push(mjcore["MJPai"]["Create"](I[V].hand[q]));
                                                v = v.sort(mjcore["MJPai"]["Distance"]),
                                                    Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](I[V].seat)].Hule(v, mjcore["MJPai"]["Create"](I[V]["hu_tile"]), I[V].zimo),
                                                    I[V].seat == Z["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                            }
                                        }), j) {
                                        var E = 0,
                                            N = I[0].seat;
                                        N >= 0 && (E = Z["DesktopMgr"].Inst["player_effects"][N][game["EView"]["hupai_effect"]]),
                                            v += "305215" == E || "305219" == E ? 4200 : "305217" == E ? 3000 : 2000;
                                    } else
                                        v += 600;
                                }
                                for (var x = 0; x < r["delta_scores"]["length"]; x++)
                                    r["delta_scores"][x] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](x, "emoji_7", -1), Z["DesktopMgr"].Inst["onRoundEnd"](x, 1)) : r["delta_scores"][x] < 0 && (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](x, "emoji_8", -1), Z["DesktopMgr"].Inst["onRoundEnd"](x, 0));
                                Laya["timer"].once(v, m, function() {
                                    uiscript["UIMgr"].Inst["ShowWin"](r, !1),
                                        Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                            });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionHule fastplay data:" + JSON["stringify"](r)),
                                Z["BgmListMgr"]["stopBgm"](),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                uiscript["UIMgr"].Inst["ShowWin"](r, !1);
                        },
                        m["record"] = function(Z) {
                            return this.play(Z),
                                100000;
                        },
                        m["fastrecord"] = function(r) {
                            Z["BgmListMgr"]["stopBgm"](),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                uiscript["UIMgr"].Inst["ShowWin"](r, !1);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionHule"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this;
                            app.Log.log("ActionNewRound play data:" + JSON["stringify"](r)),
                                Z["BgmListMgr"]["PlayMJBgm"](),
                                Z["DesktopMgr"].Inst["index_change"] = r["chang"],
                                Z["DesktopMgr"].Inst["index_chuanma_ju"] = r["ju_count"],
                                Z["DesktopMgr"].Inst["index_ju"] = r.ju,
                                Z["DesktopMgr"].Inst["index_ben"] = r.ben,
                                Z["DesktopMgr"].Inst["index_player"] = r.ju,
                                Z["DesktopMgr"].Inst["gameing"] = !0,
                                Z["DesktopMgr"].Inst["left_tile_count"] = 69,
                                Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi4"] ? Z["DesktopMgr"].Inst["left_tile_count"] = 69 : Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi3"] && (Z["DesktopMgr"].Inst["left_tile_count"] = 50),
                                r["left_tile_count"] && (Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"]),
                                Z["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["closeCardDetail"](), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                                uiscript["UI_DesktopInfo"].Inst["logUpEmoInfo"](),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                                Z["DesktopMgr"].Inst["setAutoHule"](!1),
                                Z["DesktopMgr"].Inst["setAutoMoQie"](!1),
                                Z["DesktopMgr"].Inst["setAutoNoFulu"](!1),
                                uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                                uiscript["UI_TingPai"].Inst["reset"](),
                                Z["DesktopMgr"].Inst["SetChangJuShow"](Z["DesktopMgr"].Inst["index_change"], Z["DesktopMgr"].Inst["index_ju"], Z["DesktopMgr"].Inst["index_chuanma_ju"]),
                                uiscript["UI_DesktopInfo"].Inst["setBen"](Z["DesktopMgr"].Inst["index_ben"]),
                                uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                                uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                            for (var j = 0; 4 > j; j++)
                                Z["DesktopMgr"].Inst["players"][j]["Reset"](), Z["DesktopMgr"].Inst["players"][j]["setSeat"](Z["DesktopMgr"].Inst["localPosition2Seat"](j));
                            Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                Z["DesktopMgr"].Inst.md5 = r.md5,
                                Z["DesktopMgr"].Inst["choosed_pai"] = null,
                                Z["DesktopMgr"].Inst.dora = [];
                            var V = 0;
                            0 == Z["DesktopMgr"].Inst["index_change"] && 0 == Z["DesktopMgr"].Inst["index_ju"] && 0 == Z["DesktopMgr"].Inst["index_ben"] && (Z["DesktopMgr"].Inst["is_dora3_mode"]() && !Z["DesktopMgr"].Inst["is_muyu_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openDora3BeginEffect"](), V = 1300), Z["DesktopMgr"].Inst["is_peipai_open_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openPeipaiOpenBeginEffect"](), V = 1300), Z["DesktopMgr"].Inst["is_muyu_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openMuyuOpenBeginEffect"](), V = 1300), Z["DesktopMgr"].Inst["is_shilian_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openShilianOpenBeginEffect"](), V = 1300), Z["DesktopMgr"].Inst["is_xiuluo_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openXiuluoOpenBeginEffect"](), V = 1300), Z["DesktopMgr"].Inst["is_top_match"]() && (uiscript["UI_DesktopInfo"].Inst["openTopMatchOpenBeginEffect"](), V = 1300), Z["DesktopMgr"].Inst["is_jiuchao_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openJiuChaoBeginEffect"](), V = 1300), Z["DesktopMgr"].Inst["is_reveal_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openAnPaiBeginEffect"](), V = 1300)),
                                Z["DesktopMgr"].Inst["is_chuanma_mode"]() && 0 == Z["DesktopMgr"].Inst["index_chuanma_ju"] && (uiscript["UI_DesktopInfo"].Inst["openChuanmaBeginEffect"](), V = 1300);
                            var I = !1;
                            void 0 != r.al && null != r.al && (I = r.al),
                                I && (uiscript["UI_AL"].Show(), V = 1300),
                                Laya["timer"].once(V, this, function() {
                                    for (var j = [], V = 0; V < r["tiles"]["length"]; V++)
                                        j.push(mjcore["MJPai"]["Create"](r["tiles"][V]));
                                    var I = [],
                                        v = [];
                                    if (r["opens"])
                                        for (var V = 0; V < r["opens"]["length"]; V++)
                                            if (r["opens"][V].seat == Z["DesktopMgr"].Inst.seat) {
                                                I = r["opens"][V]["tiles"],
                                                    v = r["opens"][V]["count"];
                                                break;
                                            }
                                    Z["DesktopMgr"].Inst["mainrole"]["NewGame"](j, I, v, !1),
                                        r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0);
                                    for (var V = 1; 4 > V; V++) {
                                        var q = Z["DesktopMgr"].Inst["localPosition2Seat"](V);
                                        if (-1 != q) {
                                            var t = [],
                                                x = [];
                                            if (r["opens"])
                                                for (var E = 0; E < r["opens"]["length"]; E++)
                                                    if (r["opens"][E].seat == q) {
                                                        t = r["opens"][E]["tiles"],
                                                            x = r["opens"][E]["count"];
                                                        break;
                                                    }
                                            Z["DesktopMgr"].Inst["players"][V]["NewGame"](13 + (q == Z["DesktopMgr"].Inst["index_ju"] ? 1 : 0), t, x, !1, '');
                                        }
                                    }
                                    Z["DesktopMgr"].Inst["is_huansanzhang_mode"]() ? Laya["timer"].once(1500, m, function() {
                                        Z["DesktopMgr"].Inst["ActionRunComplete"](),
                                            Z["ActionOperation"].play(r["operation"]);
                                    }) : (Z["DesktopMgr"].Inst["is_dora3_mode"]() && Laya["timer"].once(1000, m, function() {
                                        uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"]();
                                    }), Laya["timer"].once(1200, m, function() {
                                        if (r["doras"] && r["doras"]["length"] > 0)
                                            for (var m = 0; m < r["doras"]["length"]; m++)
                                                Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][m])), uiscript["UI_DesktopInfo"].Inst["setDora"](m, Z["DesktopMgr"].Inst.dora[m]);
                                        for (var m = 0; 4 > m; m++)
                                            Z["DesktopMgr"].Inst["players"][m]["OnDoraRefresh"]();
                                        if (Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat) {
                                            var j = {
                                                tingpais: r["tingpais0"],
                                                operation: r["operation"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData0"](j);
                                        } else {
                                            var j = {
                                                tingpais: r["tingpais1"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData1"](j, !1);
                                        }
                                        Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                    }), void 0 != r["operation"] && Laya["timer"].once(1000, m, function() {
                                        Z["ActionOperation"].play(r["operation"]);
                                    }));
                                }),
                                Z["DesktopMgr"].Inst["fetchLinks"]();
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionNewRound fastplay data:" + JSON["stringify"](r) + " usetime:" + m),
                                Z["DesktopMgr"].Inst["index_change"] = r["chang"],
                                Z["DesktopMgr"].Inst["index_ju"] = r.ju,
                                Z["DesktopMgr"].Inst["index_ben"] = r.ben,
                                Z["DesktopMgr"].Inst["index_player"] = r.ju,
                                Z["DesktopMgr"].Inst["index_chuanma_ju"] = r["ju_count"],
                                Z["DesktopMgr"].Inst["gameing"] = !0,
                                Z["DesktopMgr"].Inst["left_tile_count"] = 69,
                                Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi4"] ? Z["DesktopMgr"].Inst["left_tile_count"] = 69 : Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi3"] && (Z["DesktopMgr"].Inst["left_tile_count"] = 50),
                                r["left_tile_count"] && (Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"]),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                                Z["DesktopMgr"].Inst["setAutoHule"](!1),
                                Z["DesktopMgr"].Inst["setAutoMoQie"](!1),
                                Z["DesktopMgr"].Inst["setAutoNoFulu"](!1),
                                uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                                uiscript["UI_TingPai"].Inst["reset"](),
                                Z["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                                uiscript["UI_DesktopInfo"].Inst["logUpEmoInfo"](),
                                Z["DesktopMgr"].Inst["SetChangJuShow"](Z["DesktopMgr"].Inst["index_change"], Z["DesktopMgr"].Inst["index_ju"], Z["DesktopMgr"].Inst["index_chuanma_ju"]),
                                uiscript["UI_DesktopInfo"].Inst["setBen"](Z["DesktopMgr"].Inst["index_ben"]),
                                uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                                uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1);
                            for (var j = 0; 4 > j; j++)
                                Z["DesktopMgr"].Inst["players"][j]["Reset"](), Z["DesktopMgr"].Inst["players"][j]["setSeat"](Z["DesktopMgr"].Inst["localPosition2Seat"](j));
                            Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                Z["DesktopMgr"].Inst.md5 = r.md5,
                                Z["DesktopMgr"].Inst["choosed_pai"] = null,
                                Z["DesktopMgr"].Inst.dora = [];
                            for (var V = [], j = 0; j < r["tiles"]["length"]; j++)
                                V.push(mjcore["MJPai"]["Create"](r["tiles"][j]));
                            var I = [],
                                v = [];
                            if (r["opens"])
                                for (var j = 0; j < r["opens"]["length"]; j++)
                                    if (r["opens"][j].seat == Z["DesktopMgr"].Inst.seat) {
                                        I = r["opens"][j]["tiles"],
                                            v = r["opens"][j]["count"];
                                        break;
                                    }
                            Z["DesktopMgr"].Inst["mainrole"]["NewGame"](V, I, v, !0);
                            for (var j = 1; 4 > j; j++) {
                                var q = Z["DesktopMgr"].Inst["localPosition2Seat"](j);
                                if (-1 != q) {
                                    var t = [],
                                        x = [];
                                    if (r["opens"])
                                        for (var E = 0; E < r["opens"]["length"]; E++)
                                            if (r["opens"][E].seat == q) {
                                                t = r["opens"][E]["tiles"],
                                                    x = r["opens"][E]["count"];
                                                break;
                                            }
                                    Z["DesktopMgr"].Inst["players"][j]["NewGame"](13 + (q == Z["DesktopMgr"].Inst["index_ju"] ? 1 : 0), t, x, !0, '');
                                }
                            }
                            if (Z["DesktopMgr"].Inst["is_chuanma_mode"]())
                                r["operation"] && -1 != m && Laya["timer"].once(100, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m + 100);
                                });
                            else if (Z["DesktopMgr"].Inst["is_huansanzhang_mode"]())
                                r["operation"] && -1 != m && Laya["timer"].once(100, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m + 100);
                                });
                            else {
                                if (r["doras"] && r["doras"]["length"] > 0)
                                    for (var j = 0; j < r["doras"]["length"]; j++)
                                        Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][j])), uiscript["UI_DesktopInfo"].Inst["setDora"](j, Z["DesktopMgr"].Inst.dora[j]);
                                for (var j = 0; 4 > j; j++)
                                    Z["DesktopMgr"].Inst["players"][j]["OnDoraRefresh"]();
                                if (Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat) {
                                    var e = {
                                        tingpais: r["tingpais0"],
                                        operation: r["operation"]
                                    };
                                    uiscript["UI_TingPai"].Inst["setData0"](e);
                                } else {
                                    var e = {
                                        tingpais: r["tingpais1"]
                                    };
                                    uiscript["UI_TingPai"].Inst["setData1"](e, !0);
                                }
                                r["operation"] && -1 != m && Laya["timer"].once(100, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m + 100);
                                });
                            }
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionNewRound record data:" + JSON["stringify"](r)),
                                Z["DesktopMgr"].Inst["ClearOperationShow"](),
                                Z["BgmListMgr"]["PlayMJBgm"](),
                                Z["DesktopMgr"].Inst["index_change"] = r["chang"],
                                Z["DesktopMgr"].Inst["index_ju"] = r.ju,
                                Z["DesktopMgr"].Inst["index_ben"] = r.ben,
                                Z["DesktopMgr"].Inst["index_player"] = r.ju,
                                Z["DesktopMgr"].Inst["index_chuanma_ju"] = r["ju_count"],
                                Z["DesktopMgr"].Inst["gameing"] = !0,
                                Z["DesktopMgr"].Inst["left_tile_count"] = 69,
                                Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi4"] ? Z["DesktopMgr"].Inst["left_tile_count"] = 69 : Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi3"] && (Z["DesktopMgr"].Inst["left_tile_count"] = 50),
                                r["left_tile_count"] && (Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"]),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                                Z["DesktopMgr"].Inst["tingpais"] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript["UI_TingPai"].Inst["reset"](),
                                uiscript["UI_Replay"].Inst["reset"](),
                                Z["DesktopMgr"].Inst["SetChangJuShow"](Z["DesktopMgr"].Inst["index_change"], Z["DesktopMgr"].Inst["index_ju"], Z["DesktopMgr"].Inst["index_chuanma_ju"]),
                                uiscript["UI_DesktopInfo"].Inst["setBen"](Z["DesktopMgr"].Inst["index_ben"]),
                                uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                            for (var j = 0; 4 > j; j++)
                                Z["DesktopMgr"].Inst["players"][j]["setSeat"](Z["DesktopMgr"].Inst["localPosition2Seat"](j));
                            Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["closeCardDetail"](), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                                Z["DesktopMgr"].Inst["choosed_pai"] = null,
                                Z["DesktopMgr"].Inst.dora = [],
                                Z["AudioMgr"]["PlayAudio"](216);
                            for (var j = 0; 4 > j; j++) {
                                var V = [],
                                    I = "tiles" + j["toString"]();
                                if (r[I] && r[I]["length"] > 0) {
                                    for (var v = 0; v < r[I]["length"]; v++)
                                        V.push(mjcore["MJPai"]["Create"](r[I][v]));
                                    var q = [],
                                        t = [];
                                    if (r["opens"])
                                        for (var v = 0; v < r["opens"]["length"]; v++)
                                            if (r["opens"][v].seat == j) {
                                                q = r["opens"][v]["tiles"],
                                                    t = r["opens"][v]["count"];
                                                break;
                                            }
                                    j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["RecordNewGame"](V, q, t) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["RecordNewGame"](V, q, t);
                                }
                            }
                            if (Z["DesktopMgr"].Inst["setScores"](r["scores"]), Z["DesktopMgr"].Inst.md5 = r.md5, uiscript["UI_DesktopInfo"].Inst["reset_rounds"](), Z["DesktopMgr"].Inst["is_huansanzhang_mode"]()) {
                                var x = r["operations"][Z["DesktopMgr"].Inst["localPosition2Seat"](Z["DesktopMgr"].Inst.seat)];
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && x && Z["ActionOperation"].ob(x, m, 1000);
                            } else {
                                if (r["doras"] && r["doras"]["length"] > 0)
                                    for (var j = 0; j < r["doras"]["length"]; j++)
                                        Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][j])), uiscript["UI_DesktopInfo"].Inst["setDora"](j, Z["DesktopMgr"].Inst.dora[j]);
                                else
                                    r.dora && '' != r.dora && (Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Z["DesktopMgr"].Inst.dora[0]));
                                for (var j = 0; 4 > j; j++)
                                    Z["DesktopMgr"].Inst["players"][j]["OnDoraRefresh"]();
                                if (r["tingpai"])
                                    for (var j = 0; j < r["tingpai"]["length"]; j++)
                                        r["tingpai"][j].seat != Z["DesktopMgr"].Inst["index_ju"] && Z["DesktopMgr"].Inst["setTingpai"](r["tingpai"][j].seat, r["tingpai"][j]["tingpais1"]);
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 1000);
                            }
                            return r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["paipu"] && (r["paishan"] ? (uiscript["UI_Replay"].Inst["page_paishan"]["setTiles"](r["paishan"]), uiscript["UI_Replay"].Inst["page_paishan"]["refresh"]()) : uiscript["UI_Replay"].Inst["page_paishan"]["setNoInfo"]()),
                                300;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                app.Log.log("ActionNewRound fastrecord data:" + JSON["stringify"](r)),
                                Z["BgmListMgr"]["PlayMJBgm"](),
                                Z["DesktopMgr"].Inst["ClearOperationShow"](),
                                Z["DesktopMgr"].Inst["index_change"] = r["chang"],
                                Z["DesktopMgr"].Inst["index_ju"] = r.ju,
                                Z["DesktopMgr"].Inst["index_ben"] = r.ben,
                                Z["DesktopMgr"].Inst["index_player"] = r.ju,
                                Z["DesktopMgr"].Inst["index_chuanma_ju"] = r["ju_count"],
                                Z["DesktopMgr"].Inst["gameing"] = !0,
                                Z["DesktopMgr"].Inst["left_tile_count"] = 69,
                                Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi4"] ? Z["DesktopMgr"].Inst["left_tile_count"] = 69 : Z["DesktopMgr"].Inst["rule_mode"] == Z["ERuleMode"]["Liqi3"] && (Z["DesktopMgr"].Inst["left_tile_count"] = 50),
                                r["left_tile_count"] && (Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"]),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                                Z["DesktopMgr"].Inst["tingpais"] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript["UI_TingPai"].Inst["reset"](),
                                uiscript["UI_Replay"].Inst["reset"](),
                                Z["DesktopMgr"].Inst["SetChangJuShow"](Z["DesktopMgr"].Inst["index_change"], Z["DesktopMgr"].Inst["index_ju"], Z["DesktopMgr"].Inst["index_chuanma_ju"]),
                                uiscript["UI_DesktopInfo"].Inst["setBen"](Z["DesktopMgr"].Inst["index_ben"]),
                                uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                            for (var j = 0; 4 > j; j++)
                                Z["DesktopMgr"].Inst["players"][j]["setSeat"](Z["DesktopMgr"].Inst["localPosition2Seat"](j));
                            Z["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Z["DesktopMgr"].Inst["index_ju"] == Z["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["choosed_pai"] = null,
                                Z["DesktopMgr"].Inst.dora = [];
                            for (var j = 0; 4 > j; j++) {
                                var V = [],
                                    I = "tiles" + j["toString"]();
                                if (r[I] && r[I]["length"] > 0) {
                                    for (var v = 0; v < r[I]["length"]; v++)
                                        V.push(mjcore["MJPai"]["Create"](r[I][v]));
                                    var q = [],
                                        t = [];
                                    if (r["opens"])
                                        for (var v = 0; v < r["opens"]["length"]; v++)
                                            if (r["opens"][v].seat == j) {
                                                q = r["opens"][v]["tiles"],
                                                    t = r["opens"][v]["count"];
                                                break;
                                            }
                                    j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["RecordNewGame"](V, q, t) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["RecordNewGame"](V, q, t);
                                }
                            }
                            if (Z["DesktopMgr"].Inst["setScores"](r["scores"]), Z["DesktopMgr"].Inst.md5 = r.md5, uiscript["UI_DesktopInfo"].Inst["reset_rounds"](), Z["DesktopMgr"].Inst["is_huansanzhang_mode"]()) {
                                var x = r["operations"][Z["DesktopMgr"].Inst["localPosition2Seat"](Z["DesktopMgr"].Inst.seat)];
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && x && Z["ActionOperation"].ob(x, m, 1000);
                            } else {
                                if (r["doras"] && r["doras"]["length"] > 0)
                                    for (var j = 0; j < r["doras"]["length"]; j++)
                                        Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r["doras"][j])), uiscript["UI_DesktopInfo"].Inst["setDora"](j, Z["DesktopMgr"].Inst.dora[j]);
                                else
                                    r.dora && '' != r.dora && (Z["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](r.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Z["DesktopMgr"].Inst.dora[0]));
                                for (var j = 0; 4 > j; j++)
                                    Z["DesktopMgr"].Inst["players"][j]["OnDoraRefresh"]();
                                if (r["tingpai"])
                                    for (var j = 0; j < r["tingpai"]["length"]; j++)
                                        r["tingpai"][j].seat != Z["DesktopMgr"].Inst["index_ju"] && Z["DesktopMgr"].Inst["setTingpai"](r["tingpai"][j].seat, r["tingpai"][j]["tingpais1"]);
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 1000);
                            }
                            Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["paipu"] && (r["paishan"] ? (uiscript["UI_Replay"].Inst["page_paishan"]["setTiles"](r["paishan"]), uiscript["UI_Replay"].Inst["page_paishan"]["refresh"]()) : uiscript["UI_Replay"].Inst["page_paishan"]["setNoInfo"]()),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionNewRound"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionChiPengGang play data:" + JSON["stringify"](r));
                            var m = r.seat,
                                j = new mjcore["MJMing"]();
                            j.type = r.type,
                                j.from = r["froms"],
                                j.pais = [];
                            for (var V = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)], I = 0; I < r["tiles"]["length"]; I++)
                                j.pais.push(mjcore["MJPai"]["Create"](r["tiles"][I]));
                            for (var v = [], I = 0; I < j.pais["length"]; I++)
                                !r["tile_states"] || r["tile_states"]["length"] <= I ? v.push(0) : v.push(r["tile_states"][I]);
                            Laya["timer"].once(600, this, function() {
                                    try {
                                        r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                            Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                            V["AddMing"](j, v),
                                            j.type == mjcore["E_Ming"]["gang_ming"] && (Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0);
                                    } catch (m) {
                                        var I = {};
                                        I["error"] = m["message"],
                                            I["stack"] = m["stack"],
                                            I["method"] = "addming600",
                                            I.name = "ActionChiPengGang",
                                            GameMgr.Inst["onFatalError"](I);
                                    }
                                }),
                                m != Z["DesktopMgr"].Inst.seat || j.type != mjcore["E_Ming"]["gang_an"] && j.type != mjcore["E_Ming"]["gang_ming"] || (Z["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]);
                            var q = '',
                                t = '';
                            switch (j.type) {
                                case mjcore["E_Ming"].kezi:
                                    q = "emoji_4",
                                        t = "emoji_3";
                                    break;
                                case mjcore["E_Ming"]["shunzi"]:
                                    q = "emoji_2",
                                        t = "emoji_1";
                                    break;
                                case mjcore["E_Ming"]["gang_ming"]:
                                    q = "emoji_6",
                                        t = "emoji_5";
                            }
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Z["DesktopMgr"].Inst["index_player"], q, 2000),
                                Z["DesktopMgr"].Inst["index_player"] = m,
                                uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Z["DesktopMgr"].Inst["index_player"], t, 2000),
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"].play(r.liqi),
                                r["operation"] && Laya["timer"].once(600, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                r["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                            var x = '';
                            switch (j.type) {
                                case mjcore["E_Ming"]["shunzi"]:
                                    x = "act_chi";
                                    break;
                                case mjcore["E_Ming"]["gang_ming"]:
                                case mjcore["E_Ming"]["gang_an"]:
                                    x = "act_kan";
                                    break;
                                case mjcore["E_Ming"].kezi:
                                    x = "act_pon";
                            }
                            var E = V["score"];
                            r["scores"] && r["scores"]["length"] > 0 && Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                V["PlaySound"](x, V["score"] - E),
                                m == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](r);
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionChiPengGang fastplay data:" + JSON["stringify"](r) + " usetime:" + m);
                            var j = r.seat,
                                V = new mjcore["MJMing"]();
                            V.type = r.type,
                                V.from = r["froms"],
                                V.pais = [];
                            for (var I = 0; I < r["tiles"]["length"]; I++)
                                V.pais.push(mjcore["MJPai"]["Create"](r["tiles"][I]));
                            for (var v = [], I = 0; I < V.pais["length"]; I++)
                                !r["tile_states"] || r["tile_states"]["length"] <= I ? v.push(0) : v.push(r["tile_states"][I]);
                            r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddMing"](V, v, !1),
                                V.type == mjcore["E_Ming"]["gang_ming"] && (Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0),
                                j != Z["DesktopMgr"].Inst.seat || V.type != mjcore["E_Ming"]["gang_an"] && V.type != mjcore["E_Ming"]["gang_ming"] || (Z["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]),
                                Z["DesktopMgr"].Inst["index_player"] = j,
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"]["fastplay"](r.liqi, 0),
                                r["operation"] && -1 != m && Laya["timer"].once(600, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m);
                                }),
                                r["scores"] && r["scores"]["length"] > 0 && Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                r["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]),
                                j == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](r);
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionChiPengGang record data:" + JSON["stringify"](r));
                            var j = r.seat,
                                V = new mjcore["MJMing"]();
                            V.type = r.type,
                                V.from = r["froms"],
                                V.pais = [];
                            for (var I = 0; I < r["tiles"]["length"]; I++)
                                V.pais.push(mjcore["MJPai"]["Create"](r["tiles"][I]));
                            for (var v = [], I = 0; I < V.pais["length"]; I++)
                                !r["tile_states"] || r["tile_states"]["length"] <= I ? v.push(0) : v.push(r["tile_states"][I]);
                            Laya["timer"].once(600, this, function() {
                                    r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                        Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                        Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddMing"](V, v),
                                        V.type == mjcore["E_Ming"]["gang_ming"] && (Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0);
                                }),
                                j != Z["DesktopMgr"].Inst.seat || V.type != mjcore["E_Ming"]["gang_an"] && V.type != mjcore["E_Ming"]["gang_ming"] || (Z["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]);
                            var q = '',
                                t = '';
                            switch (V.type) {
                                case mjcore["E_Ming"].kezi:
                                    q = "emoji_4",
                                        t = "emoji_3";
                                    break;
                                case mjcore["E_Ming"]["shunzi"]:
                                    q = "emoji_2",
                                        t = "emoji_1";
                                    break;
                                case mjcore["E_Ming"]["gang_ming"]:
                                    q = "emoji_6",
                                        t = "emoji_5";
                            }
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Z["DesktopMgr"].Inst["index_player"], q, 2000),
                                Z["DesktopMgr"].Inst["index_player"] = j,
                                uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Z["DesktopMgr"].Inst["index_player"], t, 2000),
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"]["record"](r.liqi),
                                r["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]);
                            var x = '';
                            switch (V.type) {
                                case mjcore["E_Ming"]["shunzi"]:
                                    x = "act_chi";
                                    break;
                                case mjcore["E_Ming"]["gang_ming"]:
                                case mjcore["E_Ming"]["gang_an"]:
                                    x = "act_kan";
                                    break;
                                case mjcore["E_Ming"].kezi:
                                    x = "act_pon";
                            }
                            var E = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)],
                                e = E["score"];
                            return r["scores"] && r["scores"]["length"] > 0 && Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                E["PlaySound"](x, E["score"] - e),
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 500),
                                1200;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                app.Log.log("ActionChiPengGang fastrecord data:" + JSON["stringify"](r));
                            var j = r.seat,
                                V = new mjcore["MJMing"]();
                            V.type = r.type,
                                V.from = r["froms"],
                                V.pais = [];
                            for (var I = 0; I < r["tiles"]["length"]; I++)
                                V.pais.push(mjcore["MJPai"]["Create"](r["tiles"][I]));
                            for (var v = [], I = 0; I < V.pais["length"]; I++)
                                !r["tile_states"] || r["tile_states"]["length"] <= I ? v.push(0) : v.push(r["tile_states"][I]);
                            r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddMing"](V, v, !1),
                                V.type == mjcore["E_Ming"]["gang_ming"] && (Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0),
                                r["scores"] && r["scores"]["length"] > 0 && Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                r["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](r["liqibang"]),
                                Z["DesktopMgr"].Inst["index_player"] = j,
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"]["fastrecord"](r.liqi),
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operation"] && Z["ActionOperation"].ob(r["operation"], m, 500);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionChiPengGang"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionDealTile play data:" + JSON["stringify"](r));
                            var m = r.seat,
                                j = r.tile;
                            Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"],
                                10 == Z["DesktopMgr"].Inst["left_tile_count"] && (Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](Z["DesktopMgr"].Inst.seat)]["already_xuezhan_hule_state"] || Z["DesktopMgr"].Inst["addMindVoice"](Z["DesktopMgr"].Inst.seat, "ingame_remain10"), Laya["timer"].once(1000, this, function() {
                                    Z["DesktopMgr"].Inst["playMindVoice"]();
                                }));
                            var V = !1;
                            if (r["tile_state"] && r["tile_state"] > 0 && (V = !0), m == Z["DesktopMgr"].Inst.seat) {
                                var I = Laya["timer"]["currTimer"] - Z["DesktopMgr"].Inst["last_gang"],
                                    v = 0;
                                650 > I && (v = 650 - I),
                                    Laya["timer"].once(v, this, function() {
                                        r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                            Z["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](j), V),
                                            Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                    });
                            } else
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0), V || j && -1 != j["indexOf"]('t') ? Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["TakePai"](mjcore["MJPai"]["Create"](j), V) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["TakePai"](mjcore["MJPai"]["Create"]('5z'), V), Z["DesktopMgr"].Inst["ActionRunComplete"]();
                            Z["DesktopMgr"].Inst["index_player"] = m,
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"].play(r.liqi),
                                r["operation"] && Z["ActionOperation"].play(r["operation"]),
                                r["doras"] && r["doras"]["length"] > 0 && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                m == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](r),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionDealTile fastplay data:" + JSON["stringify"](r) + " usetime:" + m);
                            var j = r.seat,
                                V = r.tile;
                            Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"];
                            var I = !1;
                            r["tile_state"] && r["tile_state"] > 0 && (I = !0),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](V), I, !1) : I || V && -1 != V["indexOf"]('t') ? Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["TakePai"](mjcore["MJPai"]["Create"](V), I) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["TakePai"](mjcore["MJPai"]["Create"]('5z'), I),
                                Z["DesktopMgr"].Inst["index_player"] = j,
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"]["fastplay"](r.liqi, 0),
                                r["operation"] && -1 != m && Z["ActionOperation"].play(r["operation"], m),
                                r["doras"] && r["doras"]["length"] > 0 && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                j == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](r),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionDealTile record data:" + JSON["stringify"](r));
                            var j = r.seat,
                                V = r.tile;
                            Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"];
                            var I = !1;
                            return r["tile_state"] && r["tile_state"] > 0 && (I = !0),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](V), I) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordTakePai"](mjcore["MJPai"]["Create"](V), I),
                                Z["DesktopMgr"].Inst["index_player"] = j,
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"]["record"](r.liqi),
                                r["doras"] && r["doras"]["length"] > 0 && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0),
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operation"] && Z["ActionOperation"].ob(r["operation"], m),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                                300;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                app.Log.log("ActionDealTile fastrecord data:" + JSON["stringify"](r));
                            var j = r.seat,
                                V = r.tile;
                            Z["DesktopMgr"].Inst["left_tile_count"] = r["left_tile_count"];
                            var I = !1;
                            r["tile_state"] && r["tile_state"] > 0 && (I = !0),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](V), I, !1) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordTakePai"](mjcore["MJPai"]["Create"](V), I),
                                Z["DesktopMgr"].Inst["index_player"] = j,
                                Z["DesktopMgr"].Inst["RefreshPaiLeft"](),
                                Z["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                                r.liqi && Z["ActionLiqi"]["fastrecord"](r.liqi),
                                r["doras"] && r["doras"]["length"] > 0 && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0),
                                Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operation"] && Z["ActionOperation"].ob(r["operation"], m),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionDealTile"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionDiscardTile play data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1);
                            var m = r.seat,
                                j = mjcore["MJPai"]["Create"](r.tile),
                                V = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]);
                            if (r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0), Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["AddQiPai"](j, V, r["moqie"]), Z["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](m, V), V) {
                                r["is_wliqi"] ? Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_drich") : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_rich");
                                var I = Z["DesktopMgr"].Inst["player_effects"][m][game["EView"]["lizhi_bgm"]];
                                if (I && 0 != I) {
                                    var v = cfg["item_definition"].item.get(I)["sargs"][0];
                                    Z["AudioMgr"]["lizhiMuted"] ? Z["AudioMgr"]["PlayLiqiBgm"](v, 300, !0) : (Z["BgmListMgr"]["stopBgm"](), Laya["timer"].once(1000, this, function() {
                                        Z["DesktopMgr"].Inst["gameing"] && (Z["BgmListMgr"]["PlayMJBgm"]('', !0), Z["AudioMgr"]["PlayLiqiBgm"](v, 300, !0));
                                    }));
                                }
                            }
                            var q = !1;
                            !j["touming"] && r["tile_state"] && r["tile_state"] > 0 && (q = !0),
                                m == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](j, q, !1, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onDiscardTile"](r["moqie"], r.tile, q, !1),
                                r["operation"] && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                m == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !1),
                                Laya["timer"].once(500, this, function() {
                                    V ? Z["DesktopMgr"].Inst["clearMindVoice"]() : Z["DesktopMgr"].Inst["playMindVoice"]();
                                });
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionDiscardTile fastplay data:" + JSON["stringify"](r) + " usetime:" + m),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"](r.tile),
                                I = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]),
                                v = !1;
                            !V["touming"] && r["tile_state"] && r["tile_state"] > 0 && (v = !0),
                                Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddQiPai"](V, I, r["moqie"], !1),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](V, v, !0, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["onDiscardTile"](r["moqie"], r.tile, v, !0),
                                r["operation"] && -1 != m && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m);
                                }),
                                void 0 != r["zhenting"] && void 0 == r["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](r["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"])),
                                j == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !0),
                                Z["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](j, I);
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionDiscardTile record data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"](r.tile),
                                I = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]),
                                v = !1;
                            if (!V["touming"] && r["tile_state"] && r["tile_state"] > 0 && (v = !0), r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0), Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddQiPai"](V, I, r["moqie"]), I && (r["is_wliqi"] ? Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["PlaySound"]("act_drich") : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["PlaySound"]("act_rich"), uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](j, "emoji_9", 2000)), j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](V, v, !1, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordDiscardTile"](V, r["moqie"], v, !1), r["tingpais"] && Z["DesktopMgr"].Inst["setTingpai"](r.seat, r["tingpais"]), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var q = 0; q < r["operations"]["length"]; q++)
                                    Z["ActionOperation"].ob(r["operations"][q], m, 450);
                            return Z["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](j, I),
                                500;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                app.Log.log("ActionDiscardTile fastrecord data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = mjcore["MJPai"]["Create"](r.tile),
                                I = !(null == r["is_liqi"] || void 0 == r["is_liqi"] || !r["is_liqi"]),
                                v = !1;
                            if (!V["touming"] && r["tile_state"] && r["tile_state"] > 0 && (v = !0), r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1), Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["AddQiPai"](V, I, r["moqie"], !1), j == Z["DesktopMgr"].Inst.seat ? Z["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](V, v, !0, r["moqie"]) : Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](j)]["recordDiscardTile"](V, r["moqie"], v, !0), r["tingpais"] && Z["DesktopMgr"].Inst["setTingpai"](r.seat, r["tingpais"]), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operations"])
                                for (var q = 0; q < r["operations"]["length"]; q++)
                                    Z["ActionOperation"].ob(r["operations"][q], m, 450);
                            Z["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](j, I);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionDiscardTile"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r;
            ! function(Z) {
                Z[Z.none = 0] = "none",
                    Z[Z["room_invite"] = 1] = "room_invite";
            }
            (r = Z["EFriendMsgType"] || (Z["EFriendMsgType"] = {}));
            var m = function() {
                    function r() {}
                    return r.init = function() {
                            var Z = this;
                            this["_friend_list"] = [],
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchFriendList", {}, function(r, m) {
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify(m),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(m));
                                        }
                                    }));
                                    if (r)
                                        app.Log.log("获取好友列表时发生错误:" + r);
                                    else if (m["error"])
                                        app.Log.log("获取好友列表时发生错误，错误码：" + m["error"].code);
                                    else {
                                        if (app.Log.log(JSON["stringify"](m)), m["friends"])
                                            for (var j = 0; j < m["friends"]["length"]; j++) {
                                                var V = m["friends"][j];
                                                Z["_friend_list"].push(V);
                                            }
                                        Z["friend_count"] = m["friend_count"],
                                            Z["friend_max_count"] = m["friend_max_count"];
                                    }
                                }),
                                this["_friendapply_list"] = [],
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchFriendApplyList", {}, function(r, m) {
                                    if (r || m["error"])
                                        app.Log.log("获取好友申请列表发生错误");
                                    else if (app.Log.log(JSON["stringify"](m)), m["applies"])
                                        for (var j = 0; j < m["applies"]["length"]; j++)
                                            Z["_friendapply_list"].push(m["applies"][j]);
                                }),
                                app["NetAgent"]["AddListener2Lobby"]("NotifyFriendViewChange", Laya["Handler"]["create"](this, this["_onFriendViewChange"], null, !1)),
                                app["NetAgent"]["AddListener2Lobby"]("NotifyFriendStateChange", Laya["Handler"]["create"](this, this["_onFriendStateChange"], null, !1)),
                                app["NetAgent"]["AddListener2Lobby"]("NotifyFriendChange", Laya["Handler"]["create"](this, this["_onFriendChange"], null, !1)),
                                app["NetAgent"]["AddListener2Lobby"]("NotifyNewFriendApply", Laya["Handler"]["create"](this, this["_onFriendApplyChange"], null, !1));
                        },
                        Object["defineProperty"](r, "friend_list", {
                            get: function() {
                                return this["_friend_list"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](r, "friendapply_list", {
                            get: function() {
                                return this["_friendapply_list"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        r.find = function(Z) {
                            for (var r = 0; r < this["_friend_list"]["length"]; r++)
                                if (this["_friend_list"][r].base["account_id"] == Z)
                                    return this["_friend_list"][r];
                            return null;
                        },
                        r["_onFriendStateChange"] = function(Z) {
                            app.Log.log(JSON["stringify"](Z));
                            var r = this.find(Z["target_id"]);
                            return null == r ? (app.Log["Error"]("收到并非好友的人的信息:" + JSON["stringify"](Z)), void 0) : (Z = Z["active_state"], Z && (null != Z["login_time"] && void 0 != Z["login_time"] && (r["state"]["login_time"] = Z["login_time"]), null != Z["logout_time"] && void 0 != Z["logout_time"] && (r["state"]["logout_time"] = Z["logout_time"]), r["state"]["playing"] = Z["playing"], null != Z["is_online"] && void 0 != Z["is_online"] && (r["state"]["is_online"] = Z["is_online"]), this["triggerMsg"]({
                                type: "singlechange",
                                account_id: r.base["account_id"]
                            })), void 0);
                        },
                        r["_onFriendViewChange"] = function(Z) {
                            var r = this.find(Z["target_id"]);
                            return null == r ? (app.Log["Error"]("收到并非好友的人的信息:" + JSON["stringify"](Z)), void 0) : (null != Z.base["avatar_id"] && void 0 != Z.base["avatar_id"] && (r.base["avatar_id"] = Z.base["avatar_id"]), null != Z.base["title"] && void 0 != Z.base["title"] && (r.base["title"] = Z.base["title"]), null != Z.base["nickname"] && void 0 != Z.base["nickname"] && (r.base["nickname"] = Z.base["nickname"]), null != Z.base["verified"] && void 0 != Z.base["verified"] && (r.base["verified"] = Z.base["verified"]), null != Z.base["level"] && void 0 != Z.base["level"] && (r.base["level"] = Z.base["level"]), null != Z.base["level3"] && void 0 != Z.base["level3"] && (r.base["level3"] = Z.base["level3"]), null != Z.base["avatar_frame"] && void 0 != Z.base["avatar_frame"] && (r.base["avatar_frame"] = Z.base["avatar_frame"]), this["triggerMsg"]({
                                type: "singlechange",
                                account_id: r.base["account_id"]
                            }), void 0);
                        },
                        r["addListener"] = function(Z) {
                            this["removeListener"](Z),
                                this["_listener"].push(Z);
                        },
                        r["removeListener"] = function(Z) {
                            for (var r = 0; r < this["_listener"]["length"]; r++)
                                if (this["_listener"][r] === Z) {
                                    this["_listener"][r] = this["_listener"][this["_listener"]["length"] - 1],
                                        this["_listener"].pop();
                                    break;
                                }
                        },
                        r["triggerMsg"] = function(Z) {
                            for (var r = 0; r < this["_listener"]["length"]; r++)
                                this["_listener"][r] && this["_listener"][r]["runWith"](Z);
                        },
                        r["removeFriend"] = function(Z) {
                            for (var r = 0; r < this["_friend_list"]["length"]; r++)
                                if (this["_friend_list"][r].base["account_id"] == Z) {
                                    for (var m = r; m < this["_friend_list"]["length"] - 1; m++)
                                        this["_friend_list"][m] = this["_friend_list"][m + 1];
                                    this["_friend_list"].pop(),
                                        this["friend_count"]--;
                                    break;
                                }
                        },
                        r["_onFriendChange"] = function(Z) {
                            var r = Z["account_id"];
                            1 == Z.type ? this.find(r) || (this["friend_count"]++, this["friend_list"].push(Z["friend"])) : 2 == Z.type && this["removeFriend"](r),
                                this["triggerMsg"]({
                                    type: "listchange"
                                });
                        },
                        r["_onFriendApplyChange"] = function(Z) {
                            for (var r = 0; r < this["_friendapply_list"]["length"]; r++)
                                if (this["_friendapply_list"][r]["account_id"] == Z["account_id"])
                                    return this["_friendapply_list"][r]["apply_time"] = Z["apply_time"], void 0;
                            if (this["_friendapply_list"].push({
                                    account_id: Z["account_id"],
                                    apply_time: Z["apply_time"]
                                }), Z["removed_id"])
                                for (var r = 0; r < this["_friendapply_list"]["length"]; r++)
                                    if (this["_friendapply_list"][r]["account_id"] == Z["removed_id"]) {
                                        for (var m = 0; m < this["_friendapply_list"]["length"] - 1; m++)
                                            this["_friendapply_list"][m] = this["_friendapply_list"][m + 1];
                                        this["_friendapply_list"].pop();
                                        break;
                                    }
                        },
                        r["delFriendApply"] = function(Z) {
                            for (var r = 0; r < this["_friendapply_list"]["length"]; r++)
                                if (this["_friendapply_list"][r]["account_id"] == Z) {
                                    for (var m = r; m < this["_friendapply_list"]["length"] - 1; m++)
                                        this["_friendapply_list"][m] = this["_friendapply_list"][m + 1];
                                    this["_friendapply_list"].pop();
                                    break;
                                }
                        },
                        r["needShowRedpoint"] = function() {
                            var r = Laya["LocalStorage"]["getItem"]("friend_apply_" + GameMgr.Inst["account_id"]),
                                m = 0;
                            if (r && (m = Number(r) / 1000), Z["FriendMgr"]["friendapply_list"])
                                for (var j = 0, V = Z["FriendMgr"]["friendapply_list"]; j < V["length"]; j++) {
                                    var I = V[j];
                                    if (I["apply_time"] > m)
                                        return !0;
                                }
                            return !1;
                        },
                        r["_friend_list"] = [],
                        r["_listener"] = [],
                        r["_friendapply_list"] = [],
                        r["friend_max_count"] = 0,
                        r["friend_count"] = 0,
                        r;
                }
                ();
            Z["FriendMgr"] = m;
        }
        (game || (game = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this,
                                j = Z["DesktopMgr"].Inst.mode == Z["EMJMode"].play || Z["DesktopMgr"].Inst["record_show_anim"];
                            r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                                Z["BgmListMgr"]["stopBgm"](),
                                Laya["timer"].once(100, this, function() {
                                    var V = r["hules"],
                                        I = 0;
                                    if (r["hules_history"] && Laya["timer"].once(3000, m, function() {
                                            for (var m = 0, V = r["hules_history"]; m < V["length"]; m++) {
                                                var I = V[m],
                                                    v = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](I.seat)];
                                                if (v && v["already_xuezhan_hule_state"]) {
                                                    for (var q = [], t = 0; t < I.hand["length"]; t++)
                                                        q.push(mjcore["MJPai"]["Create"](I.hand[t]));
                                                    q = q.sort(mjcore["MJPai"]["Distance"]),
                                                        v["onXuezhanEnd"](q, !j);
                                                }
                                            }
                                        }), V[0].zimo) {
                                        for (var v = V[0].seat, q = [], t = 0; t < V[0].hand["length"]; t++)
                                            q.push(mjcore["MJPai"]["Create"](V[0].hand[t]));
                                        q = q.sort(mjcore["MJPai"]["Distance"]),
                                            uiscript["UI_Huleshow"].Inst["showZimo"]([Z["DesktopMgr"].Inst["seat2LocalPosition"](v)]),
                                            r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                            I += 1400,
                                            Laya["timer"].once(I, m, function() {
                                                v == Z["DesktopMgr"].Inst.seat && Z["DesktopMgr"].Inst["mainrole"]["HulePrepare"](q, V[0]["hu_tile"], V[0].zimo),
                                                    Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](v)].Hule(q, mjcore["MJPai"]["Create"](V[0]["hu_tile"]), V[0].zimo);
                                            }),
                                            I += j ? 1500 : 500,
                                            v == Z["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                    } else {
                                        Laya["timer"].once(I, m, function() {
                                                for (var r = [], m = 0; m < V["length"]; m++)
                                                    r.push(Z["DesktopMgr"].Inst["seat2LocalPosition"](V[m].seat));
                                                uiscript["UI_Huleshow"].Inst["showRong"](r);
                                            }),
                                            I += 1500;
                                        for (var t = 0; t < V["length"]; t++) {
                                            var x = V[t].seat;
                                            if (x == Z["DesktopMgr"].Inst.seat) {
                                                for (var E = [], e = 0; e < V[t].hand["length"]; e++)
                                                    E.push(mjcore["MJPai"]["Create"](V[t].hand[e]));
                                                E = E.sort(mjcore["MJPai"]["Distance"]),
                                                    Z["DesktopMgr"].Inst["mainrole"]["HulePrepare"](E, V[t]["hu_tile"], V[t].zimo);
                                            }
                                        }
                                        Laya["timer"].once(I, m, function() {
                                                if (j) {
                                                    for (var r = 0, m = -1, I = 0; I < V["length"]; I++) {
                                                        var v = V[I].seat;
                                                        if (-1 == m)
                                                            m = v;
                                                        else {
                                                            var q = Z["DesktopMgr"].Inst["seat2LocalPosition"](m),
                                                                t = Z["DesktopMgr"].Inst["seat2LocalPosition"](v);
                                                            q > t && (m = v);
                                                        }
                                                    }
                                                    m >= 0 && (r = Z["DesktopMgr"].Inst["player_effects"][m][game["EView"]["hupai_effect"]]),
                                                        Z["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                                        Z["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"](),
                                                        Z["DesktopMgr"].Inst["ShowHuleEffect"](Z["DesktopMgr"].Inst["lastqipai"], Z["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], r, Z["DesktopMgr"].Inst["lastpai_seat"], Z["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                                }
                                                for (var I = 0; I < V["length"]; I++) {
                                                    for (var x = [], E = 0; E < V[I].hand["length"]; E++)
                                                        x.push(mjcore["MJPai"]["Create"](V[I].hand[E]));
                                                    x = x.sort(mjcore["MJPai"]["Distance"]),
                                                        Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](V[I].seat)].Hule(x, mjcore["MJPai"]["Create"](V[I]["hu_tile"]), V[I].zimo),
                                                        V[I].seat == Z["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                                }
                                            }),
                                            I += j ? 2000 : 300;
                                    }
                                    for (var o = [], t = 0; t < r["delta_scores"]["length"]; t++) {
                                        var N = {
                                            title_id: 0,
                                            score: 0,
                                            delta: 0
                                        };
                                        if (r["delta_scores"][t] > 0) {
                                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](t, "emoji_7", -1),
                                                Z["DesktopMgr"].Inst["onRoundEnd"](t, 1),
                                                N["delta"] = r["delta_scores"][t];
                                            for (var P = 0, R = V; P < R["length"]; P++) {
                                                var T = R[P];
                                                if (T.seat == t) {
                                                    N["title_id"] = T["title_id"];
                                                    break;
                                                }
                                            }
                                        } else
                                            r["delta_scores"][t] < 0 && (N["delta"] = r["delta_scores"][t], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](t, "emoji_8", -1), Z["DesktopMgr"].Inst["onRoundEnd"](t, 0));
                                        N["score"] = r["old_scores"][t],
                                            o.push(N);
                                    }
                                    Laya["timer"].once(I, m, function() {
                                            Laya["timer"].once(200, m, function() {
                                                    Z["DesktopMgr"].Inst["setScores"](r["scores"]);
                                                }),
                                                uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](o);
                                        }),
                                        I += 3000,
                                        Laya["timer"].once(I, m, function() {
                                            uiscript["UIMgr"].Inst["ShowWin"](r, !1),
                                                Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                        });
                                });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionHule fastplay data:" + JSON["stringify"](r)),
                                Z["BgmListMgr"]["stopBgm"](),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                uiscript["UIMgr"].Inst["ShowWin"](r, !1);
                        },
                        m["record"] = function(Z) {
                            return this.play(Z),
                                100000;
                        },
                        m["fastrecord"] = function(r) {
                            Z["BgmListMgr"]["stopBgm"](),
                                Z["DesktopMgr"].Inst["gameing"] = !1,
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1),
                                Z["DesktopMgr"].Inst["setScores"](r["scores"]),
                                uiscript["UIMgr"].Inst["ShowWin"](r, !1);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionHuleXueZhanEnd"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionNewCard play data:" + JSON["stringify"](r));
                            var m = uiscript["UI_FightBegin"].hide();
                            return Laya["timer"].once(m + 200, this, function() {
                                    uiscript["UI_DesktopInfo"].Inst["OnNewCard"](r, !0),
                                        Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                }),
                                m + 1000;
                        },
                        m["fastplay"] = function(r) {
                            return app.Log.log("ActionNewCard fastplay data:" + JSON["stringify"](r)),
                                uiscript["UI_FightBegin"].hide(),
                                uiscript["UI_DesktopInfo"].Inst["OnNewCard"](r, !1),
                                Z["DesktopMgr"].Inst["ActionRunComplete"](),
                                0;
                        },
                        m["record"] = function(r) {
                            app.Log.log("ActionNewCard record data:" + JSON["stringify"](r));
                            var m = uiscript["UI_FightBegin"].hide();
                            return Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] ? (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](r, !0), m += 1000) : uiscript["UI_DesktopInfo"].Inst["OnNewCard"](r, !1),
                                Z["DesktopMgr"].Inst["ActionRunComplete"](),
                                m;
                        },
                        m["fastrecord"] = function(r) {
                            app.Log.log("ActionNewCard fastrecord data:" + JSON["stringify"](r));
                            uiscript["UI_FightBegin"].hide();
                            return uiscript["UI_DesktopInfo"].Inst["OnNewCard"](r, !1),
                                Z["DesktopMgr"].Inst["ActionRunComplete"](),
                                0;
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionNewCard"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            app.Log.log("ActionAnGangAddGang play data:" + JSON["stringify"](r));
                            var m = r.seat,
                                j = Z["DesktopMgr"].Inst["seat2LocalPosition"](m);
                            if (r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !1), r.type == mjcore["E_Ming"]["gang_ming"])
                                Z["DesktopMgr"].Inst["players"][j]["PlaySound"]("act_kan"), Laya["timer"].once(500, this, function() {
                                    r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                        Z["DesktopMgr"].Inst["players"][j]["AddGang"](mjcore["MJPai"]["Create"](r["tiles"])),
                                        Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                                });
                            else {
                                var V = new mjcore["MJMing"]();
                                V.type = mjcore["E_Ming"]["gang_an"],
                                    V.from = [m, m, m, m],
                                    V.pais = this["getAngangTile"](r["tiles"]);
                                for (var I = [], v = 0; v < V.pais["length"]; v++)
                                    I.push(-1);
                                Laya["timer"].once(500, this, function() {
                                        r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                            Z["DesktopMgr"].Inst["players"][j]["AddMing"](V, I),
                                            Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                                    }),
                                    Z["DesktopMgr"].Inst["players"][j]["PlaySound"]("act_kan");
                            }
                            r["operation"] && Laya["timer"].once(600, this, function() {
                                    Z["ActionOperation"].play(r["operation"]);
                                }),
                                void 0 != r["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"]),
                                m == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !1),
                                uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](m, "emoji_5", 2000),
                                Z["DesktopMgr"].Inst["mainrole"]["revertAllPais"]();
                        },
                        m["fastplay"] = function(r, m) {
                            app.Log.log("ActionAnGangAddGang fastplay data:" + JSON["stringify"](r) + " usetime:" + m);
                            var j = r.seat,
                                V = Z["DesktopMgr"].Inst["seat2LocalPosition"](j);
                            if (r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0), r.type == mjcore["E_Ming"]["gang_ming"])
                                Z["DesktopMgr"].Inst["players"][V]["AddGang"](mjcore["MJPai"]["Create"](r["tiles"]), !1);
                            else {
                                var I = new mjcore["MJMing"]();
                                I.type = mjcore["E_Ming"]["gang_an"],
                                    I.from = [j, j, j, j],
                                    I.pais = this["getAngangTile"](r["tiles"]);
                                for (var v = [], q = 0; q < I.pais["length"]; q++)
                                    v.push(-1);
                                Z["DesktopMgr"].Inst["players"][V]["AddMing"](I, v, !1);
                            }
                            r["operation"] && -1 != m && Laya["timer"].once(500, this, function() {
                                    Z["ActionOperation"].play(r["operation"], m);
                                }),
                                void 0 != r["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](r["zhenting"]),
                                j == Z["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](r, !0),
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                        },
                        m["record"] = function(r, m) {
                            void 0 === m && (m = 0),
                                app.Log.log("ActionAnGangAddGang record data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = Z["DesktopMgr"].Inst["seat2LocalPosition"](j);
                            if (r.type == mjcore["E_Ming"]["gang_ming"])
                                Z["DesktopMgr"].Inst["players"][V]["PlaySound"]("act_kan"), Laya["timer"].once(500, this, function() {
                                    r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                        Z["DesktopMgr"].Inst["players"][V]["AddGang"](mjcore["MJPai"]["Create"](r["tiles"])),
                                        Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                                });
                            else {
                                var I = new mjcore["MJMing"]();
                                I.type = mjcore["E_Ming"]["gang_an"],
                                    I.from = [j, j, j, j],
                                    I.pais = this["getAngangTile"](r["tiles"]);
                                for (var v = [], q = 0; q < I.pais["length"]; q++)
                                    v.push(-1);
                                Laya["timer"].once(500, this, function() {
                                        r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0),
                                            Z["DesktopMgr"].Inst["players"][V]["AddMing"](I, v),
                                            Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                                    }),
                                    Z["DesktopMgr"].Inst["players"][V]["PlaySound"]("act_kan");
                            }
                            if (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](j, "emoji_5", 2000), Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && r["operations"])
                                for (var q = 0; q < r["operations"]["length"]; q++)
                                    Z["ActionOperation"].ob(r["operations"][q], m, 450);
                            return 1700;
                        },
                        m["fastrecord"] = function(r, m) {
                            void 0 === m && (m = -1),
                                app.Log.log("ActionAnGangAddGang fastrecord data:" + JSON["stringify"](r)),
                                r["doras"] && Z["DesktopMgr"].Inst["WhenDoras"](r["doras"], !0);
                            var j = r.seat,
                                V = Z["DesktopMgr"].Inst["seat2LocalPosition"](j);
                            if (r.type == mjcore["E_Ming"]["gang_ming"])
                                Z["DesktopMgr"].Inst["players"][V]["AddGang"](mjcore["MJPai"]["Create"](r["tiles"]), !1);
                            else {
                                var I = new mjcore["MJMing"]();
                                I.type = mjcore["E_Ming"]["gang_an"],
                                    I.from = [j, j, j, j],
                                    I.pais = this["getAngangTile"](r["tiles"]);
                                for (var v = [], q = 0; q < I.pais["length"]; q++)
                                    v.push(-1);
                                Z["DesktopMgr"].Inst["players"][V]["AddMing"](I, v, !1);
                            }
                            if (Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && r["operations"])
                                for (var q = 0; q < r["operations"]["length"]; q++)
                                    Z["ActionOperation"].ob(r["operations"][q], m, 450);
                            Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                                r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1);
                        },
                        m["getAngangTile"] = function(r) {
                            var m = [];
                            if (Z["DesktopMgr"].Inst["is_chuanma_mode"]() || '0' != r["charAt"](0) && '5' != r["charAt"](0) || 'z' == r["charAt"](1))
                                for (var j = 0; 4 > j; j++) {
                                    var V = mjcore["MJPai"]["Create"](r);
                                    Z["DesktopMgr"].Inst["is_jiuchao_mode"]() && (V["touming"] = 3 != j),
                                        m.push(V);
                                }
                            else {
                                var I = 1;
                                if (Z["DesktopMgr"].Inst["game_config"]) {
                                    var v = Z["DesktopMgr"].Inst["game_config"].mode;
                                    if (v && v["extendinfo"]) {
                                        var q = JSON["parse"](v["extendinfo"]);
                                        if (q && null != q["dora_count"])
                                            switch (q["dora_count"]) {
                                                case 0:
                                                    I = 0;
                                                    break;
                                                case 2:
                                                    I = 1;
                                                    break;
                                                case 3:
                                                    I = 1;
                                                    break;
                                                case 4:
                                                    I = 'p' == r["charAt"](1) ? 2 : 1;
                                            }
                                    }
                                    if (v && v["detail_rule"] && v["detail_rule"] && null != v["detail_rule"]["dora_count"])
                                        switch (v["detail_rule"]["dora_count"]) {
                                            case 0:
                                                I = 0;
                                                break;
                                            case 2:
                                                I = 1;
                                                break;
                                            case 3:
                                                I = 1;
                                                break;
                                            case 4:
                                                I = 'p' == r["charAt"](1) ? 2 : 1;
                                        }
                                }
                                for (var j = 0; 4 > j; j++) {
                                    var V = mjcore["MJPai"]["Create"](r);
                                    Z["DesktopMgr"].Inst["is_jiuchao_mode"]() && (V["touming"] = 3 != j),
                                        V.dora = 0 == j ? !1 : I >= j,
                                        m.push(V);
                                }
                            }
                            return Z["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                                m;
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionAnGangAddGang"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function() {
                    function r(Z) {
                        var r = this;
                        this["rounds"] = [],
                            this["locking"] = !1,
                            this["enable"] = !1,
                            this.me = Z,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function() {
                                r["btn_up"]["visible"] = r["scrollview"].rate > 0,
                                    r["btn_down"]["visible"] = r["scrollview"]["need_scroll"] && r["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return r["prototype"].show = function(r) {
                            var m = this;
                            this["enable"] = !0,
                                this["locking"] = !0,
                                this.me["visible"] = !0,
                                this["scrollview"]["reset"](),
                                this["rounds"] = r;
                            for (var j = 0, V = 0; V < r["length"]; V++) {
                                var I = this["caluH"](r[V]);
                                j += I,
                                    this["scrollview"]["addItem"](1, I);
                            }
                            Z["UIBase"]["anim_alpha_in"](this.me, {
                                    y: 30
                                }, 120, 0, Laya["Handler"]["create"](this, function() {
                                    m["locking"] = !1;
                                })),
                                this["btn_up"]["visible"] = !1,
                                this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                        },
                        r["prototype"]["close"] = function() {
                            var r = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                Z["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 120, 0, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1,
                                        r.me["visible"] = !1;
                                }));
                        },
                        r["prototype"]["caluH"] = function(Z) {
                            var r = Z["actions"][Z["actions"]["length"] - 1];
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                return j.Inst["isRoundEnd"](r.name) ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120;
                            if (view["DesktopMgr"].Inst["xuezhan"]) {
                                if (!j.Inst["isRoundEnd"](r.name))
                                    return 120;
                                if (r.data["hules_history"] && r.data["hules_history"]["length"] > 0)
                                    return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                            }
                            if ("RecordNoTile" == r.name) {
                                for (var m = r.data, V = [], I = 0; I < view["DesktopMgr"].Inst["player_count"]; I++)
                                    V.push({
                                        old_score: m["scores"][0]["old_scores"][I],
                                        delta: 0
                                    });
                                for (var I = 0; I < m["scores"]["length"]; I++)
                                    for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                        V[v]["delta"] += m["scores"][I]["delta_scores"][v];
                                for (var q = [], I = 0; I < V["length"]; I++)
                                    V[I]["delta"] > 0 && q.push(I);
                                var t = 0 == q["length"] ? 120 : 80 + 40 * q["length"];
                                return t;
                            }
                            if ("RecordLiuJu" == r.name) {
                                if (view["DesktopMgr"].Inst["xuezhan"]) {
                                    for (var x = 0, E = 0, e = r.data["delta_scores"]; E < e["length"]; E++) {
                                        var o = e[E];
                                        o && x++;
                                    }
                                    return x ? 100 + 40 * x : 120;
                                }
                                return 120;
                            }
                            return "RecordHule" == r.name ? r.data["hules"][0].zimo ? 120 : 180 + 40 * (r.data["hules"]["length"] - 1) : 120;
                        },
                        r["prototype"]["renderInfo"] = function(Z) {
                            for (var r = this, m = Z["index"], V = Z["container"], I = this["rounds"][m], v = 0; v < I["actions"]["length"]; v++)
                                if ("RecordNewRound" == I["actions"][v].name) {
                                    if (view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                        V["getChildByName"]("container_title")["getChildByName"]("chang").text = 'en' == GameMgr["client_language"] ? "Round" : '第',
                                            V["getChildByName"]("container_title")["getChildByName"]('ju').text = (I["actions"][v].data["ju_count"] + 1)["toString"](),
                                            V["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !1,
                                            V["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !1;
                                        for (var q = 0, t = V["getChildByName"]("container_title"), x = [3, 3, 0], E = 0; 3 > E; E++) {
                                            var e = t["getChildAt"](E);
                                            q += e["textField"]["textWidth"] * e["scaleX"],
                                                q += x[E];
                                        }
                                        for (var o = t["width"] / 2 - q / 2, N = 0; 3 > N; N++) {
                                            var e = t["getChildAt"](N);
                                            e.x = o,
                                                o += e["textField"]["textWidth"] * e["scaleX"] + x[N],
                                                e.y = "haolong" == e.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var P = void 0;
                                    P = "chs" == GameMgr["client_language"] ? ['东', '南', '西', '北'] : 'jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"] ? ['東', '南', '西', '北'] : 'kr' == GameMgr["client_language"] ? ['동', '남', '서', '북'] : ["East", "South", "West", "North"],
                                        V["getChildByName"]("container_title")["getChildByName"]("chang").text = P[I["actions"][v].data["chang"] % 4],
                                        V["getChildByName"]("container_title")["getChildByName"]('ju').text = (I["actions"][v].data.ju + 1)["toString"](),
                                        V["getChildByName"]("container_title")["getChildByName"]("ben").text = I["actions"][v].data.ben["toString"]();
                                    for (var q = 0, t = V["getChildByName"]("container_title"), x = [3, 3, 50, 3, 0], R = 0; R < t["numChildren"]; R++) {
                                        var e = t["getChildAt"](R);
                                        q += e["textField"]["textWidth"] * e["scaleX"],
                                            q += x[R];
                                    }
                                    for (var o = t["width"] / 2 - q / 2, T = 0; T < t["numChildren"]; T++) {
                                        var e = t["getChildAt"](T);
                                        e.x = o,
                                            o += e["textField"]["textWidth"] * e["scaleX"] + x[T],
                                            e.y = "haolong" == e.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var S = I["actions"][I["actions"]["length"] - 1],
                                J = S.data,
                                X = V,
                                b = V["getChildByName"]("line"),
                                M = V["getChildByName"]("liuju"),
                                W = V["getChildByName"]("win"),
                                B = V["getChildByName"]("lose");
                            b["visible"] = !1,
                                M["visible"] = !1,
                                W["visible"] = !1,
                                B["visible"] = !1;
                            var l = !0;
                            if (view["DesktopMgr"].Inst["xuezhan"] || view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                for (var C = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                    C.push(0);
                                for (var k = !1, n = 0, w = I["actions"]; n < w["length"]; n++) {
                                    var D = w[n];
                                    if (("RecordHuleXueZhanEnd" == D.name || "RecordNoTile" == D.name) && (k = D.data["hules_history"] && D.data["hules_history"]["length"] > 0), "RecordHuleXueZhanMid" == D.name || "RecordHuleXueZhanEnd" == D.name)
                                        for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                            C[v] += D.data["delta_scores"][v];
                                    else if ("RecordNoTile" == D.name) {
                                        for (var v = 0; v < D.data["scores"]["length"]; v++)
                                            if (D.data["scores"][v]["delta_scores"] && D.data["scores"][v]["delta_scores"]["length"] > 0)
                                                for (var c = 0; c < view["DesktopMgr"].Inst["player_count"]; c++)
                                                    C[c] += D.data["scores"][v]["delta_scores"][c];
                                    } else if ("RecordGangResult" == D.name || "RecordGangResultEnd" == D.name)
                                        for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                            C[v] += D.data["gang_infos"]["delta_scores"][v];
                                }
                                if (view["DesktopMgr"].Inst["is_chuanma_mode"]() && (k = !0), j.Inst["isRoundEnd"](S.name) || (l = !1), X["height"] = l ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120, k) {
                                    l = !1,
                                        W["visible"] = !0;
                                    var g = W["getChildByName"]("info");
                                    g["visible"] = "RecordLiuJu" != S.name,
                                        g.text = game["Tools"]["strOfLocalization"](3257),
                                        g = B["getChildByName"]("chong");
                                    for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++) {
                                        var L = W["getChildByName"]("player"),
                                            Y = L["getChildAt"](v);
                                        Y["visible"] = !0,
                                            Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](v)["nickname"],
                                            Y["getChildByName"]("point").text = C[v] > 0 ? '+' + C[v]["toString"]() : C[v]["toString"]();
                                    }
                                    for (var O = W["getChildByName"]("player"), v = view["DesktopMgr"].Inst["player_count"]; v < O["numChildren"]; v++)
                                        O["getChildAt"](v)["visible"] = !1;
                                } else;
                            }
                            if ("RecordNoTile" == S.name) {
                                if (l) {
                                    for (var y = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                        y.push({
                                            old_score: J["scores"][0]["old_scores"][v],
                                            delta: 0
                                        });
                                    for (var v = 0; v < J["scores"]["length"]; v++)
                                        for (var c = 0; c < view["DesktopMgr"].Inst["player_count"]; c++)
                                            y[c]["delta"] += J["scores"][v]["delta_scores"][c];
                                    for (var h = [], v = 0; v < y["length"]; v++)
                                        y[v]["delta"] > 0 && h.push(v);
                                    if (X["height"] = 120 + (0 == h["length"] ? 0 : 40 * (h["length"] - 1)), J["liujumanguan"]) {
                                        W["visible"] = !0;
                                        var g = W["getChildByName"]("info");
                                        g.text = game["Tools"]["strOfLocalization"](2170),
                                            g["color"] = "#8d8fac";
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            v < h["length"] ? (Y["visible"] = !0, Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](h[v])["nickname"], Y["getChildByName"]("point").text = (y[h[v]]["delta"] > 0 ? '+' : '') + y[h[v]]["delta"]["toString"]()) : Y["visible"] = !1;
                                        }
                                    } else if (W["visible"] = !0, W["getChildByName"]("info").text = '', M["visible"] = !0, M.text = game["Tools"]["strOfLocalization"](2171), M["color"] = "#8d8fac", J["scores"])
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            v < h["length"] ? (Y["visible"] = !0, Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](h[v])["nickname"], Y["getChildByName"]("point").text = (y[h[v]]["delta"] > 0 ? '+' : '') + y[h[v]]["delta"]["toString"]()) : Y["visible"] = !1;
                                        }
                                }
                            } else if ("RecordLiuJu" == S.name) {
                                var i = ['', game["Tools"]["strOfLocalization"](2172), game["Tools"]["strOfLocalization"](2173), game["Tools"]["strOfLocalization"](2174), game["Tools"]["strOfLocalization"](2175), game["Tools"]["strOfLocalization"](2176)];
                                M["visible"] = !0,
                                    M.text = i[J.type],
                                    M["color"] = "#8d8fac",
                                    l && (X["height"] = 120);
                            } else if ("RecordHule" == S.name) {
                                if (!view["DesktopMgr"].Inst["xuezhan"])
                                    if (S.data["hules"][0].zimo) {
                                        W["visible"] = !0;
                                        var g = W["getChildByName"]("info");
                                        g.text = game["Tools"]["strOfLocalization"](2177),
                                            g["color"] = "#ea3694";
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            if (0 == v) {
                                                Y["visible"] = !0;
                                                var G = J["hules"][0].seat;
                                                Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                                var K = J["delta_scores"][G];
                                                Y["getChildByName"]("point").text = (K > 0 ? '+' : '') + K["toString"]();
                                            } else
                                                Y["visible"] = !1;
                                        }
                                        X["height"] = 120;
                                    } else {
                                        W["visible"] = !0;
                                        var g = W["getChildByName"]("info");
                                        g.text = game["Tools"]["strOfLocalization"](2178),
                                            g["color"] = "#ef3538";
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            if (v < J["hules"]["length"]) {
                                                Y["visible"] = !0;
                                                var G = J["hules"][v].seat;
                                                Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                                var K = J["delta_scores"][G];
                                                Y["getChildByName"]("point").text = (K > 0 ? '+' : '') + K["toString"]();
                                            } else
                                                Y["visible"] = !1;
                                        }
                                        b["visible"] = !0,
                                            b.y = 80 + 40 * J["hules"]["length"],
                                            B["visible"] = !0,
                                            B.y = 83 + 40 * J["hules"]["length"];
                                        var g = B["getChildByName"]("chong");
                                        g["visible"] = !0;
                                        for (var O = B["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            if (0 == v) {
                                                Y["visible"] = !0;
                                                for (var G = 0, c = 0; c < J["delta_scores"]["length"]; c++)
                                                    (J["delta_scores"][c] < J["delta_scores"][G] || J["baopai"] > 0 && J["delta_scores"][c] == J["delta_scores"][G] && J["baopai"] - 1 == G) && (G = c);
                                                Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                                var K = J["delta_scores"][G];
                                                Y["getChildByName"]("point").text = K["toString"]();
                                            } else
                                                Y["visible"] = !1;
                                        }
                                        X["height"] = 180 + 40 * (S.data["hules"]["length"] - 1);
                                    }
                            } else if (j.Inst["isRoundEnd"](S.name)) {
                                if (!view["DesktopMgr"].Inst["xuezhan"] && !view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                    if (S.data["hules"][0].zimo) {
                                        W["visible"] = !0;
                                        var g = W["getChildByName"]("info");
                                        g.text = game["Tools"]["strOfLocalization"](2177),
                                            g["color"] = "#ea3694";
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            if (0 == v) {
                                                Y["visible"] = !0;
                                                var G = J["hules"][0].seat;
                                                Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                                var K = J["delta_scores"][G];
                                                Y["getChildByName"]("point").text = (K > 0 ? '+' : '') + K["toString"]();
                                            } else
                                                Y["visible"] = !1;
                                        }
                                        X["height"] = 120;
                                    } else {
                                        W["visible"] = !0;
                                        var g = W["getChildByName"]("info");
                                        g.text = game["Tools"]["strOfLocalization"](2178),
                                            g["color"] = "#ef3538";
                                        for (var O = W["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            if (v < J["hules"]["length"]) {
                                                Y["visible"] = !0;
                                                var G = J["hules"][v].seat;
                                                Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                                var K = J["delta_scores"][G];
                                                Y["getChildByName"]("point").text = (K > 0 ? '+' : '') + K["toString"]();
                                            } else
                                                Y["visible"] = !1;
                                        }
                                        b["visible"] = !0,
                                            b.y = 80 + 40 * J["hules"]["length"],
                                            B["visible"] = !0,
                                            B.y = 83 + 40 * J["hules"]["length"];
                                        var g = B["getChildByName"]("chong");
                                        g["visible"] = !0;
                                        for (var O = B["getChildByName"]("player"), v = 0; v < O["numChildren"]; v++) {
                                            var Y = O["getChildAt"](v);
                                            if (0 == v) {
                                                Y["visible"] = !0;
                                                for (var G = 0, c = 0; c < J["delta_scores"]["length"]; c++)
                                                    (J["delta_scores"][c] < J["delta_scores"][G] || J["baopai"] > 0 && J["delta_scores"][c] == J["delta_scores"][G] && J["baopai"] - 1 == G) && (G = c);
                                                Y["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](G)["nickname"];
                                                var K = J["delta_scores"][G];
                                                Y["getChildByName"]("point").text = K["toString"]();
                                            } else
                                                Y["visible"] = !1;
                                        }
                                        X["height"] = 180 + 40 * (S.data["hules"]["length"] - 1);
                                    }
                            } else
                                M["visible"] = !0, M.text = game["Tools"]["strOfLocalization"](3036), M["color"] = "#8ADB97", X["height"] = 120;
                            X["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    r["locking"] || (j.Inst["jumpRound"](m), r["close"]());
                                }, null, !1),
                                V["getChildByName"]('bg')["height"] = V["height"] - 4;
                        },
                        r;
                }
                (),
                m = function() {
                    function r(Z) {
                        var r = this;
                        this["locking"] = !1,
                            this["enable"] = !1,
                            this["have0"] = !1,
                            this.me = Z,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                r["locking"] || r["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function() {
                                r["btn_up"]["visible"] = r["scrollview"].rate > 0,
                                    r["btn_down"]["visible"] = r["scrollview"]["need_scroll"] && r["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return r["prototype"].show = function(r, m) {
                            var j = this;
                            this["enable"] = !0,
                                this["locking"] = !0,
                                this["have0"] = m,
                                this.me["visible"] = !0,
                                this["scrollview"]["reset"](),
                                this["scrollview"]["addItem"](r + (m ? 1 : 0)),
                                Z["UIBase"]["anim_alpha_in"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function() {
                                    j["locking"] = !1;
                                })),
                                this["btn_up"]["visible"] = !1,
                                this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                        },
                        r["prototype"]["close"] = function() {
                            var r = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                Z["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1,
                                        r.me["visible"] = !1;
                                }));
                        },
                        r["prototype"]["renderInfo"] = function(Z) {
                            var r = this,
                                m = Z["index"],
                                V = Z["container"];
                            V["getChildByName"]("num").text = (m + (this["have0"] ? 0 : 1))["toString"](),
                                V["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    r["locking"] || (j.Inst["jumpXun"](m + (r["have0"] ? 0 : 1)), r["close"]());
                                }, null, !1);
                            var I = V,
                                v = [];
                            'en' == GameMgr["client_language"] ? (v.push(I["getChildByName"]("xun")), v.push(I["getChildByName"]("num"))) : (v.push(I["getChildByName"]("num")), v.push(I["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](v, 115, [10]);
                            for (var q = 1; q < I["numChildren"]; q++) {
                                var t = I["getChildAt"](q);
                                t.y = "haolong" == t.font ? 42 : 39;
                            }
                        },
                        r;
                }
                (),
                j = function(j) {
                    function V() {
                        var Z = j.call(this, new ui.mj["ob_replayUI"]()) || this;
                        return Z.root = null,
                            Z["label_chang"] = null,
                            Z["label_ju"] = null,
                            Z["label_xun"] = null,
                            Z["img_play"] = null,
                            Z["img_stop"] = null,
                            Z["btn_preround"] = null,
                            Z["btn_nextround"] = null,
                            Z["page_chang"] = null,
                            Z["page_xun"] = null,
                            Z["origin_actions"] = [],
                            Z["rounds"] = [],
                            Z["round_index"] = 0,
                            Z["action_index"] = 0,
                            Z["locking_time"] = 0,
                            Z["anim_time"] = 0,
                            Z["_auto_play"] = !1,
                            Z["locking"] = !1,
                            V.Inst = Z,
                            Z;
                    }
                    return __extends(V, j),
                        Object["defineProperty"](V["prototype"], "auto_play", {
                            get: function() {
                                return this["_auto_play"];
                            },
                            set: function(Z) {
                                this["_auto_play"] = Z,
                                    this["img_play"]["visible"] = !Z,
                                    this["img_stop"]["visible"] = Z;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        V["prototype"]["onCreate"] = function() {
                            var Z = this;
                            this.root = this.me["getChildByName"]("root");
                            var j = this.me["getChildByName"]("root")["getChildByName"]("round");
                            j["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["page_chang"]["locking"] || (Z["locking"], Z["auto_play"] && (Z["auto_play"] = !1), Z["page_xun"]["enable"] && Z["page_xun"]["close"](), Z["page_chang"]["enable"] ? Z["page_chang"]["close"]() : Z["page_chang"].show(Z["rounds"]));
                                }, null, !1),
                                this["label_chang"] = j["getChildByName"]("chang"),
                                this["label_ju"] = j["getChildByName"]('ju');
                            var V = this.me["getChildByName"]("root")["getChildByName"]("turn");
                            this["label_xun"] = V["getChildByName"]("xun"),
                                V["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["locking"],
                                        Z["page_xun"]["locking"] || (Z["auto_play"] && (Z["auto_play"] = !1), Z["page_chang"]["enable"] && Z["page_chang"]["close"](), Z["page_xun"]["enable"] ? Z["page_xun"]["close"]() : Z["page_xun"].show(Z["rounds"][Z["round_index"]].xun["length"], 0 != Z["rounds"][Z["round_index"]].xun[0]));
                                }, null, !1),
                                this["page_chang"] = new r(this.me["getChildByName"]("info_chang")),
                                this["page_xun"] = new m(this.me["getChildByName"]("info_xun")),
                                this.me["getChildByName"]("root")["getChildByName"]("play")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["locking"],
                                        Z["auto_play"] = !Z["auto_play"];
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextstep")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    return Z["locking"],
                                        Z["locking_time"] > Laya["timer"]["currTimer"] ? (Z["auto_play"] && (Z["auto_play"] = !1), void 0) : (Z["nextStep"](),

                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify({
                                                    'record_click_action': "nextStep"
                                                }),
                                                onload: function(msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                        'record_click_action': "nextStep"
                                                    }));
                                                }
                                            })), void 0);
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("prestep")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["locking"],
                                        Z["preStep"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextturn")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["locking"],
                                        Z["nextXun"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("preturn")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["locking"],
                                        Z["preXun"]();
                                }, null, !1),
                                this["btn_preround"] = this.me["getChildByName"]("root")["getChildByName"]("preround"),
                                this["btn_preround"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["locking"],
                                        Z["preRound"]();
                                }, null, !1),
                                this["btn_nextround"] = this.me["getChildByName"]("root")["getChildByName"]("nextround"),
                                this["btn_nextround"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                    Z["locking"],
                                        Z["nextRound"]();
                                }, null, !1),
                                this["img_play"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("play"),
                                this["img_stop"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("pause");
                        },
                        V["prototype"]["isRoundEnd"] = function(Z) {
                            return "RecordNoTile" == Z || "RecordLiuJu" == Z || "RecordHule" == Z || "RecordHuleXueZhanEnd" == Z || "RecordGangResultEnd" == Z;
                        },
                        V["prototype"].show = function(r) {
                            var m = this;
                            this["enable"] = !0,
                                this["origin_actions"] = r,
                                this["auto_play"] = !1,
                                this["page_chang"]["enable"] = !1,
                                this["page_chang"].me["visible"] = !1,
                                this["page_xun"]["enable"] = !1,
                                this["page_xun"].me["visible"] = !1,
                                this["initData"](),
                                this["locking"] = !0,
                                Z["UIBase"]["anim_alpha_in"](this.root, {
                                    x: 30
                                }, 150, 0, Laya["Handler"]["create"](this, function() {
                                    m["locking"] = !1,
                                        Z["UI_ReplayWheel"].Inst["enable"] = !0;
                                })),
                                this["round_index"] = this["rounds"]["length"] - 1,
                                this["action_index"] = this["rounds"][this["round_index"]]["actions"]["length"] - 1,
                                this["_refreshBarshow"]();
                        },
                        V["prototype"]["close"] = function() {
                            var r = this;
                            this["reset"](),
                                this["locking"] = !0,
                                Z["UIBase"]["anim_alpha_out"](this.root, {
                                    x: 30
                                }, 150, 0, Laya["Handler"]["create"](this, function() {
                                    r["locking"] = !1,
                                        r["enable"] = !1,
                                        Z["UI_ReplayWheel"].Inst["enable"] = !1;
                                }));
                        },
                        V["prototype"]["initData"] = function() {
                            var Z = null;
                            this["rounds"] = [];
                            for (var r = this["origin_actions"], m = 0; m < r["length"]; m++) {
                                var j = r[m];
                                null == Z && (Z = {
                                        xun: [],
                                        actions: []
                                    }),
                                    Z["actions"].push(j),
                                    this["isRoundEnd"](j.name) && (this["pengding_xun"](Z), this["rounds"].push(Z), Z = null);
                            }
                            null != Z && (this["pengding_xun"](Z), this["rounds"].push(Z)),
                                this["action_index"] = -1,
                                this["round_index"] = -1,
                                this["label_chang"].text = '东',
                                this["label_ju"].text = '1',
                                this["label_xun"].text = '0',
                                this["auto_play"] = !1;
                            var V = [];
                            'en' != GameMgr["client_language"] ? (V.push(this["label_xun"]["parent"]["getChildByName"]("xun")), V.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (V.push(this["label_xun"]["parent"]["getChildByName"]("turn")), V.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1,
                                this["btn_preround"]["visible"] = this["rounds"]["length"] > 1,
                                game["Tools"]["sprite_align_center"](V, 80, [5]);
                        },
                        V["prototype"]["reset"] = function() {
                            this["auto_play"] = !1,
                                this["page_chang"]["enable"] && this["page_chang"]["close"](),
                                this["page_xun"]["enable"] && this["page_xun"]["close"]();
                        },
                        V["prototype"]["pengding_xun"] = function(Z) {
                            Z.xun = [];
                            for (var r = view["DesktopMgr"].Inst.seat, m = !1, j = 0; j < Z["actions"]["length"]; j++) {
                                var V = Z["actions"][j];
                                "RecordNewRound" == V.name ? V.data.ju == r && (m = !0, Z.xun.push(j)) : "RecordDealTile" == V.name || "RecordChiPengGang" == V.name || "RecordHuleXueZhanMid" == V.name ? V.data.seat == r && (m || (m = !0, Z.xun.push(j))) : ("RecordDiscardTile" == V.name || "RecordAnGangAddGang" == V.name || "RecordBaBei" == V.name) && (m = !1);
                            }
                        },
                        V["prototype"]["get_currentxun"] = function() {
                            var Z = this["rounds"][this["round_index"]];
                            if (0 == Z.xun["length"])
                                return 1;
                            for (var r = Z.xun["length"], m = 0; m < Z.xun["length"]; m++)
                                if (this["action_index"] < Z.xun[m]) {
                                    r = m;
                                    break;
                                }
                            return 0 > r && (r = 0),
                                r;
                        },
                        V["prototype"]["nextStep"] = function(Z) {
                            if (void 0 === Z && (Z = !1), !(!Z && this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= this["rounds"]["length"])) {
                                if (this["round_index"] < 0 || this["rounds"][this["round_index"]]["actions"]["length"] <= this["action_index"] + 1 ? (this["round_index"]++, this["action_index"] = 0, this["round_index"] == this["rounds"]["length"] && (this["round_index"] = 0)) : this["action_index"]++, this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1, this["btn_preround"]["visible"] = this["rounds"]["length"] > 1, this["action_index"] > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name) {
                                    var r = this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].data.seat;
                                    r != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](r)]["RecordLiPai"](0);
                                }
                                this["locking_time"] = Laya["timer"]["currTimer"] + this["doRecord"](this["rounds"][this["round_index"]]["actions"][this["action_index"]]),
                                    this["_refreshBarshow"]();
                            }
                        },
                        V["prototype"]["_refreshBarshow"] = function() {
                            var Z = '';
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                'en' == GameMgr["client_language"] ? Z = "Round" : ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"]) && (Z += '第'), this["label_chang"].text = Z, this["label_ju"].text = (view["DesktopMgr"].Inst["index_chuanma_ju"] + 1)["toString"]();
                            else {
                                if ("chs" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += '东';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += '東';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('kr' == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += '동';
                                            break;
                                        case 1:
                                            Z += '남';
                                            break;
                                        case 2:
                                            Z += '서';
                                            break;
                                        case 3:
                                            Z += '북';
                                    }
                                else
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Z += "East";
                                            break;
                                        case 1:
                                            Z += "South";
                                            break;
                                        case 2:
                                            Z += "West";
                                            break;
                                        case 3:
                                            Z += "North";
                                    }
                                this["label_chang"].text = Z,
                                    this["label_ju"].text = (view["DesktopMgr"].Inst["index_ju"] + 1)["toString"]();
                            }
                            var r = function(Z, r) {
                                for (var m = 0, j = 1; j < Z["numChildren"]; j++) {
                                    1 != j && (m += 3);
                                    var V = Z["getChildAt"](j);
                                    m += V["textField"]["textWidth"] * V["scaleX"];
                                }
                                for (var I = Z["width"] / 2 - m / 2, j = 1; j < Z["numChildren"]; j++) {
                                    var V = Z["getChildAt"](j);
                                    V.x = I,
                                        I += V["textField"]["textWidth"] * V["scaleX"] + 3,
                                        V.y = "haolong" == V.font ? r + 3 : r;
                                }
                            };
                            this["label_xun"].text = this["get_currentxun"]()["toString"]();
                            var m = [];
                            'en' != GameMgr["client_language"] ? (m.push(this["label_xun"]["parent"]["getChildByName"]("xun")), m.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (m.push(this["label_xun"]["parent"]["getChildByName"]("turn")), m.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](m, 80, [5]),
                                r(this["label_chang"]["parent"], 40);
                        },
                        V["prototype"]["doRecord"] = function(Z) {
                            try {
                                var r = 0;
                                switch (Z.name) {
                                    case "RecordNewRound":
                                        this["anim_time"] = view["ActionNewRound"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordChangeTile":
                                        this["anim_time"] = view["ActionChangeTile"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordSelectGap":
                                        this["anim_time"] = view["ActionSelectGap"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordDiscardTile":
                                        this["anim_time"] = view["ActionDiscardTile"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordDealTile":
                                        this["anim_time"] = view["ActionDealTile"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordChiPengGang":
                                        this["anim_time"] = view["ActionChiPengGang"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordAnGangAddGang":
                                        this["anim_time"] = view["ActionAnGangAddGang"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 200 : 0);
                                        break;
                                    case "RecordBaBei":
                                        this["anim_time"] = view["ActionBabei"]["record"](Z.data),
                                            r = this["anim_time"] + (this["_auto_play"] ? 200 : 0);
                                        break;
                                    case "RecordHule":
                                        this["anim_time"] = view["ActionHule"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordLiuJu":
                                        this["anim_time"] = view["ActionLiuJu"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordNoTile":
                                        this["anim_time"] = view["ActionNoTile"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        this["anim_time"] = view["ActionHuleXueZhanMid"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        this["anim_time"] = view["ActionHuleXueZhanEnd"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordGangResult":
                                        this["anim_time"] = view["ActionGangResult"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordGangResultEnd":
                                        this["anim_time"] = view["ActionGangResultEnd"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordRevealTile":
                                        this["anim_time"] = view["ActionRevealTile"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordUnveilTile":
                                        this["anim_time"] = view["ActionUnveilTile"]["record"](Z.data),
                                            r = this["anim_time"];
                                        break;
                                    case "RecordLockTile":
                                        this["anim_time"] = view["ActionLockTile"]["record"](Z.data),
                                            r = this["anim_time"];
                                }
                                return this["anim_time"] += Laya["timer"]["currTimer"],
                                    r;
                            } catch (m) {
                                var j = {};
                                return j["error"] = m["message"],
                                    j["stack"] = m["stack"],
                                    j["method"] = "UI_Ob_Replay doRecord",
                                    j.name = Z.name,
                                    j.data = Z.data,
                                    GameMgr.Inst["onFatalError"](j),
                                    1000000;
                            }
                        },
                        V["prototype"]["doFastRecord"] = function(Z) {
                            try {
                                switch (Z.name) {
                                    case "RecordNewRound":
                                        view["ActionNewRound"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordChangeTile":
                                        view["ActionChangeTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordSelectGap":
                                        view["ActionSelectGap"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordDiscardTile":
                                        view["ActionDiscardTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordDealTile":
                                        view["ActionDealTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordChiPengGang":
                                        view["ActionChiPengGang"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordAnGangAddGang":
                                        view["ActionAnGangAddGang"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordHule":
                                        view["ActionHule"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordLiuJu":
                                        view["ActionLiuJu"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordNoTile":
                                        view["ActionNoTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordBaBei":
                                        view["ActionBabei"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        view["ActionHuleXueZhanMid"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        view["ActionHuleXueZhanEnd"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordGangResult":
                                        view["ActionGangResult"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordGangResultEnd":
                                        view["ActionGangResultEnd"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordRevealTile":
                                        view["ActionRevealTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordLockTile":
                                        view["ActionLockTile"]["fastrecord"](Z.data);
                                        break;
                                    case "RecordUnveilTile":
                                        view["ActionUnveilTile"]["fastrecord"](Z.data);
                                }
                            } catch (r) {
                                var m = {};
                                return m["error"] = r["message"],
                                    m["stack"] = r["stack"],
                                    m["method"] = "UI_Ob_Replay doRecord",
                                    m.name = Z.name,
                                    m.data = Z.data,
                                    GameMgr.Inst["onFatalError"](m),
                                    1000000;
                            }
                            return 0;
                        },
                        V["prototype"]["update"] = function() {
                            !this["auto_play"] || this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= 0 && this["round_index"] < this["rounds"]["length"] && this["action_index"] + 1 < this["rounds"][this["round_index"]]["actions"]["length"] && (this["nextStep"](),

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        V["prototype"]["jumpToLastRoundXun"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            this["round_index"] = (this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"];
                            var Z = this["rounds"][this["round_index"]],
                                r = Z["actions"]["length"] - 3;
                            1 > r && (r = 1),

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': r - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': r - 1
                                        }));
                                    }
                                })),
                                this["_jumpStep"](this["round_index"], r);
                        },
                        V["prototype"]["nextXun"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Z = this["rounds"][this["round_index"]];
                                if (this["action_index"] != Z["actions"]["length"] - 1) {
                                    var r = 0;
                                    if (0 == Z.xun["length"])
                                        r = Z["actions"]["length"] - 1;
                                    else if (Z.xun[0] > this["action_index"])
                                        r = Z.xun[0];
                                    else {
                                        var m = this["get_currentxun"]();
                                        r = m == Z.xun["length"] ? Z["actions"]["length"] - 1 : Z.xun[m];
                                    }

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': r - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextXun",
                                                'fast_record_to': r - 1
                                            }));
                                        }
                                    }));
                                    this["_jumpStep"](this["round_index"], r);
                                }
                            }
                        },
                        V["prototype"]["preXun"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Z = this["rounds"][this["round_index"]];
                                if (0 == this["action_index"] || "RecordNewRound" == Z["actions"][this["action_index"]].name)
                                    return this["jumpToLastRoundXun"](), void 0;
                                var r = 0;
                                if (0 == Z.xun["length"])
                                    r = 0;
                                else if (Z.xun[0] > this["action_index"])
                                    r = 0;
                                else {
                                    var m = this["get_currentxun"]() - 1;
                                    r = 0 == m ? 0 : Z.xun[m - 1];
                                }

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': r - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': r - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], r);
                            }
                        },
                        V["prototype"]["preStep"] = function() {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Z = this["rounds"][this["round_index"]];
                                return 0 == this["action_index"] || "RecordNewRound" == Z["actions"][this["action_index"]].name ? (this["jumpToLastRoundXun"](), void 0) : (

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this["_jumpStep"](this["round_index"], this["action_index"] - 1), void 0);
                            }
                        },
                        V["prototype"]["nextRound"] = function() {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this["_jumpStep"]((this["round_index"] + 1) % this["rounds"]["length"], 0), void 0);
                        },
                        V["prototype"]["preRound"] = function() {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this["_jumpStep"]((this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"], 0), void 0);
                        },
                        V["prototype"]["jumpRound"] = function(Z) {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (0 > Z || Z >= this["rounds"]["length"] ||

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': Z
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': Z
                                            }));
                                        }
                                    })) ||
                                    this["_jumpStep"](Z, 0), void 0);
                        },
                        V["prototype"]["jumpXun"] = function(Z) {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var r = this["rounds"][this["round_index"]],
                                    m = 0;
                                m = 0 == r.xun["length"] ? 0 : 0 == Z ? 0 : r.xun[Z - 1],

                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': m - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': m - 1
                                            }));
                                        }
                                    })),
                                    this["_jumpStep"](this["round_index"], m);
                            }
                        },
                        V["prototype"]["onWheelClick"] = function() {
                            return this["page_chang"]["locking"] || this["page_xun"]["locking"] ? void 0 : this["page_chang"]["enable"] || this["page_xun"]["enable"] ? (this["page_chang"]["enable"] && this["page_chang"]["close"](), this["page_xun"]["enable"] && this["page_xun"]["close"](), void 0) : (

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this["nextStep"](), void 0);
                        },
                        V["prototype"]["_jumpStep"] = function(Z, r) {
                            var m = this["rounds"][Z];
                            this["round_index"] = Z,
                                m["actions"][r] && m["actions"][r + 1] && "RecordNewCard" == m["actions"][r].name && r++;
                            for (var j = 0; r > j; j++) {
                                if (j > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][j - 1].name) {
                                    var V = this["rounds"][this["round_index"]]["actions"][j - 1].data.seat;
                                    V != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](V)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][j]);
                            }
                            if (r == m["actions"]["length"] - 1)
                                this["action_index"] = r - 1, this["nextStep"]();
                            else {
                                if (r > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][r - 1].name) {
                                    var V = this["rounds"][this["round_index"]]["actions"][r - 1].data.seat;
                                    V != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](V)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][r]),
                                    this["action_index"] = r,
                                    this["_refreshBarshow"]();
                            }
                        },
                        V["prototype"]["onChangeMainBody"] = function() {
                            var Z = this["round_index"],
                                r = this["action_index"];
                            this["initData"](),
                                this["reset"](),
                                Z >= this["rounds"]["length"] || 0 > Z || this["_jumpStep"](Z, r);
                        },
                        V.Inst = null,
                        V;
                }
                (Z["UIBase"]);
            Z["UI_Ob_Replay"] = j;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            for (var m = 0, j = r["gang_infos"], V = [], I = 0; I < j["delta_scores"]["length"]; I++) {
                                var v = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                j["delta_scores"][I] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](I, "emoji_7", -1), v["delta"] = j["delta_scores"][I]) : j["delta_scores"][I] < 0 && (v["delta"] = j["delta_scores"][I], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](I, "emoji_8", -1)),
                                    v["score"] = j["old_scores"][I],
                                    V.push(v);
                            }
                            if (Laya["timer"].once(200, this, function() {
                                    Z["DesktopMgr"].Inst["setScores"](j["scores"]);
                                }), uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](V), m += 2000, j["hules_history"] && j["hules_history"]["length"] > 0) {
                                for (var q = 0, t = j["hules_history"]; q < t["length"]; q++) {
                                    var x = t[q],
                                        E = Z["DesktopMgr"].Inst["seat2LocalPosition"](x.seat);
                                    Z["DesktopMgr"].Inst["players"][E]["onXuezhanEnd"](x.hand, !1);
                                }
                                Laya["timer"].once(m, this, function() {
                                    uiscript["UIMgr"].Inst["ShowWin"](j, !1);
                                });
                            } else
                                Laya["timer"].once(m, this, function() {
                                    Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["paipu"] ? uiscript["UI_Replay"].Inst["nextStep"](!0) : uiscript["UIMgr"].Inst["ShowGameEnd"]();
                                });
                            Laya["timer"].once(m, this, function() {
                                Z["DesktopMgr"].Inst["ActionRunComplete"]();
                            });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionHule fastplay data:" + JSON["stringify"](r));
                            var m = r["gang_infos"];
                            m["hules_history"] && m["hules_history"]["length"] > 0 ? uiscript["UIMgr"].Inst["ShowWin"](m, !1) : Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["paipu"] ? uiscript["UI_Replay"].Inst["nextStep"](!0) : uiscript["UIMgr"].Inst["ShowGameEnd"]();
                        },
                        m["record"] = function(Z) {
                            return this.play(Z),
                                5100;
                        },
                        m["fastrecord"] = function(r) {
                            r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                this["fastplay"](r, 1000);
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionGangResultEnd"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r = function(r) {
                    function m() {
                        return null !== r && r["apply"](this, arguments) || this;
                    }
                    return __extends(m, r),
                        m.play = function(r) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(r),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(r));
                                }
                            }));
                            var m = this;
                            app.Log.log("ActionNotile play data:" + JSON["stringify"](r));
                            for (var j = 0, V = 1; 4 > V; V++) {
                                var I = Z["DesktopMgr"].Inst["players"][V]["discardcd"] - Laya["timer"]["currTimer"];
                                I > j && (j = I);
                            }
                            j += 1000,
                                Laya["timer"].once(j, this, function() {
                                    Z["BgmListMgr"]["stopBgm"]();
                                    var j = r["players"];
                                    Z["DesktopMgr"].Inst["gameing"] = !1,
                                        uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                                        uiscript["UI_TingPai"].Inst["reset"](),
                                        uiscript["UI_TingPai"].Inst["setZhengting"](!1),
                                        r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !0);
                                    for (var V = 0; V < j["length"]; V++) {
                                        for (var I = Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](V)], v = [], q = 0; q < j[V].hand["length"]; q++)
                                            v.push(mjcore["MJPai"]["Create"](j[V].hand[q]));
                                        v = v.sort(mjcore["MJPai"]["Distance"]),
                                            Z["DesktopMgr"].Inst["is_chuanma_mode"]() ? I["onChuanmaNoTile"](v, !1) : I["already_xuezhan_hule_state"] ? I["onXuezhanEnd"](v, !1) : I["Huangpai"](j[V]["tingpai"], v, !1);
                                    }
                                    Laya["timer"].once(1000, m, function() {
                                        var V,
                                            I = !1,
                                            v = !1;
                                        if (Z["DesktopMgr"].Inst["xuezhan"] || Z["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                            var q = !1;
                                            if (r["scores"] && r["scores"]["length"] > 0) {
                                                for (var t = 0; t < r["scores"]["length"]; t++) {
                                                    if (r["scores"][t]["hasOwnProperty"]("delta_scores"))
                                                        for (var x = 0; x < Z["DesktopMgr"].Inst["player_count"] && x < r["scores"][t]["delta_scores"]["length"]; x++)
                                                            0 != r["scores"][t]["delta_scores"][x] && (q = !0);
                                                    if (r["scores"][t]["hasOwnProperty"]("taxes"))
                                                        for (var x = 0; x < Z["DesktopMgr"].Inst["player_count"] && x < r["scores"][t]["taxes"]["length"]; x++)
                                                            0 != r["scores"][t]["taxes"][x] && (v = !0);
                                                }
                                                V = r["scores"][0]["lines"];
                                            }
                                            var E = !1;
                                            r["liujumanguan"] && (E = !0),
                                                r["hules_history"] && r["hules_history"]["length"] > 0 && (E = !0),
                                                I = !v && !q && !E;
                                        }
                                        uiscript["UI_Huleshow"].Inst["showLiuJu"](j, Laya["Handler"]["create"](m, function() {
                                            if (Z["DesktopMgr"].Inst["xuezhan"] || Z["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                                var j = !1,
                                                    I = [],
                                                    q = [];
                                                if (r["scores"] && r["scores"]["length"] > 0) {
                                                    for (var t = 0; t < Z["DesktopMgr"].Inst["player_count"]; t++)
                                                        I.push({
                                                            score: Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](t)]["score"],
                                                            title_id: 0,
                                                            delta: 0
                                                        }), q.push({
                                                            score: 0,
                                                            title_id: 0,
                                                            delta: 0
                                                        });
                                                    for (var t = 0; t < r["scores"]["length"]; t++) {
                                                        if (r["liujumanguan"] && (I[r["scores"][t].seat]["title_id"] = -1), r["scores"][t]["hasOwnProperty"]("delta_scores"))
                                                            for (var x = 0; x < Z["DesktopMgr"].Inst["player_count"] && x < r["scores"][t]["delta_scores"]["length"]; x++)
                                                                I[x]["delta"] += r["scores"][t]["delta_scores"][x];
                                                        if (r["scores"][t]["hasOwnProperty"]("taxes"))
                                                            for (var x = 0; x < Z["DesktopMgr"].Inst["player_count"] && x < r["scores"][t]["taxes"]["length"]; x++)
                                                                q[x]["delta"] += r["scores"][t]["taxes"][x];
                                                    }
                                                    if (Z["DesktopMgr"].Inst["is_chuanma_mode"]())
                                                        for (var t = 0; t < Z["DesktopMgr"].Inst["player_count"]; t++)
                                                            0 != I[t]["delta"] && (j = !0), q[t]["score"] = I[t]["score"] + I[t]["delta"];
                                                    else
                                                        for (var t = 0; t < Z["DesktopMgr"].Inst["player_count"]; t++)
                                                            0 != I[t]["delta"] && (j = !0);
                                                }
                                                if (Z["DesktopMgr"].Inst["is_chuanma_mode"]() && v) {
                                                    var E = m,
                                                        e = function() {
                                                            var Z = !1;
                                                            r["liujumanguan"] && (Z = !0, uiscript["UIMgr"].Inst["ShowWin"](r["scores"], !0)),
                                                                r["hules_history"] && r["hules_history"]["length"] > 0 && (Z = !0, uiscript["UIMgr"].Inst["ShowHistoryWin"](r)),
                                                                Z ? uiscript["UI_Hu_Xuezhan"].Inst["close"]() : E["onXuezhanNoWinNext"]();
                                                        };
                                                    j ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["showTaxes"](I, q, Laya["Handler"]["create"](null, e))) : uiscript["UI_Hu_Xuezhan"].Inst["showTaxes"](null, q, Laya["Handler"]["create"](null, e)),
                                                        Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                                } else {
                                                    var o = m,
                                                        e = function() {
                                                            var Z = !1;
                                                            r["liujumanguan"] && (Z = !0, uiscript["UIMgr"].Inst["ShowWin"](r["scores"], !0)),
                                                                r["hules_history"] && r["hules_history"]["length"] > 0 && (Z = !0, uiscript["UIMgr"].Inst["ShowHistoryWin"](r)),
                                                                Z ? uiscript["UI_Hu_Xuezhan"].Inst["close"]() : o["onXuezhanNoWinNext"]();
                                                        };
                                                    j ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](I, Laya["Handler"]["create"](null, e), Z["DesktopMgr"].Inst["is_chuanma_mode"](), V)) : e(),
                                                        Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                                }
                                            } else {
                                                if (r["liujumanguan"])
                                                    uiscript["UIMgr"].Inst["ShowWin"](r["scores"], !0);
                                                else {
                                                    var N = [];
                                                    if (r["scores"] && r["scores"]["length"] > 0) {
                                                        for (var t = 0; t < Z["DesktopMgr"].Inst["player_count"]; t++)
                                                            N.push({
                                                                old_score: r["scores"][0]["old_scores"][t],
                                                                delta: 0
                                                            });
                                                        for (var t = 0; t < r["scores"]["length"]; t++)
                                                            if (r["scores"][t]["hasOwnProperty"]("delta_scores"))
                                                                for (var x = 0; x < Z["DesktopMgr"].Inst["player_count"] && x < r["scores"][t]["delta_scores"]["length"]; x++)
                                                                    N[x]["delta"] += r["scores"][t]["delta_scores"][x];
                                                    } else
                                                        for (var t = 0; t < Z["DesktopMgr"].Inst["player_count"]; t++)
                                                            N.push({
                                                                old_score: Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](t)]["score"],
                                                                delta: 0
                                                            });
                                                    uiscript["UI_ScoreChange"].Inst.show(N);
                                                }
                                                Z["DesktopMgr"].Inst["ActionRunComplete"]();
                                            }
                                        }), I);
                                    });
                                });
                        },
                        m["fastplay"] = function(r) {
                            app.Log.log("ActionNewRound fastplay data:" + JSON["stringify"](r));
                            Z["BgmListMgr"]["stopBgm"]();
                            var m = r["players"];
                            Z["DesktopMgr"].Inst["gameing"] = !1,
                                uiscript["UI_OtherPlayerInfo"].Inst["close"]();
                            var j = [!1, !1, !1, !1];
                            uiscript["UI_TingPai"].Inst["reset"](),
                                uiscript["UI_TingPai"].Inst["setZhengting"](!1);
                            for (var V = 0; V < Z["DesktopMgr"].Inst["player_count"]; V++) {
                                for (var I = [], v = 0; v < m[V].hand["length"]; v++)
                                    I.push(mjcore["MJPai"]["Create"](m[V].hand[v]));
                                I = I.sort(mjcore["MJPai"]["Distance"]),
                                    Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](V)]["Huangpai"](m[V]["tingpai"], I, !0),
                                    j[Z["DesktopMgr"].Inst["seat2LocalPosition"](V)] = m[V]["tingpai"];
                            }
                            if (r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1), r["liujumanguan"])
                                uiscript["UIMgr"].Inst["ShowWin"](r["scores"], !0);
                            else {
                                var q = [];
                                if (r["scores"] && r["scores"]["length"] > 0) {
                                    for (var V = 0; V < Z["DesktopMgr"].Inst["player_count"]; V++)
                                        q.push({
                                            old_score: r["scores"][0]["old_scores"][V],
                                            delta: 0
                                        });
                                    for (var V = 0; V < r["scores"]["length"]; V++)
                                        if (r["scores"][V]["hasOwnProperty"]("delta_scores"))
                                            for (var v = 0; v < Z["DesktopMgr"].Inst["player_count"] && v < r["scores"][V]["delta_scores"]["length"]; v++)
                                                q[v]["delta"] += r["scores"][V]["delta_scores"][v];
                                } else
                                    for (var V = 0; V < Z["DesktopMgr"].Inst["player_count"]; V++)
                                        q.push({
                                            old_score: Z["DesktopMgr"].Inst["players"][Z["DesktopMgr"].Inst["seat2LocalPosition"](V)]["score"],
                                            delta: 0
                                        });
                                uiscript["UI_ScoreChange"].Inst.show(q);
                            }
                        },
                        m["record"] = function(Z) {
                            return app.Log.log("ActionNewRound record data:" + JSON["stringify"](Z)),
                                this.play(Z),
                                8000;
                        },
                        m["fastrecord"] = function(r) {
                            Z["BgmListMgr"]["stopBgm"](),
                                Z["DesktopMgr"].Inst["gameing"] = !1;
                            for (var m = [], j = 0; j < r["players"]["length"]; j++)
                                m.push({
                                    seat: j
                                });
                            r.muyu && Z["DesktopMgr"].Inst["onMuyuChange"](r.muyu, !1),
                                uiscript["UI_Huleshow"].Inst["showLiuJu"](m, null);
                        },
                        m["onXuezhanNoWinNext"] = function() {
                            var r = this;
                            if (Z["DesktopMgr"].Inst.mode == Z["EMJMode"].play)
                                null != Z["DesktopMgr"].Inst["gameEndResult"] ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["enable"] = !1, uiscript["UIMgr"].Inst["ShowGameEnd"]()) : (Z["DesktopMgr"].Inst["Reset"](), Laya["timer"].once(200, this, function() {
                                    Z["DesktopMgr"].Inst["timestoped"] ? Z["DesktopMgr"].Inst["handles_after_timerun"].push(Laya["Handler"]["create"](r, function() {
                                        app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function() {});
                                    })) : app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function() {});
                                }));
                            else if (Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["paipu"])
                                uiscript["UI_Replay"].Inst["nextStep"](!0);
                            else if (Z["DesktopMgr"].Inst.mode == Z["EMJMode"]["live_broadcast"]) {
                                uiscript["UI_Huleshow"].Inst["enable"] = !1,
                                    uiscript["UI_Live_Broadcast"].Inst["onScoreChangeConfirm"]();
                            }
                        },
                        m;
                }
                (Z["ActionBase"]);
            Z["ActionNoTile"] = r;
        }
        (view || (view = {}));
        ! function(Z) {
            var r,
                m = function() {
                    function r(r) {
                        var m = this;
                        this["_show_hand"] = !1,
                            this["_show_paopai"] = !1,
                            this["_show_replay"] = !1,
                            this.me = r,
                            this["_btn_out"] = this.me["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["switch"]();
                            }, null, !1),
                            this.me["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["_show_hand"] = !m["_show_hand"],
                                    m["_choosed_show_hand"]["visible"] = m["_show_hand"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](m["_show_hand"]);
                            }, null, !1),
                            this["_choosed_show_hand"] = this.me["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["_show_paopai"] = !m["_show_paopai"],
                                    m["_choosed_show_paopai"]["visible"] = m["_show_paopai"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](m["_show_paopai"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this.me["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_showbar")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                Z["UI_Ob_Replay"].Inst["locking"] || Z["UI_Ob_Replay"].Inst["anim_time"] > Laya["timer"]["currTimer"] || "RecordHuleXueZhanEnd" != j.Inst["last_action_name"] && "RecordHule" != j.Inst["last_action_name"] && "RecordLiuJu" != j.Inst["last_action_name"] && "RecordNoTile" != j.Inst["last_action_name"] && ("RecordNewRound" == j.Inst["last_action_name"] && j.Inst["during_do_cd"] || (m["_show_replay"] = !m["_show_replay"], m["_choosed_show_replay"]["visible"] = m["_show_replay"], m["_show_replay"] ? j.Inst["enterReplay"]() : j.Inst["closeReplay"]()));
                            }, null, !1),
                            this["_choosed_show_replay"] = this.me["getChildByName"]("btn_showbar")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this.me["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return r["prototype"]["reset"] = function() {
                            Laya["Tween"]["clearAll"](this),
                                this["_show_hand"] = !1,
                                this.me.x = -258,
                                this["_btn_out"]["disabled"] = !1,
                                this["_choosed_show_hand"]["visible"] = this["_show_hand"],
                                this["_show_paopai"] = !1,
                                this["_choosed_show_paopai"]["visible"] = this["_show_paopai"],
                                this["_show_replay"] = !1,
                                this["_choosed_show_replay"]["visible"] = this["_show_replay"];
                        },
                        r["prototype"]["switch"] = function() {
                            var Z = this,
                                r = -258;
                            this.me.x < -100 && (r = -5),
                                this["_btn_out"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: r
                                }, 200, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function() {
                                    Z["_btn_out"]["disabled"] = !1;
                                }), 0, !0, !0);
                        },
                        r;
                }
                ();
            ! function(Z) {
                Z[Z.none = 0] = "none",
                    Z[Z["gameing"] = 1] = "gameing",
                    Z[Z["replay"] = 2] = "replay";
            }
            (r || (r = {}));
            var j = function(j) {
                    function V() {
                        var Z = j.call(this, new ui.mj["live_broadcastUI"]()) || this;
                        return Z["state"] = r.none,
                            Z["segments"] = [],
                            Z["_time0"] = 0,
                            Z["_time_start"] = 0,
                            Z["segment_index"] = 0,
                            Z["unit_index"] = 0,
                            Z["during_asknew"] = !1,
                            Z["retry_loadtime"] = 0,
                            Z["segment_end_millisecond"] = 0,
                            Z["guanzhanconfig"] = null,
                            Z["do_unit_cd"] = 0,
                            Z["time_stop_length"] = 0,
                            Z["time_stop_start_time"] = 0,
                            Z["_last_action_name"] = '',
                            Z["have_gameend"] = !1,
                            Z["is_realtime"] = !1,
                            Z["pending_units"] = [],
                            V.Inst = Z,
                            app["NetAgent"]["AddListener2MJ"]("NotifyObserveData", Laya["Handler"]["create"](Z, function(r) {
                                Z["pending_units"].push(r);
                            })),
                            Z;
                    }
                    return __extends(V, j),
                        V["fetchInfo"] = function(r, m) {
                            app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveInfo", {
                                game_uuid: r
                            }, function(j, V) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(V),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(V));
                                    }
                                }));
                                j || V["error"] ? (Z["UIMgr"].Inst["showNetReqError"]("fetchGameLiveInfo", j, V), m && m["runWith"]({
                                    success: !1
                                })) : (app.Log.log("fetchGameLiveInfo res:" + JSON["stringify"](V)), V["left_start_seconds"] ? Z["UI_WaitOb"].Inst.show(r, V["left_start_seconds"], m) : m && m["runWith"]({
                                    success: !0,
                                    data: V
                                }));
                            });
                        },
                        V["goToWatch"] = function(r, m, j) {
                            var I = this;
                            app.Log.log("goToWatch res:" + JSON["stringify"](m)),
                                Z["UI_Loading"].Inst.show("enter_mj"),
                                game["Scene_Lobby"].Inst["active"] && (game["Scene_Lobby"].Inst["active"] = !1),
                                GameMgr.Inst["onLoadStart"]('ob');
                            for (var v = m["live_head"], q = [null, null, null, null], t = 0; t < v["players"]["length"]; t++) {
                                for (var x = -1, E = 0; E < v["seat_list"]["length"]; E++)
                                    if (v["seat_list"][E] == v["players"][t]["account_id"]) {
                                        x = E;
                                        break;
                                    } -
                                1 != x ? q[x] = v["players"][t] : app.Log["Error"]("goToWatch " + JSON["stringify"](v["players"][t]) + "未找到位置");
                            }
                            var e = game["Tools"]["strOfLocalization"](2003),
                                o = v["game_config"].mode;
                            o["extendinfo"] && (e = game["Tools"]["strOfLocalization"](2004)),
                                o["detail_rule"] && o["detail_rule"]["ai_level"] && (1 === o["detail_rule"]["ai_level"] && (e = game["Tools"]["strOfLocalization"](2003)), 2 === o["detail_rule"]["ai_level"] && (e = game["Tools"]["strOfLocalization"](2004)));
                            for (var t = 0; t < q["length"]; t++)
                                null == q[t] && (q[t] = {
                                    nickname: e,
                                    avatar_id: game["GameUtility"]["get_default_ai_skin"](),
                                    level: {
                                        id: "10101"
                                    },
                                    level3: {
                                        id: "20101"
                                    },
                                    character: {
                                        charid: game["GameUtility"]["get_default_ai_character"](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game["GameUtility"]["get_default_ai_skin"](),
                                        is_upgraded: !1
                                    }
                                });
                            game["Scene_MJ"].Inst["openMJRoom"]({
                                mode: o
                            }, q, Laya["Handler"]["create"](this, function() {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](v["game_config"])), q, j, view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](I, function() {
                                    Z["UI_Loading"].Inst["setProgressVal"](0.7),
                                        Laya["timer"].once(1000, I, function() {
                                            GameMgr.Inst["EnterMJ"](),
                                                Z["UI_Loading"].Inst["setProgressVal"](0.8),
                                                V.Inst["startLive"](r);
                                        });
                                }));
                            }), Laya["Handler"]["create"](this, function(r) {
                                return Z["UI_Loading"].Inst["setProgressVal"](0.7 * r);
                            }, null, !1));
                        },
                        Object["defineProperty"](V["prototype"], "during_do_cd", {
                            get: function() {
                                return this["enable"] ? Laya["timer"]["currTimer"] < this["do_unit_cd"] : Z["UI_Live_Broadcast1"].Inst["during_do_cd"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](V["prototype"], "during_play", {
                            get: function() {
                                return this["enable"] ? this["state"] == r["gameing"] : Z["UI_Live_Broadcast1"].Inst["during_play"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](V["prototype"], "last_action_name", {
                            get: function() {
                                return this["enable"] ? this["_last_action_name"] : Z["UI_Live_Broadcast1"].Inst["last_action_name"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        V["prototype"]["onCreate"] = function() {
                            this["guanzhanconfig"] = new m(this.me["getChildByName"]("config"));
                        },
                        V["prototype"]["onDisable"] = function() {
                            Laya["timer"]["clearAll"](this),
                                this["pending_units"] = [];
                        },
                        V["prototype"]["_doRecord"] = function(Z, r, m) {
                            switch (view["DesktopMgr"].Inst["ClearOperationShow"](), this["_last_action_name"] = Z, Z) {
                                case "RecordNewRound":
                                    return view["ActionNewRound"]["record"](r, m);
                                case "RecordChangeTile":
                                    return view["ActionChangeTile"]["record"](r, m);
                                case "RecordSelectGap":
                                    return view["ActionSelectGap"]["record"](r, m);
                                case "RecordDiscardTile":
                                    return view["ActionDiscardTile"]["record"](r, m);
                                case "RecordDealTile":
                                    return view["ActionDealTile"]["record"](r, m);
                                case "RecordChiPengGang":
                                    return view["ActionChiPengGang"]["record"](r, m);
                                case "RecordAnGangAddGang":
                                    return view["ActionAnGangAddGang"]["record"](r, m);
                                case "RecordHule":
                                    return view["ActionHule"]["record"](r);
                                case "RecordLiuJu":
                                    return view["ActionLiuJu"]["record"](r);
                                case "RecordNoTile":
                                    return view["ActionNoTile"]["record"](r);
                                case "RecordBaBei":
                                    return view["ActionBabei"]["record"](r);
                                case "RecordHuleXueZhanMid":
                                    return view["ActionHuleXueZhanMid"]["record"](r);
                                case "RecordHuleXueZhanEnd":
                                    return view["ActionHuleXueZhanEnd"]["record"](r);
                                case "RecordGangResult":
                                    return view["ActionGangResult"]["record"](r);
                                case "RecordGangResultEnd":
                                    return view["ActionGangResultEnd"]["record"](r);
                                case "RecordRevealTile":
                                    return view["ActionRevealTile"]["record"](r);
                                case "RecordLockTile":
                                    return view["ActionLockTile"]["record"](r);
                                case "RecordUnveilTile":
                                    return view["ActionUnveilTile"]["record"](r);
                                case "RecordNewCard":
                                    return view["ActionNewCard"]["record"](r);
                            }
                            return 0;
                        },
                        V["prototype"]["_doFastRecord"] = function(Z, r, m) {
                            try {
                                switch (this["_last_action_name"] = Z, Z) {
                                    case "RecordNewRound":
                                        view["ActionNewRound"]["fastrecord"](r, m);
                                        break;
                                    case "RecordChangeTile":
                                        view["ActionChangeTile"]["fastrecord"](r, m);
                                        break;
                                    case "RecoreSelectGap":
                                        view["ActionSelectGap"]["fastrecord"](r, m);
                                        break;
                                    case "RecordDiscardTile":
                                        view["ActionDiscardTile"]["fastrecord"](r, m);
                                        break;
                                    case "RecordDealTile":
                                        view["ActionDealTile"]["fastrecord"](r, m);
                                        break;
                                    case "RecordChiPengGang":
                                        view["ActionChiPengGang"]["fastrecord"](r, m);
                                        break;
                                    case "RecordAnGangAddGang":
                                        view["ActionAnGangAddGang"]["fastrecord"](r, m);
                                        break;
                                    case "RecordHule":
                                        view["ActionHule"]["fastrecord"](r);
                                        break;
                                    case "RecordLiuJu":
                                        view["ActionLiuJu"]["fastrecord"](r);
                                        break;
                                    case "RecordNoTile":
                                        view["ActionNoTile"]["fastrecord"](r);
                                        break;
                                    case "RecordBaBei":
                                        view["ActionBabei"]["fastrecord"](r);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        view["ActionHuleXueZhanMid"]["fastrecord"](r);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        view["ActionHuleXueZhanEnd"]["fastrecord"](r);
                                        break;
                                    case "RecordRevealTile":
                                        view["ActionRevealTile"]["fastrecord"](r);
                                        break;
                                    case "RecordLockTile":
                                        view["ActionLockTile"]["fastrecord"](r);
                                        break;
                                    case "RecordUnveilTile":
                                        view["ActionUnveilTile"]["fastrecord"](r);
                                        break;
                                    case "RecordNewCard":
                                        view["ActionNewCard"]["fastrecord"](r);
                                }
                            } catch (j) {
                                var V = {};
                                return V["error"] = j["message"],
                                    V["stack"] = j["stack"],
                                    V["method"] = "ui_live_broadcast doFastRecord",
                                    V.name = Z,
                                    V.data = r,
                                    GameMgr.Inst["onFatalError"](V),
                                    1000000;
                            }
                        },
                        V["prototype"]["_doUnit"] = function(r, m, j) {
                            if (m) {
                                if (1 == r["category"])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': r
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': r
                                            }));
                                        }
                                    })), this["_doFastRecord"](r.name, r.data, j), view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0), 0;
                                if ("GameNewRoundState" == r.name) {
                                    for (var V = 0; V < r.data["seat_states"]["length"]; V++)
                                        view["DesktopMgr"]["player_link_state"][V] = r.data["seat_states"][V];
                                    Z["UI_DesktopInfo"].Inst["refreshLinks"]();
                                } else
                                    "NotifyGameEndResult" == r.name ? (view["DesktopMgr"].Inst["gameEndResult"] = r.data["result"], this["enable"] = !1, Z["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyPlayerConnectionState" == r.name ? Z["UI_DesktopInfo"].Inst["onPlayerConnectionState"](r.data) : "GameEndAction" == r.name ? 3 == r.data["state"] && Z["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function() {
                                        game["Scene_MJ"].Inst["ForceOut"]();
                                    })) : "NotifyGamePause" == r.name && (view["DesktopMgr"].Inst["setGameStop"](r.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += r["timestamp"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? r["timestamp"] : -1);
                                return -1;
                            }
                            if (1 == r["category"]) {

                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_action': r
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_action': r
                                        }));
                                    }
                                }));
                                var I = this["_doRecord"](r.name, r.data, j);
                                return view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0),
                                    I;
                            }
                            if ("GameNewRoundState" == r.name) {
                                for (var V = 0; V < r.data["seat_states"]["length"]; V++)
                                    view["DesktopMgr"]["player_link_state"][V] = r.data["seat_states"][V];
                                Z["UI_DesktopInfo"].Inst["refreshLinks"]();
                            } else
                                "NotifyGameEndResult" == r.name ? (view["DesktopMgr"].Inst["gameEndResult"] = r.data["result"], this["enable"] = !1, Z["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyGameBroadcast" == r.name ? Z["UI_DesktopInfo"].Inst["onGameBroadcast"](r.data) : "NotifyPlayerConnectionState" == r.name ? Z["UI_DesktopInfo"].Inst["onPlayerConnectionState"](r.data) : "GameEndAction" == r.name ? 3 == r.data["state"] && Z["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function() {
                                    game["Scene_MJ"].Inst["ForceOut"]();
                                })) : "NotifyGamePause" == r.name && (view["DesktopMgr"].Inst["setGameStop"](r.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += r["timestamp"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? r["timestamp"] : -1);
                            return -1;
                        },
                        V["prototype"]["_parseUnit"] = function(Z) {
                            var r = net["MessageWrapper"]["decodeMessage"](Z["action_data"]);
                            return {
                                timestamp: Z["timestamp"],
                                category: Z["action_category"],
                                name: r["$type"].name,
                                data: r
                            };
                        },
                        V["prototype"]["_loadUnit"] = function(Z, r, m) {
                            var j = this,
                                V = new Laya["HttpRequest"]();
                            V.once(Laya["Event"]["COMPLETE"], this, function(V) {
                                    if (m)
                                        try {
                                            var I = new Laya.Byte();
                                            I["writeArrayBuffer"](V),
                                                j["last_success_segment_url"] = r;
                                            for (var v = net["MessageWrapper"]["decodeMessage"](I["getUint8Array"](0, I["length"])), q = [], t = 0; t < v["actions"]["length"]; t++)
                                                q.push(j["_parseUnit"](v["actions"][t]));
                                            m["runWith"]({
                                                success: !0,
                                                id: Z,
                                                units: q,
                                                url: r
                                            });
                                        } catch (x) {
                                            m["runWith"]({
                                                success: !1,
                                                id: Z,
                                                type: "parse_error",
                                                url: r
                                            });
                                        }
                                }),
                                V.once(Laya["Event"]["ERROR"], this, function() {
                                    m && m["runWith"]({
                                        success: !1,
                                        id: Z,
                                        url: r,
                                        type: "download_timeout"
                                    });
                                });
                            var I = [];
                            V.send(r, '', "get", "arraybuffer", I);
                        },
                        V["prototype"]["startLive"] = function(r) {
                            var m = this;
                            app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveInfo", {
                                game_uuid: r
                            }, function(j, V) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(V),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(V));
                                    }
                                }));
                                if (j || V["error"] || V["left_start_seconds"])
                                    GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                        condition: "loading",
                                        uuid: r,
                                        segment_name: '',
                                        last_success_segment_name: '',
                                        error_info: "download_timeout",
                                        gametime_since_start: 0
                                    }), Z["UIMgr"].Inst["showNetReqError"]("fetchGameLiveInfo", j, V), m["_forceQuit"]();
                                else {
                                    var I = V;
                                    m["segment_index"] = 0,
                                        m["segments"] = [],
                                        m["last_success_segment_url"] = '',
                                        m["_time0"] = I["now_millisecond"],
                                        m["_time_start"] = Laya["timer"]["currTimer"];
                                    var v = 0,
                                        q = !1;
                                    m["game_uuid"] = r,
                                        m["enable"] = !0,
                                        m["guanzhanconfig"]["reset"](),
                                        Z["UI_Ob_Replay"].Inst["enable"] = !1,
                                        m["do_unit_cd"] = 0,
                                        m["have_gameend"] = !1,
                                        m["is_realtime"] = !1,
                                        m.me["getChildByName"]("f_realtime")["visible"] = !1;
                                    for (var t = function(j) {
                                            if (!q)
                                                if (app.Log.log("loadover0 " + JSON["stringify"](j)), j["success"]) {
                                                    for (var V = 0; V < m["segments"]["length"]; V++)
                                                        if (m["segments"][V]["segment_id"] == j.id) {
                                                            m["segments"][V]["units"] = j["units"],
                                                                m["segments"][V]["loaded"] = !0;
                                                            break;
                                                        }
                                                    app.Log.log("loadover1"),
                                                        v++,
                                                        Z["UI_Loading"].Inst["setProgressVal"](0.8 + 0.2 * (v / m["segments"]["length"])),
                                                        v == m["segments"]["length"] && m["_onFirstLoadOver"]();
                                                } else
                                                    app.Log.log("loadover2"), q = !0, Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), m["_forceQuit"](), GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                                        condition: "loading",
                                                        uuid: r,
                                                        segment_name: j.url,
                                                        last_success_segment_name: m["last_success_segment_url"],
                                                        error_info: j.type,
                                                        gametime_since_start: 0
                                                    });
                                        }, x = 0; x < I["segments"]["length"]; x++) {
                                        var E = I["segments"][x]["segment_id"],
                                            e = game["LobbyNetMgr"].Inst["ob_url"] + I["segments"][x]["segment_uri"];
                                        m["segments"].push({
                                                segment_id: E,
                                                uri: e,
                                                units: [],
                                                loaded: !1
                                            }),
                                            m["_loadUnit"](E, e, Laya["Handler"]["create"](m, t));
                                    }
                                }
                            });
                        },
                        V["prototype"]["clearPendingUnits"] = function() {
                            this["pending_units"] = [];
                        },
                        V["prototype"]["startRealtimeLive"] = function(r, m) {
                            var j = this;
                            this["segment_index"] = 0,
                                this["segments"] = [],
                                this["enable"] = !0,
                                this["guanzhanconfig"]["reset"](),
                                Z["UI_Ob_Replay"].Inst["enable"] = !1,
                                this["do_unit_cd"] = 0,
                                this["have_gameend"] = !1,
                                this["is_realtime"] = !0,
                                this["_time0"] = 1000 * r,
                                this["_time_start"] = Laya["timer"]["currTimer"];
                            var V = this.me["getChildByName"]("f_realtime");
                            V["visible"] = !0,
                                Laya["timer"]["clearAll"](this),
                                Laya["timer"]["frameLoop"](1, this, function() {
                                    var Z = (Laya["timer"]["currTimer"] - j["_time_start"]) / 1000;
                                    Z -= 4 * Math["floor"](Z / 4),
                                        V["alpha"] = 2 > Z ? Z / 2 * 0.7 + 0.3 : 0.7 * (1 - (Z - 2) / 2) + 0.3;
                                });
                            for (var I = [], v = 0; v < m["actions"]["length"]; v++)
                                I.push(this["_parseUnit"](m["actions"][v]));
                            for (var v = 0; v < this["pending_units"]["length"]; v++)
                                I.push(this["_parseUnit"](this["pending_units"][v].unit));
                            this["pending_units"] = [],
                                this["segments"].push({
                                    segment_id: 1,
                                    units: I,
                                    loaded: !0
                                }),
                                this["_onFirstLoadOver"]();
                        },
                        V["prototype"]["_onFirstLoadOver"] = function() {
                            var Z = this;
                            if (this["_fastSync"]() && (app.Log.log("fastSync over"), Laya["timer"].loop(100, this, function() {
                                    if (Z["is_realtime"]) {
                                        for (var r = 0; r < Z["pending_units"]["length"]; r++)
                                            Z["segments"][0]["units"].push(Z["_parseUnit"](Z["pending_units"][r].unit));
                                        Z["pending_units"] = [];
                                    }
                                    Z["_timeDoAction"](!1);
                                }, null, !0), !this["is_realtime"])) {
                                var r = this["segments"][this["segments"]["length"] - 1]["units"],
                                    m = r[r["length"] - 1]["timestamp"];
                                this["segment_end_millisecond"] = m,
                                    Laya["timer"].loop(3700, this, function() {
                                        Z["_askNewSegment"]();
                                    }, null, !1);
                            }
                        },
                        V["prototype"]["_unitIsTimeLast"] = function(Z, r) {
                            if (Z >= this["segments"]["length"])
                                return !0;
                            var m = this["segments"][Z];
                            if (!m["loaded"])
                                return !0;
                            if (m["units"]["length"] <= r)
                                return this["_unitIsTimeLast"](Z + 1, 0);
                            var j = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"],
                                V = m["units"][r];
                            return V["timestamp"] > j ? !0 : 2 == V["category"] ? this["_unitIsTimeLast"](Z, r + 1) : !1;
                        },
                        V["prototype"]["_getTimeStop"] = function(Z, r, m) {
                            var j = 0;
                            if (m > 0 && (j = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"] - m), Z >= this["segments"]["length"])
                                return j;
                            var V = this["segments"][Z];
                            if (!V["loaded"])
                                return j;
                            if (V["units"]["length"] <= r)
                                return this["_getTimeStop"](Z + 1, 0, m);
                            var I = V["units"][r],
                                v = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                            if (I["timestamp"] > v)
                                return j;
                            if (1 == I["category"])
                                return 0;
                            if ("NotifyGamePause" == I.name) {
                                var q = 0;
                                return m > 0 && (q += I["timestamp"] - m),
                                    m = I.data["paused"] ? I["timestamp"] : -1,
                                    q + this["_getTimeStop"](Z, r + 1, m);
                            }
                            return this["_getTimeStop"](Z, r + 1, m);
                        },
                        V["prototype"]["_timeDoAction"] = function(m) {
                            if (this["state"] != r["gameing"])
                                return !1;
                            if (this["segment_index"] >= this["segments"]["length"])
                                return !1;
                            var j = this["segments"][this["segment_index"]];
                            if (!j["loaded"])
                                return !1;
                            if (this["segment_index"] == this["segments"]["length"] - 1 && this["unit_index"] >= j["units"]["length"])
                                return !1;
                            var V = j["units"][this["unit_index"]],
                                I = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                            if (V["timestamp"] > I && !this["is_realtime"])
                                return !0;
                            if ("NotifyGameEndResult" == V.name)
                                return !0;
                            if (1 == V["category"] && this["during_do_cd"])
                                return !0;
                            var v = this["_unitIsTimeLast"](this["segment_index"], this["unit_index"] + 1);
                            v && (I -= this["_getTimeStop"](this["segment_index"], this["unit_index"] + 1, this["time_stop_start_time"]));
                            var q = 0;
                            if (this["is_realtime"] ? (q = Laya["timer"]["currTimer"] + GameMgr.Inst["server_time_delta"] - this["_time0"] - V["timestamp"], q = 0 > q ? 0 : q) : q = I - V["timestamp"], Z["UI_Loading"].Inst && Z["UI_Loading"].Inst["enable"] && Z["UI_Loading"].Inst["close"](), m)
                                v ? this["_doUnit"](V, !0, q) : this["_doUnit"](V, !0, -1);
                            else {
                                var t = this["_doUnit"](V, !1, q);
                                t > 0 && (this["do_unit_cd"] = Laya["timer"]["currTimer"] + t);
                            }
                            return this["unit_index"]++,
                                this["unit_index"] >= j["units"]["length"] && !this["is_realtime"] && (this["unit_index"] = 0, this["segment_index"]++),
                                this["_timeDoAction"](m);
                        },
                        V["prototype"]["_askNewSegment"] = function() {
                            var r = this;
                            if (!this["have_gameend"] && !(this["during_asknew"] || this["retry_loadtime"] >= 3) && this["segments"][this["segments"]["length"] - 1]["loaded"]) {
                                var m = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                                m + 15000 < this["segment_end_millisecond"] || (this["during_asknew"] = !0, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveLeftSegment", {
                                    game_uuid: this["game_uuid"],
                                    last_segment_id: this["segments"][this["segments"]["length"] - 1]["segment_id"]
                                }, function(m, j) {
                                    if (r["during_asknew"] = !1, m || j["error"])
                                        r["retry_loadtime"]++, r["retry_loadtime"] >= 3 && (Z["UIMgr"].Inst["showNetReqError"]("fetchGameLiveLeftSegment", m, j), GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                            condition: "runtime",
                                            uuid: r["game_uuid"],
                                            segment_name: '',
                                            last_success_segment_name: r["segments"][r["segments"]["length"] - 1].uri,
                                            error_info: "server_timeout",
                                            gametime_since_start: r["_time_start"]
                                        }));
                                    else {
                                        r["retry_loadtime"] = 0;
                                        var V = j["segments"];
                                        r["segment_end_millisecond"] = j["segment_end_millisecond"];
                                        for (var I = function(Z) {
                                                if (Z["success"]) {
                                                    for (var m = 0; m < r["segments"]["length"]; m++)
                                                        if (r["segments"][m]["segment_id"] == Z.id) {
                                                            r["segments"][m]["units"] = Z["units"];
                                                            for (var j = 0; j < Z["units"]["length"]; j++)
                                                                if ("NotifyGameEndResult" == Z["units"][j].name) {
                                                                    r["have_gameend"] = !0;
                                                                    break;
                                                                }
                                                            r["segments"][m]["loaded"] = !0;
                                                            break;
                                                        }
                                                } else
                                                    GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                                        condition: "runtime",
                                                        uuid: r["game_uuid"],
                                                        segment_name: Z.url,
                                                        last_success_segment_name: r["last_success_segment_url"],
                                                        error_info: Z.type,
                                                        gametime_since_start: r["_time_start"]
                                                    });
                                            }, v = r["segments"][r["segments"]["length"] - 1]["segment_id"], q = 0; q < V["length"]; q++) {
                                            var t = V[q]["segment_id"],
                                                x = game["LobbyNetMgr"].Inst["ob_url"] + V[q]["segment_uri"];
                                            v >= t || (r["segments"].push({
                                                segment_id: t,
                                                uri: x,
                                                units: [],
                                                loaded: !1
                                            }), r["_loadUnit"](t, x, Laya["Handler"]["create"](r, I, null, !1)));
                                        }
                                    }
                                }));
                            }
                        },
                        V["prototype"]["_forceQuit"] = function() {
                            this["state"] = r.none,
                                this["enable"] = !1,
                                GameMgr.Inst["EnterLobby"]();
                        },
                        V["prototype"]["_fastSync"] = function() {
                            var m = -1,
                                j = -1;
                            this["time_stop_start_time"] = -1,
                                this["time_stop_length"] = 0;
                            var V = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                            this["is_realtime"] && (V = Laya["timer"]["currTimer"]);
                            for (var I = 0; I < this["segments"]["length"]; I++)
                                for (var v = this["segments"][I], q = 0; q < v["units"]["length"]; q++)
                                    v["units"][q]["timestamp"] <= V && "RecordNewRound" == v["units"][q].name && (m = I, j = q);
                            if (app.Log.log("_fastSync1: segment=" + m + ", unit=" + j), -1 == m) {
                                m = 0;
                                for (var v = this["segments"][0], q = 0; q < v["units"]["length"]; q++)
                                    if ("RecordNewRound" == v["units"][q].name) {
                                        m = 0,
                                            j = q,
                                            this["_time0"] = v["units"][q]["timestamp"] - 50;
                                        break;
                                    }
                            }
                            return app.Log.log("_fastSync2: segment=" + m + ", unit=" + j), -1 == j ? this["is_realtime"] ? (this["state"] = r["gameing"], this["segment_index"] = 0, this["unit_index"] = 0, !0) : (app.Log["Error"]("给的数据没有RecordNewRound"), Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), this["_forceQuit"](), !1) : (this["state"] = r["gameing"], this["segment_index"] = m, this["unit_index"] = j, this["_timeDoAction"](!0), !0);
                        },
                        V["prototype"]["onChangeMainbody"] = function() {
                            this["state"] == r["gameing"] ? (this["do_unit_cd"] = 0, this["_fastSync"]()) : this["state"] == r["replay"] && Z["UI_Ob_Replay"].Inst["onChangeMainBody"]();
                        },
                        V["prototype"]["onScoreChangeConfirm"] = function() {
                            if (!this["enable"])
                                return Z["UI_Live_Broadcast1"].Inst["onScoreChangeConfirm"](), void 0;
                            if (this["state"] == r["gameing"]) {
                                if (this["do_unit_cd"] = 0, this["segment_index"] >= this["segments"]["length"])
                                    return !1;
                                var m = this["segments"][this["segment_index"]];
                                if (!m["loaded"])
                                    return !1;
                                if (this["segment_index"] == this["segments"]["length"] - 1 && this["unit_index"] >= m["units"]["length"])
                                    return !1;
                                var j = m["units"][this["unit_index"]];
                                "NotifyGameEndResult" == j.name && (Z["UI_ScoreChange"].Inst["enable"] = !1, this["_doUnit"](j, !1, 0));
                            } else
                                this["state"] == r["replay"] && (Z["UI_ScoreChange"].Inst["enable"] = !1, Z["UI_Ob_Replay"].Inst["nextStep"](!0));
                        },
                        V["prototype"]["enterReplay"] = function() {
                            this["state"] = r["replay"];
                            for (var m = [], j = 0; j <= this["segment_index"] && j < this["segments"]["length"] && this["segments"][j]["loaded"]; j++)
                                for (var V = this["segments"][j]["units"], I = 0; I < V["length"] && !(j == this["segment_index"] && I >= this["unit_index"]); I++) {
                                    var v = V[I];
                                    1 == v["category"] && m.push({
                                        name: v.name,
                                        data: v.data
                                    });
                                }
                            Z["UI_Ob_Replay"].Inst.show(m),
                                view["DesktopMgr"].Inst["ClearOperationShow"]();
                        },
                        V["prototype"]["closeReplay"] = function() {
                            this["state"] = r["gameing"],
                                Z["UI_Ob_Replay"].Inst["close"](),
                                this["do_unit_cd"] = 0,
                                this["_fastSync"]();
                        },
                        V;
                }
                (Z["UIBase"]);
            Z["UI_Live_Broadcast"] = j;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var r,
                m = function() {
                    function r(r) {
                        var m = this;
                        this["_show_hand"] = !1,
                            this["_show_paopai"] = !1,
                            this["_show_replay"] = !1,
                            this.me = r,
                            this["_btn_out"] = this.me["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["switch"]();
                            }, null, !1),
                            this.me["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["_show_hand"] = !m["_show_hand"],
                                    m["_choosed_show_hand"]["visible"] = m["_show_hand"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](m["_show_hand"]);
                            }, null, !1),
                            this["_choosed_show_hand"] = this.me["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                m["_show_paopai"] = !m["_show_paopai"],
                                    m["_choosed_show_paopai"]["visible"] = m["_show_paopai"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](m["_show_paopai"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this.me["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_showbar")["clickHandler"] = Laya["Handler"]["create"](this, function() {
                                Z["UI_Ob_Replay"].Inst["locking"] || Z["UI_Ob_Replay"].Inst["anim_time"] > game["Tools"]["getServerTime"]() || "RecordHuleXueZhanEnd" != j.Inst["last_action_name"] && "RecordHule" != j.Inst["last_action_name"] && "RecordLiuJu" != j.Inst["last_action_name"] && "RecordNoTile" != j.Inst["last_action_name"] && ("RecordNewRound" == j.Inst["last_action_name"] && j.Inst["during_do_cd"] || (m["_show_replay"] = !m["_show_replay"], m["_choosed_show_replay"]["visible"] = m["_show_replay"], m["_show_replay"] ? j.Inst["enterReplay"]() : j.Inst["closeReplay"]()));
                            }, null, !1),
                            this["_choosed_show_replay"] = this.me["getChildByName"]("btn_showbar")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this.me["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return r["prototype"]["reset"] = function() {
                            Laya["Tween"]["clearAll"](this),
                                this["_show_hand"] = !1,
                                this.me.x = -258,
                                this["_btn_out"]["disabled"] = !1,
                                this["_choosed_show_hand"]["visible"] = this["_show_hand"],
                                this["_show_paopai"] = !1,
                                this["_choosed_show_paopai"]["visible"] = this["_show_paopai"],
                                this["_show_replay"] = !1,
                                this["_choosed_show_replay"]["visible"] = this["_show_replay"];
                        },
                        r["prototype"]["switch"] = function() {
                            var Z = this,
                                r = -258;
                            this.me.x < -100 && (r = -5),
                                this["_btn_out"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: r
                                }, 200, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function() {
                                    Z["_btn_out"]["disabled"] = !1;
                                }), 0, !0, !0);
                        },
                        r;
                }
                ();
            ! function(Z) {
                Z[Z.none = 0] = "none",
                    Z[Z["gameing"] = 1] = "gameing",
                    Z[Z["replay"] = 2] = "replay";
            }
            (r || (r = {}));
            var j = function(j) {
                    function V() {
                        var Z = j.call(this, new ui.mj["live_broadcastUI"]()) || this;
                        return Z["state"] = r.none,
                            Z["pending_units"] = [],
                            Z["_time0"] = 0,
                            Z["_time_start"] = 0,
                            Z["unit_index"] = 0,
                            Z["guanzhanconfig"] = null,
                            Z["do_unit_cd"] = 0,
                            Z["time_stop_length"] = 0,
                            Z["time_stop_start_time"] = 0,
                            Z["_last_action_name"] = '',
                            Z["have_gameend"] = !1,
                            Z["is_realtime"] = !1,
                            Z["waiting_start"] = !1,
                            Z["sended_error_msg"] = !1,
                            V.Inst = Z,
                            game["LiveNetMgr"].Inst["setNotifyHandler"](new Laya["Handler"](Z, Z["onReceiveNotify"])),
                            Z;
                    }
                    return __extends(V, j),
                        V["fetchInfo"] = function(r, m) {
                            var j = this;
                            app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchOBToken", {
                                uuid: r
                            }, function(I, v) {
                                if (I || v["error"])
                                    Z["UIMgr"].Inst["showNetReqError"]("fetchOBToken", I, v), m && m["runWith"]({
                                        success: !1
                                    });
                                else {
                                    app.Log.log("fetchOBToken res:" + JSON["stringify"](v)),
                                        j["token"] = v["token"],
                                        j["game_uuid"] = r,
                                        j["create_time"] = v["create_time"],
                                        j["delay"] = v["delay"],
                                        j["start_time"] = v["start_time"];
                                    var q = Math["floor"](v["start_time"] + v["delay"] - game["Tools"]["getServerTime"]() / 1000);
                                    q > 0 ? Z["UI_WaitOb"].Inst.show(V["game_uuid"], q, m) : m && m["runWith"]({
                                        success: !0,
                                        data: v
                                    });
                                }
                            });
                        },
                        V["goToWatch"] = function(r, m) {
                            var j = this;
                            Z["UI_Loading"].Inst["setProgressVal"](0.1),
                                Z["UI_Loading"].Inst.show("enter_mj"),
                                this["connect"](new Laya["Handler"](this, function(V) {
                                    V["success"] ? (Z["UI_Loading"].Inst["setProgressVal"](0.2), j["startLoadOb"](r, V.data, m)) : (Z["UI_Loading"].Inst["enable"] = !1, Z["UIMgr"].Inst["showLobby"]());
                                }));
                        },
                        V["startLoadOb"] = function(r, m, j) {
                            var I = this;
                            app.Log.log("startLoadOb res:" + JSON["stringify"](m)),
                                GameMgr.Inst["onLoadStart"]('ob');
                            for (var v = JSON["parse"](m.head), q = [null, null, null, null], t = 0; t < v["players"]["length"]; t++) {
                                for (var x = -1, E = 0; E < v["seat_list"]["length"]; E++)
                                    if (v["seat_list"][E] == v["players"][t]["account_id"]) {
                                        x = E;
                                        break;
                                    } -
                                1 != x ? q[x] = v["players"][t] : app.Log["Error"]("goToWatch " + JSON["stringify"](v["players"][t]) + "未找到位置");
                            }
                            var e = game["Tools"]["strOfLocalization"](2003),
                                o = v["game_config"].mode;
                            o["extendinfo"] && (e = game["Tools"]["strOfLocalization"](2004)),
                                o["detail_rule"] && o["detail_rule"]["ai_level"] && (1 === o["detail_rule"]["ai_level"] && (e = game["Tools"]["strOfLocalization"](2003)), 2 === o["detail_rule"]["ai_level"] && (e = game["Tools"]["strOfLocalization"](2004)));
                            for (var t = 0; t < q["length"]; t++)
                                null == q[t] && (q[t] = {
                                    nickname: e,
                                    avatar_id: game["GameUtility"]["get_default_ai_skin"](),
                                    level: {
                                        id: "10101"
                                    },
                                    level3: {
                                        id: "20101"
                                    },
                                    character: {
                                        charid: game["GameUtility"]["get_default_ai_character"](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game["GameUtility"]["get_default_ai_skin"](),
                                        is_upgraded: !1
                                    }
                                });
                            game["Scene_MJ"].Inst["openMJRoom"]({
                                mode: o
                            }, q, Laya["Handler"]["create"](this, function() {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](v["game_config"])), q, j, view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](I, function() {
                                    Z["UI_Loading"].Inst["setProgressVal"](0.7),
                                        Laya["timer"].once(1000, I, function() {
                                            GameMgr.Inst["EnterMJ"](),
                                                Z["UI_Loading"].Inst["setProgressVal"](0.8),
                                                V.Inst["time0"] = game["Tools"]["getServerTime"]() - (1000 * m["start_time"] + 1000 * m["delay"]),
                                                V.Inst["startLive"](r);
                                        });
                                }));
                            }), Laya["Handler"]["create"](this, function(r) {
                                return Z["UI_Loading"].Inst["setProgressVal"](0.5 * r + 0.2);
                            }, null, !1));
                        },
                        V["connect"] = function(Z) {
                            this["connect_func"] = Z,
                                game["LiveNetMgr"].Inst["connect"](new Laya["Handler"](this, this["onConnect"]));
                        },
                        V["onConnect"] = function(r) {
                            var m = this;
                            if (r.open)
                                game["LiveNetMgr"].Inst["sendReq"]("Auth", {
                                    token: this["token"]
                                }, function(r, j) {
                                    r || j["error"] ? (m["connect_func"] && (m["connect_func"]["runWith"]({
                                        success: !1,
                                        data: j
                                    }), m["connect_func"] = null), V.Inst && V.Inst["_forceQuit"](), j["error"] ? Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](j["error"])) : Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), Z["UI_Loading"].Inst["enable"] = !1) : V.Inst && V.Inst["enable"] ? V.Inst["sendStartObRequest"]() : m["connect_func"] && (m["connect_func"]["runWith"]({
                                        success: !0,
                                        data: j
                                    }), m["connect_func"] = null);
                                });
                            else if (this["connect_func"] && (this["connect_func"]["runWith"]({
                                    success: !1
                                }), this["connect_func"] = null), game["LiveNetMgr"].Inst["close"](), "connect failed" == r.info)
                                Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), V.Inst ? V.Inst["_forceQuit"]() : Z["UI_Loading"].Inst["enable"] = !1;
                            else if ("disconnect" == r.info) {
                                if (!V.Inst || !V.Inst["enable"])
                                    return;
                                Z["UI_SecondConfirm"].Inst.show(game["Tools"]["strOfLocalization"](3529), Laya["Handler"]["create"](this, function() {
                                    game["LiveNetMgr"].Inst["force_reconnect"]();
                                }), Laya["Handler"]["create"](this, function() {
                                    V.Inst && V.Inst["_forceQuit"]();
                                }));
                            } else
                                V.Inst && V.Inst["_forceQuit"]();
                        },
                        Object["defineProperty"](V["prototype"], "time0", {
                            set: function(Z) {
                                this["_time0"] = Z;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](V["prototype"], "during_do_cd", {
                            get: function() {
                                return game["Tools"]["getServerTime"]() < this["do_unit_cd"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](V["prototype"], "during_play", {
                            get: function() {
                                return this["state"] == r["gameing"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object["defineProperty"](V["prototype"], "last_action_name", {
                            get: function() {
                                return this["_last_action_name"];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        V["prototype"]["onCreate"] = function() {
                            this["guanzhanconfig"] = new m(this.me["getChildByName"]("config"));
                        },
                        V["prototype"]["startLive"] = function() {
                            var r = this;
                            if (game["LiveNetMgr"].Inst["connect_state"] != game["EConnectState"]["connecting"])
                                return Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), V.Inst && V.Inst["_forceQuit"](), void 0;
                            this["sended_error_msg"] = !1,
                                this["pending_units"] = [];
                            var m = this.me["getChildByName"]("f_realtime");
                            m["visible"] = !1,
                                this["_time_start"] = game["Tools"]["getServerTime"]();
                            this["enable"] = !0,
                                this["guanzhanconfig"]["reset"](),
                                Z["UI_Ob_Replay"].Inst["enable"] = !1,
                                this["do_unit_cd"] = 0,
                                this["have_gameend"] = !1,
                                this["waiting_start"] = !0,
                                game["LiveNetMgr"].Inst["sendReq"]("StartOb", {}, function(m, j) {
                                    m || j["error"] ? (j["error"] ? Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](j["error"])) : Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), r["_forceQuit"]()) : (app.Log.log("StartOb"), r["start_seq"] = j.seq ? j.seq : 0);
                                });
                        },
                        V["prototype"]["sendStartObRequest"] = function() {
                            var r = this;
                            game["LiveNetMgr"].Inst["sendReq"]("StartOb", {}, function(m, j) {
                                m || j["error"] ? (j["error"] ? Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](j["error"])) : Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), r["_forceQuit"]()) : app.Log.log("StartOb");
                            });
                        },
                        V["prototype"]["onDisable"] = function() {
                            Laya["timer"]["clearAll"](this),
                                game["LiveNetMgr"].Inst["close"](),
                                this["pending_units"] = [];
                        },
                        V["prototype"]["onReceiveNotify"] = function(Z, r) {
                            var m = this;
                            void 0 === r && (r = !1);
                            for (var j = 0, I = this["pending_units"]; j < I["length"]; j++) {
                                var v = I[j];
                                if (v.seq == Z.seq)
                                    return;
                            }
                            if ("GameEndAction" == Z.name && game["LiveNetMgr"].Inst["close"](), r) {
                                for (var q = !1, t = -1, x = 0, E = this["pending_units"]; x < E["length"]; x++) {
                                    var v = E[x];
                                    if (q || (t++, v.seq == Z.seq - 1 && (q = !0)), v.seq == Z.seq)
                                        return;
                                }
                                if (0 > t)
                                    this["pending_units"].push(Z);
                                else if (this["pending_units"]["splice"](t + 1, 0, Z), this["pending_units"][t + 2] && this["pending_units"][t + 2].seq != Z.seq + 1) {
                                    var e = this;
                                    game["LiveNetMgr"].Inst["sendReq"]("FetchSegment", {
                                        seq: Z.seq + 1
                                    }, function(r, m) {
                                        (r || m["error"]) && GameMgr.Inst["postInfo2Server"]("livebroad", {
                                            uuid: V["game_uuid"],
                                            token: V["token"],
                                            missing_seq: Z.seq + 1,
                                            error: r || m["error"]
                                        }), !r && m && e["onReceiveNotify"](e["_handleMsg"](m["segments"]), !0);
                                    });
                                }
                            } else {
                                if (this["pending_units"]["length"] > 0 && Z.seq != this["pending_units"][this["pending_units"]["length"] - 1].seq + 1) {
                                    this["sended_error_msg"] || (GameMgr.Inst["postInfo2Server"]("livebroad", {
                                        uuid: V["game_uuid"],
                                        last_seq: this["pending_units"][this["pending_units"]["length"] - 1].seq,
                                        recent_seq: Z.seq,
                                        token: V["token"]
                                    }), this["sended_error_msg"] = !0);
                                    var o = this;
                                    game["LiveNetMgr"].Inst["sendReq"]("FetchSegment", {
                                        seq: this["pending_units"][this["pending_units"]["length"] - 1].seq + 1
                                    }, function(Z, r) {
                                        (Z || r["error"]) && GameMgr.Inst["postInfo2Server"]("livebroad", {
                                            uuid: V["game_uuid"],
                                            token: V["token"],
                                            missing_seq: m["pending_units"][m["pending_units"]["length"] - 1].seq + 1,
                                            error: Z || r["error"]
                                        }), !Z && r && o["onReceiveNotify"](o["_handleMsg"](r["segments"]), !0);
                                    });
                                }
                                this["pending_units"].push(Z);
                            }
                            this["waiting_start"] && (Z.seq >= this["start_seq"] && this["start_seq"] > 0 || Z["offsetTime"] > this["_time0"] - 3000) && (this["_onFirstLoadOver"](), this["waiting_start"] = !1);
                        },
                        V["prototype"]["_onFirstLoadOver"] = function() {
                            var Z = this;
                            this["_fastSync"]() && (app.Log.log("fastSync over"), Laya["timer"].loop(100, this, function() {
                                Z["_timeDoAction"](!1);
                            }, null, !0));
                        },
                        V["prototype"]["_fastSync"] = function() {
                            var m = -1;
                            this["time_stop_start_time"] = -1,
                                this["time_stop_length"] = 0;
                            var j = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                            this["is_realtime"] && (j = game["Tools"]["getServerTime"]());
                            for (var V = 0; V < this["pending_units"]["length"]; V++) {
                                var I = this["pending_units"][V];
                                I["offsetTime"] <= j && ("RecordNewRound" == I.name || "RecordNewCard" == I.name) && (m = V);
                            }
                            if (app.Log.log("_fastSync1: unit=" + m), -1 == m && (m = 0, this["pending_units"]["length"] > 0)) {
                                var I = this["pending_units"][0];
                                ("RecordNewRound" == I.name || "RecordNewCard" == I.name) && (m = 0, this["_time0"] = I["offsetTime"] - 50);
                            }
                            return app.Log.log("_fastSync2: unit=" + m), -1 == m ? this["is_realtime"] ? (this["state"] = r["gameing"], this["unit_index"] = 0, !0) : (app.Log["Error"]("给的数据没有RecordNewRound"), Z["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), this["_forceQuit"](), !1) : (this["state"] = r["gameing"], this["unit_index"] = m, this["pending_units"][m] && "RecordNewCard" == this["pending_units"][m].name && !this["pending_units"][m + 1] ? this["_timeDoAction"](!1) : this["_timeDoAction"](!0), !0);
                        },
                        V["prototype"]["_forceQuit"] = function() {
                            app.Log["Error"]("_forceQuit"),
                                this["state"] = r.none,
                                this["enable"] = !1,
                                GameMgr.Inst["EnterLobby"]();
                        },
                        V["prototype"]["_getTimeStop"] = function(Z, r) {
                            var m = 0;
                            if (r > 0 && (m = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"] - r), this["pending_units"]["length"] <= Z)
                                return m;
                            var j = this["pending_units"][Z],
                                V = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                            if (j["offsetTime"] > V)
                                return m;
                            if (1 == j["category"])
                                return 0;
                            if ("NotifyGamePause" == j.name) {
                                var I = 0;
                                return r > 0 && (I += j["offsetTime"] - r),
                                    r = j.data["paused"] ? j["offsetTime"] : -1,
                                    I + this["_getTimeStop"](Z + 1, r);
                            }
                            return this["_getTimeStop"](Z + 1, r);
                        },
                        V["prototype"]["_unitIsTimeLast"] = function(Z) {
                            if (Z >= this["pending_units"]["length"])
                                return !0;
                            var r = this["pending_units"][Z],
                                m = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                            return r["offsetTime"] > m ? !0 : 2 == r["category"] ? this["_unitIsTimeLast"](Z + 1) : !1;
                        },
                        V["prototype"]["_timeDoAction"] = function(m) {
                            if (this["state"] != r["gameing"])
                                return !1;
                            if (this["unit_index"] >= this["pending_units"]["length"])
                                return !1;
                            var j = this["pending_units"][this["unit_index"]],
                                V = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                            if (j["offsetTime"] > V && !this["is_realtime"])
                                return !0;
                            if ("NotifyGameEndResult" == j.name)
                                return !0;
                            if (1 == j["category"] && this["during_do_cd"])
                                return !0;
                            var I = this["_unitIsTimeLast"](this["unit_index"] + 1);
                            I && (V -= this["_getTimeStop"](this["unit_index"] + 1, this["time_stop_start_time"]));
                            var v = 0;
                            if (this["is_realtime"] ? (v = game["Tools"]["getServerTime"]() - this["_time0"] - j["offsetTime"], v = 0 > v ? 0 : v) : v = V - j["offsetTime"], Z["UI_Loading"].Inst && Z["UI_Loading"].Inst["enable"] && Z["UI_Loading"].Inst["close"](), m)
                                I ? this["_doUnit"](j, !0, v) : this["_doUnit"](j, !0, -1);
                            else {
                                var q = this["_doUnit"](j, !1, v);
                                q > 0 && (this["do_unit_cd"] = game["Tools"]["getServerTime"]() + q);
                            }
                            return this["unit_index"]++,
                                this["_timeDoAction"](m);
                        },
                        V["prototype"]["onScoreChangeConfirm"] = function() {
                            if (this["state"] == r["gameing"]) {
                                if (this["do_unit_cd"] = 0, this["unit_index"] >= this["pending_units"]["length"])
                                    return !1;
                                var m = this["pending_units"][this["unit_index"]];
                                "NotifyGameEndResult" == m.name && (Z["UI_ScoreChange"].Inst["enable"] = !1, this["_doUnit"](m, !1, 0));
                            } else
                                this["state"] == r["replay"] && (Z["UI_ScoreChange"].Inst["enable"] = !1, Z["UI_Ob_Replay"].Inst["nextStep"](!0));
                        },
                        V["prototype"]["_doRecord"] = function(Z, r, m) {
                            switch (view["DesktopMgr"].Inst["ClearOperationShow"](), this["_last_action_name"] = Z, Z) {
                                case "RecordNewRound":
                                    return view["ActionNewRound"]["record"](r, m);
                                case "RecordChangeTile":
                                    return view["ActionChangeTile"]["record"](r, m);
                                case "RecordSelectGap":
                                    return view["ActionSelectGap"]["record"](r, m);
                                case "RecordDiscardTile":
                                    return view["ActionDiscardTile"]["record"](r, m);
                                case "RecordDealTile":
                                    return view["ActionDealTile"]["record"](r, m);
                                case "RecordChiPengGang":
                                    return view["ActionChiPengGang"]["record"](r, m);
                                case "RecordAnGangAddGang":
                                    return view["ActionAnGangAddGang"]["record"](r, m);
                                case "RecordHule":
                                    return view["ActionHule"]["record"](r);
                                case "RecordLiuJu":
                                    return view["ActionLiuJu"]["record"](r);
                                case "RecordNoTile":
                                    return view["ActionNoTile"]["record"](r);
                                case "RecordBaBei":
                                    return view["ActionBabei"]["record"](r);
                                case "RecordHuleXueZhanMid":
                                    return view["ActionHuleXueZhanMid"]["record"](r);
                                case "RecordHuleXueZhanEnd":
                                    return view["ActionHuleXueZhanEnd"]["record"](r);
                                case "RecordGangResult":
                                    return view["ActionGangResult"]["record"](r);
                                case "RecordGangResultEnd":
                                    return view["ActionGangResultEnd"]["record"](r);
                                case "RecordRevealTile":
                                    return view["ActionRevealTile"]["record"](r);
                                case "RecordLockTile":
                                    return view["ActionLockTile"]["record"](r);
                                case "RecordUnveilTile":
                                    return view["ActionUnveilTile"]["record"](r);
                                case "RecordNewCard":
                                    return view["ActionNewCard"]["record"](r);
                            }
                            return 0;
                        },
                        V["prototype"]["_doFastRecord"] = function(Z, r, m) {
                            try {
                                switch (this["_last_action_name"] = Z, Z) {
                                    case "RecordNewRound":
                                        view["ActionNewRound"]["fastrecord"](r, m);
                                        break;
                                    case "RecordChangeTile":
                                        view["ActionChangeTile"]["fastrecord"](r, m);
                                        break;
                                    case "RecoreSelectGap":
                                        view["ActionSelectGap"]["fastrecord"](r, m);
                                        break;
                                    case "RecordDiscardTile":
                                        view["ActionDiscardTile"]["fastrecord"](r, m);
                                        break;
                                    case "RecordDealTile":
                                        view["ActionDealTile"]["fastrecord"](r, m);
                                        break;
                                    case "RecordChiPengGang":
                                        view["ActionChiPengGang"]["fastrecord"](r, m);
                                        break;
                                    case "RecordAnGangAddGang":
                                        view["ActionAnGangAddGang"]["fastrecord"](r, m);
                                        break;
                                    case "RecordHule":
                                        view["ActionHule"]["fastrecord"](r);
                                        break;
                                    case "RecordLiuJu":
                                        view["ActionLiuJu"]["fastrecord"](r);
                                        break;
                                    case "RecordNoTile":
                                        view["ActionNoTile"]["fastrecord"](r);
                                        break;
                                    case "RecordBaBei":
                                        view["ActionBabei"]["fastrecord"](r);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        view["ActionHuleXueZhanMid"]["fastrecord"](r);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        view["ActionHuleXueZhanEnd"]["fastrecord"](r);
                                        break;
                                    case "RecordRevealTile":
                                        view["ActionRevealTile"]["fastrecord"](r);
                                        break;
                                    case "RecordLockTile":
                                        view["ActionLockTile"]["fastrecord"](r);
                                        break;
                                    case "RecordUnveilTile":
                                        view["ActionUnveilTile"]["fastrecord"](r);
                                        break;
                                    case "RecordNewCard":
                                        return view["ActionNewCard"]["fastrecord"](r);
                                }
                            } catch (j) {
                                var V = {};
                                return V["error"] = j["message"],
                                    V["stack"] = j["stack"],
                                    V["method"] = "ui_live_broadcast doFastRecord",
                                    V.name = Z,
                                    V.data = r,
                                    GameMgr.Inst["onFatalError"](V),
                                    1000000;
                            }
                        },
                        V["prototype"]["_doUnit"] = function(r, m, j) {
                            if (m) {
                                if (1 == r["category"])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': r
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': r
                                            }));
                                        }
                                    })), this["_doFastRecord"](r.name, r.data, j), view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0), 0;
                                if ("GameNewRoundState" == r.name) {
                                    for (var V = 0; V < r.data["seat_states"]["length"]; V++)
                                        view["DesktopMgr"]["player_link_state"][V] = r.data["seat_states"][V];
                                    Z["UI_DesktopInfo"].Inst["refreshLinks"]();
                                } else
                                    "NotifyGameEndResult" == r.name ? (view["DesktopMgr"].Inst["gameEndResult"] = r.data["result"], this["enable"] = !1, Z["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyPlayerConnectionState" == r.name ? Z["UI_DesktopInfo"].Inst["onPlayerConnectionState"](r.data) : "GameEndAction" == r.name ? 3 == r.data["state"] && Z["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function() {
                                        game["Scene_MJ"].Inst["ForceOut"]();
                                    })) : "NotifyGamePause" == r.name && (view["DesktopMgr"].Inst["setGameStop"](r.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += r["offsetTime"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? r["offsetTime"] : -1);
                                return -1;
                            }
                            if (1 == r["category"]) {
                                var I = this["_doRecord"](r.name, r.data, j);
                                return view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0),
                                    I;
                            }
                            if ("GameNewRoundState" == r.name) {
                                for (var V = 0; V < r.data["seat_states"]["length"]; V++)
                                    view["DesktopMgr"]["player_link_state"][V] = r.data["seat_states"][V];
                                Z["UI_DesktopInfo"].Inst["refreshLinks"]();
                            } else
                                "NotifyGameEndResult" == r.name ? (view["DesktopMgr"].Inst["gameEndResult"] = r.data["result"], this["enable"] = !1, Z["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyGameBroadcast" == r.name ? Z["UI_DesktopInfo"].Inst["onGameBroadcast"](r.data) : "NotifyPlayerConnectionState" == r.name ? Z["UI_DesktopInfo"].Inst["onPlayerConnectionState"](r.data) : "GameEndAction" == r.name ? 3 == r.data["state"] && Z["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function() {
                                    game["Scene_MJ"].Inst["ForceOut"]();
                                })) : "NotifyGamePause" == r.name && (view["DesktopMgr"].Inst["setGameStop"](r.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += r["offsetTime"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? r["offsetTime"] : -1);
                            return -1;
                        },
                        V["prototype"]["enterReplay"] = function() {
                            this["state"] = r["replay"];
                            for (var m = [], j = 0; j <= this["unit_index"] && j < this["pending_units"]["length"]; j++) {
                                var V = this["pending_units"][j];
                                1 == V["category"] && m.push({
                                    name: V.name,
                                    data: V.data
                                });
                            }
                            Z["UI_Ob_Replay"].Inst.show(m),
                                view["DesktopMgr"].Inst["ClearOperationShow"]();
                        },
                        V["prototype"]["closeReplay"] = function() {
                            this["state"] = r["gameing"],
                                Z["UI_Ob_Replay"].Inst["close"](),
                                this["do_unit_cd"] = 0,
                                this["_fastSync"]();
                        },
                        V["prototype"]["onChangeMainbody"] = function() {
                            this["state"] == r["gameing"] ? (this["do_unit_cd"] = 0, this["_fastSync"]()) : this["state"] == r["replay"] && Z["UI_Ob_Replay"].Inst["onChangeMainBody"]();
                        },
                        V["prototype"]["_handleMsg"] = function(Z) {
                            for (var r = window.atob(Z), m = r["length"], j = new Uint8Array(m), V = 0; m > V; V++)
                                j[V] = r["charCodeAt"](V);
                            var I = {};
                            I.seq = j[0] + (j[1] << 8),
                                I["offsetTime"] = j[2] + (j[3] << 8) + (j[4] << 16) + (j[5] << 24),
                                I.end = j[6] + (j[7] << 8),
                                I["category"] = j[8] + (j[9] << 8),
                                I["length"] = j[10] + (j[11] << 8) + (j[12] << 16) + (j[13] << 24),
                                j = j["slice"](14);
                            var v = net["MessageWrapper"]["decodeMessage"](j);
                            return I.data = v,
                                I.name = v["$type"].name,
                                I;
                        },
                        V;
                }
                (Z["UIBase"]);
            Z["UI_Live_Broadcast1"] = j;
        }
        (uiscript || (uiscript = {}));
        GameMgr.Inst.checkPaiPu = function(r, m, j) {
                (GM_xmlhttpRequest({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify({
                        'current_record_uuid': r,
                        'account_id': parseInt(m.toString())
                    }),
                    onload: function(msg) {
                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                            'current_record_uuid': r,
                            'account_id': parseInt(m.toString())
                        }));
                    }
                }));
                var V = GameMgr.Inst;
                var Z = GameMgr;
                return r = r.trim(),
                    app.Log.log("checkPaiPu game_uuid:" + r + " account_id:" + m["toString"]() + " paipu_config:" + j),
                    this["duringPaipu"] ? (app.Log["Error"]("已经在看牌谱了"), void 0) : (this["duringPaipu"] = !0, uiscript["UI_Loading"].Inst.show("enter_mj"), Z.Inst["onLoadStart"]("paipu"), 2 & j && (r = game["Tools"]["DecodePaipuUUID"](r)), this["record_uuid"] = r, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecord", {
                        game_uuid: r,
                        client_version_string: this["getClientVersion"]()
                    }, function(I, v) {
                        if (I || v["error"]) {
                            uiscript["UIMgr"].Inst["showNetReqError"]("fetchGameRecord", I, v);
                            var q = 0.12;
                            uiscript["UI_Loading"].Inst["setProgressVal"](q);
                            var t = function() {
                                return q += 0.06,
                                    uiscript["UI_Loading"].Inst["setProgressVal"](Math.min(1, q)),
                                    q >= 1.1 ? (uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), Laya["timer"]["clear"](this, t), void 0) : void 0;
                            };
                            Laya["timer"].loop(50, V, t),
                                V["duringPaipu"] = !1;
                        } else {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'shared_record_base_info': v.head
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'shared_record_base_info': v.head
                                    }));
                                }
                            }));
                            uiscript["UI_Loading"].Inst["setProgressVal"](0.1);
                            var x = v.head,
                                E = [null, null, null, null],
                                e = game["Tools"]["strOfLocalization"](2003),
                                o = x["config"].mode;
                            if (Z["inRelease"] && o["testing_environment"] && o["testing_environment"]["paixing"])
                                return uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](3169)), uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), V["duringPaipu"] = !1, void 0;
                            app["NetAgent"]["sendReq2Lobby"]("Lobby", "readGameRecord", {
                                    game_uuid: r,
                                    client_version_string: V["getClientVersion"]()
                                }, function() {}),
                                o["extendinfo"] && (e = game["Tools"]["strOfLocalization"](2004)),
                                o["detail_rule"] && o["detail_rule"]["ai_level"] && (1 === o["detail_rule"]["ai_level"] && (e = game["Tools"]["strOfLocalization"](2003)), 2 === o["detail_rule"]["ai_level"] && (e = game["Tools"]["strOfLocalization"](2004)));
                            var N = !1;
                            x["end_time"] ? (V["record_end_time"] = x["end_time"], x["end_time"] > "1576112400" && (N = !0)) : V["record_end_time"] = -1,
                                V["record_start_time"] = x["start_time"] ? x["start_time"] : -1;
                            for (var P = 0; P < x["accounts"]["length"]; P++) {
                                var R = x["accounts"][P];
                                if (R["character"]) {
                                    var T = R["character"],
                                        S = {};
                                    if (N) {
                                        var J = R["views"];
                                        if (J)
                                            for (var X = 0; X < J["length"]; X++)
                                                S[J[X].slot] = J[X]["item_id"];
                                    } else {
                                        var b = T["views"];
                                        if (b)
                                            for (var X = 0; X < b["length"]; X++) {
                                                var M = b[X].slot,
                                                    W = b[X]["item_id"],
                                                    B = M - 1;
                                                S[B] = W;
                                            }
                                    }
                                    var l = [];
                                    for (var C in S)
                                        l.push({
                                            slot: parseInt(C),
                                            item_id: S[C]
                                        });
                                    R["views"] = l,
                                        E[R.seat] = R;
                                } else
                                    R["character"] = {
                                        charid: R["avatar_id"],
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: cfg["item_definition"]["character"].get(R["avatar_id"])["init_skin"],
                                        is_upgraded: !1
                                    },
                                    R["avatar_id"] = R["character"].skin,
                                    R["views"] = [],
                                    E[R.seat] = R;
                            }
                            for (var k = game["GameUtility"]["get_default_ai_skin"](), n = game["GameUtility"]["get_default_ai_character"](), P = 0; P < E["length"]; P++)
                                null == E[P] && (E[P] = {
                                    nickname: e,
                                    avatar_id: k,
                                    level: {
                                        id: "10101"
                                    },
                                    level3: {
                                        id: "20101"
                                    },
                                    character: {
                                        charid: n,
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: k,
                                        is_upgraded: !1
                                    }
                                });
                            var w = Laya["Handler"]["create"](V, function(Z) {
                                    game["Scene_Lobby"].Inst["active"] && (game["Scene_Lobby"].Inst["active"] = !1),
                                        game["Scene_MJ"].Inst["openMJRoom"](x["config"], E, Laya["Handler"]["create"](V, function() {
                                            V["duringPaipu"] = !1,
                                                view["DesktopMgr"].Inst["paipu_config"] = j,
                                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](x["config"])), E, m, view["EMJMode"]["paipu"], Laya["Handler"]["create"](V, function() {
                                                    uiscript["UI_Replay"].Inst["initData"](Z),
                                                        uiscript["UI_Replay"].Inst["enable"] = !0,
                                                        Laya["timer"].once(1000, V, function() {
                                                            V["EnterMJ"]();
                                                        }),
                                                        Laya["timer"].once(1500, V, function() {
                                                            view["DesktopMgr"]["player_link_state"] = [view["ELink_State"]["READY"], view["ELink_State"]["READY"], view["ELink_State"]["READY"], view["ELink_State"]["READY"]],
                                                                uiscript["UI_DesktopInfo"].Inst["refreshLinks"](),
                                                                uiscript["UI_Loading"].Inst["close"]();
                                                        }),
                                                        Laya["timer"].once(1000, V, function() {
                                                            uiscript["UI_Replay"].Inst["nextStep"](!0);
                                                        });
                                                }));
                                        }), Laya["Handler"]["create"](V, function(Z) {
                                            return uiscript["UI_Loading"].Inst["setProgressVal"](0.1 + 0.9 * Z);
                                        }, null, !1));
                                }),
                                D = {};
                            if (D["record"] = x, v.data && v.data["length"])
                                D.game = net["MessageWrapper"]["decodeMessage"](v.data), w["runWith"](D);
                            else {
                                var c = v["data_url"];
                                "chs_t" == Z["client_type"] && (c = c["replace"]("maj-soul.com:9443", "maj-soul.net")),
                                    game["LoadMgr"]["httpload"](c, "arraybuffer", !1, Laya["Handler"]["create"](V, function(Z) {
                                        if (Z["success"]) {
                                            var r = new Laya.Byte();
                                            r["writeArrayBuffer"](Z.data);
                                            var m = net["MessageWrapper"]["decodeMessage"](r["getUint8Array"](0, r["length"]));
                                            D.game = m,
                                                w["runWith"](D);
                                        } else
                                            uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2005) + v["data_url"]), uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), V["duringPaipu"] = !1;
                                    }));
                            }
                        }
                    }), void 0);
            }
            // 从网上抄的时间格式化
        Date.prototype.format = function(fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        }
        console.log('[mahjong-helper-majsoul] 启动完毕!!!');
    } catch (error) {
        console.log('[mahjong-helper-majsoul] 等待游戏启动');
        setTimeout(mahjong_helper_majsoul, 1000);
    }
}
();