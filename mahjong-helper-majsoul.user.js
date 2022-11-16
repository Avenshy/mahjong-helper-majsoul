// ==UserScript==
// @name         mahjong-helper-majsoul
// @namespace    https://github.com/Avenshy
// @version      20221117
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
        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionLockTile play data:' + JSON['stringify'](a));
                            var U = a.seat;
                            a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1);
                            var z = mjcore['MJPai']['Create'](a.tile ? a.tile : '5z'),
                                M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)];
                            if (a['operation'] && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }), void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])), l['DesktopMgr'].Inst['setScores'](a['scores']), 0 == a['lock_state'] ? M['RevealFailed'](z) : 1 == a['lock_state'] && M['PlaySound']('act_locktile'), 3 == a['lock_state']) {
                                M['PlaySound']('act_unveil');
                                var g = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])];
                                g['RevealFailed'](z),
                                    l['DesktopMgr'].Inst['onRevealStateChange'](l['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                l['DesktopMgr'].Inst['onRevealStateChange'](U, !1);
                            l['DesktopMgr'].Inst['ActionRunComplete'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionLockTile fastplay data:' + JSON['stringify'](a) + ' usetime:' + U);
                            var z = a.seat;
                            a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1);
                            var M = mjcore['MJPai']['Create'](a.tile ? a.tile : '5z'),
                                g = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)];
                            if (a['operation'] && -1 != U && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation'], U);
                                }), void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])), l['DesktopMgr'].Inst['setScores'](a['scores']), 0 == a['lock_state'] && g['RevealFailed'](M, !1), 3 == a['lock_state']) {
                                var R = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])];
                                R['RevealFailed'](M, !1),
                                    l['DesktopMgr'].Inst['onRevealStateChange'](l['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                l['DesktopMgr'].Inst['onRevealStateChange'](z, !1);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang'], !1);
                        },
                        U['record'] = function(a, U) {
                            if (void 0 === U && (U = 0), app.Log.log('ActionLockTile record data:' + JSON['stringify'](a)), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var z = 0; z < a['operations']['length']; z++)
                                    l['ActionOperation'].ob(a['operations'][z], U, 450);
                            a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                l['DesktopMgr'].Inst['setScores'](a['scores']);
                            var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](a.seat)],
                                g = mjcore['MJPai']['Create'](a.tile ? a.tile : '5z');
                            if (0 == a['lock_state'] ? M['RevealFailed'](g) : 1 == a['lock_state'] && M['PlaySound']('act_locktile'), 3 == a['lock_state']) {
                                M['PlaySound']('act_unveil');
                                var R = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])];
                                R['RevealFailed'](g),
                                    l['DesktopMgr'].Inst['onRevealStateChange'](l['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                l['DesktopMgr'].Inst['onRevealStateChange'](a.seat, !1);
                            return uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']),
                                1000;
                        },
                        U['fastrecord'] = function(a, U) {
                            if (void 0 === U && (U = -1), app.Log.log('ActionLockTile record data:' + JSON['stringify'](a)), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operations'])
                                for (var z = 0; z < a['operations']['length']; z++)
                                    l['ActionOperation'].ob(a['operations'][z], U, 450);
                            l['DesktopMgr'].Inst['setScores'](a['scores']),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1);
                            var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](a.seat)],
                                g = mjcore['MJPai']['Create'](a.tile ? a.tile : '5z');
                            if (0 == a['lock_state'] && M['RevealFailed'](g, !1), 3 == a['lock_state']) {
                                var R = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])];
                                R['RevealFailed'](g, !1),
                                    l['DesktopMgr'].Inst['onRevealStateChange'](l['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                l['DesktopMgr'].Inst['onRevealStateChange'](a.seat, !1);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang'], !1);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionLockTile'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            l['PAIMODEL_HEIGHT'] = '0.043225' * 0.94,
                l['PAIMODEL_WIDTH'] = '0.032775' * 0.94,
                l['PAIMODEL_THICKNESS'] = '0.0235' * 0.95 * 0.94,
                l['PAI_COUNT'] = 136;
            var a;
            ! function(l) {
                l[l.NULL = 0] = 'NULL',
                    l[l.AUTH = 1] = 'AUTH',
                    l[l['SYNCING'] = 2] = 'SYNCING',
                    l[l['READY'] = 3] = 'READY';
            }
            (a = l['ELink_State'] || (l['ELink_State'] = {}));
            var U;
            ! function(l) {
                l[l['Liqi4'] = 0] = 'Liqi4',
                    l[l['Liqi3'] = 1] = 'Liqi3';
            }
            (U = l['ERuleMode'] || (l['ERuleMode'] = {}));
            var z;
            ! function(l) {
                l[l.play = 0] = 'play',
                    l[l['paipu'] = 1] = 'paipu',
                    l[l['live_broadcast'] = 2] = 'live_broadcast';
            }
            (z = l['EMJMode'] || (l['EMJMode'] = {}));
            var M = function(M) {
                    function g() {
                        var a = M.call(this) || this;
                        return a['rule_mode'] = U['Liqi4'],
                            a.mode = z.play,
                            a['active'] = !1,
                            a['game_config'] = null,
                            a.seat = 0,
                            a.dora = [],
                            a['xuezhan'] = !1,
                            a['anpai'] = !1,
                            a['last_anpai_score'] = 0,
                            a['players'] = null,
                            a['mainrole'] = null,
                            a['num_left_show'] = new Array(),
                            a['container_other'] = null,
                            a['plane_chang'] = null,
                            a['plane_ju'] = null,
                            a['container_other_reveal'] = null,
                            a['plane_chang_reveal'] = null,
                            a['plane_ju_reveal'] = null,
                            a['num_left_show_reveal'] = new Array(),
                            a['score_reveal'] = new Array(),
                            a['trans_container_effect'] = null,
                            a['effect_pai_canchi'] = null,
                            a['effect_dora3D'] = null,
                            a['effect_dora3D_touying'] = null,
                            a['effect_doraPlane'] = null,
                            a['effect_shadow'] = null,
                            a['effect_shadow_touming'] = null,
                            a['effect_recommend'] = null,
                            a['auto_hule'] = !1,
                            a['auto_nofulu'] = !1,
                            a['auto_moqie'] = !1,
                            a['auto_liqi'] = !0,
                            a['emoji_switch'] = !1,
                            a['duringReconnect'] = !1,
                            a['gameing'] = !1,
                            a['lastpai_seat'] = 0,
                            a['lastqipai'] = null,
                            a['oplist'] = [],
                            a['liqi_select'] = [],
                            a['operation_showing'] = !1,
                            a['myaccountid'] = 0,
                            a['player_datas'] = [],
                            a['player_effects'] = [],
                            a['mjp_res_name'] = '',
                            a['last_gang'] = 0,
                            a['gameEndResult'] = null,
                            a['levelchangeinfo'] = null,
                            a['activity_reward'] = null,
                            a['rewardinfo'] = null,
                            a['choosed_pai'] = null,
                            a['muyu_info'] = null,
                            a['muyu_effect'] = null,
                            a['actionList'] = [],
                            a['action_index'] = 0,
                            a['current_step'] = 0,
                            a['actionMap'] = null,
                            a['tingpais'] = [],
                            a['record_show_hand'] = !1,
                            a['record_show_paopai'] = !1,
                            a['record_show_anim'] = !0,
                            a['ptchange'] = 0,
                            a['waiting_lingshang_deal_tile'] = !1,
                            a.md5 = '',
                            a['paipu_config'] = 0,
                            a['ai_level'] = 1,
                            a['timestoped'] = !1,
                            a['handles_after_timerun'] = [],
                            a['doactioncd'] = 0,
                            a['dochain_fast'] = !1,
                            a['action_running'] = !1,
                            a['hangupCount'] = 0,
                            a['state_cache'] = {},
                            a['mind_voice_seat'] = -1,
                            a['mind_voice_type'] = '',
                            a['during_playing_mind_voice'] = !1,
                            g.Inst = a,
                            a['actionMap'] = {},
                            a['actionMap']['ActionMJStart'] = new Laya['Handler'](a, function(l) {
                                l.msg;
                                return app.Log.log('ActionMJStart begin'),
                                    a['ClearOperationShow'](),
                                    GameMgr.Inst['EnterMJ'](),
                                    uiscript['UI_FightBegin'].show(Laya['Handler']['create'](a, function() {
                                        uiscript['UI_Loading'].Inst['close'](),
                                            a['ActionRunComplete']();
                                    })),
                                    2000;
                            }, null, !1),
                            a['actionMap']['ActionNewRound'] = new Laya['Handler'](a, function(U) {
                                app.Log.log('ActionNewRound begin');
                                var z = U.msg,
                                    M = U.fast;
                                if (a['ClearOperationShow'](), uiscript['UI_Loading'].Inst['close'](), GameMgr.Inst['EnterMJ'](), M)
                                    return uiscript['UI_FightBegin'].hide(), l['ActionNewRound']['fastplay'](z, -1), 0;
                                var g = uiscript['UI_FightBegin'].hide();
                                return Laya['timer'].once(g + 200, a, function() {
                                        l['ActionNewRound'].play(z);
                                    }),
                                    z.al && (g += 1300),
                                    a['is_jiuchao_mode']() && (g += 150),
                                    g + 200 + 1200 + 400;
                            }, null, !1),
                            a['actionMap']['ActionNewCard'] = new Laya['Handler'](a, function(U) {
                                app.Log.log('ActionNewCard begin');
                                var z = U.msg,
                                    M = U.fast;
                                return a['ClearOperationShow'](),
                                    uiscript['UI_Loading'].Inst['close'](),
                                    GameMgr.Inst['EnterMJ'](),
                                    M ? (l['ActionNewCard']['fastplay'](z, -1), 0) : l['ActionNewCard'].play(z);
                            }, null, !1),
                            a['actionMap']['ActionDiscardTile'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionDiscardTile']['fastplay'](z, -1), 0) : (l['ActionDiscardTile'].play(z), Laya['timer'].once(500, a, a['ActionRunComplete']), 500);
                            }, null, !1),
                            a['actionMap']['ActionDealTile'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionDealTile']['fastplay'](z, -1), 0) : (l['ActionDealTile'].play(z), 500);
                            }, null, !1),
                            a['actionMap']['ActionChiPengGang'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionChiPengGang']['fastplay'](z, -1), 0) : (l['ActionChiPengGang'].play(z), 1100);
                            }, null, !1),
                            a['actionMap']['ActionAnGangAddGang'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionAnGangAddGang']['fastplay'](z, -1), 0) : (l['ActionAnGangAddGang'].play(z), 1100);
                            }, null, !1),
                            a['actionMap']['ActionHule'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg;
                                return l['ActionHule'].play(z),
                                    5000;
                            }, null, !1),
                            a['actionMap']['ActionHuleXueZhanMid'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg;
                                return l['ActionHuleXueZhanMid'].play(z),
                                    1000;
                            }, null, !1),
                            a['actionMap']['ActionHuleXueZhanEnd'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg;
                                return l['ActionHuleXueZhanEnd'].play(z),
                                    1000;
                            }, null, !1),
                            a['actionMap']['ActionNoTile'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg;
                                return l['ActionNoTile'].play(z),
                                    5000;
                            }, null, !1),
                            a['actionMap']['ActionLiuJu'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg;
                                return l['ActionLiuJu'].play(z),
                                    5000;
                            }, null, !1),
                            a['actionMap']['ActionBaBei'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionBabei']['fastplay'](z, -1), 0) : (l['ActionBabei'].play(z), 1000);
                            }, null, !1),
                            a['actionMap']['ActionChangeTile'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionChangeTile']['fastplay'](z, -1), 0) : (l['ActionChangeTile'].play(z), 3000);
                            }, null, !1),
                            a['actionMap']['ActionSelectGap'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionSelectGap']['fastplay'](z, -1), 0) : (l['ActionSelectGap'].play(z), 800);
                            }, null, !1),
                            a['actionMap']['ActionGangResult'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionGangResult']['fastplay'](z, -1), 0) : (l['ActionGangResult'].play(z), 1000);
                            }, null, !1),
                            a['actionMap']['ActionGangResultEnd'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionGangResultEnd']['fastplay'](z, -1), 0) : (l['ActionGangResultEnd'].play(z), 2000);
                            }, null, !1),
                            a['actionMap']['ActionRevealTile'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionRevealTile']['fastplay'](z, -1), 0) : (l['ActionRevealTile'].play(z), Laya['timer'].once(500, a, a['ActionRunComplete']), 500);
                            }, null, !1),
                            a['actionMap']['ActionLockTile'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionLockTile']['fastplay'](z, -1), 0) : (l['ActionLockTile'].play(z), 1000);
                            }, null, !1),
                            a['actionMap']['ActionUnveilTile'] = new Laya['Handler'](a, function(U) {
                                a['ClearOperationShow']();
                                var z = U.msg,
                                    M = U.fast;
                                return M ? (l['ActionUnveilTile']['fastplay'](z, -1), 0) : (l['ActionUnveilTile'].play(z), 1000);
                            }, null, !1),
                            a['actionMap']['ActionFillAwaitingTiles'] = new Laya['Handler'](a, function(a) {
                                app.Log.log('ActionFillAwaitingTiles begin');
                                var U = a.msg,
                                    z = a.fast;
                                return z ? (l['ActionFillAwaitingTiles']['fastplay'](U, -1), 0) : l['ActionFillAwaitingTiles'].play(U);
                            }, null, !1),
                            app['NetAgent']['AddListener2MJ']('NotifyGameEndResult', Laya['Handler']['create'](a, function(l) {
                                a['gameEndResult'] = l['result'],
                                    uiscript['UI_Hangup_Warn'].Inst['enable'] && uiscript['UI_Hangup_Warn'].Inst['close'](),
                                    a.mode == z.play && (uiscript['UI_Activity']['need_check_activity'] = !0),
                                    Laya['timer'].once(10000, a, function() {
                                        game['MJNetMgr'].Inst['Close']();
                                    });
                            })),
                            app['NetAgent']['AddListener2MJ']('ActionPrototype', Laya['Handler']['create'](a, function(l) {
                                if (app.Log.log('Receive Action: ' + JSON['stringify'](l)), a['duringReconnect'])
                                    a['actionList'].push(l);
                                else if (a['actionList']['length'] > 0)
                                    a['actionList'].push(l);
                                else {
                                    a['actionList'].push(l);
                                    var U = a['doactioncd'] - Laya['timer']['currTimer'];
                                    0 > U && (U = 0),
                                        a['StartChainAction'](U);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyGameTerminate', Laya['Handler']['create'](a, function(U) {
                                app.Log.log('NotifyGameTerminate:' + JSON['stringify'](U)),
                                    l['AudioMgr']['StopMusic'](),
                                    'user-manual-terminate' != U['reason'] && uiscript['UI_SecondConfirm'].Inst['show_only_confirm'](game['Tools']['strOfLocalization'](2227), Laya['Handler']['create'](a, function() {
                                        a['Reset'](),
                                            game['Scene_MJ'].Inst['GameEnd']();
                                    })),
                                    uiscript['UI_VoteProgress'].Inst['enable'] && uiscript['UI_VoteProgress'].Inst['close']();
                            })),
                            l['ModelAnimationController']['init_data'](),
                            app['NetAgent']['AddListener2MJ']('NotifyGamePause', Laya['Handler']['create'](a, function(l) {
                                app.Log.log('NotifyGamePause:' + JSON['stringify'](l));
                                var U = l['paused'];
                                a['setGameStop'](U);
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyGameFinishReward', Laya['Handler']['create'](a, function(l) {
                                app.Log.log('NotifyGameFinishReward: ' + JSON['stringify'](l)),
                                    a['levelchangeinfo'] = l['level_change'],
                                    a['rewardinfo'] = l;
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyActivityReward', Laya['Handler']['create'](a, function(l) {
                                app.Log.log('NotifyActivityReward: ' + JSON['stringify'](l)),
                                    a['activity_reward'] = l;
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyActivityPoint', Laya['Handler']['create'](a, function(l) {
                                for (var a = l['activity_points'], U = 0; U < a['length']; U++) {
                                    var z = a[U];
                                    z['activity_id'] == uiscript['UI_Activity_DuanWu_Point']['activity_id'] && (uiscript['UI_Activity_DuanWu_Point']['point'] = z['point'], uiscript['UI_Chunjie']['need_refresh_rank'] = !0);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyLeaderboardPoint', Laya['Handler']['create'](a, function(l) {
                                for (var a = l['leaderboard_points'], U = 0; U < a['length']; U++) {
                                    var z = a[U];
                                    z['leaderboard_id'] == uiscript['UI_Activity_DuanWu_Rank']['activity_id'] && (uiscript['UI_Activity_DuanWu_Rank']['point'] = z['point']);
                                }
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyGameFinishRewardV2', Laya['Handler']['create'](a, function(l) {
                                app.Log.log('NotifyGameFinishReward: ' + JSON['stringify'](l)),
                                    a['levelchangeinfo'] = l['level_change'],
                                    a['rewardinfo'] = l;
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyActivityRewardV2', Laya['Handler']['create'](a, function(l) {
                                app.Log.log('NotifyActivityReward: ' + JSON['stringify'](l)),
                                    a['activity_reward'] = l;
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyActivityPointV2', Laya['Handler']['create'](a, function(l) {
                                for (var a = l['activity_points'], U = 0; U < a['length']; U++) {
                                    var z = a[U];
                                    z['activity_id'] == uiscript['UI_Activity_DuanWu_Point']['activity_id'] && (uiscript['UI_Activity_DuanWu_Point']['point'] = z['point'], uiscript['UI_Chunjie']['need_refresh_rank'] = !0);
                                }
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyLeaderboardPointV2', Laya['Handler']['create'](a, function(l) {
                                for (var a = l['leaderboard_points'], U = 0; U < a['length']; U++) {
                                    var z = a[U];
                                    z['leaderboard_id'] == uiscript['UI_Activity_DuanWu_Rank']['activity_id'] && (uiscript['UI_Activity_DuanWu_Rank']['point'] = z['point']);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('PlayerLeaving', Laya['Handler']['create'](a, function(l) {
                                l && l.seat == a.seat && uiscript['UI_Hangup_Warn'].Inst.show();
                            })),
                            a;
                    }
                    return __extends(g, M),
                        g['is_yuren_type'] = function(l) {
                            if (void 0 === l && (l = !1), l) {
                                var a = new Date();
                                this['_is_yuren_type'] = 3 == a['getMonth']() && 1 == a['getDate']();
                            }
                            return this['_is_yuren_type'];
                        },
                        Object['defineProperty'](g['prototype'], 'round_id', {
                            get: function() {
                                return this['index_change'] + '-' + this['index_ju'] + '-' + this['index_ben'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](g['prototype'], 'main_role_character_info', {
                            get: function() {
                                return this['player_datas'][this.seat]['character'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](g['prototype'], 'player_count', {
                            get: function() {
                                return this['rule_mode'] == U['Liqi3'] ? 3 : 4;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        g['prototype']['seat2LocalPosition'] = function(l) {
                            if (this['rule_mode'] == U['Liqi3']) {
                                for (var a = this.seat, z = 0; 4 > z; z++) {
                                    if (l == a)
                                        return z;
                                    a++,
                                    a >= 3 && (a = -1);
                                }
                                return 0;
                            }
                            return (l - this.seat + 4) % 4;
                        },
                        g['prototype']['localPosition2Seat'] = function(l) {
                            if (this['rule_mode'] == U['Liqi3']) {
                                for (var a = this.seat, z = 0; l > z; z++)
                                    a++, a >= 3 && (a = -1);
                                return a;
                            }
                            return (this.seat + l) % 4;
                        },
                        g['prototype']['getPlayerName'] = function(l) {
                            var a = this['player_datas'][l]['account_id'];
                            if (this.mode == z['paipu'] && uiscript['UI_Replay'].Inst['hide_name']) {
                                var U = this['seat2LocalPosition'](l);
                                switch (U) {
                                    case 0:
                                        return {
                                            account_id: a,
                                            nickname: game['Tools']['strOfLocalization'](3076),
                                            verified: 0
                                        };
                                    case 1:
                                        return {
                                            account_id: a,
                                            nickname: game['Tools']['strOfLocalization'](3073),
                                            verified: 0
                                        };
                                    case 2:
                                        return {
                                            account_id: a,
                                            nickname: game['Tools']['strOfLocalization'](3074),
                                            verified: 0
                                        };
                                    case 3:
                                        return {
                                            account_id: a,
                                            nickname: game['Tools']['strOfLocalization'](3075),
                                            verified: 0
                                        };
                                }
                                return {
                                    account_id: a,
                                    nickname: '',
                                    verified: 0
                                };
                            }
                            var M = this['player_datas'][l]['nickname'];
                            return a && !game['Tools']['is_same_zone'](GameMgr.Inst['account_id'], a) && (GameMgr.Inst['nickname_replace_enable'] && GameMgr.Inst['nickname_replace_lst']['length'] > 0 ? GameMgr.Inst['nickname_replace_table'][a] ? M = GameMgr.Inst['nickname_replace_table'][a] : (M = GameMgr.Inst['nickname_replace_lst'][Math['floor'](Math['random']() * GameMgr.Inst['nickname_replace_lst']['length'])], GameMgr.Inst['nickname_replace_table'][a] = M) : null != app['Taboo'].test(M) && (M = game['Tools']['strOfLocalization'](3060))), {
                                account_id: a,
                                nickname: M,
                                verified: this['player_datas'][l]['verified']
                            };
                        },
                        Object['defineProperty'](g['prototype'], 'showingPaopai', {
                            get: function() {
                                return this.mode != z.play;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        g['prototype']['is_dora3_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['dora3_mode'] ? !0 : !1;
                        },
                        g['prototype']['is_peipai_open_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['begin_open_mode'] ? !0 : !1;
                        },
                        g['prototype']['is_muyu_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['muyu_mode'] ? !0 : !1;
                        },
                        g['prototype']['is_open_hand'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['open_hand'] ? !0 : !1;
                        },
                        g['prototype']['is_shilian_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode']['shilian'] ? !0 : !1;
                        },
                        g['prototype']['is_xiuluo_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['xuezhandaodi'] ? !0 : !1;
                        },
                        g['prototype']['is_jiuchao_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['jiuchao_mode'] ? !0 : !1;
                        },
                        g['prototype']['is_reveal_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['reveal_discard'] ? !0 : !1;
                        },
                        g['prototype']['is_hesu_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode'].hesu ? !0 : !1;
                        },
                        g['prototype']['is_huansanzhang_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['huansanzhang'] ? !0 : !1;
                        },
                        g['prototype']['is_chuanma_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['chuanma'] ? !0 : !1;
                        },
                        g['prototype']['is_jjc_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode'].jjc ? !0 : !1;
                        },
                        g['prototype']['is_top_match'] = function() {
                            var l = 0;
                            if (this['game_config'] && this['game_config'].meta && (l = this['game_config'].meta['mode_id']), (15 == l || 16 == l || 25 == l || 26 == l) && this['player_datas']) {
                                for (var a = 0, z = this['player_datas']; a < z['length']; a++) {
                                    var M = z[a],
                                        g = this['rule_mode'] == U['Liqi4'] ? M['level'].id : M['level3'].id;
                                    if (6 != cfg['level_definition']['level_definition'].get(g)['primary_level'])
                                        return !1;
                                }
                                return !0;
                            }
                            return !1;
                        },
                        g['prototype']['ActionRunComplete'] = function() {
                            this['action_running'] = !1;
                        },
                        g['prototype']['StartChainAction'] = function(l) {
                            this['doactioncd'] = Laya['timer']['currTimer'] + l,
                                Laya['timer']['frameLoop'](1, this, this['DoChainAction']);
                        },
                        g['prototype']['DoChainAction'] = function() {
                            var l = this;
                            if (this['action_index'] >= this['actionList']['length'])
                                this['action_index'] = 0, this['actionList'] = [], this['dochain_fast'] = !1, Laya['timer']['clear'](this, this['DoChainAction']), this['duringReconnect'] && (app.Log.log('finishSyncGame0'), app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {}), this['duringReconnect'] = !1);
                            else {
                                if (!this['dochain_fast']) {
                                    if (this['action_running'])
                                        return;
                                    if (Laya['timer']['currTimer'] <= this['doactioncd'] - Laya['timer']['delta'])
                                        return;
                                    Laya['timer']['clear'](this, this['DoChainAction']);
                                }
                                this['action_index'] == this['actionList']['length'] - 1 && this['duringReconnect'] && (this['duringReconnect'] = !1, app.Log.log('finishSyncGame1'), app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {})),
                                    this['dochain_fast'] ? this['action_index'] + 2 < this['actionList']['length'] ? this['DoMJAction'](this['actionList'][this['action_index']++], !0) : (this['dochain_fast'] = !1, this['DoMJAction'](this['actionList'][this['action_index']++], !1)) : (this['dochain_fast'] = !1, this['action_index'] + 4 < this['actionList']['length'] && (this['dochain_fast'] = !0), this['dochain_fast'] ? Laya['timer'].once(800, this, function() {
                                        for (var a = l['actionList']['length'] - 1; a >= l['action_index']; a--)
                                            if ('ActionNewRound' == l['actionList'][a].name) {
                                                l['action_index'] = a;
                                                break;
                                            }
                                        l['DoMJAction'](l['actionList'][l['action_index']++], !0);
                                    }) : this['DoMJAction'](this['actionList'][this['action_index']++], !1));
                            }
                        },
                        g['EnDecode'] = function(l) {
                            for (var a = [132, 94, 78, 66, 57, 162, 31, 96, 28], U = 0; U < l['byteLength']; U++) {
                                var z = (23 ^ l['byteLength']) + 5 * U + a[U % a['length']] & 255;
                                l[U] ^= z;
                            }
                            return l;
                        },
                        g['prototype']['DoMJAction'] = function(l, a) {
                            var U = this;
                            if (this['active']) {
                                var z = net['ProtobufManager']['lookupType']('lq.' + l.name);
                                if (!z)
                                    throw new Error('ERR_CANNOT_FIND_MESSAGE_TYPE, lq.' + l.name);
                                var M = l.step,
                                    R = z['decode'](g['EnDecode'](l.data));
                                if (app.Log.log('DoMJAction step:' + M + ' [' + l.name + ']:  ' + JSON['stringify'](R) + ' fast:' + a), M > 1 && M != this['current_step'] + 1)
                                    return app.Log.log('step 不对 强制触发全数据重连 step:' + M + ' current_step:' + this['current_step']), this['trySyncGame'](), void 0;
                                var E = 0;
                                if (this['current_step'] = M, this['actionMap']['hasOwnProperty'](l.name))
                                    try {
                                        a || (this['action_running'] = !0),
                                            E = this['actionMap'][l.name]['runWith']({
                                                msg: R,
                                                fast: a
                                            });
                                    } catch (C) {
                                        var B = {};
                                        return B['error'] = C['message'],
                                            B['stack'] = C['stack'],
                                            B['method'] = 'DoMJAction',
                                            B.name = l.name,
                                            B.data = l,
                                            B.step = M,
                                            GameMgr.Inst['onFatalError'](B),
                                            void 0;
                                    }
                                else
                                    app.Log['Error']('没有监听操作：' + l.name);
                                a ? this['DoChainAction']() : Laya['timer']['frameOnce'](1, this, function() {
                                    U['StartChainAction'](E);
                                });
                            }
                        },
                        g['prototype']['_load'] = function(a) {
                            this['desktop3D'] = a,
                                this['desktop3D']['getChildByName']('all')['active'] = !1;
                            var U = this['desktop3D']['getChildByName']('poss');
                            this['players'] = new Array(),
                                this['mainrole'] = U['getChildByName']('man_1')['addComponent'](l['ViewPlayer_Me']),
                                this['mainrole']['InitMe'](this, 0, game['Scene_MJ'].Inst['root2']['getChildByName']('hands'), U),
                                this['players'].push(this['mainrole']);
                            for (var z = 2; 4 >= z; z++) {
                                var M = U['getChildByName']('man_' + z)['addComponent'](l['ViewPlayer_Other']);
                                M.Init(this, z - 1, U),
                                    this['players'].push(M);
                            }
                            var g = this['desktop3D']['getChildByName']('other'),
                                R = g['getChildByName']('left');
                            this['num_left_show'].push(R['getChildByName']('0')),
                                this['num_left_show'].push(R['getChildByName']('1'));
                            var E = g['getChildByName']('chang');
                            this['container_other'] = g,
                                this['plane_chang'] = E['getChildByName']('chang'),
                                this['plane_ju'] = E['getChildByName']('ju'),
                                this['container_other'] = g,
                                this['container_other_reveal'] = this['desktop3D']['getChildByName']('other_reveal');
                            var C = this['container_other_reveal']['getChildByName']('left');
                            this['num_left_show_reveal'].push(C['getChildByName']('0')),
                                this['num_left_show_reveal'].push(C['getChildByName']('1'));
                            var B = this['container_other_reveal']['getChildByName']('chang');
                            if (this['plane_chang_reveal'] = B['getChildByName']('chang'), this['plane_ju_reveal'] = B['getChildByName']('ju'), 'kr' == GameMgr['client_language']) {
                                var w = 'scene/Assets/Resource/table/tablemid/',
                                    L = this['plane_chang_reveal']['meshRender']['material'];
                                L['albedoTexture'] = Laya['Loader']['getRes'](w + 'chang_kr.png'),
                                    L = B['getChildByName']('juzi')['meshRender']['material'],
                                    L['albedoTexture'] = Laya['Loader']['getRes'](w + 'chang_kr.png'),
                                    L = C['getChildByName']('left')['meshRender']['material'],
                                    L['albedoTexture'] = Laya['Loader']['getRes'](w + 'left_kr.png'),
                                    L = this['plane_chang']['meshRender']['material'],
                                    L['albedoTexture'] = Laya['Loader']['getRes'](w + 'chang_kr.png'),
                                    L = E['getChildByName']('juzi')['meshRender']['material'],
                                    L['albedoTexture'] = Laya['Loader']['getRes'](w + 'chang_kr.png'),
                                    L = R['getChildByName']('left')['meshRender']['material'],
                                    L['albedoTexture'] = Laya['Loader']['getRes'](w + 'left_kr.png');
                            }
                            for (var c = this['container_other_reveal']['getChildByName']('score'), z = 0; 6 > z; z++)
                                this['score_reveal'].push(c['getChildAt'](z));
                            this['SetLeftPaiShow'](0),
                                this['SetChangJuShow'](0, 0, 0),
                                this['trans_container_effect'] = this['desktop3D']['getChildByName']('effect'),
                                this['effect_dora3D'] = this['trans_container_effect']['getChildByName']('effect_dora'),
                                this['effect_dora3D_touying'] = this['trans_container_effect']['getChildByName']('effect_touming_dora');
                            var h = this['effect_dora3D']['getChildAt'](0)['meshRender']['material'];
                            h['disableLight'](),
                                this['effect_shadow'] = this['trans_container_effect']['getChildByName']('effect_shadow'),
                                this['effect_shadow_touming'] = this['trans_container_effect']['getChildByName']('effect_shadow_touming'),
                                this['effect_dora3D']['active'] = !0,
                                this['effect_shadow']['active'] = !0,
                                this['effect_shadow_touming']['active'] = !0,
                                this['effect_dora3D_touying']['active'] = !0,
                                this['effect_doraPlane'] = game['Scene_MJ'].Inst['root2']['getChildByName']('hands')['getChildByName']('effect_dora'),
                                this['effect_recommend'] = game['Scene_MJ'].Inst['root2']['getChildByName']('hands')['getChildByName']('effect_recommend'),
                                this['effect_doraPlane']['active'] = !1,
                                this['effect_recommend']['active'] = !1;
                            var x = this['effect_recommend']['getChildAt'](0)['meshRender']['material'],
                                O = 'myres2/mjp/recommend.png';
                            'chs' != GameMgr['client_language'] && (O = GameMgr['client_language'] + '/' + O),
                                Laya['loader']['getRes'](O) && (x['diffuseTexture'] = Laya['loader']['getRes'](O));
                        },
                        g['prototype']['initRoom'] = function(a, M, R, E, C) {
                            var B = this;
                            uiscript['UI_Rpg']['needShow'] = !1,
                                uiscript['UI_WaitingRoom'].Inst['resetData'](),
                                GameMgr.Inst['in_hesu'] = !1,
                                this['game_config'] = a,
                                this['rule_mode'] = U['Liqi4'],
                                a.mode.mode && (this['rule_mode'] = a.mode.mode < 10 ? U['Liqi4'] : U['Liqi3']),
                                this['xuezhan'] = !1,
                                a.mode && a.mode['detail_rule'] && (this['xuezhan'] = !!a.mode['detail_rule']['xuezhandaodi']),
                                a.mode && a.mode['detail_rule'] && (this['field_spell'] = a.mode['detail_rule']['field_spell_mode']),
                                a.mode && a.mode['detail_rule'] && a.mode['detail_rule']['reveal_discard'] ? (this['container_other']['active'] = !1, this['container_other_reveal']['active'] = !0, this['anpai'] = !0) : (this['anpai'] = !1, this['container_other']['active'] = !0, this['container_other_reveal']['active'] = !1),
                                this.mode = E,
                                this.seat = -1,
                                this['player_datas'] = M,
                                this['gameEndResult'] = null,
                                this['levelchangeinfo'] = null,
                                this['activity_reward'] = null,
                                this['rewardinfo'] = null,
                                this['active'] = !0,
                                this['ptchange'] = 0,
                                this['timestoped'] = !1,
                                this['action_running'] = !1,
                                this['hangupCount'] = 0,
                                this['handles_after_timerun'] = [],
                                this['muyu_info'] = null,
                                this['muyu_effect'] && (this['muyu_effect']['destroy'](), this['muyu_effect'] = null),
                                uiscript['UI_GameStop'].Inst['close'](),
                                uiscript['UI_Replay'].Inst['hide_name'] = !1,
                                this.mode == z['paipu'] ? (this['record_show_hand'] = '0' != Laya['LocalStorage']['getItem']('record_show_hand'), this['record_show_paopai'] = '0' != Laya['LocalStorage']['getItem']('record_show_paopai'), this['record_show_anim'] = '0' != Laya['LocalStorage']['getItem']('record_show_anim')) : (this['record_show_anim'] = !0, this['record_show_hand'] = this['record_show_paopai'] = !1),
                                this.mode == z.play ? (uiscript['UI_Invite'].Inst['enable'] = !1, 4 == a['category'] && (GameMgr.Inst['custom_match_id'] = a.meta['contest_uid'])) : uiscript['UI_Invite'].Inst['enable'] = !0,
                                this['myaccountid'] = R;
                            for (var w = {}, L = 0; L < M['length']; L++)
                                for (var c = cfg['item_definition'].skin.get(M[L]['avatar_id']), h = cfg['item_definition']['character'].get(c['character_id']), x = cfg['voice']['sound']['getGroup'](h['sound']), O = 0; O < x['length']; O++)
                                    if (M[L]['character'] && 2 == x[O]['category'] && x[O]['level_limit'] <= M[L]['character']['level']) {
                                        var _ = x[O].path + l['AudioMgr']['suffix'];
                                        w['hasOwnProperty'](_) || (w[_] = 1);
                                    }
                            for (var p in w)
                                Laya['loader'].load(p, null, null, null, 3);
                            for (var L = 0; L < this['player_datas']['length']; L++)
                                this['player_datas'][L]['account_id'] == R && (this.seat = L);
                            if (GameMgr['sakiLimited'])
                                for (var L = 0; L < this['player_datas']['length']; L++)
                                    if (this['player_datas'][L]['account_id'] != GameMgr.Inst['account_id']) {
                                        game['GameUtility']['char_limited'](this['player_datas'][L]['character']['charid']) && (this['player_datas'][L]['character']['charid'] = game['GameUtility']['get_default_ai_character'](), this['player_datas'][L]['character'].skin = game['GameUtility']['get_default_ai_skin'](), this['player_datas'][L]['avatar_id'] = game['GameUtility']['get_default_ai_skin']());
                                        var N = this['player_datas'][L]['views'];
                                        if (N)
                                            for (var O = N['length'] - 1; O >= 0; O--) {
                                                var n = N[O]['item_id'];
                                                n && 1 == cfg['item_definition'].item.get(n)['collaboration'] && N['splice'](O, 1);
                                            }
                                    }
                            if (-1 == this.seat) {
                                if (this.mode == z.play)
                                    return uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2228)), app.Log['Error'](JSON['stringify'](M)), void 0;
                                this.seat = 0;
                            }
                            if (this['emoji_switch'] = !1, a.mode && a.mode['game_setting'] && (this['emoji_switch'] = !!a.mode['game_setting']['emoji_switch']), uiscript['UI_Replay'].Inst['enable'] = this.mode == z['paipu'], uiscript['UI_Ob_Replay'].Inst['enable'] = !1, g['bianjietishi'] = !0, E == z.play) {
                                if (a.mode && a.mode['detail_rule']) {
                                    var P = a.mode['detail_rule'];
                                    null != P['bianjietishi'] && (g['bianjietishi'] = P['bianjietishi']);
                                }
                                if (2 == a['category'] && a.meta) {
                                    var H = cfg['desktop']['matchmode'].get(a.meta['mode_id']);
                                    H && 6 == H.room && (g['bianjietishi'] = !1);
                                }
                                uiscript['UI_MJTask_Progress']['record']();
                            }
                            this['mjp_res_name'] = game['GameUtility']['get_view_res_name'](game['EView'].mjp),
                                this['player_effects'] = [];
                            for (var Z = game['EView']['liqibang'], b = game['EView']['lobby_bg'], L = 0; L < this['player_datas']['length']; L++) {
                                for (var W = this['player_datas'][L]['character'], d = {}, u = Z; b >= u; u++) {
                                    var m = game['GameUtility']['get_view_default_item_id'](u);
                                    d[u] = m;
                                }
                                if (W) {
                                    var N = this['player_datas'][L]['views'],
                                        i = cfg['item_definition']['character'].get(W['charid']);
                                    if (i && (d[game['EView']['hand_model']] = i.hand), N)
                                        for (var O = 0; O < N['length']; O++) {
                                            var q = N[O].slot,
                                                n = N[O]['item_id'];
                                            n && (d[q] = n);
                                        }
                                } else
                                    this['player_datas'][L]['character'] = {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    };
                                this['player_effects'].push(d);
                            }
                            uiscript['UI_DesktopInfo'].Inst['initRoom'](),
                                uiscript['UI_DesktopInfo'].Inst['refreshSeat'](),
                                uiscript['UI_Hangup_Warn'].Inst['enable'] = !1,
                                uiscript['UI_TingPai'].Inst['enable'] = !0,
                                uiscript['UI_HuanSanZhange'].Inst['enable'] = !1,
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst['enable'] = !1,
                                uiscript['UI_Dingque'].Inst['enable'] = !1,
                                this['index_change'] = 0,
                                this['index_ju'] = 0,
                                this['index_ben'] = 0,
                                this['index_player'] = 0,
                                this['index_chuanma_ju'] = 0,
                                this['gameing'] = !0,
                                this['left_tile_count'] = 69,
                                this['duringReconnect'] = !1,
                                this['current_step'] = 0,
                                this['action_index'] = 0,
                                this['dochain_fast'] = !1,
                                this['actionList'] = [],
                                this['setAutoHule'](!1),
                                this['setAutoMoQie'](!1),
                                this['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                this['SetChangJuShow'](this['index_change'], this['index_ju'], this['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](this['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1);
                            for (var L = 0; 4 > L; L++)
                                this['players'][L]['onInitRoom'](this['localPosition2Seat'](L)), this['players'][L]['SetScore'](0, 0), this['players'][L]['trans_ind']['active'] = !1, this['players'][L]['RefreshDir']();
                            if (this['RefreshPaiLeft'](), uiscript['UI_GameEnd'].Inst['forceclose'](), uiscript['UI_RankChange'].Inst['close'](), uiscript['UI_MJReward'].Inst['close'](), Laya['timer']['frameOnce'](6, this, function() {
                                    B['Reset'](),
                                        app.Log.log('场景init结束：' + Laya.Stat['currentMemorySize'] / 1024 / 1024 + ' MB'),
                                        C && C.run();
                                }), this['state_cache'] = {}, uiscript['UI_Activity']['activity_is_running'](uiscript['UI_Activity_DuanWu_Point']['activity_id']) && (this['state_cache']['duanwu_point'] = uiscript['UI_Activity_DuanWu_Point']['point'], this['state_cache']['duanwu_rank'] = uiscript['UI_Activity_DuanWu_Rank']['point']), this['is_muyu_mode']()) {
                                var T = 'scene/effect_muyu_' + GameMgr['client_language'] + '.lh';
                                this['muyu_effect'] = new game['EffectBase'](T),
                                    this['muyu_effect'].root['active'] = !1,
                                    this['trans_container_effect']['addChild'](this['muyu_effect'].root);
                            }
                        },
                        g['prototype']['changeMainbody'] = function(l) {
                            if (this.mode != z.play && this['gameing']) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({ 'change_seat_to': l }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'change_seat_to': l }));
                                    }
                                }));
                                this.seat = l,
                                    uiscript['UI_DesktopInfo'].Inst['refreshSeat'](!0);
                                for (var a = 0; 4 > a; a++)
                                    this['players'][a]['onInitRoom'](this['localPosition2Seat'](a)), this['players'][a]['trans_ind']['active'] = !1, this['players'][a]['RefreshDir']();
                                this['Reset'](),
                                    this.mode == z['paipu'] && uiscript['UI_Replay'].Inst['onChangeMainBody'](),
                                    this.mode == z['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['onChangeMainbody'](),
                                    this.mode == z['live_broadcast'] && uiscript['UI_Live_Broadcast1'].Inst['onChangeMainbody']();
                            }
                        },
                        g['prototype']['trySyncGame'] = function() {
                            var l = this;
                            this['Reset'](),
                                this['duringReconnect'] = !0,
                                this['hangupCount'] = 0,
                                app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                    round_id: this['round_id'],
                                    step: 0
                                }, function(a, U) {
                                    a || U['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', a, U), game['Scene_MJ'].Inst['ForceOut']()) : (app.Log.log('[syncGame2] ' + JSON['stringify'](U)), U['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2229)), game['Scene_MJ'].Inst['GameEnd']()) : (l['fetchLinks'](), l['Reset'](), l['duringReconnect'] = !0, l['syncGameByStep'](U['game_restore'])));
                                });
                        },
                        g['prototype']['syncGameByStep'] = function(a) {
                            var U = this,
                                z = !1;
                            if (this['timestoped'] = !1, this['handles_after_timerun'] = [], this['action_running'] = !1, uiscript['UI_GameStop'].Inst['close'](), this['hangupCount'] = 0, uiscript['UI_Hangup_Warn'].Inst['enable'] = !1, a && 5 === a['game_state'] && (this['timestoped'] = !0), GameMgr.Inst['EnterMJ'](), a && a['actions'] && a['actions']['length'] > 0) {
                                var actions = [];
                                for (var idx = 0; idx < a.actions.length; idx++) {
                                    var rawAction = a.actions[idx];
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
                                this['actionList'] = [];
                                var M = -1;
                                null != a['passed_waiting_time'] && void 0 != a['passed_waiting_time'] && (M = 1000 * a['passed_waiting_time']);
                                for (var R = 0; R < a['actions']['length']; R++) {
                                    var E = a['actions'][R],
                                        C = R == a['actions']['length'] - 1 ? M : -1,
                                        B = net['ProtobufManager']['lookupType']('lq.' + E.name);
                                    if (!B)
                                        throw new Error('ERR_CANNOT_FIND_MESSAGE_TYPE, lq.' + E.name);
                                    var w = B['decode'](E.data);
                                    this['current_step'] = E.step;
                                    try {
                                        switch (E.name) {
                                            case 'ActionNewRound':
                                                l['ActionNewRound']['fastplay'](w, C);
                                                break;
                                            case 'ActionChangeTile':
                                                l['ActionChangeTile']['fastplay'](w, C);
                                                break;
                                            case 'ActionDiscardTile':
                                                l['ActionDiscardTile']['fastplay'](w, C);
                                                break;
                                            case 'ActionDealTile':
                                                l['ActionDealTile']['fastplay'](w, C);
                                                break;
                                            case 'ActionChiPengGang':
                                                l['ActionChiPengGang']['fastplay'](w, C);
                                                break;
                                            case 'ActionAnGangAddGang':
                                                l['ActionAnGangAddGang']['fastplay'](w, C);
                                                break;
                                            case 'ActionHule':
                                                l['ActionHule']['fastplay'](w, C),
                                                    z = !0;
                                                break;
                                            case 'ActionHuleXueZhanMid':
                                                l['ActionHuleXueZhanMid']['fastplay'](w, C),
                                                    z = !0;
                                                break;
                                            case 'ActionHuleXueZhanEnd':
                                                l['ActionHuleXueZhanEnd']['fastplay'](w, C),
                                                    z = !0;
                                                break;
                                            case 'ActionLiuJu':
                                                l['ActionLiuJu']['fastplay'](w, C),
                                                    z = !0;
                                                break;
                                            case 'ActionNoTile':
                                                l['ActionNoTile']['fastplay'](w, C),
                                                    z = !0;
                                                break;
                                            case 'ActionBaBei':
                                                l['ActionBabei']['fastplay'](w, C);
                                                break;
                                            case 'ActionSelectGap':
                                                l['ActionSelectGap']['fastplay'](w, C);
                                                break;
                                            case 'ActionGangResult':
                                                l['ActionGangResult']['fastplay'](w, C);
                                                break;
                                            case 'ActionGangResultEnd':
                                                l['ActionGangResultEnd']['fastplay'](w, C);
                                                break;
                                            case 'ActionLockTile':
                                                l['ActionLockTile']['fastplay'](w, C);
                                                break;
                                            case 'ActionRevealTile':
                                                l['ActionRevealTile']['fastplay'](w, C);
                                                break;
                                            case 'ActionUnveilTile':
                                                l['ActionUnveilTile']['fastplay'](w, C);
                                                break;
                                            case 'ActionNewCard':
                                                l['ActionNewCard']['fastplay'](w, C);
                                                break;
                                            case 'ActionFillAwaitingTiles':
                                                l['ActionFillAwaitingTiles']['fastplay'](w, C);
                                        }
                                    } catch (L) {
                                        var c = {};
                                        c['error'] = L['message'],
                                            c['stack'] = L['stack'],
                                            c['method'] = 'syncGameByStep',
                                            c.name = E.name,
                                            c.data = E,
                                            c.step = R,
                                            GameMgr.Inst['onFatalError'](c);
                                        break;
                                    }
                                }
                                Laya['timer'].once(1000, this, function() {
                                    U['duringReconnect'] = !1,
                                        uiscript['UI_Loading'].Inst['close'](),
                                        z || l['BgmListMgr']['PlayMJBgm'](),
                                        U['DoChainAction']();
                                });
                            } else
                                this['duringReconnect'] = !1, this['timestoped'] ? this['handles_after_timerun'].push(Laya['Handler']['create'](this, function() {
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                })) : app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                            app.Log.log('finishSyncGame11'),
                                app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {}),
                                g.Inst['fetchLinks'](),
                                this['timestoped'] && uiscript['UI_GameStop'].Inst.show();
                        },
                        g['prototype']['setGameStop'] = function(l) {
                            if (l != this['timestoped'])
                                if (this['timestoped'] = l, this['timestoped'])
                                    this['handles_after_timerun'] = [], uiscript['UI_GameStop'].Inst.show();
                                else {
                                    if (uiscript['UI_GameStop'].Inst['close'](), this['handles_after_timerun'])
                                        for (var a = 0; a < this['handles_after_timerun']['length']; a++)
                                            this['handles_after_timerun'][a].run();
                                    this['handles_after_timerun'] = [],
                                        this['hangupCount'] = 0;
                                }
                        },
                        g['prototype']['CreatePai3D'] = function(l) {
                            var a = this['desktop3D']['getChildByName']('all')['getChildByName']('mjp')['getChildByName'](l['touming'] ? 'touming' : l['toString']())['clone'](),
                                U = this['desktop3D']['getChildByName']('all')['getChildByName']('maque_outline')['clone'](),
                                z = a,
                                M = (new caps['BaseMaterial'](caps['Cartoon']['filename']), 'scene/Assets/Resource/mjpai/');
                            if (l['touming']) {
                                var R = new caps['Material_TouMingPai'](caps['TouMingPai']['filename']),
                                    E = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (E += 'en_kr/'),
                                E += g['en_mjp'] ? 'toumingpai_0/mjp.png' : 'toumingpai/mjp.png',
                                    R['setTexture'](caps['TouMingPai']['TEXTURE'], Laya['loader']['getRes'](E)),
                                    z['meshRender']['sharedMaterial'] = R;
                            } else {
                                var C = new caps['BaseMaterial'](caps['Cartoon']['filename']),
                                    B = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (B += 'en_kr/'),
                                B += this['mjp_res_name'] + '/mjp.png',
                                    C['setTexture'](caps['Cartoon']['TEXTURE'], Laya['loader']['getRes'](B)),
                                    C['setNumber'](caps['Cartoon']['SPLIT'], 0.4),
                                    C['setColor'](caps['Cartoon']['COLOR_LIGHT'], new Laya['Vector3'](1, 1, 1)),
                                    C['setColor'](caps['Cartoon']['COLOR_UNLIGHT'], new Laya['Vector3'](0.788, 0.788, '0.8235')),
                                    C['setColor'](caps['Cartoon']['COLOR'], new Laya['Vector3'](1, 1, 1)),
                                    z['meshRender']['sharedMaterial'] = C;
                            }
                            var w = U;
                            a['addChild'](w),
                                w['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0),
                                w['transform']['localScale'] = new Laya['Vector3'](1, 1, 1),
                                w['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0);
                            var L = w,
                                c = new caps['Material_Outline'](caps['Outline']['filename']);
                            c['renderQueue'] = 2999,
                                c['setColor'](caps['Outline']['OUTLINE_COLOR'], new Laya['Vector3'](0.165, 0.192, 0.204)),
                                c['setNumber'](caps['Outline']['OUTLINE_ALPHA'], 0.6),
                                c['setNumber'](caps['Outline']['OUTLINE'], '0.0012'),
                                L['meshRender']['sharedMaterial'] = c;
                            var h = new Laya['Sprite3D']();
                            if (h.name = 'effect', h['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0), h['transform']['localScale'] = new Laya['Vector3'](1, 1, 1), h['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0), a['addChild'](h), l['touming']) {
                                var x = this['desktop3D']['getChildByName']('all')['getChildByName']('touming')['clone']();
                                x.name = 'touming',
                                    a['addChild'](x),
                                    x['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0.00001),
                                    x['transform']['localScale'] = new Laya['Vector3'](1, 1, 1),
                                    x['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0);
                                var O = new caps['Material_TwoSided'](caps['TwoSided']['filename']),
                                    _ = 0;
                                switch (l.type) {
                                    case mjcore['E_MJPai'].m:
                                        _ = 0;
                                        break;
                                    case mjcore['E_MJPai'].p:
                                        _ = 10;
                                        break;
                                    case mjcore['E_MJPai'].s:
                                        _ = 20;
                                        break;
                                    default:
                                        _ = 29;
                                }
                                l.dora || (_ += l['index']);
                                var p = (6 + _ % 7 * 104) / 1024,
                                    N = (6 + 144 * Math['floor'](_ / 7)) / 1024,
                                    M = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (M += 'en_kr/'),
                                M += g['en_mjp'] ? 'toumingpai_0/mjp.png' : 'toumingpai/mjp.png',
                                    O['setTexture'](caps['TwoSided']['TEXTURE'], Laya['loader']['getRes'](M)),
                                    O['setColor'](caps['TwoSided']['COLOR'], new Laya['Vector3'](1, 1, 1)),
                                    O['setNumber'](caps['TwoSided']['OFFSET_X'], p),
                                    O['setNumber'](caps['TwoSided']['OFFSET_Y'], N),
                                    O['renderQueue'] = 3000,
                                    x['getChildByName']('twosided')['meshRender']['sharedMaterial'] = O,
                                    x['getChildByName']('touying')['getChildByName']('pai')['meshRender']['sharedMaterial'] = O,
                                    x['getChildByName']('touying')['getChildByName']('bg')['meshRender']['sharedMaterial']['renderQueue'] = 2998;
                            }
                            return a;
                        },
                        g['prototype']['RefreshPlayerIndicator'] = function() {
                            for (var l = 0; 4 > l; l++)
                                this['players'][l]['trans_ind']['active'] = l == this['seat2LocalPosition'](this['index_player']), this['players'][l]['RefreshScore'](this['mainrole']['score']);
                        },
                        g['prototype']['setAutoHule'] = function(l) {
                            this['auto_hule'] = l,
                                this['_PendingAuto'](!0);
                        },
                        g['prototype']['setAutoNoFulu'] = function(l) {
                            this['auto_nofulu'] = l,
                                this['_PendingAuto'](!0);
                        },
                        g['prototype']['setAutoMoQie'] = function(l) {
                            this['auto_moqie'] = l,
                                this['_PendingAuto'](!0);
                        },
                        g['prototype']['setAutoLiPai'] = function(l) {
                            this['auto_liqi'] = l,
                                l && this['gameing'] && this['mainrole'] && this['mainrole']['LiPai'](!1, !1, !0);
                        },
                        g['prototype']['setScoreDelta'] = function(l) {
                            for (var a = 1; 4 > a; a++)
                                this['players'][a]['duringShowDetla'] = l, this['players'][a]['RefreshScore'](this['mainrole']['score']);
                        },
                        g['prototype']['SetChangJuShow'] = function(l, a, U) {
                            if (this['is_chuanma_mode']()) {
                                var z = new Laya['Vector4']('0.1666', 1, 0, 0);
                                'en' == GameMgr['client_language'] && (z = new Laya['Vector4'](1, 0.2, 0, -0.8)),
                                    this['plane_chang']['meshRender']['material']['tilingOffset'] = z;
                                var M = new Laya['Vector4'](0.1, 1, 0.1 * U, 0);
                                this['plane_ju']['meshRender']['material']['tilingOffset'] = M;
                            } else {
                                var z = new Laya['Vector4'](0.166, 1, 0.166 + l % 4 * 0.166, 0);
                                'en' == GameMgr['client_language'] && (z = new Laya['Vector4'](1, 0.2, 0, 0.2 * (l % 4 - 3))),
                                    this['plane_chang']['meshRender']['material']['tilingOffset'] = z,
                                    this['plane_chang_reveal']['meshRender']['material']['tilingOffset'] = z;
                                var M = new Laya['Vector4'](0.1, 1, 0.1 * a, 0);
                                this['plane_ju']['meshRender']['material']['tilingOffset'] = M,
                                    this['plane_ju_reveal']['meshRender']['material']['tilingOffset'] = M;
                            }
                        },
                        g['prototype']['SetLeftPaiShow'] = function(l) {
                            l >= 100 ? l = 99 : 0 > l && (l = 0);
                            for (var a = [l % 10, Math['floor'](l / 10)], U = 0; U < a['length']; U++) {
                                var z = new Laya['Vector4'](0.1, 1, 0.1 * a[U], 0);
                                this['num_left_show'][U]['meshRender']['material']['tilingOffset'] = z,
                                    this['num_left_show_reveal'][U]['meshRender']['material']['tilingOffset'] = z;
                            }
                        },
                        g['prototype']['RefreshPaiLeft'] = function() {
                            this['SetLeftPaiShow'](this['left_tile_count']);
                        },
                        g['prototype']['Reset'] = function() {
                            app.Log.log('DesktopMgr.Reset'),
                                this['operation_showing'] = !1,
                                this['oplist'] = [],
                                Laya['timer']['clearAll'](l['ActionAnGangAddGang']),
                                Laya['timer']['clearAll'](l['ActionChiPengGang']),
                                Laya['timer']['clearAll'](l['ActionDealTile']),
                                Laya['timer']['clearAll'](l['ActionDiscardTile']),
                                Laya['timer']['clearAll'](l['ActionHule']),
                                Laya['timer']['clearAll'](l['ActionHuleXueZhanEnd']),
                                Laya['timer']['clearAll'](l['ActionHuleXueZhanMid']),
                                Laya['timer']['clearAll'](l['ActionLiqi']),
                                Laya['timer']['clearAll'](l['ActionLiuJu']),
                                Laya['timer']['clearAll'](l['ActionNewRound']),
                                Laya['timer']['clearAll'](l['ActionNoTile']),
                                Laya['timer']['clearAll'](l['ActionOperation']),
                                Laya['timer']['clearAll'](l['ActionChangeTile']),
                                Laya['timer']['clearAll'](l['ActionSelectGap']),
                                Laya['timer']['clearAll'](l['ActionGangResult']),
                                Laya['timer']['clearAll'](l['ActionGangResultEnd']),
                                Laya['timer']['clearAll'](l['ActionRevealTile']),
                                Laya['timer']['clearAll'](l['ActionUnveilTile']),
                                Laya['timer']['clearAll'](l['ActionLockTile']),
                                Laya['timer']['clearAll'](l['ActionNewCard']),
                                Laya['timer']['clearAll'](l['ActionFillAwaitingTiles']),
                                Laya['timer']['clearAll'](this),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                this['effect_pai_canchi'] && (this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                            for (var a = 0; 4 > a; a++)
                                this['players'][a]['Reset']();
                            this['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                this.md5 = '',
                                this['current_step'] = -1,
                                this['muyu_info'] = null,
                                this['muyu_effect'] && (this['muyu_effect'].root['active'] = !1, Laya['timer']['clearAll'](this['muyu_effect'])),
                                this['mind_voice_seat'] = -1,
                                this['mind_voice_type'] = '',
                                this['during_playing_mind_voice'] = !1;
                        },
                        g['prototype']['setScores'] = function(a) {
                            for (var U = 0; U < a['length']; U++)
                                this['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['SetScore'](a[U], a[this.seat]);
                        },
                        g['prototype']['_PendingAuto'] = function(a) {
                            if (void 0 === a && (a = !1), null == this['oplist'] || 0 == this['oplist']['length'])
                                return !1;
                            try {
                                var U = !1,
                                    z = !1,
                                    M = !1,
                                    g = !1,
                                    R = !1,
                                    E = !1,
                                    C = !1,
                                    B = !1,
                                    w = this['operation_showing'];
                                this['operation_showing'] = !0;
                                var L = null,
                                    c = 0;
                                this['liqi_select'] = [];
                                for (var h = !0, x = 0; x < this['oplist']['length']; x++) {
                                    var O = this['oplist'][x],
                                        _ = O.type;
                                    switch (_) {
                                        case mjcore['E_PlayOperation'].eat:
                                        case mjcore['E_PlayOperation'].peng:
                                        case mjcore['E_PlayOperation']['ming_gang']:
                                        case mjcore['E_PlayOperation'].rong:
                                        case mjcore['E_PlayOperation']['unveil']:
                                            U = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['an_gang']:
                                        case mjcore['E_PlayOperation']['add_gang']:
                                        case mjcore['E_PlayOperation'].liqi:
                                        case mjcore['E_PlayOperation'].zimo:
                                        case mjcore['E_PlayOperation']['babei']:
                                        case mjcore['E_PlayOperation']['revealliqi']:
                                        case mjcore['E_PlayOperation']['reveal']:
                                        case mjcore['E_PlayOperation']['locktile']:
                                            z = !0;
                                        case mjcore['E_PlayOperation']['jiuzhongjiupai']:
                                            z = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['huansanzhang']:
                                            M = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['dingque']:
                                            g = !0,
                                                c = O['gap_type'];
                                            break;
                                        case mjcore['E_PlayOperation']['selecttile']:
                                            R = !0;
                                    }
                                    if (_ == mjcore['E_PlayOperation']['dapai'])
                                        B = !0, L = this['oplist'][x]['combination'];
                                    else if (_ == mjcore['E_PlayOperation'].liqi) {
                                        B = !0,
                                            this['liqi_select'] = [];
                                        for (var p = 0; p < this['oplist'][x]['combination']['length']; p++)
                                            this['liqi_select'].push(mjcore['MJPai']['Create'](this['oplist'][x]['combination'][p]));
                                    } else
                                        _ == mjcore['E_PlayOperation'].rong ? E = !0 : _ == mjcore['E_PlayOperation'].zimo ? C = !0 : _ == mjcore['E_PlayOperation']['huansanzhang'] && (a || l['DesktopMgr'].Inst['mainrole']['setHuanSanZhangDefaultTile'](O['change_tiles'], O['change_tile_states']));
                                    _ != mjcore['E_PlayOperation']['dapai'] && _ != mjcore['E_PlayOperation']['reveal'] && (h = !1);
                                }
                                var N = this['auto_hule'],
                                    n = this['auto_nofulu'],
                                    P = this['auto_moqie'];
                                if (this['anpai'] && h && P) {
                                    if (this['mainrole']['trans_liqi']['active'])
                                        return app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            cancel_operation: !0
                                        }, function() {}), void 0;
                                    if (null != this['mainrole']['last_tile'])
                                        return this['Action_QiPai'](this['mainrole']['last_tile'].val, !0, !0, this['mainrole']['last_tile']['is_open']), !1;
                                }
                                if (N && (E || C))
                                    return Laya['timer'].once(800, this, function() {
                                        E ? app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            type: mjcore['E_PlayOperation'].rong,
                                            index: 0
                                        }, function() {}) : C && app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                            type: mjcore['E_PlayOperation'].zimo,
                                            index: 0
                                        }, function() {});
                                    }), this['ClearOperationShow'](), !1;
                                if (g)
                                    uiscript['UI_Dingque'].Inst.show(c);
                                else if (M)
                                    a || uiscript['UI_HuanSanZhange'].Inst.show();
                                else if (U) {
                                    if (n && !E && !C)
                                        return app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            cancel_operation: !0
                                        }, function() {}), this['ClearOperationShow'](), !1;
                                    w || uiscript['UIMgr'].Inst['ShowChipenghu'](this['oplist']);
                                } else if (z && (w || uiscript['UIMgr'].Inst['ShowLiqiZimo'](this['oplist'])), B) {
                                    if (P && !uiscript['UI_LiQiZiMo'].Inst['enable'] && null != this['mainrole']['last_tile'])
                                        return this['Action_QiPai'](this['mainrole']['last_tile'].val, !0, !0, this['mainrole']['last_tile']['is_open']), !1;
                                    if (!w && (this['mainrole']['can_discard'] = !0, L && L['length'] > 0)) {
                                        for (var H = [], x = 0; x < L['length']; x++)
                                            H.push(mjcore['MJPai']['Create'](L[x]));
                                        this['mainrole']['ChiTiSelect'](H);
                                    }
                                } else
                                    this['mainrole']['can_discard'] = !1;
                                if (R) {
                                    if (P)
                                        return uiscript['UI_Astrology'].Inst['selectTile'](0), !1;
                                    w || uiscript['UI_Astrology'].Inst['showSelections']();
                                }
                            } catch (Z) {
                                var b = {};
                                b['error'] = Z['message'],
                                    b['stack'] = Z['stack'],
                                    b['method'] = '_PendingAuto',
                                    b.name = 'DesktopMgr',
                                    GameMgr.Inst['onFatalError'](b);
                            }
                            return !0;
                        },
                        g['prototype']['OperationTimeOut'] = function() {
                            if (null != this['oplist'] && 0 != this['oplist']['length']) {
                                {
                                    var l = !1,
                                        a = !1,
                                        U = !1,
                                        z = !1,
                                        M = !1;
                                    this['operation_showing'];
                                }
                                this['operation_showing'] = !0;
                                for (var g = null, R = 0; R < this['oplist']['length']; R++) {
                                    switch (this['oplist'][R].type) {
                                        case mjcore['E_PlayOperation'].eat:
                                        case mjcore['E_PlayOperation'].peng:
                                        case mjcore['E_PlayOperation']['ming_gang']:
                                        case mjcore['E_PlayOperation'].rong:
                                            l = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['an_gang']:
                                        case mjcore['E_PlayOperation']['add_gang']:
                                        case mjcore['E_PlayOperation'].liqi:
                                        case mjcore['E_PlayOperation'].zimo:
                                        case mjcore['E_PlayOperation']['babei']:
                                            a = !0;
                                    }
                                    (this['oplist'][R].type == mjcore['E_PlayOperation']['dapai'] || this['oplist'][R].type == mjcore['E_PlayOperation'].liqi) && (M = !0, this['oplist'][R].type == mjcore['E_PlayOperation']['dapai'] && (g = this['oplist'][R]['combination'])),
                                    this['oplist'][R].type == mjcore['E_PlayOperation'].rong && (U = !0),
                                        this['oplist'][R].type == mjcore['E_PlayOperation'].zimo && (z = !0);
                                }
                                if (l)
                                    U ? app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                        type: mjcore['E_PlayOperation'].rong,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {}) : app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this['ClearOperationShow']();
                                else if (z)
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                        type: mjcore['E_PlayOperation'].zimo,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {});
                                else if (M)
                                    if (this['mainrole']['during_liqi']) {
                                        for (var E = -1, R = 0; R < this['mainrole'].hand['length']; R++)
                                            if (this['mainrole'].hand[R]['valid']) {
                                                E = R;
                                                break;
                                            }
                                        this['Action_LiQi'](this['mainrole'].hand[E].val, this['mainrole'].hand[E] === this['mainrole']['last_tile'], this['mainrole'].hand[E]['is_open']);
                                    } else {
                                        var C = null,
                                            B = !1,
                                            w = !1;
                                        if (null == C && this['mainrole']['last_tile'] && this['mainrole']['last_tile']['valid'] && (C = this['mainrole']['last_tile'].val, B = !0, w = this['mainrole']['last_tile']['is_open']), null == C)
                                            for (var R = this['mainrole'].hand['length'] - 1; R >= 0; R--)
                                                if (this['mainrole'].hand[R]['valid']) {
                                                    C = this['mainrole'].hand[R].val,
                                                        B = !1,
                                                        w = this['mainrole'].hand[R]['is_open'];
                                                    break;
                                                }
                                        this['Action_QiPai'](C, B, !0, w);
                                    }
                                else
                                    a && (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this['ClearOperationShow']());
                            }
                        },
                        g['prototype']['WhenDoOperation'] = function() {
                            this['hangupCount'] = 0,
                                this['ClearOperationShow']();
                        },
                        g['prototype']['ClearOperationShow'] = function() {
                            this['operation_showing'] = !1,
                                this['oplist'] = [],
                                uiscript['UI_Huleshow'].Inst['enable'] = !1,
                                uiscript['UIMgr'].Inst['CloseLiuJu'](),
                                uiscript['UIMgr'].Inst['CloseWin'](),
                                uiscript['UIMgr'].Inst['CloseChipenghu'](),
                                uiscript['UIMgr'].Inst['CloseLiqiZimo'](),
                                uiscript['UI_Hu_Xuezhan'].Inst['enable'] = !1,
                                Laya['timer']['clearAll'](l['ActionOperation']),
                                uiscript['UI_ScoreChange'].Inst['enable'] = !1,
                                this['mainrole']['can_discard'] = !1,
                                uiscript['UI_DesktopInfo'].Inst['closeCountDown']();
                        },
                        g['prototype']['WhenLiqiInfo'] = function(l) {
                            var a = this;
                            l && Laya['timer'].once(300, this, function() {
                                var U = l.seat,
                                    z = l['score'];
                                a['players'][a['seat2LocalPosition'](U)]['ShowLiqi'](),
                                    a['players'][a['seat2LocalPosition'](U)]['SetScore'](z, a['mainrole']['score']),
                                    uiscript['UI_DesktopInfo'].Inst['setLiqibang'](l['liqibang']);
                            });
                        },
                        g['prototype']['WhenDoras'] = function(a, U) {
                            var z = this;
                            if (!(null == a || void 0 == a || 0 == a['length'] || a['length'] <= this.dora['length']) && a) {
                                for (var M = 0; M < a['length']; M++)
                                    this.dora['length'] > M ? this.dora[M] = mjcore['MJPai']['Create'](a[M]) : this.dora.push(mjcore['MJPai']['Create'](a[M])), uiscript['UI_DesktopInfo'].Inst['setDora'](M, this.dora[M]);
                                Laya['timer']['frameOnce'](1, this, function() {
                                        for (var l = 0; 4 > l; l++)
                                            z['players'][l]['OnDoraRefresh']();
                                    }),
                                    U || l['AudioMgr']['PlayAudio'](215);
                            }
                        },
                        g['prototype']['Action_QiPai'] = function(l, a, U, z) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['dapai'],
                                    tile: l['toString'](),
                                    moqie: a,
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_state: z ? 1 : 0
                                }, function(l) {
                                    l ? app.Log['Error']('Action_QiPai 失败') : app.Log.info('Action_QiPai 成功');
                                }),
                                U ? this['ClearOperationShow']() : this['WhenDoOperation']();
                        },
                        g['prototype']['Action_AnPai'] = function(l, a, U, z) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['reveal'],
                                    tile: l['toString'](),
                                    moqie: a,
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_state: z ? 1 : 0
                                }, function(l) {
                                    l ? app.Log['Error']('Action_AnPai 失败') : app.Log.info('Action_AnPai 成功');
                                }),
                                U ? this['ClearOperationShow']() : this['WhenDoOperation']();
                        },
                        g['prototype']['Action_LiQi'] = function(l, a, U) {
                            if (!this['liqi_select'] || 0 == this['liqi_select']['length'])
                                return !1;
                            for (var z = !1, M = 0; M < this['liqi_select']['length']; M++)
                                if (0 == mjcore['MJPai']['Distance'](this['liqi_select'][M], l)) {
                                    z = !0;
                                    break;
                                }
                            return z ? (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                type: mjcore['E_PlayOperation'].liqi,
                                tile: l['toString'](),
                                moqie: a,
                                timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                tile_state: U ? 1 : 0
                            }, function(l) {
                                l ? app.Log['Error']('Action_LiQi 失败') : app.Log.info('Action_LiQi 成功');
                            }), this['WhenDoOperation'](), !0) : !1;
                        },
                        g['prototype']['Action_AnPaiLiQi'] = function(l, a, U) {
                            if (!this['liqi_select'] || 0 == this['liqi_select']['length'])
                                return !1;
                            for (var z = !1, M = 0; M < this['liqi_select']['length']; M++)
                                if (0 == mjcore['MJPai']['Distance'](this['liqi_select'][M], l)) {
                                    z = !0;
                                    break;
                                }
                            return z ? (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                type: mjcore['E_PlayOperation']['revealliqi'],
                                tile: l['toString'](),
                                moqie: a,
                                timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                tile_state: U ? 1 : 0
                            }, function(l) {
                                l ? app.Log['Error']('Action_LiQi 失败') : app.Log.info('Action_LiQi 成功');
                            }), this['WhenDoOperation'](), !0) : !1;
                        },
                        g['prototype']['Action_HuanSanZhange'] = function(l, a) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['huansanzhang'],
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_states: a,
                                    change_tiles: l
                                }, function(l) {
                                    l ? app.Log['Error']('Action_HuanSanZhange 失败') : app.Log.info('Action_HuanSanZhange 成功');
                                }),
                                this['WhenDoOperation']();
                        },
                        g['prototype']['SetLastQiPai'] = function(l, a) {
                            this['lastqipai'] = a,
                                this['lastpai_seat'] = l,
                                this['effect_pai_canchi'] && (this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                        },
                        g['prototype']['ShowHuleEffect'] = function(a, U, z, M, g) {
                            var R = this;
                            if (void 0 === g && (g = 0), null != a) {
                                U.y = 0;
                                var E = 'scene/effect_hupai_default.lh',
                                    C = 213;
                                if (z) {
                                    var B = cfg['item_definition'].view.get(z);
                                    B && (E = 'scene/' + B['res_name'] + '.lh', C = B['audio_id']);
                                }
                                var w = new game['EffectBase'](E);
                                if (this['trans_container_effect']['addChild'](w.root), w.root['transform']['position'] = U, w.root['active'] = !0, 'scene/ron_hl.lh' == E) {
                                    var L = this['seat2LocalPosition'](M);
                                    w.root['transform']['localRotationEuler'] = 0 == L ? new Laya['Vector3'](0, 0, 0) : 1 == L ? new Laya['Vector3'](0, 90, 0) : 2 == L ? new Laya['Vector3'](0, 180, 0) : new Laya['Vector3'](0, 270, 0);
                                } else if ('scene/effect_hupai_yanhua.lh' == E)
                                    Laya['timer'].once(600, this, function() {
                                        var l = new game['EffectBase']('scene/effect_hupai_yanhua_bang.lh');
                                        R['desktop3D']['addChild'](l.root),
                                            l.root['transform']['position'] = new Laya['Vector3'](0, 0, 0),
                                            l.root['active'] = !0,
                                            Laya['timer'].once(2000, R, function() {
                                                l['destroy']();
                                            });
                                    });
                                else if ('scene/ron_22chunjie.lh' == E) {
                                    var c = new game['EffectBase']('scene/ron_22chunjie_hongdi.lh');
                                    this['desktop3D']['addChild'](c.root),
                                        c['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                            for (var l = game['Tools']['GetNodeByNameInChildren'](c.root, 'hongdi'), a = 0, U = l['_childs']; a < U['length']; a++) {
                                                var z = U[a];
                                                z['particleRender']['material']['renderQueue'] = 3001;
                                            }
                                        })),
                                        c.root['transform']['position'] = new Laya['Vector3'](0, 0, 0),
                                        c.root['active'] = !0,
                                        Laya['timer'].once(3000, this, function() {
                                            c['destroy']();
                                        });
                                }
                                var h = !1,
                                    x = a['model']['parent'],
                                    O = a['model']['transform']['rotation']['clone'](),
                                    _ = a['model']['transform']['worldMatrix']['clone']();
                                w['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                    if (!h) {
                                        l['AudioMgr']['PlayAudio'](C);
                                        var U = game['Tools']['GetNodeByNameInChildren'](w.root, 'pai');
                                        U && 1 == g && (U['destroyChildren'](), U['addChild'](a['model']), a['model']['transform']['rotation'] = O['clone'](), a['model']['transform']['worldMatrix'] = _['clone'](), Laya['timer'].once(1800, R, function() {
                                            h || (x['addChild'](a['model']), a['model']['transform']['rotation'] = O['clone'](), a['model']['transform']['worldMatrix'] = _['clone']());
                                        }));
                                        var z = game['Tools']['GetNodeByNameInChildren'](w.root, 'pai_anim');
                                        !z || 1 != g && 0 != g || (z['destroyChildren'](), z['addChild'](a['model']), a['model']['transform']['rotation'] = O['clone'](), a['model']['transform']['worldMatrix'] = _['clone'](), Laya['timer'].once(1800, R, function() {
                                                h || (x['addChild'](a['model']), a['model']['transform']['rotation'] = O['clone'](), a['model']['transform']['worldMatrix'] = _['clone']());
                                            })),
                                            R['setSpecialHuleEffect'](E, w, a);
                                    }
                                }));
                                var p = 2000;
                                'scene/ron_xiyuansi.lh' == E || 'scene/ron_beiyuan.lh' == E ? p = 4600 : 'scene/ron_22chunjie.lh' == E ? p = 3000 : 'scene/ron_2211saki.lh' == E && (p = 3000),
                                    Laya['timer'].once(p, this, function() {
                                        h = !0,
                                            a && a['model'] && a['model']['transform'] && ('scene/ron_xiyuansi.lh' == E && (a['model']['getChildAt'](0)['getChildAt'](0) ? (a['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 2000, a['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3001) : a['model']['meshRender'] && (a['model']['meshRender']['sharedMaterial']['renderQueue'] = 2000, a['model']['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3001)), x['addChild'](a['model']), a['model']['transform']['rotation'] = O['clone'](), a['model']['transform']['worldMatrix'] = _['clone']()),
                                            w['destroy']();
                                    });
                            }
                        },
                        g['prototype']['setSpecialHuleEffect'] = function(l, a, U) {
                            if ('scene/ron_akagi.lh' == l) {
                                var z = game['Tools']['GetNodeByNameInChildren'](a.root, 'heidi');
                                z['transform']['position'] = new Laya['Vector3'](0, 0.101, 0.718);
                            }
                            if ('scene/ron_22summer.lh' == l) {
                                var M = game['Tools']['GetNodeByNameInChildren'](a.root, 'ya02');
                                M['meshRender']['material']['depthWrite'] = !0,
                                    M['meshRender']['material']['depthTest'] = 0,
                                    M['meshRender']['material']['renderQueue'] = 3005,
                                    M['meshRender']['material']['disableLight']();
                            }
                            if ('scene/ron_beiyuan.lh' == l) {
                                var g = game['Tools']['GetNodeByNameInChildren'](a.root, 'global');
                                g['transform']['rotation'] = new Laya['Quaternion'](0, 0, 0, 1),
                                    g['transform']['position'] = new Laya['Vector3'](0, 0, 0);
                                var R = game['Tools']['GetNodeByNameInChildren'](a.root, 'plane1X1');
                                R['meshRender']['material']['disableLight'](),
                                    R['meshRender']['material']['renderQueue'] = 3002;
                                var E = game['Tools']['GetNodeByNameInChildren'](a.root, 'shiziguang02');
                                E['particleRender']['material']['depthTest'] = 0,
                                    E['particleRender']['material']['renderQueue'] = 3003;
                                for (var C = 0; C < E['_childs']['length']; C++)
                                    E['getChildAt'](C)['particleRender']['material']['depthTest'] = 0, E['getChildAt'](C)['particleRender']['material']['renderQueue'] = 3003;
                                var B = game['Tools']['GetNodeByNameInChildren'](a.root, 'suipian');
                                B['particleRender']['material']['depthTest'] = 0,
                                    B['particleRender']['material']['renderQueue'] = 3003,
                                    B = game['Tools']['GetNodeByNameInChildren'](a.root, 'xuehua01'),
                                    B['particleRender']['material']['depthTest'] = 0,
                                    B['particleRender']['material']['renderQueue'] = 3003,
                                    B = game['Tools']['GetNodeByNameInChildren'](a.root, 'xuehua02'),
                                    B['particleRender']['material']['depthTest'] = 0,
                                    B['particleRender']['material']['renderQueue'] = 3003,
                                    B = game['Tools']['GetNodeByNameInChildren'](a.root, 'suipian01'),
                                    B['particleRender']['material']['depthTest'] = 0,
                                    B['particleRender']['material']['renderQueue'] = 3003;
                            }
                            if ('scene/ron_xiyuansi.lh' == l) {
                                Laya['timer'].once(1800, this, function() {
                                    U['model']['getChildAt'](0)['getChildAt'](0) ? (U['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3003, U['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3004) : U['model']['meshRender'] && (U['model']['meshRender']['sharedMaterial']['renderQueue'] = 3003, U['model']['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3004);
                                });
                                var R = game['Tools']['GetNodeByNameInChildren'](a.root, 'plane1X1');
                                R['meshRender']['material']['disableLight'](),
                                    R['meshRender']['material']['renderQueue'] = 3002;
                                var w = game['LoadMgr']['getResImage']('extendRes/charactor/xiyuansiyiyu_0/full.png');
                                w && w['active'](),
                                    R['meshRender']['material']['diffuseTexture'] = Laya['Texture2D'].load(game['LoadMgr']['getResImageSkin']('extendRes/charactor/xiyuansiyiyu_0/full.png'));
                                for (var L = game['Tools']['GetNodeByNameInChildren'](a.root, 'lizi'), C = 0; C < L['numChildren']; C++)
                                    L['getChildAt'](C)['particleRender']['material']['renderQueue'] = 3002, L['getChildAt'](C)['particleRender']['material']['depthTest'] = 0;
                                var g = game['Tools']['GetNodeByNameInChildren'](a.root, 'global');
                                g['transform']['rotation'] = new Laya['Quaternion'](0, 0, 0, 1),
                                    g['transform']['position'] = new Laya['Vector3'](0, 0, 0);
                                for (var C = 0; 3 > C; C++)
                                    g['getChildByName']('heidi01')['getChildAt'](C)['particleRender']['material']['renderQueue'] = 3002;
                                for (var C = 0; 3 > C; C++)
                                    g['getChildByName']('daoguang')['getChildByName']('lizi')['getChildAt'](C)['particleRender']['material']['renderQueue'] = 3002;
                                g['getChildByName']('baodian')['getChildByName']('shiziguang02')['particleRender']['material']['renderQueue'] = 3002;
                                for (var C = 0; 4 > C; C++)
                                    g['getChildByName']('baodian')['getChildByName']('shiziguang02')['getChildAt'](C)['particleRender']['material']['renderQueue'] = 3002;
                                for (var C = 4; 8 > C; C++) {
                                    var c = g['getChildByName']('quxian_amin01')['getChildAt'](C)['meshRender']['material'];
                                    c['renderQueue'] = 3002,
                                        c['disableLight']();
                                }
                            }
                        },
                        g['prototype']['ShowChiPengEffect'] = function() {
                            var a = this;
                            if (this['lastqipai']['model'] && this['lastqipai']['model']['transform']) {
                                this['effect_pai_canchi'] || (this['effect_pai_canchi'] = new game['EffectBase']('scene/' + game['GameUtility']['get_view_res_name'](game['EView']['mingpai_zhishi']) + '.lh'), this['trans_container_effect']['addChild'](this['effect_pai_canchi'].root), this['effect_pai_canchi'].root['active'] = !0),
                                    this['effect_pai_canchi'].root['transform']['worldMatrix'] = this['lastqipai']['model']['transform']['worldMatrix']['clone']();
                                var U = this['effect_pai_canchi'],
                                    z = this['lastqipai'];
                                if (this['lastqipai']['revealState'] == l['ERevealState']['reveal']) {
                                    var M = this['effect_pai_canchi'].root['transform']['localPosition']['clone']();
                                    M.y -= l['PAIMODEL_THICKNESS'],
                                        this['effect_pai_canchi'].root['transform']['localPosition'] = M;
                                }
                                Laya['timer']['frameLoop'](1, this['effect_pai_canchi'], function() {
                                    if (z['model']['activeInHierarchy'] && z['model']['active'] && z['model']['parent']['active']) {
                                        if (U.root['transform']['worldMatrix'] = z['model']['transform']['worldMatrix']['clone'](), z['revealState'] == l['ERevealState']['reveal']) {
                                            var M = U.root['transform']['localPosition']['clone']();
                                            M.y -= l['PAIMODEL_THICKNESS'],
                                                U.root['transform']['localPosition'] = M;
                                        }
                                        a['effect_pai_canchi'].root['active'] = !0;
                                    } else
                                        a['effect_pai_canchi'].root['active'] = !1;
                                });
                            }
                        },
                        g['prototype']['CloseChiPngEffect'] = function() {
                            this['effect_pai_canchi'] && (Laya['timer']['clearAll'](this['effect_pai_canchi']), this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                        },
                        g['prototype']['setChoosedPai'] = function(l) {
                            var a = !1;
                            if (a || !l || this['choosed_pai'] || (a = !0), a || l || !this['choosed_pai'] || (a = !0), !a && l && this['choosed_pai'] && 0 != mjcore['MJPai']['Distance'](this['choosed_pai'], l) && (a = !0), a && (this['choosed_pai'] = l ? l['Clone']() : null, g['bianjietishi'])) {
                                for (var U = 0; 4 > U; U++)
                                    this['players'][U]['OnChoosePai']();
                                uiscript['UI_TingPai'].Inst['onChooseTile'](l);
                            }
                        },
                        g['prototype']['setTingpai'] = function(a, U) {
                            for (var z = !1, M = [], g = 0; g < U['length']; g++)
                                M.push(mjcore['MJPai']['Create'](U[g].tile));
                            this['tingpais'][a]['length'] != M['length'] && (z = !0);
                            for (var g = 0; g < M['length'] && !z; g++)
                                0 != mjcore['MJPai']['Distance'](M[g], this['tingpais'][a][g]) && (z = !0);
                            if (z) {
                                this['tingpais'][a] = M;
                                for (var g = 0; g < l['DesktopMgr'].Inst['players']['length']; g++) {
                                    var R = this['localPosition2Seat'](g);
                                    if (!(0 > R)) {
                                        for (var E = 0; E < l['DesktopMgr'].Inst['players'][g]['container_qipai'].pais['length']; E++) {
                                            var C = l['DesktopMgr'].Inst['players'][g]['container_qipai'].pais[E];
                                            C['ispaopai'] = this['isPaoPai'](C.val),
                                                C['OnChoosedPai']();
                                        }
                                        for (var E = 0; E < l['DesktopMgr'].Inst['players'][g]['container_ming'].pais['length']; E++) {
                                            var C = l['DesktopMgr'].Inst['players'][g]['container_ming'].pais[E];
                                            C['ispaopai'] = this['isPaoPai'](C.val),
                                                C['OnChoosedPai']();
                                        }
                                        for (var E = 0; E < l['DesktopMgr'].Inst['players'][g]['container_babei'].pais['length']; E++) {
                                            var C = l['DesktopMgr'].Inst['players'][g]['container_babei'].pais[E];
                                            C['ispaopai'] = this['isPaoPai'](C.val),
                                                C['OnChoosedPai']();
                                        }
                                        var C = l['DesktopMgr'].Inst['players'][g]['container_qipai']['last_pai'];
                                        if (C && (C['ispaopai'] = this['isPaoPai'](C.val), C['OnChoosedPai']()), 0 == g)
                                            for (var B = l['DesktopMgr'].Inst['players'][g], E = 0; E < B.hand['length']; E++) {
                                                var C = B.hand[E];
                                                C['ispaopai'] = this['isPaoPai'](C.val),
                                                    C['OnChoosedPai']();
                                            }
                                        else
                                            for (var B = l['DesktopMgr'].Inst['players'][g], E = 0; E < B.hand['length']; E++) {
                                                var C = B.hand[E]['pai3D'];
                                                C['ispaopai'] = this['record_show_hand'] || C['is_open'] ? this['isPaoPai'](C.val) : !1,
                                                    C['OnChoosedPai']();
                                            }
                                    }
                                }
                            }
                        },
                        g['prototype']['isPaoPai'] = function(l) {
                            if (!this['record_show_paopai'])
                                return !1;
                            for (var a = 0; a < this['tingpais']['length']; a++)
                                for (var U = 0; U < this['tingpais'][a]['length']; U++)
                                    if (0 == mjcore['MJPai']['Distance'](this['tingpais'][a][U], l))
                                        return !0;
                            return !1;
                        },
                        g['prototype']['getPaiLeft'] = function(a) {
                            for (var U = 0, z = 0; 4 > z; z++) {
                                for (var M = this['players'][z], g = 0; g < M['container_babei'].pais['length']; g++)
                                    0 == mjcore['MJPai']['Distance'](M['container_babei'].pais[g].val, a) && U++;
                                for (var g = 0; g < M['container_ming'].pais['length']; g++)
                                    0 == mjcore['MJPai']['Distance'](M['container_ming'].pais[g].val, a) && U++;
                                for (var g = 0; g < M['container_qipai'].pais['length']; g++)
                                    M['container_qipai'].pais[g]['revealState'] != l['ERevealState']['reveal'] && 0 == mjcore['MJPai']['Distance'](M['container_qipai'].pais[g].val, a) && U++;
                                M['container_qipai']['last_pai'] && M['container_qipai']['last_pai']['revealState'] != l['ERevealState']['reveal'] && 0 == mjcore['MJPai']['Distance'](M['container_qipai']['last_pai'].val, a) && U++,
                                    M['pai_xuezhan_mid_zimo'] && 0 == mjcore['MJPai']['Distance'](M['pai_xuezhan_mid_zimo'], a) && U++;
                            }
                            for (var z = 0; z < this['mainrole'].hand['length']; z++)
                                0 == mjcore['MJPai']['Distance'](this['mainrole'].hand[z].val, a) && U++;
                            for (var z = 0; z < this.dora['length']; z++)
                                this.dora[z] && 0 == mjcore['MJPai']['Distance'](this.dora[z], a) && U++;
                            var R = 4 - U;
                            return 0 > R ? 0 : R > 4 ? 4 : R;
                        },
                        g['prototype']['get_gang_count'] = function() {
                            for (var l = 0, a = 0; a < this['players']['length']; a++) {
                                var U = this['localPosition2Seat'](a);
                                if (U >= 0)
                                    for (var z = this['players'][a]['container_ming']['mings'], M = 0; M < z['length']; M++)
                                        (z[M].type == mjcore['E_Ming']['gang_an'] || z[M].type == mjcore['E_Ming']['gang_ming']) && l++;
                            }
                            return l;
                        },
                        g['prototype']['get_babei_count'] = function() {
                            for (var l = 0, a = 0; a < this['players']['length']; a++) {
                                var U = this['localPosition2Seat'](a);
                                U >= 0 && (l += this['players'][a]['container_babei'].pais['length']);
                            }
                            return l;
                        },
                        g['prototype']['fetchLinks'] = function() {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'fetchGamePlayerState', {}, function(l, a) {
                                if (l || a['error'])
                                    uiscript['UIMgr'].Inst['showNetReqError']('fetchGamePlayerState', l, a);
                                else {
                                    app.Log.log(JSON['stringify'](a)),
                                        g['player_link_state'] = [];
                                    for (var U = 0; U < a['state_list']['length']; U++)
                                        g['player_link_state'].push(a['state_list'][U]);
                                    uiscript['UI_DesktopInfo'].Inst['refreshLinks']();
                                }
                            });
                        },
                        g['prototype']['onShowHandChange'] = function(l) {
                            if (this['record_show_hand'] = l, Laya['LocalStorage']['setItem']('record_show_hand', l ? '1' : '0'), this['gameing'])
                                for (var a = 1; 4 > a; a++)
                                    this['players'][a]['onShowHandChange'](l);
                        },
                        g['prototype']['onShowPaopaiChange'] = function(a) {
                            if (this['record_show_paopai'] = a, Laya['LocalStorage']['setItem']('record_show_paopai', a ? '1' : '0'), this['gameing']) {
                                this['mainrole']['onShowPaopaiChange']();
                                for (var U = 1; 4 > U; U++)
                                    this['players'][U]['onShowPaopaiChange']();
                                for (var U = 0; U < l['DesktopMgr'].Inst['players']['length']; U++) {
                                    var z = this['localPosition2Seat'](U);
                                    if (!(0 > z)) {
                                        for (var M = 0; M < l['DesktopMgr'].Inst['players'][U]['container_qipai'].pais['length']; M++) {
                                            var g = l['DesktopMgr'].Inst['players'][U]['container_qipai'].pais[M];
                                            g['ispaopai'] = this['isPaoPai'](g.val),
                                                g['OnChoosedPai']();
                                        }
                                        for (var M = 0; M < l['DesktopMgr'].Inst['players'][U]['container_ming'].pais['length']; M++) {
                                            var g = l['DesktopMgr'].Inst['players'][U]['container_ming'].pais[M];
                                            g['ispaopai'] = this['isPaoPai'](g.val),
                                                g['OnChoosedPai']();
                                        }
                                        for (var M = 0; M < l['DesktopMgr'].Inst['players'][U]['container_babei'].pais['length']; M++) {
                                            var g = l['DesktopMgr'].Inst['players'][U]['container_babei'].pais[M];
                                            g['ispaopai'] = this['isPaoPai'](g.val),
                                                g['OnChoosedPai']();
                                        }
                                        var g = l['DesktopMgr'].Inst['players'][U]['container_qipai']['last_pai'];
                                        g && (g['ispaopai'] = this['isPaoPai'](g.val), g['OnChoosedPai']());
                                    }
                                }
                            }
                        },
                        g['prototype']['onRoundEnd'] = function(a, U) {
                            var z = l['DesktopMgr'].Inst['seat2LocalPosition'](a);
                            this['players'][z]['OnRoundEnd'](U);
                        },
                        g['prototype']['onMuyuChange'] = function(a, U) {
                            var z = this;
                            if (void 0 === U && (U = !0), this['is_muyu_mode']()) {
                                var M = !1;
                                if (this['muyu_info'] && this['muyu_info'].id == a.id || (M = !0), this['muyu_effect'] && !this['muyu_effect']['destroyed'])
                                    if (U) {
                                        if (M) {
                                            var g,
                                                R;
                                            if (this['muyu_info'] ? (g = this['muyu_effect']['clone'](), this['muyu_effect'].root['parent']['addChild'](g.root), R = this['muyu_effect'], this['muyu_effect'] = g) : g = this['muyu_effect'], this['muyu_info']) {
                                                R['effect_root']['getChildByName']('muyu_chuxian')['active'] = !1;
                                                var E = R['effect_root']['getChildByName']('muyu_xiaoshi');
                                                E['active'] = !0;
                                                var C = E['getChildByName']('mianpian')['getChildByName']('shuzi'),
                                                    B = C['meshRender']['material'];
                                                B['renderQueue'] = 3001,
                                                    B['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + this['muyu_info']['count'] + '.png'),
                                                    Laya['timer'].once(1000, null, function() {
                                                        R['destroy']();
                                                    });
                                            }
                                            g['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                                    var U = z['seat2LocalPosition'](a.seat);
                                                    g.root['transform']['worldMatrix'] = z['players'][U]['trans_muyu']['transform']['worldMatrix'],
                                                        g.root['transform']['rotation'] = z['players'][U]['trans_muyu']['transform']['rotation']['clone'](),
                                                        g.root['active'] = !0,
                                                        g['effect_root']['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                                    var M = g['effect_root']['getChildByName']('muyu_chuxian');
                                                    M['active'] = !0,
                                                        M['getChildByName']('baodian')['active'] = !0;
                                                    var R = M['getChildByName']('mianpian');
                                                    R['active'] = !0,
                                                        R['getChildByName']('shuzi_anim')['active'] = !1;
                                                    var E = R['getChildByName']('shuzi');
                                                    E['active'] = !0;
                                                    var C = E['meshRender']['material'];
                                                    C['renderQueue'] = 3001,
                                                        C['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + a['count'] + '.png'),
                                                        l['AudioMgr']['PlayAudio'](246);
                                                })),
                                                this['muyu_info'] = a;
                                        } else if (a['count'] != this['muyu_info']['count']) {
                                            var w = this['muyu_effect']['effect_root'];
                                            w['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                            var L = w['getChildByName']('muyu_chuxian'),
                                                c = L['getChildByName']('mianpian');
                                            c['getChildByName']('shuzi_anim')['active'] = !1;
                                            var h = c['getChildByName']('shuzi'),
                                                x = c['getChildByName']('shuzi_anim'),
                                                O = x['getChildByName']('shuzi_up'),
                                                _ = x['getChildByName']('shuzi_down');
                                            Laya['timer']['clearAll'](h),
                                                h['active'] = !1;
                                            var p = h['meshRender']['material'];
                                            p['renderQueue'] = 3001,
                                                p['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + a['count'] + '.png');
                                            var N = O['meshRender']['material'];
                                            N['renderQueue'] = 3001,
                                                N['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + this['muyu_info']['count'] + '.png');
                                            var n = _['meshRender']['material'];
                                            n['renderQueue'] = 3002,
                                                n['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + a['count'] + '.png'),
                                                _['active'] = !1,
                                                x['active'] = !0,
                                                this['muyu_info'] = a,
                                                Laya['timer'].once(210, h, function() {
                                                    h['active'] = !0,
                                                        x['active'] = !1;
                                                });
                                        }
                                    } else {
                                        this['muyu_info'] = a;
                                        var P = this['seat2LocalPosition'](this['muyu_info'].seat);
                                        this['muyu_effect'].root['active'] = !0,
                                            this['muyu_effect'].root['transform']['worldMatrix'] = this['players'][P]['trans_muyu']['transform']['worldMatrix'],
                                            this['muyu_effect'].root['transform']['rotation'] = this['players'][P]['trans_muyu']['transform']['rotation']['clone'](),
                                            this['muyu_effect'].root['active'] = !0,
                                            this['muyu_effect']['effect_root']['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                        var L = this['muyu_effect']['effect_root']['getChildByName']('muyu_chuxian');
                                        L['active'] = !0,
                                            L['getChildByName']('baodian')['active'] = !1;
                                        var c = L['getChildByName']('mianpian');
                                        c['active'] = !0,
                                            c['getChildByName']('shuzi_anim')['active'] = !1;
                                        var C = c['getChildByName']('shuzi');
                                        C['active'] = !0;
                                        var B = C['meshRender']['material'];
                                        B['renderQueue'] = 3001,
                                            B['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + a['count'] + '.png');
                                    }
                            }
                        },
                        g['prototype']['getMindVoicePriority'] = function(l) {
                            switch (l) {
                                case 'ingame_yiman':
                                    return 100;
                                case 'ingame_beiman':
                                    return 90;
                                case 'ingame_lianda':
                                    return 50;
                                case 'ingame_baopai':
                                    return 30;
                                case 'ingame_remain10':
                                    return 20;
                            }
                            return 0;
                        },
                        g['prototype']['addMindVoice'] = function(l, a) {
                            (!this['mind_voice_type'] || this['getMindVoicePriority'](this['mind_voice_type']) < this['getMindVoicePriority'](a)) && (this['mind_voice_seat'] = l, this['mind_voice_type'] = a);
                        },
                        g['prototype']['playMindVoice'] = function() {
                            var a = this;
                            g['bianjietishi'] && (this['gameing'] && (this.mode == z.play || this.mode == z['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play']) && this['mind_voice_type'] && !this['during_playing_mind_voice'] && (this['during_playing_mind_voice'] = !0, l['AudioMgr']['PlayCharactorSound_Teshu'](this['player_datas'][this['mind_voice_seat']]['character'], this['mind_voice_type'], Laya['Handler']['create'](this, function() {
                                a['during_playing_mind_voice'] = !1;
                            }))), this['mind_voice_type'] = null, this['mind_voice_seat'] = -1);
                        },
                        g['prototype']['clearMindVoice'] = function() {
                            this['mind_voice_type'] = null,
                                this['mind_voice_seat'] = -1;
                        },
                        g['prototype']['getLastActionNames'] = function(l) {
                            for (var a = [], U = this['actionList']['length'], z = Math.max(U - l, this['action_index']); U > z; z++)
                                a.push(this['actionList'][z].name);
                            return a;
                        },
                        g['prototype']['isLastPaiMingPai'] = function() {
                            for (var l = 0; l < this['players']['length']; l++)
                                for (var a = 0; a < this['players'][l]['container_ming'].pais['length']; a++)
                                    if (this['lastqipai'] == this['players'][l]['container_ming'].pais[a])
                                        return !0;
                            return !1;
                        },
                        g['prototype']['setRevealScore'] = function(l, a) {
                            if (this['anpai']) {
                                var U = (1000 * l)['toString']();
                                if (0 == l)
                                    for (var z = 0; z < this['score_reveal']['length']; z++)
                                        if (2 == z) {
                                            this['score_reveal'][z]['active'] = !0;
                                            var M = new Laya['Vector4']();
                                            M.z = 0,
                                                M.w = -0.9,
                                                M.x = 1,
                                                M.y = 0.1,
                                                this['score_reveal'][z]['meshRender']['material']['tilingOffset'] = M;
                                        } else
                                            this['score_reveal'][z]['active'] = !1;
                                else
                                    for (var g = this['last_anpai_score']['toString'](), z = 0; z < this['score_reveal']['length']; z++)
                                        if (z < U['length']) {
                                            var R = z < g['length'] ? Number(g[z]) : 0;
                                            a ? this['show_reveal_score_anim'](z, R, Number(U[z])) : this['show_reveal_score_anim'](z, Number(U[z]), Number(U[z]));
                                        } else
                                            this['score_reveal'][z]['active'] = !1;
                                this['last_anpai_score'] = 1000 * l;
                            }
                        },
                        g['prototype']['show_reveal_score_anim'] = function(a, U, z) {
                            var M = this,
                                g = 24,
                                R = 40,
                                E = 3,
                                C = 0.2,
                                B = 0.8,
                                w = 2000,
                                L = z - U;
                            if (this['score_reveal'][a]['active'] = !0, U == z) {
                                var c = new Laya['Vector4'](),
                                    h = U / 10;
                                return h > 0.9 && (h -= 1),
                                    c.w = -(0.9 - h),
                                    c.z = 0,
                                    c.x = 1,
                                    c.y = 0.1,
                                    this['score_reveal'][a]['meshRender']['material']['tilingOffset'] = c,
                                    void 0;
                            }
                            L += 10,
                                0 >= L && (L += 10);
                            var x = 0,
                                O = Laya['timer']['currTimer'],
                                _ = Laya['timer']['currTimer'],
                                p = 0,
                                N = !1,
                                n = 0,
                                P = function() {
                                    var z = Laya['timer']['currTimer'] - O;
                                    n % 9 == 0 && l['AudioMgr']['PlayAudio'](222),
                                        n++,
                                        Laya['timer']['currTimer'] - _ > w ? (p = L, Laya['timer']['clear'](M, P)) : (L / 2 > p && g > x ? x += R * z / 1000 : p >= L / 2 && B > L - p && (x -= R * z / 1000, x = Math.max(E, x)), N ? (p -= x * z / 1000, L > p && (p = L, Laya['timer']['clear'](M, P))) : (p += x * z / 1000, p > L + C && (N = !0)));
                                    var c = new Laya['Vector4'](),
                                        h = (p + U) / 10;
                                    h > 0.9 && (h -= 1),
                                        c.w = -(0.9 - h),
                                        c.z = 0,
                                        c.x = 1,
                                        c.y = 0.1,
                                        M['score_reveal'][a]['meshRender']['material']['tilingOffset'] = c,
                                        O = Laya['timer']['currTimer'];
                                };
                            Laya['timer']['frameLoop'](1, this, P);
                        },
                        g['prototype']['onRevealStateChange'] = function(l, a) {
                            this['players'][this['seat2LocalPosition'](l)]['trans_reveal']['active'] = a;
                        },
                        g['prototype']['is_field_spell_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['field_spell_mode'] ? !0 : !1;
                        },
                        g['prototype']['is_field_spell_extra_dora'] = function() {
                            if (!this['is_field_spell_mode']() || !this['field_spell'])
                                return !1;
                            var l = Math['floor'](this['field_spell'] / 100) % 100;
                            return 3 == l;
                        },
                        g['prototype']['is_zhanxing_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['zhanxing'] ? !0 : !1;
                        },
                        g.Inst = null,
                        g['player_link_state'] = [a.NULL, a.NULL, a.NULL, a.NULL],
                        g['click_prefer'] = 0,
                        g['double_click_pass'] = 0,
                        g['en_mjp'] = !1,
                        g['bianjietishi'] = !0,
                        g['_is_yuren_type'] = !1,
                        g;
                }
                (Laya['Script']);
            l['DesktopMgr'] = M;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this;
                            app.Log.log('ActionLiuJu play data:' + JSON['stringify'](a)),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close']();
                            var z = 0;
                            if (a.liqi ? (z = 1000, l['ActionLiqi'].play(a.liqi)) : z = 500, a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0), a.type == mjcore['E_LiuJu']['sanjiahule']) {
                                l['BgmListMgr']['stopBgm']();
                                var M = a.seat;
                                Laya['timer'].once(z, this, function() {
                                        for (var a = [], U = 0; 4 > U; U++)
                                            l['DesktopMgr'].Inst['localPosition2Seat'](U) != M && a.push(U);
                                        uiscript['UI_Huleshow'].Inst['showRong'](a);
                                    }),
                                    z += 1500,
                                    Laya['timer'].once(z, this, function() {
                                        for (var U = 0; U < a['allplayertiles']['length']; U++)
                                            if (U != M) {
                                                for (var z = a['allplayertiles'][U]['split']('|'), g = [], R = 0; R < z['length']; R++)
                                                    g.push(mjcore['MJPai']['Create'](z[R]));
                                                g = g.sort(mjcore['MJPai']['Distance']),
                                                    l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['Huangpai'](!0, g, !1);
                                            }
                                    }),
                                    z += 1000,
                                    Laya['timer'].once(z, this, function() {
                                        U['showEnd'](a),
                                            l['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                            } else
                                Laya['timer'].once(z, this, function() {
                                    if (l['BgmListMgr']['stopBgm'](), a['hules_history'])
                                        for (var z = 0, M = a['hules_history']; z < M['length']; z++) {
                                            var g = M[z],
                                                R = l['DesktopMgr'].Inst['seat2LocalPosition'](g.seat);
                                            l['DesktopMgr'].Inst['players'][R]['onXuezhanEnd'](g.hand, !1);
                                        }
                                    var E = 500;
                                    if (a.type == mjcore['E_LiuJu']['jiuzhongjiupai']) {
                                        for (var R = a.seat, C = a['tiles'], B = [], w = 0; w < C['length']; w++)
                                            B.push(mjcore['MJPai']['Create'](C[w]));
                                        B = B.sort(mjcore['MJPai']['Distance']),
                                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](R)]['Huangpai'](!0, B, !1);
                                    }
                                    if (a.type == mjcore['E_LiuJu']['sijializhi'] && a['allplayertiles'] && a['allplayertiles']['length'] > 0) {
                                        for (var L = 0; L < a['allplayertiles']['length']; L++) {
                                            for (var c = a['allplayertiles'][L]['split']('|'), B = [], w = 0; w < c['length']; w++)
                                                B.push(mjcore['MJPai']['Create'](c[w]));
                                            B = B.sort(mjcore['MJPai']['Distance']),
                                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](L)]['Huangpai'](!0, B, !1);
                                        }
                                        E = 1000;
                                    }
                                    Laya['timer'].once(E, U, function() {
                                        U['showEnd'](a),
                                            l['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                                });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionLiuJu fastplay data:' + JSON['stringify'](a)),
                                l['BgmListMgr']['stopBgm'](),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1);
                            if (a.liqi && l['ActionLiqi']['fastplay'](a.liqi, 0), a.type == mjcore['E_LiuJu']['jiuzhongjiupai']) {
                                for (var U = a.seat, z = a['tiles'], M = [], g = 0; g < z['length']; g++)
                                    M.push(mjcore['MJPai']['Create'](z[g]));
                                M = M.sort(mjcore['MJPai']['Distance']),
                                    l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['Huangpai'](!0, M, !0);
                            }
                            if (a.type == mjcore['E_LiuJu']['sanjiahule'])
                                for (var U = a.seat, R = 0; R < a['allplayertiles']['length']; R++)
                                    if (R != U) {
                                        for (var E = a['allplayertiles'][R]['split']('|'), M = [], g = 0; g < E['length']; g++)
                                            M.push(mjcore['MJPai']['Create'](E[g]));
                                        M = M.sort(mjcore['MJPai']['Distance']),
                                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](R)]['Huangpai'](!0, M, !1);
                                    }
                            this['showEnd'](a);
                        },
                        U['record'] = function(l) {
                            return app.Log.log('ActionLiuJu record data:' + JSON['stringify'](l)),
                                this.play(l),
                                4000;
                        },
                        U['fastrecord'] = function(a) {
                            l['BgmListMgr']['stopBgm'](),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                this['showEnd'](a);
                        },
                        U['showEnd'] = function(a) {
                            var U = null;
                            l['DesktopMgr'].Inst['xuezhan'] && a['hules_history'] && a['hules_history']['length'] > 0 && (U = Laya['Handler']['create'](this, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](a, !1);
                                })),
                                uiscript['UIMgr'].Inst['ShowLiuJu'](a, U);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionLiuJu'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionUnveilTile play data:' + JSON['stringify'](a)),
                                l['DesktopMgr'].Inst['setScores'](a['scores']);
                            var U = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](a.seat)];
                            U['PlaySound']('act_unveil'),
                                a['operation'] && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }),
                                l['DesktopMgr'].Inst['ActionRunComplete'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                        },
                        U['fastplay'] = function(a) {
                            l['DesktopMgr'].Inst['setScores'](a['scores']),
                                a['operation'] && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang'], !1);
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                l['DesktopMgr'].Inst['setScores'](a['scores']);
                            var z = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](a.seat)];
                            if (z['PlaySound']('act_unveil'), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var M = 0; M < a['operations']['length']; M++)
                                    l['ActionOperation'].ob(a['operations'][M], U, 450);
                            return uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']),
                                500;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                l['DesktopMgr'].Inst['setScores'](a['scores']);
                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](a.seat)];
                            if (l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var z = 0; z < a['operations']['length']; z++)
                                    l['ActionOperation'].ob(a['operations'][z], U, 450);
                            if (l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var z = 0; z < a['operations']['length']; z++)
                                    l['ActionOperation'].ob(a['operations'][z], U, 450);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang'], !1);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionUnveilTile'] = a;
        }
        (view || (view = {}));

        ! function(l) {
            var a = function() {
                    function a(l) {
                        var a = this;
                        this['rounds'] = [],
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = l,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                a['btn_up']['visible'] = a['scrollview'].rate > 0,
                                    a['btn_down']['visible'] = a['scrollview']['need_scroll'] && a['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return a['prototype'].show = function(a) {
                            var U = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['rounds'] = a;
                            for (var z = 0, M = 0; M < a['length']; M++) {
                                var g = this['caluH'](a[M]);
                                z += g,
                                    this['scrollview']['addItem'](1, g);
                            }
                            l['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    U['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        a['prototype']['close'] = function() {
                            var a = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                l['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1,
                                        a.me['visible'] = !1;
                                }));
                        },
                        a['prototype']['caluH'] = function(l) {
                            var a = l['actions'][l['actions']['length'] - 1];
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            if (view['DesktopMgr'].Inst['xuezhan'] && a.data['hules_history'] && a.data['hules_history']['length'] > 0)
                                return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            if ('RecordNoTile' == a.name) {
                                for (var U = a.data, z = [], M = 0; M < view['DesktopMgr'].Inst['player_count']; M++)
                                    z.push({
                                        old_score: U['scores'][0]['old_scores'][M],
                                        delta: 0
                                    });
                                for (var M = 0; M < U['scores']['length']; M++)
                                    for (var g = 0; g < view['DesktopMgr'].Inst['player_count']; g++)
                                        z[g]['delta'] += U['scores'][M]['delta_scores'][g];
                                for (var R = [], M = 0; M < z['length']; M++)
                                    z[M]['delta'] > 0 && R.push(M);
                                var E = 120 + (0 == R['length'] ? 0 : 40 * (R['length'] - 1));
                                return E;
                            }
                            return 'RecordLiuJu' == a.name ? 120 : a.data['hules'][0].zimo ? 120 : 180 + 40 * (a.data['hules']['length'] - 1);
                        },
                        a['prototype']['renderInfo'] = function(l) {
                            for (var a = this, U = l['index'], z = l['container'], M = this['rounds'][U], R = 0; R < M['actions']['length']; R++)
                                if ('RecordNewRound' == M['actions'][R].name) {
                                    if (view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        z['getChildByName']('container_title')['getChildByName']('chang').text = 'en' == GameMgr['client_language'] ? 'Round' : '第',
                                            z['getChildByName']('container_title')['getChildByName']('ju').text = (M['actions'][R].data['ju_count'] + 1)['toString'](),
                                            z['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !1,
                                            z['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !1;
                                        for (var E = 0, C = z['getChildByName']('container_title'), B = [3, 3, 0], w = 0; 3 > w; w++) {
                                            var L = C['getChildAt'](w);
                                            E += L['textField']['textWidth'] * L['scaleX'],
                                                E += B[w];
                                        }
                                        for (var c = C['width'] / 2 - E / 2, h = 0; 3 > h; h++) {
                                            var L = C['getChildAt'](h);
                                            L.x = c,
                                                c += L['textField']['textWidth'] * L['scaleX'] + B[h],
                                                L.y = 'haolong' == L.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var x = void 0;
                                    x = 'chs' == GameMgr['client_language'] ? ['东', '南', '西', '北'] : 'jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'] ? ['東', '南', '西', '北'] : 'kr' == GameMgr['client_language'] ? ['동', '남', '서', '북'] : ['East', 'South', 'West', 'North'],
                                        z['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !0,
                                        z['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !0,
                                        z['getChildByName']('container_title')['getChildByName']('chang').text = x[M['actions'][R].data['chang'] % 4],
                                        z['getChildByName']('container_title')['getChildByName']('ju').text = (M['actions'][R].data.ju + 1)['toString'](),
                                        z['getChildByName']('container_title')['getChildByName']('ben').text = M['actions'][R].data.ben['toString']();
                                    for (var E = 0, C = z['getChildByName']('container_title'), B = [3, 3, 50, 3, 0], O = 0; O < C['numChildren']; O++) {
                                        var L = C['getChildAt'](O);
                                        E += L['textField']['textWidth'] * L['scaleX'],
                                            E += B[O];
                                    }
                                    for (var c = C['width'] / 2 - E / 2, _ = 0; _ < C['numChildren']; _++) {
                                        var L = C['getChildAt'](_);
                                        L.x = c,
                                            c += L['textField']['textWidth'] * L['scaleX'] + B[_],
                                            L.y = 'haolong' == L.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var p = M['actions'][M['actions']['length'] - 1],
                                N = p.data,
                                n = z,
                                P = z['getChildByName']('line'),
                                H = z['getChildByName']('liuju'),
                                Z = z['getChildByName']('win'),
                                b = z['getChildByName']('lose');
                            P['visible'] = !1,
                                H['visible'] = !1,
                                Z['visible'] = !1,
                                b['visible'] = !1;
                            var W = !0;
                            if (view['DesktopMgr'].Inst['xuezhan'] || view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                for (var d = [], R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                    d.push(0);
                                for (var u = !1, m = 0, i = M['actions']; m < i['length']; m++) {
                                    var q = i[m];
                                    if (('RecordHuleXueZhanEnd' == q.name || 'RecordNoTile' == q.name) && (u = q.data['hules_history'] && q.data['hules_history']['length'] > 0), 'RecordHuleXueZhanMid' == q.name || 'RecordHuleXueZhanEnd' == q.name) {
                                        for (var R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                            d[R] += q.data['delta_scores'][R];
                                        u = !0;
                                    } else if ('RecordNoTile' == q.name) {
                                        for (var R = 0; R < q.data['scores']['length']; R++)
                                            if (q.data['scores'][R]['delta_scores'] && q.data['scores'][R]['delta_scores']['length'] > 0)
                                                for (var T = 0; T < view['DesktopMgr'].Inst['player_count']; T++)
                                                    d[T] += q.data['scores'][R]['delta_scores'][T];
                                    } else if ('RecordGangResult' == q.name || 'RecordGangResultEnd' == q.name)
                                        for (var R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                            d[R] += q.data['gang_infos']['delta_scores'][R];
                                }
                                if (view['DesktopMgr'].Inst['is_chuanma_mode']() && (u = !0), n['height'] = u ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120, u) {
                                    W = !1,
                                        Z['visible'] = !0;
                                    var r = Z['getChildByName']('info');
                                    r['visible'] = !0,
                                        r.text = game['Tools']['strOfLocalization'](3257),
                                        r = b['getChildByName']('chong'),
                                        r['visible'] = !1;
                                    for (var R = 0; R < view['DesktopMgr'].Inst['player_count']; R++) {
                                        var e = Z['getChildByName']('player'),
                                            v = e['getChildAt'](R);
                                        v['visible'] = !0,
                                            v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](R)['nickname'],
                                            v['getChildByName']('point').text = d[R] >= 0 ? '+' + d[R]['toString']() : d[R]['toString']();
                                    }
                                    for (var f = Z['getChildByName']('player'), R = view['DesktopMgr'].Inst['player_count']; R < f['numChildren']; R++)
                                        f['getChildAt'](R)['visible'] = !1;
                                } else;
                            }
                            if ('RecordNoTile' == p.name) {
                                if (W) {
                                    for (var I = [], R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                        I.push({
                                            old_score: N['scores'][0]['old_scores'][R],
                                            delta: 0
                                        });
                                    for (var R = 0; R < N['scores']['length']; R++)
                                        for (var T = 0; T < view['DesktopMgr'].Inst['player_count']; T++)
                                            I[T]['delta'] += N['scores'][R]['delta_scores'][T];
                                    for (var y = [], R = 0; R < I['length']; R++)
                                        I[R]['delta'] > 0 && y.push(R);
                                    if (n['height'] = 120 + (0 == y['length'] ? 0 : 40 * (y['length'] - 1)), N['liujumanguan']) {
                                        Z['visible'] = !0;
                                        var r = Z['getChildByName']('info');
                                        r.text = game['Tools']['strOfLocalization'](2170),
                                            r['color'] = '#8d8fac';
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            R < y['length'] ? (v['visible'] = !0, v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](y[R])['nickname'], v['getChildByName']('point').text = I[y[R]]['delta'] > 0 ? '+' + I[y[R]]['delta']['toString']() : I[y[R]]['delta']['toString']()) : v['visible'] = !1;
                                        }
                                    } else if (Z['visible'] = !0, Z['getChildByName']('info').text = '', H['visible'] = !0, H.text = game['Tools']['strOfLocalization'](2171), N['scores'])
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            R < y['length'] ? (v['visible'] = !0, v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](y[R])['nickname'], v['getChildByName']('point').text = I[y[R]]['delta'] > 0 ? '+' + I[y[R]]['delta']['toString']() : I[y[R]]['delta']['toString']()) : v['visible'] = !1;
                                        }
                                }
                            } else if ('RecordLiuJu' == p.name && W) {
                                var F = ['', game['Tools']['strOfLocalization'](2172), game['Tools']['strOfLocalization'](2173), game['Tools']['strOfLocalization'](2174), game['Tools']['strOfLocalization'](2175), game['Tools']['strOfLocalization'](2176)];
                                H['visible'] = !0,
                                    H.text = F[N.type],
                                    n['height'] = 120;
                            } else if (!view['DesktopMgr'].Inst['xuezhan'] && !view['DesktopMgr'].Inst['is_chuanma_mode']())
                                if (p.data['hules'][0].zimo) {
                                    Z['visible'] = !0;
                                    var r = Z['getChildByName']('info');
                                    r.text = game['Tools']['strOfLocalization'](2177),
                                        r['color'] = '#ea3694';
                                    for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                        var v = f['getChildAt'](R);
                                        if (0 == R) {
                                            v['visible'] = !0;
                                            var K = N['hules'][0].seat;
                                            v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                            var k = N['delta_scores'][K];
                                            v['getChildByName']('point').text = (k > 0 ? '+' : '') + k['toString']();
                                        } else
                                            v['visible'] = !1;
                                    }
                                    n['height'] = 120;
                                } else {
                                    Z['visible'] = !0;
                                    var r = Z['getChildByName']('info');
                                    r.text = game['Tools']['strOfLocalization'](2178),
                                        r['color'] = '#ef3538';
                                    for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                        var v = f['getChildAt'](R);
                                        if (R < N['hules']['length']) {
                                            v['visible'] = !0;
                                            var K = N['hules'][R].seat;
                                            v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                            var k = N['delta_scores'][K];
                                            v['getChildByName']('point').text = k > 0 ? '+' + k['toString']() : k['toString']();
                                        } else
                                            v['visible'] = !1;
                                    }
                                    P['visible'] = !0,
                                        P.y = 80 + 40 * N['hules']['length'],
                                        b['visible'] = !0,
                                        b.y = 83 + 40 * N['hules']['length'];
                                    var r = b['getChildByName']('chong');
                                    r['visible'] = !0;
                                    for (var f = b['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                        var v = f['getChildAt'](R);
                                        if (0 == R) {
                                            v['visible'] = !0;
                                            for (var K = 0, T = 0; T < N['delta_scores']['length']; T++)
                                                (N['delta_scores'][T] < N['delta_scores'][K] || N['baopai'] > 0 && N['delta_scores'][T] == N['delta_scores'][K] && N['baopai'] - 1 == K) && (K = T);
                                            v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                            var k = N['delta_scores'][K];
                                            v['getChildByName']('point').text = k['toString']();
                                        } else
                                            v['visible'] = !1;
                                    }
                                    n['height'] = 180 + 40 * (p.data['hules']['length'] - 1);
                                }
                            n['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    a['locking'] || (g.Inst['jumpRound'](U), a['close']());
                                }, null, !1),
                                z['getChildByName']('bg')['height'] = z['height'] - 4;
                        },
                        a;
                }
                (),
                U = function() {
                    function a(l) {
                        var a = this;
                        this['locking'] = !1,
                            this['enable'] = !1,
                            this['have0'] = !1,
                            this.me = l,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                a['btn_up']['visible'] = a['scrollview'].rate > 0,
                                    a['btn_down']['visible'] = a['scrollview']['need_scroll'] && a['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return a['prototype'].show = function(a, U) {
                            var z = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this['have0'] = U,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['scrollview']['addItem'](a + (U ? 1 : 0)),
                                l['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    z['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        a['prototype']['close'] = function() {
                            var a = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                l['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1,
                                        a.me['visible'] = !1;
                                }));
                        },
                        a['prototype']['renderInfo'] = function(l) {
                            var a = this,
                                U = l['index'],
                                z = l['container'];
                            z['getChildByName']('num').text = (U + (this['have0'] ? 0 : 1))['toString'](),
                                z['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    a['locking'] || (g.Inst['jumpXun'](U + (a['have0'] ? 0 : 1)), a['close']());
                                }, null, !1);
                            var M = z,
                                R = [];
                            'en' == GameMgr['client_language'] ? (R.push(M['getChildByName']('xun')), R.push(M['getChildByName']('num'))) : (R.push(M['getChildByName']('num')), R.push(M['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](R, 115, [10]);
                            for (var E = 1; E < M['numChildren']; E++) {
                                var C = M['getChildAt'](E);
                                C.y = 'haolong' == C.font ? 42 : 39;
                            }
                        },
                        a;
                }
                (),
                z = function() {
                    function a(a) {
                        var U = this;
                        this.me = a,
                            this['_btn_out'] = this.me['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['switch']();
                            }, null, !1),
                            this['_choosed_show_hand'] = this.me['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['_choosed_show_hand']['visible'] = !U['_choosed_show_hand']['visible'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](U['_choosed_show_hand']['visible']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this.me['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['_choosed_show_paopai']['visible'] = !U['_choosed_show_paopai']['visible'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](U['_choosed_show_paopai']['visible']);
                            }, null, !1),
                            this['_choosed_show_anim'] = this.me['getChildByName']('btn_anim')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_anim')['clickHandler'] = new Laya['Handler'](this, function() {
                                U['_choosed_show_anim']['visible'] = !U['_choosed_show_anim']['visible'],
                                    view['DesktopMgr'].Inst['record_show_anim'] = U['_choosed_show_anim']['visible'],
                                    Laya['LocalStorage']['setItem']('record_show_anim', view['DesktopMgr'].Inst['record_show_anim'] ? '1' : '0');
                            }),
                            this['_choosed_hide_name'] = this.me['getChildByName']('btn_hidename')['getChildByName']('choosed'),
                            this['_btn_hide_name'] = this.me['getChildByName']('btn_hidename'),
                            this['_btn_hide_name']['clickHandler'] = new Laya['Handler'](this, function() {
                                U['_choosed_hide_name']['visible'] = !U['_choosed_hide_name']['visible'],
                                    l['UI_Replay'].Inst['hide_name'] = !U['_choosed_hide_name']['visible'],
                                    l['UI_DesktopInfo'].Inst['refreshNames']();
                            }),
                            this.me['getChildByName']('label_word')['visible'] = 'chs' == GameMgr['client_language'],
                            this.me['getChildByName']('img_set')['visible'] = 'chs' != GameMgr['client_language'];
                    }
                    return a['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this.me.x = -258,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = view['DesktopMgr'].Inst['record_show_hand'],
                                this['_choosed_show_paopai']['visible'] = view['DesktopMgr'].Inst['record_show_paopai'],
                                this['_choosed_show_anim']['visible'] = view['DesktopMgr'].Inst['record_show_anim'],
                                2 & view['DesktopMgr'].Inst['paipu_config'] ? (this['_choosed_hide_name']['visible'] = !1, l['UI_Replay'].Inst['hide_name'] = !0, game['Tools']['setGrayDisable'](this['_btn_hide_name'], !0)) : (this['_choosed_hide_name']['visible'] = !g.Inst['hide_name'], game['Tools']['setGrayDisable'](this['_btn_hide_name'], !1));
                        },
                        a['prototype']['switch'] = function() {
                            var l = this,
                                a = -258;
                            this.me.x < -100 && (a = -5),
                                this['_btn_out']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: a
                                }, 200, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    l['_btn_out']['disabled'] = !1;
                                }), 0, !0, !0);
                        },
                        a;
                }
                (),
                M = function() {
                    function a(a) {
                        var U = this;
                        this['tiles'] = [],
                            this['container_input'] = null,
                            this['tile_count'] = 0,
                            this['gray_filter'] = null,
                            this['dora_filter'] = null,
                            this['lidora_filter'] = null,
                            this['tou_infos'] = [],
                            this['noinfo'] = !0,
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = a,
                            this.root = a['getChildByName']('root'),
                            this['content'] = this.root['getChildByName']('content'),
                            this['content']['vScrollBarSkin'] = '';
                        var z = this['content']['getChildByName']('tile_templete');
                        z['visible'] = !1;
                        for (var M = 0; 100 > M; M++) {
                            var g = z['scriptMap']['capsui.UICopy']['getNodeClone']();
                            g['visible'] = !1,
                                this['tiles'].push(g);
                        }
                        this['container_input'] = this['content']['getChildByName']('input'),
                            this['gray_filter'] = new Laya['ColorFilter']([0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 1, 0]),
                            this['dora_filter'] = new Laya['ColorFilter']([0.35, 0, 0, 0, 0, 0, 0.77, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                            this['lidora_filter'] = new Laya['ColorFilter']([1, 0, 0, 0, 0, 0, 0.64, 0, 0, 0, 0, 0, 0.44, 0, 0, 0, 0, 0, 1, 0]),
                            this['container_input']['getChildByName']('btn_what')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['locking'] || l['UI_Info_MD5'].Inst.show();
                            }, null, !1);
                    }
                    return a['prototype']['setTiles'] = function(l) {
                            var a = l['indexOf']('t'),
                                U = 0;
                            for (this['tou_infos'] = []; - 1 != a;)
                                this['tou_infos'].push(Math['floor']((a - U) / 2) - 1), U++, a = l['indexOf']('t', a + 1);
                            var z = l['replace'](/t/g, '');
                            this['tile_count'] = Math['floor'](z['length'] / 2);
                            for (var M = 'myres2/mjp/' + GameMgr.Inst['touming_mjp_view'] + /ui/, g = 'myres2/mjp/' + GameMgr.Inst['mjp_view'] + /ui/, R = 0, E = 0; 2 * E + 1 < z['length']; E++)
                                this['tou_infos']['length'] > R && E == this['tou_infos'][R] ? (R++, this['tiles'][E].skin = game['Tools']['localUISrc'](M + z['charAt'](2 * E) + z['charAt'](2 * E + 1) + '.png')) : this['tiles'][E].skin = game['Tools']['localUISrc'](g + z['charAt'](2 * E) + z['charAt'](2 * E + 1) + '.png'), this['tiles'][E]['visible'] = !0;
                            for (var E = this['tile_count']; E < this['tiles']['length']; E++)
                                this['tiles'][E]['visible'] = !1;
                            this['noinfo'] = !1,
                                this['container_input']['getChildByName']('txtinput').text = l;
                        },
                        a['prototype']['refresh'] = function() {
                            this.me['visible'] && (this['noinfo'] || this['setInfo']());
                        },
                        a['prototype']['setInfo'] = function() {
                            if (!this['noinfo']) {
                                var a = view['DesktopMgr'].Inst['left_tile_count'],
                                    U = view['DesktopMgr'].Inst.dora['length'];
                                view['DesktopMgr'].Inst['is_zhanxing_mode']() && (a -= l['UI_Astrology'].Inst['getTileCount']());
                                var z = view['DesktopMgr'].Inst['get_gang_count'](),
                                    M = view['DesktopMgr'].Inst['get_babei_count'](),
                                    g = z + M;
                                g > 0 && view['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] && g--;
                                var R = 14;
                                view['DesktopMgr'].Inst['is_chuanma_mode']() && (g = 0, R = 0);
                                var E = this['tile_count'] - g - R;
                                0 > E && (E = 0);
                                for (var C = this['tiles'][0]['width'], B = this['tiles'][0]['height'] + 10, w = 0; E > w; w++) {
                                    var L = 0;
                                    view['DesktopMgr'].Inst['rule_mode'] == view['ERuleMode']['Liqi3'] ? L = w % 12 * C + 5 * Math['floor'](w % 12 / 3) : L += 2 + w % 12 * C + 5 * Math['floor'](w % 12 / 4),
                                        this['tiles'][w].x = L,
                                        this['tiles'][w].y = Math['floor'](w / 12) * B,
                                        this['tiles'][w]['filters'] = a >= E - w ? [] : [this['gray_filter']];
                                }
                                for (var c = Math.ceil(E / 12) * B + 20, w = E; w < this['tile_count']; w++) {
                                    var h = this['tiles'][w];
                                    h.x = (w - E) % 12 * C,
                                        h.y = Math['floor']((w - E) / 12) * B + c,
                                        h['filters'] = [];
                                }
                                for (var x = view['DesktopMgr'].Inst['rule_mode'] == view['ERuleMode']['Liqi3'] ? 8 : 4, w = 0; U > w; w++)
                                    this['tiles'][this['tile_count'] - x - 1 - 2 * w]['filters'] = [this['dora_filter']], this['tiles'][this['tile_count'] - x - 2 - 2 * w]['filters'] = [this['lidora_filter']];
                                for (var w = 0; g > w; w++)
                                    this['tiles'][this['tile_count'] - 1 - w]['filters'] = [this['gray_filter']];
                                c += Math.ceil((this['tile_count'] - E) / 12) * B,
                                    this['container_input'].y = c + 80,
                                    this['content']['refresh']();
                            }
                        },
                        a['prototype']['setNoInfo'] = function() {
                            this['noinfo'] = !0;
                        },
                        a['prototype'].show = function() {
                            var a = this;
                            if (!this['locking']) {
                                if (this['noinfo'])
                                    return l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2179)), void 0;
                                this['locking'] = !0,
                                    this.me['visible'] = !0,
                                    this['refresh'](),
                                    l['UIBase']['anim_alpha_in'](this.me, {
                                        y: 30
                                    }, 120, 0, Laya['Handler']['create'](this, function() {
                                        a['locking'] = !1;
                                    }));
                            }
                        },
                        a['prototype']['close'] = function() {
                            var a = this;
                            this['locking'] || (this['locking'] = !0, l['UIBase']['anim_alpha_out'](this.me, {
                                y: 30
                            }, 120, 0, Laya['Handler']['create'](this, function() {
                                a['locking'] = !1,
                                    a.me['visible'] = !1;
                            })));
                        },
                        a;
                }
                (),
                g = function(g) {
                    function R() {
                        var l = g.call(this, new ui.mj['replayUI']()) || this;
                        return l['label_chang'] = null,
                            l['label_ju'] = null,
                            l['label_xun'] = null,
                            l['img_play'] = null,
                            l['img_stop'] = null,
                            l['btn_preround'] = null,
                            l['btn_nextround'] = null,
                            l['page_chang'] = null,
                            l['page_xun'] = null,
                            l['btn_change_score'] = null,
                            l['paipuconfig'] = null,
                            l['page_paishan'] = null,
                            l['pop_collectinput'] = null,
                            l.data = null,
                            l['gameResult'] = null,
                            l['rounds'] = [],
                            l['round_index'] = 0,
                            l['action_index'] = 0,
                            l['locking_time'] = 0,
                            l['_auto_play'] = !1,
                            l['hide_name'] = !1,
                            R.Inst = l,
                            l;
                    }
                    return __extends(R, g),
                        Object['defineProperty'](R['prototype'], 'auto_play', {
                            get: function() {
                                return this['_auto_play'];
                            },
                            set: function(l) {
                                this['_auto_play'] = l,
                                    this['img_play']['visible'] = !l,
                                    this['img_stop']['visible'] = l;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        R['prototype']['onCreate'] = function() {
                            var g = this,
                                R = this.me['getChildByName']('root')['getChildByName']('round');
                            R['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['page_chang']['locking'] || (g['auto_play'] && (g['auto_play'] = !1), g['page_xun']['enable'] && g['page_xun']['close'](), g['page_paishan'].me['visible'] && g['page_paishan']['close'](), g['page_chang']['enable'] ? g['page_chang']['close']() : g['page_chang'].show(g['rounds']));
                                }, null, !1),
                                this['label_chang'] = R['getChildByName']('chang'),
                                this['label_ju'] = R['getChildByName']('ju');
                            var E = this.me['getChildByName']('root')['getChildByName']('turn');
                            'kr' == GameMgr['client_language'] && (E['getChildAt'](0)['width'] = 142, E['getChildAt'](0).x -= 1),
                                this['label_xun'] = E['getChildByName']('xun'),
                                E['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['page_xun']['locking'] || (g['auto_play'] && (g['auto_play'] = !1), g['page_chang']['enable'] && g['page_chang']['close'](), g['page_paishan'].me['visible'] && g['page_paishan']['close'](), g['page_xun']['enable'] ? g['page_xun']['close']() : g['page_xun'].show(g['rounds'][g['round_index']].xun['length'], 0 != g['rounds'][g['round_index']].xun[0]));
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('paishan')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['page_paishan']['locking'] || (g['auto_play'] && (g['auto_play'] = !1), g['page_chang']['enable'] && g['page_chang']['close'](), g['page_xun']['enable'] && g['page_xun']['close'](), g['page_paishan'].me['visible'] ? g['page_paishan']['close']() : g['page_paishan'].show());
                                }, null, !1),
                                this['page_chang'] = new a(this.me['getChildByName']('info_chang')),
                                this['page_xun'] = new U(this.me['getChildByName']('info_xun')),
                                this['page_paishan'] = new M(this.me['getChildByName']('info_paishan')),
                                this.me['getChildByName']('root')['getChildByName']('play')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['auto_play'] = !g['auto_play'];
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextstep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return g['locking_time'] > Laya['timer']['currTimer'] ? (g['auto_play'] && (g['auto_play'] = !1), void 0) : (g['nextStep'](),
                                        (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify({ 'record_click_action': "nextStep" }),
                                            onload: function(msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'record_click_action': "nextStep" }));
                                            }
                                        })), void 0);
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('prestep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['preStep']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['nextXun']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('preturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['preXun']();
                                }, null, !1),
                                this['btn_preround'] = this.me['getChildByName']('root')['getChildByName']('preround'),
                                this['btn_preround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['preRound']();
                                }, null, !1),
                                this['btn_nextround'] = this.me['getChildByName']('root')['getChildByName']('nextround'),
                                this['btn_nextround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['nextRound']();
                                }, null, !1),
                                this['img_play'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('play'),
                                this['img_stop'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('pause'),
                                this['btn_change_score'] = this.me['getChildByName']('btn_change_score'),
                                this['btn_change_score']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['UI_DesktopInfo'].Inst['onBtnShowScoreDelta']();
                                }, null, !1),
                                this['paipuconfig'] = new z(this.me['getChildByName']('config')),
                                this['pop_collectinput'] = new l['UI_Pop_CollectInput'](this.me['getChildByName']('pop_collect'));
                        },
                        R['prototype']['onEnable'] = function() {
                            this['paipuconfig']['reset'](),
                                l['UI_ReplayWheel'].Inst['enable'] = !0;
                        },
                        R['prototype']['onDisable'] = function() {
                            l['UI_ReplayWheel'].Inst['enable'] = !1;
                        },
                        R['prototype']['_isRoundEnd'] = function(l) {
                            return 'RecordNoTile' == l || 'RecordLiuJu' == l || 'RecordHule' == l || 'RecordHuleXueZhanEnd' == l || 'RecordGangResultEnd' == l;
                        },
                        R['prototype']['initData'] = function(l) {
                            this.data = l;
                            var a = l.game,
                                U = l['record'],
                                z = null,
                                M = 0;
                            if (this['rounds'] = [], a['actions'] && a['actions']['length'] > 0) {
                                var actions = [];
                                for (var g = 0; g < a['actions']['length']; g++) {
                                    var R = a['actions'][g];
                                    if (1 == R.type) {
                                        M += R['result']['length'];
                                        var E = net['MessageWrapper']['decodeMessage'](R['result']),
                                            C = E['$type'].name,
                                            B = {
                                                name: C,
                                                data: E
                                            };
                                        actions.push(B);
                                        null == z && (z = {
                                                xun: [],
                                                actions: []
                                            }),
                                            z['actions'].push(B),
                                            this['_isRoundEnd'](C) && (this['pengding_xun'](z), this['rounds'].push(z), z = null);
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
                                for (var g = 0; g < a['records']['length']; g++) {
                                    M += a['records'][g]['length'];
                                    var E = net['MessageWrapper']['decodeMessage'](a['records'][g]),
                                        C = E['$type'].name,
                                        B = {
                                            name: C,
                                            data: E
                                        };
                                    null == z && (z = {
                                            xun: [],
                                            actions: []
                                        }),
                                        z['actions'].push(B),
                                        this['_isRoundEnd'](C) && (this['pengding_xun'](z), this['rounds'].push(z), z = null);
                                }
                            null != z && app.Log['Error']('最后一份牌谱没有结束'),
                                this['gameResult'] = U,
                                this['action_index'] = -1,
                                this['round_index'] = -1,
                                this['label_chang'].text = '东',
                                this['label_ju'].text = '1',
                                this['label_xun'].text = '0',
                                this['auto_play'] = !1;
                            var w = [];
                            'en' != GameMgr['client_language'] ? (w.push(this['label_xun']['parent']['getChildByName']('xun')), w.push(this['label_xun']['parent']['getChildByName']('turn'))) : (w.push(this['label_xun']['parent']['getChildByName']('turn')), w.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](w, 80, [5]),
                                app.Log.log('牌谱大小：' + M + 'B');
                        },
                        R['prototype']['reset'] = function() {
                            this['auto_play'] = !1,
                                this['page_chang']['enable'] && this['page_chang']['close'](),
                                this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['page_paishan'].me['visible'] && (this['page_paishan'].me['visible'] = !1);
                        },
                        R['prototype']['onBack'] = function() {
                            this['locking_time'] = 0,
                                this['enable'] = !0,
                                this['_jumpStep'](this['round_index'], this['rounds'][this['round_index']]['actions']['length'] - 2);
                        },
                        R['prototype']['pengding_xun'] = function(l) {
                            l.xun = [];
                            for (var a = view['DesktopMgr'].Inst.seat, U = !1, z = 0; z < l['actions']['length']; z++) {
                                var M = l['actions'][z];
                                'RecordNewRound' == M.name ? M.data.ju == a && (U = !0, l.xun.push(z)) : 'RecordDealTile' == M.name || 'RecordChiPengGang' == M.name || 'RecordHuleXueZhanMid' == M.name ? M.data.seat == a && (U || (U = !0, l.xun.push(z))) : ('RecordDiscardTile' == M.name || 'RecordRevealTile' == M.name || 'RecordAnGangAddGang' == M.name || 'RecordBaBei' == M.name) && (U = !1);
                            }
                        },
                        R['prototype']['get_currentxun'] = function() {
                            var l = this['rounds'][this['round_index']];
                            if (0 == l.xun['length'])
                                return 1;
                            for (var a = l.xun['length'], U = 0; U < l.xun['length']; U++)
                                if (this['action_index'] < l.xun[U]) {
                                    a = U;
                                    break;
                                }
                            return 0 > a && (a = 0),
                                a;
                        },
                        R['prototype']['nextStep'] = function(a, U) {
                            if (void 0 === a && (a = !1), void 0 === U && (U = !1), !(!a && this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] > this['rounds']['length'])) {
                                if (this['round_index'] == this['rounds']['length'] && (this['round_index'] = -1), this['round_index'] < 0 || this['rounds'][this['round_index']]['actions']['length'] <= this['action_index'] + 1) {
                                    if (this['round_index'] + 1 >= this['rounds']['length'])
                                        return view['DesktopMgr'].Inst['gameEndResult'] = this['gameResult']['result'], this['enable'] = !1, l['UIMgr'].Inst['ShowGameEnd'](), this['action_index']--, void 0;
                                    this['round_index']++,
                                        this['action_index'] = 0;
                                } else
                                    this['action_index']++;
                                if (this['btn_nextround']['visible'] = this['rounds']['length'] > 1, this['btn_preround']['visible'] = this['rounds']['length'] > 1, this['action_index'] > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name)) {
                                    var z = this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].data.seat;
                                    z != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](z)]['RecordLiPai'](0);
                                }
                                var M = this['rounds'][this['round_index']]['actions'][this['action_index']];
                                view['DesktopMgr'].Inst['record_show_anim'] || this['_isRoundEnd'](M.name) ? this['locking_time'] = Laya['timer']['currTimer'] + this['doRecord'](M) : (this['doFastRecord'](M), this['locking_time'] = Laya['timer']['currTimer'] + (U ? 500 : 200)),
                                    'RecordNewCard' == M.name && this['nextStep'](!0),
                                    this['_refreshBarshow']();
                            }
                        },
                        R['prototype']['_refreshBarshow'] = function() {
                            var l = '';
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                'en' == GameMgr['client_language'] ? l = 'Round' : l += '第', this['label_chang'].text = l, this['label_ju'].text = (view['DesktopMgr'].Inst['index_chuanma_ju'] + 1)['toString']();
                            else {
                                if ('chs' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += '东';
                                            break;
                                        case 1:
                                            l += '南';
                                            break;
                                        case 2:
                                            l += '西';
                                            break;
                                        case 3:
                                            l += '北';
                                    }
                                else if ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += '東';
                                            break;
                                        case 1:
                                            l += '南';
                                            break;
                                        case 2:
                                            l += '西';
                                            break;
                                        case 3:
                                            l += '北';
                                    }
                                else if ('kr' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += '동';
                                            break;
                                        case 1:
                                            l += '남';
                                            break;
                                        case 2:
                                            l += '서';
                                            break;
                                        case 3:
                                            l += '북';
                                    }
                                else
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += 'East';
                                            break;
                                        case 1:
                                            l += 'South';
                                            break;
                                        case 2:
                                            l += 'West';
                                            break;
                                        case 3:
                                            l += 'North';
                                    }
                                this['label_chang'].text = l,
                                    this['label_ju'].text = (view['DesktopMgr'].Inst['index_ju'] + 1)['toString']();
                            }
                            var a = function(l, a) {
                                for (var U = 0, z = 1; z < l['numChildren']; z++) {
                                    1 != z && (U += 3);
                                    var M = l['getChildAt'](z);
                                    U += M['textField']['textWidth'] * M['scaleX'];
                                }
                                for (var g = l['width'] / 2 - U / 2, z = 1; z < l['numChildren']; z++) {
                                    var M = l['getChildAt'](z);
                                    M.x = g,
                                        g += M['textField']['textWidth'] * M['scaleX'] + 3,
                                        M.y = 'haolong' == M.font ? a + 3 : a;
                                }
                            };
                            this['label_xun'].text = this['get_currentxun']()['toString']();
                            var U = [];
                            'en' != GameMgr['client_language'] ? (U.push(this['label_xun']['parent']['getChildByName']('xun')), U.push(this['label_xun']['parent']['getChildByName']('turn'))) : (U.push(this['label_xun']['parent']['getChildByName']('turn')), U.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](U, 80, [5]),
                                a(this['label_chang']['parent'], 40);
                        },
                        R['prototype']['_get_autoplay_delay'] = function(l) {
                            switch (l.name) {
                                case 'RecordNewCard':
                                    return 0;
                                case 'RecordNewRound':
                                    return 0;
                                case 'RecordChangeTile':
                                    return 500;
                                case 'RecordDiscardTile':
                                    return 500;
                                case 'RecordDealTile':
                                    return 500;
                                case 'RecordChiPengGang':
                                    return 500;
                                case 'RecordAnGangAddGang':
                                    return 200;
                                case 'RecordBaBei':
                                    return 200;
                                case 'RecordHuleXueZhanMid':
                                    return 500;
                                case 'RecordRevealTile':
                                    return 500;
                                case 'RecordUnveilTile':
                                    return 500;
                                case 'RecordLockTile':
                                    return 1000;
                            }
                            return 0;
                        },
                        R['prototype']['doRecord'] = function(l) {
                            try {
                                var a = 0;
                                switch (l.name) {
                                    case 'RecordNewRound':
                                        a = view['ActionNewRound']['record'](l.data);
                                        break;
                                    case 'RecordChangeTile':
                                        a = view['ActionChangeTile']['record'](l.data);
                                        break;
                                    case 'RecordSelectGap':
                                        a = view['ActionSelectGap']['record'](l.data);
                                        break;
                                    case 'RecordDiscardTile':
                                        a = view['ActionDiscardTile']['record'](l.data);
                                        break;
                                    case 'RecordDealTile':
                                        a = view['ActionDealTile']['record'](l.data);
                                        break;
                                    case 'RecordChiPengGang':
                                        a = view['ActionChiPengGang']['record'](l.data);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        a = view['ActionAnGangAddGang']['record'](l.data);
                                        break;
                                    case 'RecordBaBei':
                                        a = view['ActionBabei']['record'](l.data);
                                        break;
                                    case 'RecordHule':
                                        a = view['ActionHule']['record'](l.data);
                                        break;
                                    case 'RecordLiuJu':
                                        a = view['ActionLiuJu']['record'](l.data);
                                        break;
                                    case 'RecordNoTile':
                                        a = view['ActionNoTile']['record'](l.data);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        a = view['ActionHuleXueZhanMid']['record'](l.data);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        a = view['ActionHuleXueZhanEnd']['record'](l.data);
                                        break;
                                    case 'RecordGangResult':
                                        a = view['ActionGangResult']['record'](l.data);
                                        break;
                                    case 'RecordGangResultEnd':
                                        a = view['ActionGangResultEnd']['record'](l.data);
                                        break;
                                    case 'RecordRevealTile':
                                        a = view['ActionRevealTile']['record'](l.data);
                                        break;
                                    case 'RecordLockTile':
                                        a = view['ActionLockTile']['record'](l.data);
                                        break;
                                    case 'RecordUnveilTile':
                                        a = view['ActionUnveilTile']['record'](l.data);
                                        break;
                                    case 'RecordNewCard':
                                        a = view['ActionNewCard']['record'](l.data);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        a = view['ActionFillAwaitingTiles']['record'](l.data);
                                }
                                return this['auto_play'] && (a += this['_get_autoplay_delay'](l)),
                                    ('RecordNewRound' == l.name || 'RecordDealTile' == l.name || view['DesktopMgr'].Inst['is_zhanxing_mode']() && 'RecordDiscardTile' == l.name || 'RecordFillAwaitingTiles' == l.name) && this['page_paishan']['refresh'](),
                                    a;
                            } catch (U) {
                                var z = {};
                                return z['error'] = U['message'],
                                    z['stack'] = U['stack'],
                                    z['method'] = 'ui_replay doRecord',
                                    z.name = l.name,
                                    z.data = l.data,
                                    GameMgr.Inst['onFatalError'](z),
                                    1000000;
                            }
                        },
                        R['prototype']['doFastRecord'] = function(l) {
                            try {
                                switch (l.name) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](l.data);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordSelectGap':
                                        view['ActionSelectGap']['fastrecord'](l.data);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](l.data);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](l.data);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](l.data);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](l.data);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](l.data);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](l.data);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](l.data);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordGangResult':
                                        view['ActionGangResult']['fastrecord'](l.data);
                                        break;
                                    case 'RecordGangResultEnd':
                                        view['ActionGangResultEnd']['fastrecord'](l.data);
                                        break;
                                    case 'RecordNewCard':
                                        view['ActionNewCard']['fastrecord'](l.data);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](l.data);
                                }
                                ('RecordNewRound' == l.name || 'RecordDealTile' == l.name || view['DesktopMgr'].Inst['is_zhanxing_mode']() && 'RecordDiscardTile' == l.name || 'RecordFillAwaitingTiles' == l.name) && this['page_paishan']['refresh']();
                            } catch (a) {
                                var U = {};
                                return U['error'] = a['message'],
                                    U['stack'] = a['stack'],
                                    U['method'] = 'ui_replay doRecord',
                                    U.name = l.name,
                                    U.data = l.data,
                                    GameMgr.Inst['onFatalError'](U),
                                    1000000;
                            }
                            return 0;
                        },
                        R['prototype']['update'] = function() {
                            !this['auto_play'] || this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= 0 && this['round_index'] < this['rounds']['length'] && this['action_index'] + 1 < this['rounds'][this['round_index']]['actions']['length'] && (this['nextStep'](!1, !0),
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
                        R['prototype']['jumpToLastRoundXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            this['round_index'] = (this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'];
                            var l = this['rounds'][this['round_index']],
                                a = l['actions']['length'] - 3;
                            1 > a && (a = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': a - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': a - 1
                                        }));
                                    }
                                }));
                            this['_jumpStep'](this['round_index'], a);
                        },
                        R['prototype']['nextXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var l = this['rounds'][this['round_index']];
                                if (this['action_index'] == l['actions']['length'] - 1)
                                    return this['nextStep'](), void 0;
                                var a = 0;
                                if (0 == l.xun['length'])
                                    a = l['actions']['length'] - 1;
                                else if (l.xun[0] > this['action_index'])
                                    a = l.xun[0];
                                else {
                                    var U = this['get_currentxun']();
                                    a = U == l.xun['length'] ? l['actions']['length'] - 1 : l.xun[U];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextXun",
                                        'fast_record_to': a - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': a - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], a);
                            }
                        },
                        R['prototype']['preXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var l = this['rounds'][this['round_index']];
                                if (0 == this['action_index'] || 'RecordNewRound' == l['actions'][this['action_index']].name)
                                    return this['jumpToLastRoundXun'](), void 0;
                                var a = 0;
                                if (0 == l.xun['length'])
                                    a = 0;
                                else if (l.xun[0] > this['action_index'])
                                    a = 0;
                                else {
                                    var U = this['get_currentxun']() - 1;
                                    a = 0 == U ? 0 : l.xun[U - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': a - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': a - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], a);
                            }
                        },
                        R['prototype']['preStep'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var l = this['rounds'][this['round_index']];
                                return 0 == this['action_index'] || 'RecordNewRound' == l['actions'][this['action_index']].name ? (this['jumpToLastRoundXun'](), void 0) : (
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
                        R['prototype']['nextRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
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
                        R['prototype']['preRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
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
                        R['prototype']['jumpRound'] = function(l) {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (0 > l || l >= this['rounds']['length'] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': l
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': l
                                            }));
                                        }
                                    })) ||
                                    this["_jumpStep"](l, 0), void 0);
                        },
                        R['prototype']['jumpXun'] = function(l) {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var a = this['rounds'][this['round_index']],
                                    U = 0;
                                U = 0 == a.xun['length'] ? 0 : 0 == l ? 0 : a.xun[l - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': U - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': U - 1
                                            }));
                                        }
                                    })),
                                    this['_jumpStep'](this['round_index'], U);
                            }
                        },
                        R['prototype']['onWheelClick'] = function() {
                            return this['page_chang']['locking'] || this['page_xun']['locking'] ? void 0 : this['page_chang']['enable'] || this['page_xun']['enable'] ? (this['page_chang']['enable'] && this['page_chang']['close'](), this['page_xun']['enable'] && this['page_xun']['close'](), void 0) : (
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
                        R['prototype']['onChangeMainBody'] = function() {
                            var l = this['round_index'],
                                a = this['action_index'];
                            this['initData'](this.data),
                                this['reset'](),
                                l >= this['rounds']['length'] || 0 > l || this['_jumpStep'](l, a);
                        },
                        R['prototype']['_jumpStep'] = function(l, a) {
                            var U = this['rounds'][l];
                            this['round_index'] = l,
                                U['actions'][a] && U['actions'][a + 1] && 'RecordNewCard' == U['actions'][a].name && a++;
                            for (var z = 0; a > z; z++) {
                                if (z > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][z - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][z - 1].name)) {
                                    var M = this['rounds'][this['round_index']]['actions'][z - 1].data.seat;
                                    M != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](M)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](U['actions'][z]);
                            }
                            if (a == U['actions']['length'] - 1)
                                this['action_index'] = a - 1, this['nextStep']();
                            else {
                                if (a > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][a - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][a - 1].name)) {
                                    var M = this['rounds'][this['round_index']]['actions'][a - 1].data.seat;
                                    M != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](M)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](U['actions'][a]),
                                    this['action_index'] = a,
                                    this['_refreshBarshow']();
                            }
                        },
                        R['prototype']['_lipai_all'] = function() {
                            for (var l = 1; l < view['DesktopMgr'].Inst['players']['length']; l++)
                                view['DesktopMgr'].Inst['players'][l]['RecordLiPai'](0);
                        },
                        R.Inst = null,
                        R;
                }
                (l['UIBase']);
            l['UI_Replay'] = g;
        }
        (uiscript || (uiscript = {}));

        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this,
                                z = l['DesktopMgr'].Inst.mode == l['EMJMode'].play || l['DesktopMgr'].Inst['record_show_anim'];
                            a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                void 0 != a['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting']),
                                Laya['timer'].once(100, this, function() {
                                    var M = a['hules'],
                                        g = 0;
                                    if (M[0].zimo) {
                                        var R = M[0].seat;
                                        l['DesktopMgr'].Inst['setTingpai'](R, []),
                                            z && uiscript['UI_Huleshow'].Inst['showZimo']([l['DesktopMgr'].Inst['seat2LocalPosition'](R)]),
                                            a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                            g += z ? 1200 : 200,
                                            Laya['timer'].once(g, U, function() {
                                                var a = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](R)];
                                                a['onXuezhanMidHule'](!0, mjcore['MJPai']['Create'](M[0]['hu_tile']), !1);
                                            });
                                    } else {
                                        for (var E = 0, C = -1, B = [], w = 0; w < M['length']; w++) {
                                            var L = M[w].seat;
                                            l['DesktopMgr'].Inst['setTingpai'](L, []),
                                                B.push(l['DesktopMgr'].Inst['seat2LocalPosition'](L)), -1 == C && (C = L);
                                        }
                                        C >= 0 && (E = l['DesktopMgr'].Inst['player_effects'][C][game['EView']['hupai_effect']]),
                                            z && uiscript['UI_Huleshow'].Inst['showRong'](B),
                                            g += z ? 1200 : 200,
                                            Laya['timer'].once(g, U, function() {
                                                for (var a = 0; a < M['length']; a++) {
                                                    var U = M[a].seat;
                                                    l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['onXuezhanMidHule'](!1, mjcore['MJPai']['Create'](M[a]['hu_tile']), !1);
                                                }
                                                l['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                                    l['DesktopMgr'].Inst['lastqipai']['OnChoosedPai'](),
                                                    l['DesktopMgr'].Inst['ShowHuleEffect'](l['DesktopMgr'].Inst['lastqipai'], l['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], E, l['DesktopMgr'].Inst['lastpai_seat'], l['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                            });
                                    }
                                    g += 2000,
                                        Laya['timer'].once(g, U, function() {
                                            for (var z = 0, g = l['DesktopMgr'].Inst['players']; z < g['length']; z++) {
                                                var R = g[z];
                                                R['hideLiqi']();
                                            }
                                            a.liqi ? Laya['timer'].once(2500, U, function() {
                                                l['ActionLiqi'].play(a.liqi);
                                            }) : uiscript['UI_DesktopInfo'].Inst['setLiqibang'](0);
                                            for (var E = [], C = 0; C < a['delta_scores']['length']; C++) {
                                                var B = {
                                                    title_id: 0,
                                                    score: 0,
                                                    delta: 0
                                                };
                                                if (a['delta_scores'][C] > 0) {
                                                    C == l['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1)),
                                                        uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](C, 'emoji_7', -1),
                                                        B['delta'] = a['delta_scores'][C];
                                                    for (var w = 0, L = M; w < L['length']; w++) {
                                                        var c = L[w];
                                                        if (c.seat == C) {
                                                            B['title_id'] = c['title_id'];
                                                            break;
                                                        }
                                                    }
                                                } else
                                                    a['delta_scores'][C] < 0 && (B['delta'] = a['delta_scores'][C], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](C, 'emoji_8', -1));
                                                B['score'] = a['old_scores'][C],
                                                    E.push(B);
                                            }
                                            Laya['timer'].once(200, U, function() {
                                                    l['DesktopMgr'].Inst['setScores'](a['scores']);
                                                }),
                                                uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](E);
                                        }),
                                        g += 3000,
                                        Laya['timer'].once(g, U, function() {
                                            l['DesktopMgr'].Inst['ActionRunComplete']();
                                        });
                                });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](a)),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1);
                            var U = a['hules'];
                            if (void 0 != a['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting']), U[0].zimo) {
                                var z = U[0].seat;
                                l['DesktopMgr'].Inst['setTingpai'](z, []);
                                var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)];
                                M['onXuezhanMidHule'](!0, mjcore['MJPai']['Create'](U[0]['hu_tile']), !0),
                                    z == l['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                            } else {
                                for (var z = -1, g = [], R = 0; R < U['length']; R++) {
                                    var E = U[R].seat;
                                    z == l['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1)),
                                        l['DesktopMgr'].Inst['setTingpai'](E, []),
                                        g.push(l['DesktopMgr'].Inst['seat2LocalPosition'](E)), -1 == z && (z = E);
                                }
                                for (var R = 0; R < U['length']; R++) {
                                    var E = U[R].seat;
                                    l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](E)]['onXuezhanMidHule'](!1, mjcore['MJPai']['Create'](U[R]['hu_tile']), !0);
                                }
                                l['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                    l['DesktopMgr'].Inst['lastqipai']['OnChoosedPai']();
                            }
                            for (var C = 0, B = l['DesktopMgr'].Inst['players']; C < B['length']; C++) {
                                var M = B[C];
                                M['hideLiqi']();
                            }
                            a.liqi ? l['ActionLiqi']['fastplay'](a.liqi, 0) : uiscript['UI_DesktopInfo'].Inst['setLiqibang'](0),
                                l['DesktopMgr'].Inst['setScores'](a['scores']);
                        },
                        U['record'] = function(l) {
                            return this.play(l),
                                6000;
                        },
                        U['fastrecord'] = function(a) {
                            a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                this['fastplay'](a, 1000);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionHuleXueZhanMid'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            for (var U = 0, z = a['gang_infos'], M = !1, g = [], R = 0; R < z['delta_scores']['length']; R++) {
                                var E = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                z['delta_scores'][R] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](R, 'emoji_7', -1), E['delta'] = z['delta_scores'][R], M = !0) : z['delta_scores'][R] < 0 && (E['delta'] = z['delta_scores'][R], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](R, 'emoji_8', -1), M = !0),
                                    E['score'] = z['old_scores'][R],
                                    g.push(E);
                            }
                            M && (Laya['timer'].once(200, this, function() {
                                    l['DesktopMgr'].Inst['setScores'](z['scores']);
                                }), uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](g), U += 2000),
                                l['DesktopMgr'].Inst['mainrole']['revertAllPais'](),
                                Laya['timer'].once(U, this, function() {
                                    l['DesktopMgr'].Inst['ActionRunComplete']();
                                });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](a));
                            var U = a['gang_infos'];
                            l['DesktopMgr'].Inst['setScores'](U['scores']);
                        },
                        U['record'] = function(l) {
                            return this.play(l),
                                2000;
                        },
                        U['fastrecord'] = function(l) {
                            this['fastplay'](l, 1000);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionGangResult'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionRevealTile play data:' + JSON['stringify'](a));
                            var U = a.seat,
                                z = mjcore['MJPai']['Create'](a.tile ? a.tile : '5z'),
                                M = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']);
                            if (l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['AddQiPai'](z, M, a['moqie'], !0, U == l['DesktopMgr'].Inst.seat ? l['ERevealState'].self : l['ERevealState']['reveal']), M) {
                                a['is_wliqi'] ? l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['PlaySound']('act_drich_anpai') : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['PlaySound']('act_rich_anpai');
                                var g = l['DesktopMgr'].Inst['player_effects'][U][game['EView']['lizhi_bgm']];
                                if (g && 0 != g) {
                                    var R = cfg['item_definition'].item.get(g)['sargs'][0];
                                    l['AudioMgr']['lizhiMuted'] ? l['AudioMgr']['PlayLiqiBgm'](R, 300, !0) : (l['BgmListMgr']['stopBgm'](), Laya['timer'].once(1000, this, function() {
                                        l['DesktopMgr'].Inst['gameing'] && (l['BgmListMgr']['PlayMJBgm']('', !0), l['AudioMgr']['PlayLiqiBgm'](R, 300, !0));
                                    }));
                                }
                            }
                            U == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](z, !1, !1, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['onDiscardTile'](a['moqie'], a.tile, !1, !1),
                                a['operation'] && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                U == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !1),
                                Laya['timer'].once(500, this, function() {
                                    M ? l['DesktopMgr'].Inst['clearMindVoice']() : l['DesktopMgr'].Inst['playMindVoice']();
                                }),
                                l['DesktopMgr'].Inst['setScores'](a['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']),
                                l['DesktopMgr'].Inst['onRevealStateChange'](U, !0);
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionRevealTile fastplay data:' + JSON['stringify'](a) + ' usetime:' + U);
                            var z = a.seat,
                                M = mjcore['MJPai']['Create'](a.tile ? a.tile : '5z'),
                                g = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']);
                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddQiPai'](M, g, a['moqie'], !1, z == l['DesktopMgr'].Inst.seat ? l['ERevealState'].self : l['ERevealState']['reveal']),
                                z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](M, !1, !0, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['onDiscardTile'](a['moqie'], a.tile, !1, !0),
                                a['operation'] && -1 != U && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation'], U);
                                }),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                z == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !0),
                                l['DesktopMgr'].Inst['setScores'](a['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang'], !1),
                                l['DesktopMgr'].Inst['onRevealStateChange'](z, !0);
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionRevealTile record data:' + JSON['stringify'](a));
                            var z = a.seat,
                                M = mjcore['MJPai']['Create'](a.tile),
                                g = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']),
                                R = l['DesktopMgr'].Inst['record_show_hand'] || z == l['DesktopMgr'].Inst.seat ? l['ERevealState'].self : l['ERevealState']['reveal'];
                            if (l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddQiPai'](M, g, a['moqie'], !0, R), g && (a['is_wliqi'] ? l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['PlaySound']('act_drich_anpai') : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['PlaySound']('act_rich_anpai'), uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](z, 'emoji_9', 2000)), z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](M, !1, !1, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordDiscardTile'](M, a['moqie'], !1, !1), a['tingpais'] && l['DesktopMgr'].Inst['setTingpai'](a.seat, a['tingpais']), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var E = 0; E < a['operations']['length']; E++)
                                    l['ActionOperation'].ob(a['operations'][E], U, 450);
                            return l['DesktopMgr'].Inst['setScores'](a['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']),
                                l['DesktopMgr'].Inst['onRevealStateChange'](z, !0),
                                1000;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                app.Log.log('ActionRevealTile fastrecord data:' + JSON['stringify'](a));
                            var z = a.seat,
                                M = mjcore['MJPai']['Create'](a.tile ? a.tile : '5z'),
                                g = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']),
                                R = l['DesktopMgr'].Inst['record_show_hand'] || z == l['DesktopMgr'].Inst.seat ? l['ERevealState'].self : l['ERevealState']['reveal'];
                            if (l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddQiPai'](M, g, a['moqie'], !1, R), z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](M, !1, !0, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordDiscardTile'](M, a['moqie'], !1, !0), a['tingpais'] && l['DesktopMgr'].Inst['setTingpai'](a.seat, a['tingpais']), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operations'])
                                for (var E = 0; E < a['operations']['length']; E++)
                                    l['ActionOperation'].ob(a['operations'][E], U, 450);
                            l['DesktopMgr'].Inst['setScores'](a['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang'], !1),
                                l['DesktopMgr'].Inst['onRevealStateChange'](z, !0);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionRevealTile'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this;
                            app.Log.log('ActionChangeTile play data:' + JSON['stringify'](a));
                            for (var z = function(U) {
                                    var z = l['DesktopMgr'].Inst['players'][U],
                                        g = [];
                                    if (0 == U) {
                                        z['onHuanSanZhang_Remove'](a['out_tiles'], a['out_tile_states'], !1);
                                        for (var R = 0; 3 > R; R++)
                                            g.push(mjcore['MJPai']['Create'](a['out_tiles'][R]));
                                    } else {
                                        z['onHuanSanZhang_Remove']();
                                        for (var R = 0; 3 > R; R++)
                                            g.push(mjcore['MJPai']['Create']('5z'));
                                    }
                                    z['ShowHuanSanZhang'](g, a['change_type']),
                                        Laya['timer'].once(2500, M, function() {
                                            0 == U ? z['onHuanSanZhang_Add'](a['in_tiles'], a['in_tile_states'], !1) : z['onHuanSanZhang_Add']();
                                        });
                                }, M = this, g = 0; g < l['DesktopMgr'].Inst['players']['length']; g++) z(g);
                            uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](),
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst.show(a['change_type']),
                                Laya['timer'].once(2500, this, function() {
                                    l['DesktopMgr'].Inst['is_dora3_mode']() && uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine'](),
                                        Laya['timer'].once(200, U, function() {
                                            if (a['doras'] && a['doras']['length'] > 0)
                                                for (var U = 0; U < a['doras']['length']; U++)
                                                    l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][U])), uiscript['UI_DesktopInfo'].Inst['setDora'](U, l['DesktopMgr'].Inst.dora[U]);
                                            for (var U = 0; 4 > U; U++)
                                                l['DesktopMgr'].Inst['players'][U]['OnDoraRefresh']();
                                            if (l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat) {
                                                var z = {
                                                    tingpais: a['tingpais0'],
                                                    operation: a['operation']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData0'](z);
                                            } else {
                                                var z = {
                                                    tingpais: a['tingpais1']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData1'](z, !1);
                                            }
                                            l['DesktopMgr'].Inst['ActionRunComplete']();
                                        }),
                                        void 0 != a['operation'] && l['ActionOperation'].play(a['operation']);
                                });
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionChangeTile fastplay data:' + JSON['stringify'](a));
                            for (var z = 0; z < l['DesktopMgr'].Inst['players']['length']; z++) {
                                var M = l['DesktopMgr'].Inst['players'][z];
                                0 == z ? (M['onHuanSanZhang_Remove'](a['out_tiles'], a['out_tile_states'], !0), M['onHuanSanZhang_Add'](a['in_tiles'], a['in_tile_states'], !0)) : (M['onHuanSanZhang_Add'](), M['onHuanSanZhang_Remove']());
                            }
                            if (uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](), a['doras'] && a['doras']['length'] > 0)
                                for (var z = 0; z < a['doras']['length']; z++)
                                    l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][z])), uiscript['UI_DesktopInfo'].Inst['setDora'](z, l['DesktopMgr'].Inst.dora[z]);
                            for (var z = 0; 4 > z; z++)
                                l['DesktopMgr'].Inst['players'][z]['OnDoraRefresh']();
                            if (l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat) {
                                var g = {
                                    tingpais: a['tingpais0'],
                                    operation: a['operation']
                                };
                                uiscript['UI_TingPai'].Inst['setData0'](g);
                            } else {
                                var g = {
                                    tingpais: a['tingpais1']
                                };
                                uiscript['UI_TingPai'].Inst['setData1'](g, !1);
                            }
                            a['operation'] && -1 != U && Laya['timer'].once(100, this, function() {
                                l['ActionOperation'].play(a['operation'], U + 100);
                            });
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionChangeTile record data:' + JSON['stringify'](a));
                            for (var z = function(U) {
                                    var z = l['DesktopMgr'].Inst['players'][U],
                                        g = a['change_tile_infos'][l['DesktopMgr'].Inst['localPosition2Seat'](U)];
                                    0 == U ? z['onHuanSanZhang_Remove'](g['out_tiles'], g['out_tile_states'], !1) : z['recordHuanSanZhang_Remove'](g['out_tiles'], g['out_tile_states']);
                                    for (var R = [], E = 0; 3 > E; E++)
                                        R.push(mjcore['MJPai']['Create'](g['out_tiles'][E]));
                                    z['ShowHuanSanZhang'](R, a['change_type']),
                                        Laya['timer'].once(2500, M, function() {
                                            0 == U ? z['onHuanSanZhang_Add'](g['in_tiles'], g['in_tile_states'], !1) : z['recordHuanSanZhang_Add'](g['in_tiles'], g['in_tile_states']);
                                        });
                                }, M = this, g = 0; g < l['DesktopMgr'].Inst['players']['length']; g++) z(g);
                            return uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](),
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst.show(a['change_type']),
                                Laya['timer'].once(2500, this, function() {
                                    if (l['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        var z = a['operations'][l['DesktopMgr'].Inst['localPosition2Seat'](l['DesktopMgr'].Inst.seat)];
                                        l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && z && l['ActionOperation'].ob(z, U, 1000);
                                    } else {
                                        if (a['doras'] && a['doras']['length'] > 0)
                                            for (var M = 0; M < a['doras']['length']; M++)
                                                l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][M])), uiscript['UI_DesktopInfo'].Inst['setDora'](M, l['DesktopMgr'].Inst.dora[M]);
                                        else
                                            a.dora && '' != a.dora && (l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, l['DesktopMgr'].Inst.dora[0]));
                                        for (var M = 0; 4 > M; M++)
                                            l['DesktopMgr'].Inst['players'][M]['OnDoraRefresh']();
                                        if (a['tingpai'])
                                            for (var M = 0; M < a['tingpai']['length']; M++)
                                                a['tingpai'][M].seat != l['DesktopMgr'].Inst['index_ju'] && l['DesktopMgr'].Inst['setTingpai'](a['tingpai'][M].seat, a['tingpai'][M]['tingpais1']);
                                        l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 1000);
                                    }
                                }),
                                3000;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1);
                            for (var z = 0; z < l['DesktopMgr'].Inst['players']['length']; z++) {
                                var M = l['DesktopMgr'].Inst['players'][z],
                                    g = a['change_tile_infos'][l['DesktopMgr'].Inst['localPosition2Seat'](z)];
                                0 == z ? (M['onHuanSanZhang_Remove'](g['out_tiles'], g['out_tile_states'], !0), M['onHuanSanZhang_Add'](g['in_tiles'], g['in_tile_states'], !0)) : (M['recordHuanSanZhang_Remove'](g['out_tiles'], g['out_tile_states']), M['recordHuanSanZhang_Add'](g['in_tiles'], g['in_tile_states']));
                            }
                            if (uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](), a['doras'] && a['doras']['length'] > 0)
                                for (var z = 0; z < a['doras']['length']; z++)
                                    l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][z])), uiscript['UI_DesktopInfo'].Inst['setDora'](z, l['DesktopMgr'].Inst.dora[z]);
                            else
                                a.dora && '' != a.dora && (l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, l['DesktopMgr'].Inst.dora[0]));
                            for (var z = 0; 4 > z; z++)
                                l['DesktopMgr'].Inst['players'][z]['OnDoraRefresh']();
                            if (a['tingpai'])
                                for (var z = 0; z < a['tingpai']['length']; z++)
                                    a['tingpai'][z].seat != l['DesktopMgr'].Inst['index_ju'] && l['DesktopMgr'].Inst['setTingpai'](a['tingpai'][z].seat, a['tingpai'][z]['tingpais1']);
                            l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 1000);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionChangeTile'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this;
                            app.Log.log('ActionSelectGap play data:' + JSON['stringify'](a));
                            for (var z = 0; z < a['gap_types']['length']; z++) {
                                var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)];
                                M['SetGapType'](a['gap_types'][z]);
                            }
                            uiscript['UI_DesktopInfo'].Inst['setGapType'](a['gap_types'], !0),
                                uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](),
                                Laya['timer'].once(500, this, function() {
                                    l['DesktopMgr'].Inst['is_dora3_mode']() && uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine'](),
                                        Laya['timer'].once(200, U, function() {
                                            if (l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat) {
                                                var U = {
                                                    tingpais: a['tingpais0'],
                                                    operation: a['operation']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData0'](U);
                                            } else {
                                                var U = {
                                                    tingpais: a['tingpais1']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData1'](U, !1);
                                            }
                                            l['DesktopMgr'].Inst['ActionRunComplete']();
                                        }),
                                        void 0 != a['operation'] && l['ActionOperation'].play(a['operation']);
                                });
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionChangeTile fastplay data:' + JSON['stringify'](a));
                            for (var z = 0; z < a['gap_types']['length']; z++) {
                                var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)];
                                M['SetGapType'](a['gap_types'][z]);
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['setGapType'](a['gap_types']), uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](), l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat) {
                                var g = {
                                    tingpais: a['tingpais0'],
                                    operation: a['operation']
                                };
                                uiscript['UI_TingPai'].Inst['setData0'](g);
                            } else {
                                var g = {
                                    tingpais: a['tingpais1']
                                };
                                uiscript['UI_TingPai'].Inst['setData1'](g, !1);
                            }
                            a['operation'] && -1 != U && Laya['timer'].once(100, this, function() {
                                l['ActionOperation'].play(a['operation'], U + 100);
                            });
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionChangeTile record data:' + JSON['stringify'](a));
                            for (var z = 0; z < a['gap_types']['length']; z++) {
                                var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)];
                                M['SetGapType'](a['gap_types'][z]);
                            }
                            return uiscript['UI_DesktopInfo'].Inst['setGapType'](a['gap_types'], !0),
                                uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](),
                                Laya['timer'].once(500, this, function() {
                                    if (a['tingpai'])
                                        for (var z = 0; z < a['tingpai']['length']; z++)
                                            a['tingpai'][z].seat != l['DesktopMgr'].Inst['index_ju'] && l['DesktopMgr'].Inst['setTingpai'](a['tingpai'][z].seat, a['tingpai'][z]['tingpais1']);
                                    l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 1000);
                                }),
                                1300;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1);
                            for (var z = 0; z < a['gap_types']['length']; z++) {
                                var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)];
                                M['SetGapType'](a['gap_types'][z]);
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['setGapType'](a['gap_types']), uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](), a['tingpai'])
                                for (var z = 0; z < a['tingpai']['length']; z++)
                                    a['tingpai'][z].seat != l['DesktopMgr'].Inst['index_ju'] && l['DesktopMgr'].Inst['setTingpai'](a['tingpai'][z].seat, a['tingpai'][z]['tingpais1']);
                            l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 1000);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionSelectGap'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionLiqi play data:' + JSON['stringify'](a)),
                                Laya['timer'].once(300, this, function() {
                                    var U = a.seat,
                                        z = a['score'],
                                        M = l['DesktopMgr'].Inst['seat2LocalPosition'](U);
                                    a['failed'] ? l['DesktopMgr'].Inst['players'][M]['ShowLiqiFailed']() : l['DesktopMgr'].Inst['players'][M]['ShowLiqi'](),
                                        l['DesktopMgr'].Inst['players'][M]['SetScore'](z, l['DesktopMgr'].Inst['mainrole']['score']),
                                        uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                                });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionLiqi fastplay data:' + JSON['stringify'](a));
                            var U = a.seat,
                                z = a['score'],
                                M = l['DesktopMgr'].Inst['seat2LocalPosition'](U);
                            a['failed'] ? l['DesktopMgr'].Inst['players'][M]['ShowLiqiFailed'](!1) : l['DesktopMgr'].Inst['players'][M]['ShowLiqi'](!1),
                                l['DesktopMgr'].Inst['players'][M]['SetScore'](z, l['DesktopMgr'].Inst['mainrole']['score']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang'], !1);
                        },
                        U['record'] = function(l) {
                            return app.Log.log('ActionLiqi record data:' + JSON['stringify'](l)),
                                this.play(l),
                                0;
                        },
                        U['fastrecord'] = function(l) {
                            app.Log.log('ActionLiqi fastrecord data:' + JSON['stringify'](l)),
                                this['fastplay'](l, 0);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionLiqi'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function() {
                    function l(a) {
                        this.me = a,
                            l['scene_entrance'] = 'chs' != GameMgr['client_language'] ? 'scene/entrance_' + GameMgr['client_language'] + '.ls' : 'scene/entrance.ls';
                    }
                    return l['prototype'].show = function() {
                            this['scene'] = Laya['loader']['getRes'](l['scene_entrance']),
                                this.me['addChild'](this['scene']),
                                this['scene']['visible'] = !0;
                        },
                        l['prototype']['close'] = function() {
                            Laya['timer']['clearAll'](this),
                                this['scene']['visible'] = !1,
                                this['scene']['destroy'](!0);
                        },
                        l['scene_entrance'] = '',
                        l;
                }
                (),
                U = function() {
                    function l(l) {
                        this.me = l,
                            this['round'] = this.me['getChildByName']('round'),
                            this.word = this.me['getChildByName']('word'),
                            this.icon = this.me['getChildByName']('icon'),
                            this.me['visible'] = !1;
                    }
                    return l['prototype'].show = function(l) {
                            var a = this;
                            if (!this.me['visible']) {
                                this.me['visible'] = !0;
                                var U = Laya['timer']['currTimer'];
                                if (Laya['timer']['frameLoop'](1, this, function() {
                                        a['round']['rotation'] = (Laya['timer']['currTimer'] - U) / 2000 * 360;
                                    }), this.word.text = game['Tools']['strOfLocalization'](2053), 0 == l)
                                    this.icon['visible'] = !1, this.word.y = 150;
                                else
                                    switch (this.icon['visible'] = !0, this.word.y = 195, l) {
                                        case 1:
                                        case 4:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/weixin.png');
                                            break;
                                        case 2:
                                        case 5:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/weibo.png');
                                            break;
                                        case 3:
                                        case 6:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/QQ.png');
                                            break;
                                        case 7:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/yostar.png');
                                            break;
                                        case 8:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/google.png');
                                            break;
                                        case 9:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/facebook.png');
                                            break;
                                        case 10:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/tiwtter.png');
                                            break;
                                        case 13:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/facebook.png');
                                            break;
                                        default:
                                            this.icon['visible'] = !1,
                                                this.word.y = 150;
                                    }
                            }
                        },
                        l['prototype']['close'] = function() {
                            Laya['timer']['clearAll'](this),
                                this.me['visible'] = !1;
                        },
                        l;
                }
                (),
                z = function() {
                    function a(a) {
                        var U = this;
                        this['saveflag'] = !0,
                            this['locking'] = !1,
                            this['last_mail_time'] = -1,
                            this.me = a,
                            this.me['visible'] = !1,
                            this.root = this.me['getChildByName']('jpenroot'),
                            this.root['getChildByName']('btn_close')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['locking'] || U['close']();
                            }, null, !1),
                            this['input_account'] = this.root['getChildByName']('container_mail')['getChildByName']('txtinput'),
                            this['label_account_no'] = this.root['getChildByName']('container_mail')['getChildByName']('no'),
                            this['input_account'].on('input', this, function() {
                                U['label_account_no']['visible'] && (U['label_account_no']['visible'] = !1),
                                    '' != U['input_code'].text && '' != U['input_account'].text && game['Tools']['setGrayDisable'](U['btn_regist'], !1);
                            }),
                            this['input_code'] = this.root['getChildByName']('container_yanzhengma')['getChildByName']('txtinput'),
                            this['input_code'].on('input', this, function() {
                                '' != U['input_code'].text && '' != U['input_account'].text && game['Tools']['setGrayDisable'](U['btn_regist'], !1);
                            }),
                            this['btn_getcode'] = this.root['getChildByName']('sendbutton')['getChildByName']('btn'),
                            this['btn_getcode']['clickHandler'] = new Laya['Handler'](this, function() {
                                var l = U['input_account'].text,
                                    a = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                a.test(l) ? (Yo['request']({
                                    account: l,
                                    lang: 'jp' == GameMgr['client_type'] ? 'ja' : 'kr' == GameMgr['client_type'] || 'kr' == GameMgr['client_language'] ? 'kr' : 'en'
                                }).then(function(l) {
                                    l ? 0 === l['result'] ? g.Inst['showInfo'](game['Tools']['strOfLocalization'](2688)) : '50003' === l['result'] ? g.Inst['showError'](game['Tools']['strOfLocalization'](2684)) : '50004' === l['result'] ? g.Inst['showError'](game['Tools']['strOfLocalization'](2685)) : g.Inst['showError'](game['Tools']['strOfLocalization'](2683)) : g.Inst['showError'](game['Tools']['strOfLocalization'](2683));
                                }), U['last_mail_time'] = Laya['timer']['currTimer'], U['refresh_code_state']()) : U['label_account_no']['visible'] = !0;
                            }),
                            this['btn_regist'] = this.root['getChildByName']('btn_enter'),
                            this['btn_regist']['clickHandler'] = new Laya['Handler'](this, function() {
                                if (!U['locking']) {
                                    app.Log.log('btn mail login');
                                    var l = g.Inst['login_index'],
                                        a = U['input_account'].text;
                                    Yo['submit']({
                                            account: U['input_account'].text,
                                            code: U['input_code'].text
                                        }).then(function(U) {
                                            l == g.Inst['login_index'] && (U ? (app.Log.log('mail login submit result:' + U['result']), 0 === U['result'] ? (game['LocalStorage']['setItem']('mail_account', a), g['onSocioBack'](7, U['token'], U.uid)) : '50016' === U['result'] ? (g.Inst['showError'](game['Tools']['strOfLocalization'](2686)), g.Inst['showContainerLogin']()) : '50009' === U['result'] ? (g.Inst['showError'](game['Tools']['strOfLocalization'](2687)), g.Inst['showContainerLogin']()) : (g.Inst['showError'](game['Tools']['strOfLocalization'](2689)), g.Inst['showContainerLogin']())) : (app.Log.log('mail login submit result: no'), g.Inst['showError'](game['Tools']['strOfLocalization'](2689)), g.Inst['showContainerLogin']()));
                                        }),
                                        1 == U['saveflag'] ? (game['LocalStorage']['setItem']('useremail', U['input_account'].text), game['LocalStorage']['setItem']('saveflag', 'true')) : (game['LocalStorage']['setItem']('label_info', ''), game['LocalStorage']['setItem']('saveflag', 'false')),
                                        U['close'](),
                                        g.Inst['showLoginLoading'](7);
                                }
                            }),
                            this['label_info'] = this.root['getChildByName']('sendbutton')['getChildByName']('label');
                        var z = this.root['getChildByName']('checkxieyi');
                        this['checkbox'] = z['getChildByName']('checkbox'),
                            z['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                U['checkbox']['visible'] = !U['checkbox']['visible'],
                                    U['btn_regist']['visible'] = U['checkbox']['visible'] && U['age_checkbox']['visible'];
                            });
                        var M;
                        if ('jp' == GameMgr['client_type'] ? (z['getChildByName']('en')['visible'] = !1, z['getChildByName']('kr')['visible'] = !1, M = z['getChildByName']('jp')) : 'kr' == GameMgr['client_language'] ? (z['getChildByName']('jp')['visible'] = !1, z['getChildByName']('en')['visible'] = !1, M = z['getChildByName']('kr')) : (z['getChildByName']('jp')['visible'] = !1, z['getChildByName']('kr')['visible'] = !1, M = z['getChildByName']('en')), z['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                U['checkbox']['visible'] = !U['checkbox']['visible'],
                                    U['btn_regist']['visible'] = 'kr' == GameMgr['client_type'] ? U['checkbox']['visible'] && U['age_checkbox']['visible'] : U['checkbox']['visible'];
                            }), M['getChildByName']('guize')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                'jp' == GameMgr['client_type'] ? l['UI_User_Xieyi_enjp'].Inst.show('docs/jp_liyongguiyue.txt') : 'en' == GameMgr['client_type'] ? l['UI_User_Xieyi_enjp'].Inst.show('docs/term_of_service.txt') : 'kr' == GameMgr['client_type'] && l['UI_User_Xieyi_enjp'].Inst.show('docs/kr_liyongguiyue.txt');
                            }, null, !1), M['getChildByName']('yinsi')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                'jp' == GameMgr['client_type'] ? l['UI_User_Xieyi_enjp'].Inst.show('docs/jp_yinsixieyi.txt') : 'en' == GameMgr['client_type'] ? l['UI_User_Xieyi_enjp'].Inst.show('docs/privacy_policy.txt') : 'kr' == GameMgr['client_type'] && l['UI_User_Xieyi_enjp'].Inst.show('docs/kr_yinsixieyi.txt');
                            }, null, !1), this.age = this.root['getChildByName']('age'), this['age_checkbox'] = this.age['getChildByName']('checkbox'), this.age['visible'] = 'kr' == GameMgr['client_type'], 'kr' == GameMgr['client_type']) {
                            this.age['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                U['age_checkbox']['visible'] = !U['age_checkbox']['visible'],
                                    U['btn_regist']['visible'] = U['checkbox']['visible'] && U['age_checkbox']['visible'];
                            });
                            var R = this.root['getChildByName']('bg');
                            R['getChildAt'](0)['height'] += 30,
                                R['getChildAt'](1)['height'] += 30,
                                this['btn_regist'].y += 30;
                        }
                    }
                    return a['prototype']['onchangecheck'] = function(l) {
                            this['checkbox']['visible'] = l,
                                this['btn_regist']['visible'] = l,
                                this.root['getChildByName']('checkxieyi')['visible'] = l;
                        },
                        a['prototype'].show = function() {
                            var a = this;
                            this['locking'] = !0,
                                this.me['visible'] = !0,
                                l['UIBase']['anim_pop_out'](this.root, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1;
                                })),
                                this['input_account'].text = '',
                                this['label_account_no']['visible'] = !1,
                                this['input_code'].text = '',
                                this['checkbox']['visible'] = !0,
                                this['age_checkbox']['visible'] = !0,
                                this['btn_regist']['visible'] = !0;
                            var U = game['LocalStorage']['getItem']('saveflag'),
                                z = game['LocalStorage']['getItem']('useremail');
                            'true' == U && (this['input_account'].text = z, app.Log.log(z)),
                                game['Tools']['setGrayDisable'](this['btn_regist'], !0),
                                Laya['timer']['clearAll'](this),
                                this['refresh_code_state'](),
                                Laya['timer'].loop(100, this, function() {
                                    a['refresh_code_state']();
                                });
                        },
                        a['prototype']['refresh_code_state'] = function() {
                            var l = 100000000;
                            game['Tools']['setGrayDisable'](this['btn_getcode'], !0),
                                this['last_mail_time'] > 0 && (l = Laya['timer']['currTimer'] - this['last_mail_time']),
                                60000 > l ? (this['label_info']['underline'] = !1, l = Math.ceil((60000 - l) / 1000), this['label_info'].text = game['Tools']['strOfLocalization'](2682, [l['toString']()]), this['label_info']['underline'] = !1, game['Tools']['setGrayDisable'](this['btn_getcode'], !0)) : (this['label_info'].text = game['Tools']['strOfLocalization'](2720), this['label_info']['underline'] = !0, game['Tools']['setGrayDisable'](this['btn_getcode'], !1));
                        },
                        a['prototype']['close'] = function() {
                            var a = this;
                            this['locking'] = !0,
                                l['UIBase']['anim_pop_hide'](this.root, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1,
                                        a.me['visible'] = !1,
                                        Laya['timer']['clearAll'](a);
                                }));
                        },
                        a;
                }
                (),
                M = function() {
                    function a(a) {
                        this['start_time'] = Laya['timer']['currTimer'],
                            this.data = null,
                            this.me = a,
                            this.info = this.me['getChildByName']('info'),
                            this['label_time'] = this.me['getChildByName']('time'),
                            this.img = this.me['getChildByName']('img'),
                            this.me['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                l['UI_Entrance_Choose_Route'].Inst.show();
                            });
                    }
                    return a['prototype']['onEnable'] = function() {
                            var l = this;
                            Laya['timer']['clearAll'](this),
                                this['update_data'](),
                                Laya['timer'].loop(100, this, function() {
                                    l['update_data']();
                                }),
                                Laya['timer']['frameLoop'](1, this, function() {
                                    l['refresh']();
                                });
                        },
                        a['prototype']['update'] = function() {
                            this['update_data']();
                        },
                        a['prototype']['update_data'] = function() {
                            var l = game['LobbyNetMgr'].Inst['GetLinkInfos'](),
                                a = game['LobbyNetMgr'].Inst['choosed_index'];
                            this.data = l[a],
                                this.info.text = game['Tools']['strOfLocalization'](3150) + (a + 1)['toString']();
                        },
                        a['prototype']['refresh'] = function() {
                            var l = this.data,
                                a = l['delay'];
                            l['connect'] == game['EConnectState']['connecting'] ? (this.img['visible'] = !1, this['label_time']['visible'] = !0, this['label_time'].text = 1 > a ? '--' : Math['floor'](a / 2) + 'ms', this['label_time']['fontSize'] = 30, this['label_time']['color'] = l['delay'] < 300 ? '#32dd5b' : l['delay'] < 800 ? '#ffe154' : '#e03737') : l['connect'] == game['EConnectState']['tryconnect'] ? (this.img['visible'] = !0, this['label_time']['visible'] = !1, this.img.skin = l['fetch'] == game['EFetchState']['success'] ? game['Tools']['localUISrc']('myres/entrance/connecting.png') : game['Tools']['localUISrc']('myres/entrance/fetching.png'), this.img['rotation'] = 0.5 * (Laya['timer']['currTimer'] - this['start_time'])) : (this.img['visible'] = !1, this['label_time']['visible'] = !0, this['label_time']['fontSize'] = 25, this['label_time']['color'] = '#7e818b', this['label_time'].text = l['in_maintenance'] ? game['Tools']['strOfLocalization'](3149) : l['fetch'] == game['EFetchState']['error'] ? game['Tools']['strOfLocalization'](3147) : game['Tools']['strOfLocalization'](3148));
                        },
                        a['prototype']['onClose'] = function() {
                            Laya['timer']['clearAll'](this);
                        },
                        a;
                }
                (),
                g = function(g) {
                    function R() {
                        var l = g.call(this, new ui['entrance']['entranceUI']()) || this;
                        return l['scene'] = null,
                            l['login_type_tabs'] = [],
                            l['txt_account'] = null,
                            l['txt_password'] = null,
                            l['btn_login_cd'] = 0,
                            l['login_loading'] = null,
                            l['route_info'] = null,
                            l['btn_add2desktop'] = null,
                            l['container_language'] = null,
                            l['label_language'] = null,
                            l['page_maillogin'] = null,
                            l['container_extendInfo'] = null,
                            l['xieyiflag'] = 0,
                            l['login_index'] = 0,
                            l['login_type_tab_index'] = -1,
                            l['login_account_input_info'] = {},
                            R.Inst = l,
                            l;
                    }
                    return __extends(R, g),
                        R['trySocio'] = function(a) {
                            var U = Laya['LocalStorage']['getItem']('_pre_sociotype'),
                                z = -1;
                            U && '' != U && (z = parseInt(U));
                            var M = !0;
                            if (z === a)
                                if (a >= 1 && 6 >= a) {
                                    var g = Laya['LocalStorage']['getItem']('_pre_code');
                                    g && '' != g && (M = !1, this['onSocioBack'](a, g, null));
                                } else if (7 == a);
                            else if (a >= 8 && 10 >= a) {
                                var R = game['LocalStorage']['getItem']('yostar_token');
                                R || (R = '');
                                var E = game['LocalStorage']['getItem']('yostar_uid');
                                E || (E = ''),
                                    '' != R && '' != E && (M = !1, this['onSocioBack'](a, R, E));
                            }
                            if (M)
                                if (GameMgr['inConch']) {
                                    var C = Laya['PlatformClass']['createClass']('layaair.majsoul.mjmgr');
                                    1 == a ? C.call('wxLogin') : 2 == a ? C.call('weiboLogin') : 3 == a && C.call('qqLogin');
                                } else if (GameMgr['iniOSWebview']) {
                                var B = '';
                                switch (a) {
                                    case 1:
                                        B = 'wxLogin';
                                        break;
                                    case 2:
                                        B = 'wbLogin';
                                        break;
                                    case 3:
                                        B = 'qqLogin';
                                }
                                if (B) {
                                    var w = this,
                                        L = function(l) {
                                            w['onSocioBack'](a + 3, l, null);
                                        };
                                    Laya['Browser']['window']['wkbridge']['callNative'](B, '', L);
                                }
                            } else {
                                var c = window['location'].href;
                                if (-1 != c['indexOf']('?') && (c = c['split']('?')[0]), 1 == a) {
                                    var h = 'https://open.weixin.qq.com/connect/qrconnect?';
                                    h += 'appid=wx2a0c2449cab74448',
                                        h += '&response_type=code',
                                        h += '&redirect_uri=' + encodeURI('https://www.majsoul.com/0?xdsfdl=1-' + c),
                                        h += '&scope=snsapi_login',
                                        Laya['Browser']['window']['location'].href = h;
                                } else if (2 == a) {
                                    var h = 'https://api.weibo.com/oauth2/authorize?';
                                    h += 'client_id=399644784',
                                        h += '&redirect_uri=https://www.majsoul.com/0?xdsfdl=2-' + c,
                                        Laya['Browser']['window']['location'].href = h;
                                } else if (3 == a) {
                                    var h = 'https://graph.qq.com/oauth2.0/authorize?';
                                    h += 'response_type=code',
                                        h += '&client_id=101480027',
                                        h += '&redirect_uri=' + encodeURI('https://www.majsoul.com/0'),
                                        h += GameMgr.Inst['link_url']['indexOf']('majsoul.com/1') >= 0 ? '&state=xdsfdl4' : '&state=xdsfdl3',
                                        Laya['Browser']['window']['location'].href = h;
                                } else if (7 == a)
                                    this.Inst && this.Inst['showMailLogin']();
                                else if (8 == a) {
                                    var x = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    x += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        x += '/yo_google.html',
                                        'kr' == GameMgr['client_type'] ? Yo['googleKrAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        }) : 'jp' == GameMgr['client_type'] ? Yo['googleJaAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        }) : Yo['googleAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        });
                                } else if (9 == a) {
                                    var x = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    x += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        x += '/yo_facebook.html',
                                        'kr' == GameMgr['client_type'] ? Yo['facebookKrAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        }) : Yo['facebookAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        });
                                } else if (10 == a) {
                                    var x = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    x += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        x += '/yo_tiwtter.html',
                                        'jp' == GameMgr['client_type'] ? Yo['twitterJaAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        }) : 'kr' == GameMgr['client_type'] ? Yo['twitterKrAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        }) : Yo['twitterAuth']({
                                            redirect_uri: x,
                                            openNewWindow: !1
                                        });
                                } else if (13 == a) {
                                    var O = function() {
                                        Laya['LocalStorage']['setItem']('fblogin', '1');
                                        var l = 'https://www.facebook.com/dialog/oauth?';
                                        l += 'client_id=511764882872601',
                                            l += '&redirect_uri=' + encodeURI(GameMgr.Inst['link_url']),
                                            l += '&response_type=token',
                                            Laya['Browser']['window']['location'].href = l;
                                    };
                                    void 0 != window.FB && null != window.FB ? window.FB['getLoginStatus'](function(a) {
                                        a && 'connected' == a['status'] ? l['UI_Entrance']['onSocioBack'](13, a['authResponse']['accessToken'], null) : O();
                                    }) : O();
                                } else
                                    14 == a && game['DmmSDK']['login']();
                            }
                        },
                        R['onSocioBack'] = function(l, a, U) {
                            app.Log.log('!!!!!!!!!!!!!!! ' + l + ' ' + a),
                                this.Inst && this.Inst['_onSocioBack'](l, a, U);
                        },
                        R['prototype']['onCreate'] = function() {
                            var g = this,
                                E = this.me['getChildByName']('root');
                            this['container_login'] = this.me['getChildByName']('root')['getChildByName']('container_login');
                            var C = function(l) {
                                    var a = {
                                        container: l,
                                        input: l['getChildByName']('txtinput'),
                                        lb: l['getChildByName']('lb')
                                    };
                                    return a['input'].text = '',
                                        a.lb['visible'] = !0,
                                        a['input'].on('focus', g, function() {
                                            a.lb['visible'] = !1;
                                        }),
                                        a['input'].on('blur', g, function() {
                                            a.lb['visible'] = !a['input'].text || '' == a['input'].text;
                                        }),
                                        a['input'].on('input', g, function() {}),
                                        a;
                                },
                                B = this['container_login']['getChildByName']('chs');
                            this['route_info'] = new M(B['getChildByName']('img_lb')),
                                this['txt_account'] = C(B['getChildByName']('container_account')),
                                this['txt_password'] = C(B['getChildByName']('container_mima')),
                                this['txt_account']['input'].on(laya['events']['Event']['KEY_DOWN'], this['txt_account']['input'], function(l) {
                                    l['keyCode'] === Laya['Keyboard']['ENTER'] && g['_btn_login']();
                                }),
                                this['txt_password']['input'].on(laya['events']['Event']['KEY_DOWN'], this['txt_account']['input'], function(l) {
                                    l['keyCode'] === Laya['Keyboard']['ENTER'] && g['_btn_login']();
                                }),
                                this['login_type_tabs'] = [];
                            for (var w = function(l) {
                                    var a = B['getChildByName']('container_tabs')['getChildByName']('tab' + l);
                                    L['login_type_tabs'].push({
                                            btn: a,
                                            word: a['getChildByName']('word'),
                                            choosen: a['getChildByName']('chosen')
                                        }),
                                        L['login_type_tabs'][l].btn['clickHandler'] = new Laya['Handler'](L, function() {
                                            g['login_type_tab_index'] != l && g['change_chs_login_tab'](l);
                                        });
                                }, L = this, c = 0; 2 > c; c++)
                                w(c);
                            this['container_extendInfo'] = E['getChildByName']('extendinfo'),
                                this['container_extendInfo']['visible'] = !1,
                                B['getChildByName']('btn_regist')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['UI_Entrance_Mail_Regist'].Inst.show();
                                }, null, !1),
                                B['getChildByName']('btn_forgetpassword')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['UI_Entrance_Reset_Password'].Inst.show();
                                }, null, !1),
                                B['getChildByName']('btn_find_account')['clickHandler'] = new Laya['Handler'](this, function() {
                                    Laya['Browser']['window']['location'].href = game['Tools']['getFinalUrl']('https://www.maj-soul.com/find-account/');
                                }),
                                B['getChildByName']('btn_find_account')['visible'] = 'chs' == GameMgr['client_type'],
                                this['btn_add2desktop'] = this.me['getChildByName']('root')['getChildByName']('btn_add2desktop'),
                                this['btn_add2desktop']['visible'] = (Laya['Browser']['onAndriod'] || Laya['Browser']['onAndroid'] || Laya['Browser']['onIOS']) && !GameMgr['inConch'] && !GameMgr['inConch'],
                                this['btn_add2desktop']['clickHandler'] = new Laya['Handler'](this, function() {
                                    l['UI_Add2Desktop'].Inst && l['UI_Add2Desktop'].Inst.show();
                                }),
                                B['getChildByName']('btn_enter')['clickHandler'] = Laya['Handler']['create'](this, this['_btn_login'], null, !1),
                                this['login_loading'] = new U(E['getChildByName']('loading_login')),
                                this['page_maillogin'] = new z(this.me['getChildByName']('mail_login')),
                                this['scene'] = new a(this.me['getChildByName']('scene')),
                                this['container_social'] = this['container_login']['getChildByName']('social'),
                                this['social_btns'] = [];
                            for (var c = 0; 4 > c; c++)
                                this['social_btns'].push(this['container_social']['getChildByName']('btn' + c)), this['social_btns'][c]['visible'] = !1;
                            var h = 55,
                                x = 395,
                                O = [];
                            'chs' == GameMgr['client_type'] && (O = [{
                                    img: 'myres/entrance/weibo.png',
                                    type: 2
                                }, {
                                    img: 'myres/entrance/QQ.png',
                                    type: 3
                                }, {
                                    img: 'myres/entrance/weixin.png',
                                    type: 1
                                }]),
                                'chs_t' == GameMgr['client_type'] && (O = [{
                                    img: 'myres/entrance/facebook.png',
                                    type: 13
                                }]),
                                'jp' == GameMgr['client_type'] && (O = [{
                                    img: 'myres/entrance/google.png',
                                    type: 8
                                }, {
                                    img: 'myres/entrance/tiwtter.png',
                                    type: 10
                                }]),
                                ('en' == GameMgr['client_type'] || 'kr' == GameMgr['client_type']) && (O = [{
                                    img: 'myres/entrance/google.png',
                                    type: 8
                                }, {
                                    img: 'myres/entrance/facebook.png',
                                    type: 9
                                }, {
                                    img: 'myres/entrance/tiwtter.png',
                                    type: 10
                                }]);
                            for (var _ = function(l) {
                                    var a = p['social_btns'][l];
                                    l < O['length'] ? (a['visible'] = !0, a['getChildAt'](0).skin = game['Tools']['localUISrc'](O[l].img), a['clickHandler'] = new Laya['Handler'](p, function() {
                                        R['trySocio'](O[l].type);
                                    }), a.x = 1 == O['length'] ? (x - h) / 2 + 50 : (x - h) * l / (O['length'] - 1) + h) : a['visible'] = !1;
                                }, p = this, c = 0; c < this['social_btns']['length']; c++)
                                _(c);
                            2 == O['length'] && (this['social_btns'][0].x = 1 * (x - h) / 3 + h, this['social_btns'][1].x = 2 * (x - h) / 3 + h),
                                this.me['getChildByName']('infos')['visible'] = 'chs' == GameMgr['client_type'],
                                this.me['getChildByName']('root')['getChildByName']('loading_login')['getChildByName']('btn_cancel')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    g['login_loading'].me['visible'] && (game['LobbyNetMgr'].Inst['Close'](), Laya['LocalStorage']['setItem']('_pre_sociotype', ''), g['showContainerLogin'](), g['btn_login_cd'] = Laya['timer']['currTimer'] + 500, Laya['timer'].once(500, g, function() {
                                        game['LobbyNetMgr'].Inst['OpenConnect'](null);
                                    }));
                                }, null, !1);
                            var N = this.me['getChildByName']('root')['getChildByName']('container_login')['getChildByName']('dmm');
                            N['getChildByName']('btn_enter')['clickHandler'] = new Laya['Handler'](this, function() {
                                R['trySocio'](14);
                            });
                            var n = N['getChildByName']('checksave'),
                                P = n['getChildByName']('checkbox');
                            P['visible'] = 'false' != Laya['LocalStorage']['getItem']('autologin'),
                                n['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                    P['visible'] = !P['visible'],
                                        Laya['LocalStorage']['setItem']('autologin', P['visible'] ? 'true' : 'false');
                                });
                            var H = E['getChildByName']('btn_kefu');
                            H['visible'] = 'chs_t' == GameMgr['client_type'],
                                H['clickHandler'] = new Laya['Handler'](this, function() {
                                    game['Tools']['setGrayDisable'](H, !0),
                                        Laya['timer'].once(1000, null, function() {
                                            game['Tools']['setGrayDisable'](H, !1);
                                        });
                                    var l = 'https://ykf-webchat.7moor.com/wapchat.html?';
                                    l += 'fromUrl=' + game['Tools']['getFinalUrl']('https://www.maj-soul.com'),
                                        l += '&urlTitle=网页',
                                        'chs' == GameMgr['client_language'] ? (l += '&accessId=4eb5a8b0-aafc-11ea-b418-397d5a9a3f68', l += '&language=ZHCN') : (l += '&accessId=4184be70-95b1-11ea-b027-616616b0ded6', l += '&language=EN');
                                    var a = {};
                                    a['登陆状态'] = '未登录',
                                        l += '&customField=' + JSON['stringify'](a),
                                        game['Tools']['open_new_window'](l);
                                }),
                                this['container_language'] = this.me['getChildByName']('container_language');
                            var Z = this['container_language']['getChildByName']('btn');
                            this['label_language'] = Z['getChildByName']('info'),
                                Z['clickHandler'] = new Laya['Handler'](this, function() {
                                    l['UI_Entrance_Change_Language'].Inst.show();
                                }),
                                l['UI_Loading']['SD_Type'] && (l['UI_Loading']['LoadingRandomIndex'] = Math['floor'](Math['random']() * l['UI_Loading']['LoadingImgs'][l['UI_Loading']['SD_Type'] - 1]['length']), Laya['loader'].load(game['Tools']['localUISrc'](l['UI_Loading']['LoadingImgs'][l['UI_Loading']['SD_Type'] - 1][l['UI_Loading']['LoadingRandomIndex']])));
                        },
                        R['prototype']['ModelJpEn'] = function() {
                            function l(l) {
                                1 == l && R['trySocio'](7);
                            }
                            var a = this['container_login']['getChildByName']('jpen'),
                                U = a['getChildByName']('btn_enter');
                            U['clickHandler'] = Laya['Handler']['create'](this, function() {
                                l(!0);
                            }, null, !1);
                            var z = a['getChildByName']('checksave'),
                                M = z['getChildByName']('checkbox');
                            M['visible'] = 'false' != Laya['LocalStorage']['getItem']('autologin'),
                                z['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                    M['visible'] = !M['visible'],
                                        Laya['LocalStorage']['setItem']('autologin', M['visible'] ? 'true' : 'false');
                                });
                        },
                        R['prototype'].show = function() {
                            var l = this;
                            GameMgr.Inst['postNewInfo2Server']('enter_entrance', {
                                    load_time: Date.now() - GameMgr.Inst['last_load_start_time']
                                }),
                                GameMgr['inDmm'] ? (this['container_social']['visible'] = !1, this['container_login']['getChildByName']('dmm')['visible'] = !0, this['container_login']['getChildByName']('chs')['visible'] = !1, this['container_login']['getChildByName']('jpen')['visible'] = !1) : (this['container_social']['visible'] = !0, this['container_login']['getChildByName']('dmm')['visible'] = !1, 'chs' == GameMgr['client_type'] || 'chs_t' == GameMgr['client_type'] ? (this['container_social'].x = 40, this['container_social'].y = 475, this['container_login']['getChildByName']('chs')['visible'] = !0, this['container_login']['getChildByName']('jpen')['visible'] = !1, this['route_info']['onEnable']()) : (this['container_login']['getChildByName']('chs')['visible'] = !1, this['container_login']['getChildByName']('jpen')['visible'] = !0, this['ModelJpEn']())), -1 != GameMgr.Inst['beinvited_roomid'] ? (this['container_extendInfo']['visible'] = !0, this['container_extendInfo']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2054) + ':' + GameMgr.Inst['beinvited_roomid']) : '' != GameMgr.Inst['outsee_paipuid'] ? (this['container_extendInfo']['visible'] = !0, this['container_extendInfo']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2055)) : this['container_extendInfo']['visible'] = !1;
                            var a = this['login_index'];
                            if (!GameMgr.Inst['in_emergence'] && GameMgr.Inst['fb_login_info'] && 'connected' == GameMgr.Inst['fb_login_info']['status'])
                                this['showLoginLoading'](13), Laya['timer'].once(500, this, function() {
                                    if (a == l['login_index']) {
                                        var U = GameMgr.Inst['fb_login_info']['authResponse'];
                                        l['_loginby_sociocode'](a, 13, U['accessToken']);
                                    }
                                });
                            else if (GameMgr.Inst['in_emergence'] || '1' != Laya['LocalStorage']['getItem']('fblogin')) {
                                this.me['getChildByName']('root')['getChildByName']('version').text = game['ResourceVersion']['version'];
                                var U = Laya['LocalStorage']['getItem']('_pre_sociotype'),
                                    z = Laya['LocalStorage']['getItem']('ssssoooodd');
                                z || (z = '');
                                var M = -1;
                                if (U && '' != U && (M = parseInt(U)), GameMgr.Inst['in_emergence'] && (M = -1), app.Log.log('sociotype:' + M), 0 > M || M > 14)
                                    this['showContainerLogin']();
                                else if (0 == M)
                                    '' != z ? (this['showLoginLoading'](0), Laya['timer'].once(600, this, function() {
                                        a == l['login_index'] && l['_try_socio_check'](a, M, z);
                                    })) : this['showContainerLogin']();
                                else if (M >= 1 && 6 >= M) {
                                    var g = Laya['LocalStorage']['getItem']('_pre_code');
                                    g || (g = ''),
                                        '' != g || '' != z ? (this['showLoginLoading'](M), Laya['timer'].once(500, this, function() {
                                            a == l['login_index'] && (g && '' != g ? l['_loginby_sociocode'](a, M, g) : l['_try_socio_check'](a, M, z));
                                        })) : this['showContainerLogin']();
                                } else if (M >= 7 && 10 >= M && 'chs' != GameMgr['client_type'] && 'chs_t' != GameMgr['client_type'] && Yo && Yo['login']) {
                                    var R = game['LocalStorage']['getItem']('yostar_token');
                                    R || (R = '');
                                    var E = game['LocalStorage']['getItem']('yostar_uid');
                                    E || (E = ''),
                                        '' != E && '' != R ? (this['showLoginLoading'](M), Laya['timer'].once(500, this, function() {
                                            a == l['login_index'] && l['_login_2_yostar'](a, M, R, E);
                                        })) : this['showContainerLogin']();
                                } else if (13 == M || 14 == M) {
                                    var C = Laya['LocalStorage']['getItem']('_pre_code');
                                    C || (C = ''),
                                        '' != C || '' != z ? (this['showLoginLoading'](M), Laya['timer'].once(500, this, function() {
                                            a == l['login_index'] && (C && '' != C ? l['_loginby_sociocode'](a, M, C) : l['_try_socio_check'](a, M, z));
                                        })) : this['showContainerLogin']();
                                } else
                                    this['showContainerLogin']();
                            } else {
                                this['showLoginLoading'](13);
                                var B = Laya['timer']['currTimer'],
                                    w = this,
                                    L = function() {
                                        if (null != window.FB && void 0 != window.FB) {
                                            if (FB['getLoginStatus'](function(l) {
                                                    GameMgr.Inst['fb_login_info'] = l;
                                                }), a != w['login_index'])
                                                return;
                                            var l = GameMgr.Inst['fb_login_info']['authResponse'];
                                            w['_loginby_sociocode'](a, 13, l['accessToken']),
                                                Laya['timer']['clear'](w, L);
                                        } else
                                            Laya['timer']['currTimer'] > B + 5000 && Laya['timer']['clear'](w, L);
                                    };
                                Laya['LocalStorage']['setItem']('fblogin', '0'),
                                    Laya['timer']['frameLoop'](1, w, L);
                            }
                            if ('chs_t' == GameMgr['client_type'] || 'en' == GameMgr['client_type'])
                                switch (this['container_language']['visible'] = !0, GameMgr['client_language']) {
                                    case 'chs':
                                        this['label_language'].text = '中文(简体)';
                                        break;
                                    case 'chs_t':
                                        this['label_language'].text = '中文(繁體)';
                                        break;
                                    case 'jp':
                                        this['label_language'].text = '日本語';
                                        break;
                                    case 'en':
                                        this['label_language'].text = 'English';
                                        break;
                                    case 'kr':
                                        this['label_language'].text = game['Tools']['strOfLocalization'](3615);
                                        break;
                                    default:
                                        this['label_language'].text = '';
                                }
                            else
                                this['container_language']['visible'] = !1;
                            this['scene'].show(),
                                this['enable'] = !0;
                        },
                        R['prototype']['_onSocioBack'] = function(l, a, U) {
                            var z = this,
                                M = this['login_index'];
                            this['showLoginLoading'](l),
                                Laya['timer'].once(500, this, function() {
                                    M == z['login_index'] && (a && '' != a ? (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : l['toString']()), U ? z['_login_2_yostar'](M, l, a, U) : (Laya['LocalStorage']['setItem']('_pre_code', a), z['_loginby_sociocode'](M, l, a))) : z['showContainerLogin']());
                                });
                        },
                        R['prototype']['showContainerLogin'] = function() {
                            if (-1 == this['login_type_tab_index']) {
                                var l = game['LocalStorage']['getItem']('login_type_tab'),
                                    a = game['LocalStorage']['getItem']('account'),
                                    U = game['LocalStorage']['getItem']('password');
                                if (this['login_account_input_info'] = {}, a && U && '' != a && '' != U) {
                                    var z = 0;
                                    l && '' != l && (z = parseInt(l)),
                                        this['login_account_input_info'][z] = {
                                            account: a,
                                            password: U
                                        },
                                        this['change_chs_login_tab'](z);
                                } else
                                    this['change_chs_login_tab'](0);
                            } else
                                this['change_chs_login_tab'](this['login_type_tab_index']);
                            this['container_login']['visible'] = !0,
                                this['login_loading']['close'](),
                                this['login_index']++;
                        },
                        R['prototype']['showLoginLoading'] = function(l) {
                            this['container_login']['visible'] = !1,
                                this['login_loading'].show(l);
                        },
                        R['prototype']['change_chs_login_tab'] = function(l) {
                            this['login_type_tab_index'] >= 0 && (this['login_account_input_info'][this['login_type_tab_index']] = {
                                    account: this['txt_account']['input'].text,
                                    password: this['txt_password']['input'].text
                                }),
                                l || (l = 0),
                                this['login_type_tab_index'] = l;
                            for (var a = 0; a < this['login_type_tabs']['length']; a++)
                                this['login_type_tabs'][a].word['color'] = a == l ? '#446fdb' : '#84827b', this['login_type_tabs'][a]['choosen']['visible'] = a == l;
                            switch (l) {
                                case 0:
                                    this['txt_account'].lb.text = game['Tools']['strOfLocalization'](3138),
                                        this['txt_account']['input']['restrict'] = '',
                                        this['txt_account']['input']['maxChars'] = 50;
                                    break;
                                case 1:
                                    this['txt_account'].lb.text = game['Tools']['strOfLocalization'](3132),
                                        this['txt_account']['input']['restrict'] = '0-9',
                                        this['txt_account']['input']['maxChars'] = 11;
                                    break;
                                default:
                                case 0:
                                    this['txt_account'].lb.text = '',
                                        this['txt_account']['input']['restrict'] = '',
                                        this['txt_account']['input']['maxChars'] = 50;
                            }
                            var U = this['login_account_input_info'][l],
                                z = '',
                                M = '';
                            U && (z = U['account'], M = U['password']),
                                z && '' != z ? (this['txt_account']['input'].text = z, this['txt_account'].lb['visible'] = !1) : (this['txt_account']['input'].text = '', this['txt_account'].lb['visible'] = !0),
                                M && '' != M ? (this['txt_password']['input'].text = M, this['txt_password'].lb['visible'] = !1) : (this['txt_password']['input'].text = '', this['txt_password'].lb['visible'] = !0);
                        },
                        R['prototype']['_btn_login'] = function() {
                            var a = this;
                            if (!this['showEmergency']()) {
                                var U = this['txt_account']['input'].text,
                                    z = this['txt_password']['input'].text;
                                if (!U || '' == U)
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2056)), void 0;
                                if (!z || '' == z)
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2057)), void 0;
                                if (!(Laya['timer']['currTimer'] < this['btn_login_cd'])) {
                                    if (this['multiLogin']())
                                        return this['showInfo'](game['Tools']['strOfLocalization'](2058)), void 0;
                                    this['btn_login_cd'] = Laya['timer']['currTimer'] + 1000,
                                        this['showLoginLoading'](0);
                                    var M = this['login_index'];
                                    game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(g) {
                                        Laya['timer'].once(800, a, function() {
                                            M == a['login_index'] && (g.open ? R.Inst['_try_login_account'](M, U, z) : (g['maintenance'] ? l['UI_Entrance_Maintenance'].Inst.show(g['maintenance']) : a['showInfo'](g.info), a['showContainerLogin'](), a['btn_login_cd'] = 0));
                                        });
                                    }));
                                }
                            }
                        },
                        R['prototype']['_try_regist_account'] = function(l, a, U, z) {
                            var M = this;
                            this['showEmergency']() || app['NetAgent']['sendReq2Lobby']('Lobby', 'signup', {
                                account: l,
                                password: GameMgr['encodeP'](U),
                                code: a,
                                type: z,
                                device: GameMgr.Inst['get_device_info'](),
                                client_version_string: GameMgr.Inst['getClientVersion']()
                            }, function(a, g) {
                                if (a)
                                    M['showError'](game['Tools']['strOfLocalization'](2059), a), app.Log['Error'](a['message']);
                                else if (g['error'])
                                    M['showError'](game['Tools']['strOfLocalization'](2060), g['error'].code), app.Log['Error'](game['Tools']['strOfLocalization'](2219, [JSON['stringify'](g)]));
                                else {
                                    var R = z - 1;
                                    M['login_account_input_info'][R] = {
                                            account: l,
                                            password: U
                                        },
                                        M['change_chs_login_tab'](R),
                                        M['_try_login_account'](M['login_index'], l, U);
                                }
                            });
                        },
                        R['prototype']['_try_login_account'] = function(a, U, z) {
                            var M = this;
                            if (a == this['login_index']) {
                                if (this['multiLogin']())
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0;
                                var g = GameMgr.Inst['get_device_info'](),
                                    R = game['Tools']['get_platform_currency']();
                                game['LocalStorage']['setItem']('account', U),
                                    game['LocalStorage']['setItem']('password', z),
                                    game['LocalStorage']['setItem']('login_type_tab', this['login_type_tab_index']['toString']()),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'login', {
                                        account: U,
                                        password: GameMgr['encodeP'](z),
                                        reconnect: !1,
                                        device: g,
                                        random_key: GameMgr['device_id'],
                                        client_version: {
                                            resource: game['ResourceVersion']['version']
                                        },
                                        gen_access_token: !0,
                                        currency_platforms: R,
                                        type: this['login_type_tab_index'],
                                        client_version_string: GameMgr.Inst['getClientVersion']()
                                    }, function(g, R) {
                                        a == M['login_index'] && (M['btn_login_cd'] = 0, g ? (M['showError'](game['Tools']['strOfLocalization'](2061), g), M['showContainerLogin']()) : R['error'] ? (503 == R['error'].code ? M['onLoginErrorProhibition'](R['error']) : M['showError']('', R['error'].code), M['showContainerLogin']()) : (Laya['LocalStorage']['setItem']('_pre_sociotype', '0'), game['LocalStorage']['setItem']('account', U), game['LocalStorage']['setItem']('password', z), game['LocalStorage']['setItem']('login_type_tab', M['login_type_tab_index']['toString']()), GameMgr.Inst['account'] = U, GameMgr.Inst['password'] = z, GameMgr.Inst['sociotype'] = 0, GameMgr['country'] = R['country'], GameMgr.Inst['account_id'] = R['account_id'], GameMgr.Inst['account_data'] = R['account'], l['UI_User_Xieyi_enjp'].init(Laya['Handler']['create'](M, function() {
                                            l['UI_User_Xieyi_enjp']['needCheckVersion'] ? l['UI_User_Xieyi_Update'].Inst.show(Laya['Handler']['create'](M, function() {
                                                M['_onLoginSuccess'](0, R);
                                            })) : M['_onLoginSuccess'](0, R);
                                        }))));
                                    });
                            }
                        },
                        R['prototype']['_login_2_yostar'] = function(a, U, z, M) {
                            var g = this;
                            if (!this['showEmergency']() && a == this['login_index']) {
                                app.Log.log('login_2_yostar sociotype:' + U + ' token:' + z + ' uid:' + M);
                                var R = this,
                                    E = function(a, U) {
                                        switch (void 0 === U && (U = 0), U = Math['floor'](U / 1000), a) {
                                            case 1:
                                                R['showError'](game['Tools']['strOfLocalization'](2677));
                                                break;
                                            case 2:
                                                R['showError'](game['Tools']['strOfLocalization'](2678));
                                                break;
                                            case 3:
                                                R['showError'](game['Tools']['strOfLocalization'](2679));
                                                break;
                                            case 4:
                                                R['showError'](game['Tools']['strOfLocalization'](2680));
                                                break;
                                            case 5:
                                                'kr' == GameMgr['client_type'] ? (l['UI_Entrance_Account_Deleted'].Inst['setYoInfo'](M, z), l['UI_Entrance_Account_Deleted'].Inst.show(game['Tools']['strOfLocalization'](8026, [game['Tools']['time2YearMounthDate'](U, '-') + ' ' + game['Tools']['time2HourMinute'](U)]))) : R['showError'](game['Tools']['strOfLocalization'](8031, [game['Tools']['time2YearMounthDate'](U, '-') + ' ' + game['Tools']['time2HourMinute'](U)]));
                                                break;
                                            default:
                                                R['showError'](game['Tools']['strOfLocalization'](2676));
                                        }
                                        Laya['LocalStorage']['setItem']('_pre_sociotype', ''),
                                            R['showContainerLogin']();
                                    };
                                Yo['login'] && Yo['login']({
                                    uid: M,
                                    token: z
                                }).then(function(C) {
                                    a == g['login_index'] && (C ? (app.Log.log('yo login data.result:' + C['result']), 0 == C['result'] ? 'kr' == GameMgr['client_type'] && 1 != C['kr_kmc_status'] ? (Laya['LocalStorage']['setItem']('_pre_sociotype', ''), R['showContainerLogin'](), l['UI_ShiMingRenZheng_KR'].Inst.show(game['Tools']['strOfLocalization'](2 == C['kr_kmc_status'] ? 8043 : 8044), Laya['Handler']['create'](g, function() {
                                        Yo['kmcStart']({
                                            accessToken: C['accessToken']
                                        }).then(function() {});
                                    }))) : (game['LocalStorage']['setItem']('yostar_token', z), game['LocalStorage']['setItem']('yostar_uid', M), GameMgr.Inst['yostar_accessToken'] = C['accessToken'], GameMgr.Inst['yostar_uid'] = M, GameMgr.Inst['yostar_login_info'] = C, R['_loginby_sociocode'](a, U, C['accessToken'], M)) : E(C['result'], C['reborn_before_ms'])) : (app.Log.log('yo login data.result: no'), E(-1)));
                                });
                            }
                        },
                        R['prototype']['_loginby_sociocode'] = function(a, U, z, M) {
                            var g = this;
                            if (void 0 === M && (M = ''), !this['showEmergency']() && a == this['login_index']) {
                                if (app.Log.log('_loginby_sociocode0 sociotype:' + U + ', code:' + z + ', uid:' + M), !game['LobbyNetMgr'].Inst.isOK)
                                    return game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(R) {
                                        a == g['login_index'] && (R.open ? g['_loginby_sociocode'](a, U, z, M) : (R['maintenance'] ? l['UI_Entrance_Maintenance'].Inst.show(R['maintenance']) : g['showInfo'](R.info), g['showContainerLogin']()));
                                    })), void 0;
                                Laya['LocalStorage']['setItem']('_pre_code', ''),
                                    Laya['LocalStorage']['setItem']('_pre_sociotype', ''),
                                    app.Log.log('_loginby_sociocode1 sociotype' + U + ' code:' + z + ' uid:' + M);
                                var R = {
                                    type: U,
                                    code: z
                                };
                                M && (R.uid = M),
                                    R['client_version_string'] = GameMgr.Inst['getClientVersion'](),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Auth', R, function(l, z) {
                                        a == g['login_index'] && (l ? (app.Log.log('oauth2Auth err:' + l), g['showError'](game['Tools']['strOfLocalization'](2059), l), app.Log['Error'](l['message']), g['showContainerLogin']()) : (app.Log.log('oauth2Auth res: ' + JSON['stringify'](z)), z['error'] ? (g['showError'](game['Tools']['strOfLocalization'](2062), z['error'].code), g['showContainerLogin']()) : g['_try_socio_check'](a, U, z['access_token'])));
                                    });
                            }
                        },
                        R['prototype']['_try_socio_check'] = function(a, U, z) {
                            var M = this;
                            if (!this['showEmergency']() && a == this['login_index'])
                                return this['multiLogin']() ? (this['showInfo'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0) : game['LobbyNetMgr'].Inst.isOK ? (Laya['timer'].once(800, this, function() {
                                    a == M['login_index'] && (app.Log.log('_try_socio_check sociotype' + U + ' access_token:' + z), app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Check', {
                                        type: U,
                                        access_token: z
                                    }, function(l, g) {
                                        a == M['login_index'] && (l ? (M['showError'](game['Tools']['strOfLocalization'](2059), l), app.Log['Error'](l['message']), M['showContainerLogin']()) : (app.Log.log('oauth2Check res: ' + JSON['stringify'](g)), g['error'] ? (M['showError'](game['Tools']['strOfLocalization'](2062), g['error'].code), M['showContainerLogin']()) : g['has_account'] ? M['_try_login_socio'](a, U, z) : M['_try_regist_socio'](a, U, z)));
                                    }));
                                }), void 0) : (game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(g) {
                                    a == M['login_index'] && (g.open ? M['_try_socio_check'](a, U, z) : (g['maintenance'] ? l['UI_Entrance_Maintenance'].Inst.show(g['maintenance']) : M['showInfo'](g.info), M['showContainerLogin']()));
                                })), void 0);
                        },
                        R['prototype']['_try_regist_socio'] = function(l, a, U) {
                            var z = this;
                            if (!this['showEmergency']() && l == this['login_index']) {
                                app.Log.log('_try_regist_socio sociotype' + a + ' access_token:' + U);
                                var M = Laya['LocalStorage']['getItem']('__ad_s');
                                M && (GameMgr.Inst['_ad_str'] = M);
                                var g = {};
                                g.type = a,
                                    g['access_token'] = U,
                                    g['device'] = GameMgr.Inst['get_device_info'](),
                                    GameMgr.Inst['_ad_str'] && (g['advertise_str'] = GameMgr.Inst['_ad_str']),
                                    7 == a && (g['email'] = game['LocalStorage']['getItem']('mail_account')),
                                    g['client_version_string'] = GameMgr.Inst['getClientVersion'](),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Signup', g, function(M, g) {
                                        l == z['login_index'] && (M ? (app.Log.log('oauth2Signup err:' + M), z['showError'](game['Tools']['strOfLocalization'](2059), M), app.Log['Error'](M['message']), z['showContainerLogin']()) : (app.Log.log('oauth2Signup res: ' + JSON['stringify'](g)), g['error'] ? (z['showError'](game['Tools']['strOfLocalization'](2060), g['error'].code), app.Log['Error'](game['Tools']['strOfLocalization'](2219, [JSON['stringify'](g)])), z['showContainerLogin']()) : (app['PlayerBehaviorStatistic']['fb_trace_force'](app['EBehaviorType']['CompleteRegistration']), app['PlayerBehaviorStatistic']['google_trace_force'](app['EBehaviorType']['G_Role_create']), app['PlayerBehaviorStatistic']['tw_trace_force'](app['EBehaviorType']['TW_Signup']), z['_try_login_socio'](l, a, U))));
                                    });
                            }
                        },
                        R['prototype']['_try_login_socio'] = function(a, U, z) {
                            var M = this;
                            if (a == this['login_index']) {
                                if (this['multiLogin']())
                                    return this['showError'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0;
                                app.Log.log('_try_login_socio sociotype' + U + ' access_token:' + z);
                                var g = GameMgr.Inst['get_device_info'](),
                                    R = game['Tools']['get_platform_currency']();
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Login', {
                                    type: U,
                                    access_token: z,
                                    reconnect: !1,
                                    device: g,
                                    random_key: GameMgr['device_id'],
                                    client_version: {
                                        resource: game['ResourceVersion']['version']
                                    },
                                    currency_platforms: R,
                                    client_version_string: GameMgr.Inst['getClientVersion']()
                                }, function(g, R) {
                                    a == M['login_index'] && (M['btn_login_cd'] = 0, g ? (app.Log.log('oauth2Login err:' + g), M['showError'](game['Tools']['strOfLocalization'](2061), g), M['showContainerLogin']()) : (app.Log.log('oauth2Login res: ' + JSON['stringify'](R)), R['error'] ? (503 == R['error'].code ? M['onLoginErrorProhibition'](R['error']) : M['showError']('', R['error'].code), M['showContainerLogin']()) : (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : U['toString']()), Laya['LocalStorage']['setItem']('ssssoooodd', z), GameMgr.Inst['sociotype'] = U, GameMgr.Inst['access_token'] = z, GameMgr['country'] = R['country'], GameMgr.Inst['account_id'] = R['account_id'], GameMgr.Inst['account_data'] = R['account'], l['UI_User_Xieyi_enjp'].init(Laya['Handler']['create'](M, function() {
                                        l['UI_User_Xieyi_enjp']['needCheckVersion'] ? l['UI_User_Xieyi_Update'].Inst.show(Laya['Handler']['create'](M, function() {
                                            M['_onLoginSuccess'](U, R);
                                        })) : M['_onLoginSuccess'](U, R);
                                    })))));
                                });
                            }
                        },
                        R['prototype']['_onLoginPengdingPhone'] = function() {},
                        R['prototype']['_onLoginSuccess'] = function(a, U, z) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(U),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(U));
                                }
                            }));
                            var M = this;
                            if (void 0 === z && (z = !1), app.Log.log('登陆：' + JSON['stringify'](U)), GameMgr.Inst['account_id'] = U['account_id'], GameMgr.Inst['account_data'] = U['account'], l['UI_ShiMingRenZheng']['renzhenged'] = U['is_id_card_authed'], GameMgr.Inst['account_numerical_resource'] = {}, U['account']['platform_diamond'])
                                for (var g = U['account']['platform_diamond'], R = 0; R < g['length']; R++)
                                    GameMgr.Inst['account_numerical_resource'][g[R].id] = g[R]['count'];
                            if (U['account']['skin_ticket'] && (GameMgr.Inst['account_numerical_resource']['100004'] = U['account']['skin_ticket']), U['account']['platform_skin_ticket'])
                                for (var E = U['account']['platform_skin_ticket'], R = 0; R < E['length']; R++)
                                    GameMgr.Inst['account_numerical_resource'][E[R].id] = E[R]['count'];
                            GameMgr.Inst['account_refresh_time'] = Laya['timer']['currTimer'],
                                U['game_info'] && (GameMgr.Inst['ingame'] = !0, GameMgr.Inst['mj_server_location'] = U['game_info']['location'], GameMgr.Inst['mj_game_token'] = U['game_info']['connect_token'], GameMgr.Inst['mj_game_uuid'] = U['game_info']['game_uuid']),
                                U['access_token'] && (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : a['toString']()), Laya['LocalStorage']['setItem']('ssssoooodd', U['access_token']), GameMgr.Inst['sociotype'] = a, GameMgr.Inst['access_token'] = U['access_token']);
                            var C = this,
                                B = function() {
                                    GameMgr.Inst['onLoadStart']('login'),
                                        Laya['LocalStorage']['removeItem']('__ad_s'),
                                        l['UI_Loading'].Inst.show('load_lobby'),
                                        C['enable'] = !1,
                                        C['scene']['close'](),
                                        l['UI_Entrance_Mail_Regist'].Inst['close'](),
                                        C['login_loading']['close'](),
                                        l['UIMgr'].Inst['openLobbyUI'](Laya['Handler']['create'](C, function() {
                                            GameMgr.Inst['afterLogin'](),
                                                C['route_info']['onClose'](),
                                                GameMgr.Inst['account_data']['anti_addiction'] && l['UIMgr'].Inst['ShowPreventAddiction'](),
                                                C['destroy'](),
                                                C['disposeRes'](),
                                                l['UI_Add2Desktop'].Inst && (l['UI_Add2Desktop'].Inst['destroy'](), l['UI_Add2Desktop'].Inst = null);
                                        }), Laya['Handler']['create'](C, function(a) {
                                            return l['UI_Loading'].Inst['setProgressVal'](0.2 * a);
                                        }, null, !1));
                                },
                                w = Laya['Handler']['create'](this, function() {
                                    0 != GameMgr.Inst['account_data']['frozen_state'] ? app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchRefundOrder', {}, function(a, U) {
                                        a ? (app.Log.log('fetchRefundOrder err:' + a), M['showError'](game['Tools']['strOfLocalization'](2061), a), M['showContainerLogin']()) : (l['UI_Refund']['orders'] = U['orders'], l['UI_Refund']['clear_deadline'] = U['clear_deadline'], l['UI_Refund']['message'] = U['message'], B());
                                    }) : B();
                                });
                            'chs' != GameMgr['client_type'] || U['account']['phone_verify'] ? w.run() : (l['UI_Entrance_Mail_Regist'].Inst['close'](), this['login_loading']['close'](), this['container_login']['visible'] = !1, l['UI_Bind_Phone1'].Inst.show(!0, Laya['Handler']['create'](this, function() {
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchPhoneLoginBind', {}, function(a, U) {
                                    a || U['error'] ? M['showError'](a, U['error']) : 0 == U['phone_login'] ? l['UI_Create_Phone_Account'].Inst.show(w) : l['UI_Canot_Create_Phone_Account'].Inst.show(w);
                                });
                            })));
                        },
                        R['prototype']['showMailLogin'] = function() {
                            this['page_maillogin'].show();
                        },
                        R['prototype']['showInfo'] = function(a) {
                            var U = '';
                            a && (U += a),
                                l['UI_Entrance_Error'].Inst.show(U, !1);
                        },
                        R['prototype']['showError'] = function(a, U, z) {
                            void 0 === U && (U = -1),
                                void 0 === z && (z = '');
                            var M = '';
                            a && (M += a), -1 != U && (M['length'] > 0 && (M += ','), M += cfg.info['error'].get(U) ? cfg.info['error'].get(U)[GameMgr['client_language']] + ' (' + U + ')' : game['Tools']['strOfLocalization'](2063) + ' (' + U + ')'),
                                z && (M += ', info:' + z),
                                l['UI_Entrance_Error'].Inst.show(M, !1);
                        },
                        R['prototype']['updateServer'] = function() {
                            this['route_info']['update']();
                        },
                        R['prototype']['multiLogin'] = function() {
                            var l = Laya['LocalStorage']['getItem']('dolllt');
                            return l && '' != l ? game['Tools']['currentTime'] < parseFloat(l) + 1.5 && parseFloat(l) < game['Tools']['currentTime'] + 1800 : !1;
                        },
                        R['prototype']['disposeRes'] = function() {
                            Laya['Loader']['clearTextureRes']('res/atlas/' + game['Tools']['localUISrc']('myres/entrance.atlas'));
                            var l = '';
                            l = 'chs' != GameMgr['client_language'] ? 'scene/Assets/Resource/entrance/icon_color_' + GameMgr['client_language'] + '.png' : 'scene/Assets/Resource/entrance/icon_color.png';
                            var a = [];
                            a.push(l),
                                a.push('scene/Assets/Resource/entrance/Materials/icon_color.lmat'),
                                a.push('scene/Assets/Resource/entrance/Materials/blackmask.lmat');
                            for (var U = 0; U < a['length']; U++) {
                                var z = Laya['loader']['getRes'](a[U]);
                                z && z['dispose'](!0);
                            }
                        },
                        R['prototype']['showEmergency'] = function() {
                            return GameMgr.Inst['in_emergence'] && this['showInfo'](GameMgr.Inst['emergence_notice']),
                                GameMgr.Inst['in_emergence'];
                        },
                        R['prototype']['onLoginErrorProhibition'] = function(a) {
                            var U = 0;
                            a['u32_params'] && a['u32_params']['length'] >= 1 && (U = a['u32_params'][0]),
                                6 == U ? 'kr' == GameMgr['client_type'] || 'chs_t' == GameMgr['client_type'] ? l['UI_Entrance_Account_Deleted'].Inst.show(game['Tools']['strOfLocalization']('kr' == GameMgr['client_type'] ? 8026 : 8035, [game['Tools']['time2YearMounthDate'](a['u32_params'][1]) + ' ' + game['Tools']['time2HourMinute'](a['u32_params'][1], 'chs_t' == GameMgr['client_type'])])) : this['showError'](game['Tools']['strOfLocalization'](8031, [game['Tools']['time2YearMounthDate'](a['u32_params'][1]) + ' ' + game['Tools']['time2HourMinute'](a['u32_params'][1])])) : l['UI_Entrance_Prohibition'].Inst.show(a);
                        },
                        R.Inst = null,
                        R;
                }
                (l['UIBase']);
            l['UI_Entrance'] = g;
        }
        (uiscript || (uiscript = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionBabei play data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1);
                            var U = a.seat,
                                z = mjcore['MJPai']['Create']('4z');
                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['AddBabei'](z, a['moqie'], !0),
                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['PlaySound']('act_babei');
                            var M = !1;
                            a['tile_state'] && a['tile_state'] > 0 && (M = !0),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                U == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['onBabei'](z, M, !1) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['onBabei'](a['moqie'], M, !1),
                                a['operation'] && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                U == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !1),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionBabei fastplay data:' + JSON['stringify'](a) + ' usetime:' + U),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = mjcore['MJPai']['Create']('4z');
                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddBabei'](M, a['moqie'], !1);
                            var g = !1;
                            a['tile_state'] && a['tile_state'] > 0 && (g = !0),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['onBabei'](M, g, !0) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['onBabei'](a['moqie'], g, !0),
                                a['operation'] && -1 != U && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation'], U);
                                }),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                z == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !0),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionBabei record data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = mjcore['MJPai']['Create']('4z');
                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddBabei'](M, a['moqie'], !0),
                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['PlaySound']('act_babei');
                            var g = !1;
                            if (a['tile_state'] && a['tile_state'] > 0 && (g = !0), a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0), z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['onBabei'](M, g, !1) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordBabei'](M, a['moqie'], g, !1), a['tingpais'] && l['DesktopMgr'].Inst['setTingpai'](a.seat, a['tingpais']), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var R = 0; R < a['operations']['length']; R++)
                                    l['ActionOperation'].ob(a['operations'][R], U, 450);
                            return l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                1000;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                app.Log.log('ActionBabei fastrecord data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = mjcore['MJPai']['Create']('4z');
                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddBabei'](M, a['moqie'], !1);
                            var g = !1;
                            if (a['tile_state'] && a['tile_state'] > 0 && (g = !0), a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1), z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['onBabei'](M, g, !0) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordBabei'](M, a['moqie'], g, !0), a['tingpais'] && l['DesktopMgr'].Inst['setTingpai'](a.seat, a['tingpais']), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operations'])
                                for (var R = 0; R < a['operations']['length']; R++)
                                    l['ActionOperation'].ob(a['operations'][R], U, 450);
                            l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionBabei'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this,
                                z = l['DesktopMgr'].Inst.mode == l['EMJMode'].play || l['DesktopMgr'].Inst['record_show_anim'];
                            a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                l['BgmListMgr']['stopBgm']();
                            var M = !1;
                            Laya['timer'].once(100, this, function() {
                                var g = a['hules'],
                                    R = 0;
                                if (g[0].zimo) {
                                    for (var E = g[0].seat, C = [], B = 0; B < g[0].hand['length']; B++)
                                        C.push(mjcore['MJPai']['Create'](g[0].hand[B]));
                                    if (C = C.sort(mjcore['MJPai']['Distance']), uiscript['UI_Huleshow'].Inst['showZimo']([l['DesktopMgr'].Inst['seat2LocalPosition'](E)]), a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0), R += 1400, z && (g[0]['title'] && '' != g[0]['title'] || g[0]['title_id']) && (Laya['timer'].once(R, U, function() {
                                            uiscript['UI_HuCutIn'].show(l['DesktopMgr'].Inst['player_datas'][E]['avatar_id']),
                                                M = !0;
                                        }), R += 2000), Laya['timer'].once(R, U, function() {
                                            E == l['DesktopMgr'].Inst.seat && l['DesktopMgr'].Inst['mainrole']['HulePrepare'](C, g[0]['hu_tile'], g[0].zimo),
                                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](E)].Hule(C, mjcore['MJPai']['Create'](g[0]['hu_tile']), g[0].zimo);
                                        }), z) {
                                        var w = 0,
                                            L = g[0].seat;
                                        L >= 0 && (w = l['DesktopMgr'].Inst['player_effects'][L][game['EView']['hupai_effect']]),
                                            R += '305215' == w || '305219' == w ? 5000 : '308021' == w ? 3800 : '305217' == w ? 3800 : 2800;
                                    } else
                                        R += 500;
                                    E == l['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                } else {
                                    if (Laya['timer'].once(R, U, function() {
                                            for (var a = [], U = 0; U < g['length']; U++)
                                                a.push(l['DesktopMgr'].Inst['seat2LocalPosition'](g[U].seat));
                                            uiscript['UI_Huleshow'].Inst['showRong'](a);
                                        }), R += 1500, z)
                                        for (var c = function(a) {
                                                var z = g[a].seat;
                                                (g[a]['title'] && '' != g[a]['title'] || g[a]['title_id']) && (Laya['timer'].once(R, U, function() {
                                                    uiscript['UI_HuCutIn'].show(l['DesktopMgr'].Inst['player_datas'][z]['avatar_id']),
                                                        M = !0;
                                                }), R += 2000);
                                            }, B = 0; B < g['length']; B++)
                                            c(B);
                                    for (var B = 0; B < g['length']; B++) {
                                        var h = g[B].seat;
                                        if (h == l['DesktopMgr'].Inst.seat) {
                                            for (var x = [], O = 0; O < g[B].hand['length']; O++)
                                                x.push(mjcore['MJPai']['Create'](g[B].hand[O]));
                                            x = x.sort(mjcore['MJPai']['Distance']),
                                                l['DesktopMgr'].Inst['mainrole']['HulePrepare'](x, g[B]['hu_tile'], g[B].zimo);
                                        }
                                    }
                                    if (Laya['timer'].once(R, U, function() {
                                            if (z) {
                                                var a = 0,
                                                    U = g[0].seat;
                                                U >= 0 && (a = l['DesktopMgr'].Inst['player_effects'][U][game['EView']['hupai_effect']]),
                                                    l['DesktopMgr'].Inst['ShowHuleEffect'](l['DesktopMgr'].Inst['lastqipai'], l['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], a, l['DesktopMgr'].Inst['lastpai_seat'], l['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                            }
                                            for (var M = 0; M < g['length']; M++) {
                                                for (var R = [], E = 0; E < g[M].hand['length']; E++)
                                                    R.push(mjcore['MJPai']['Create'](g[M].hand[E]));
                                                R = R.sort(mjcore['MJPai']['Distance']),
                                                    l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](g[M].seat)].Hule(R, mjcore['MJPai']['Create'](g[M]['hu_tile']), g[M].zimo),
                                                    g[M].seat == l['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                            }
                                        }), z) {
                                        var w = 0,
                                            h = g[0].seat;
                                        h >= 0 && (w = l['DesktopMgr'].Inst['player_effects'][h][game['EView']['hupai_effect']]),
                                            R += '305215' == w || '305219' == w ? 4200 : '308021' == w ? 3000 : '305217' == w ? 3000 : 2000;
                                    } else
                                        R += 600;
                                }
                                for (var B = 0; B < a['delta_scores']['length']; B++)
                                    a['delta_scores'][B] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](B, 'emoji_7', -1), l['DesktopMgr'].Inst['onRoundEnd'](B, 1)) : a['delta_scores'][B] < 0 && (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](B, 'emoji_8', -1), l['DesktopMgr'].Inst['onRoundEnd'](B, 0));
                                Laya['timer'].once(R, U, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](a, !1),
                                        l['DesktopMgr'].Inst['ActionRunComplete']();
                                });
                            });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](a)),
                                l['BgmListMgr']['stopBgm'](),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UIMgr'].Inst['ShowWin'](a, !1);
                        },
                        U['record'] = function(l) {
                            return this.play(l),
                                100000;
                        },
                        U['fastrecord'] = function(a) {
                            l['BgmListMgr']['stopBgm'](),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                uiscript['UIMgr'].Inst['ShowWin'](a, !1);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionHule'] = a;
        }
        (view || (view = {}));

        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this;
                            app.Log.log('ActionNewRound play data:' + JSON['stringify'](a)),
                                l['BgmListMgr']['PlayMJBgm'](),
                                l['DesktopMgr'].Inst['index_change'] = a['chang'],
                                l['DesktopMgr'].Inst['index_chuanma_ju'] = a['ju_count'],
                                l['DesktopMgr'].Inst['index_ju'] = a.ju,
                                l['DesktopMgr'].Inst['index_ben'] = a.ben,
                                l['DesktopMgr'].Inst['index_player'] = a.ju,
                                l['DesktopMgr'].Inst['gameing'] = !0,
                                l['DesktopMgr'].Inst['left_tile_count'] = 69,
                                l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi4'] ? l['DesktopMgr'].Inst['left_tile_count'] = 69 : l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi3'] && (l['DesktopMgr'].Inst['left_tile_count'] = 50),
                                a['left_tile_count'] && (l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count']),
                                l['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['closeCardDetail'](), uiscript['UI_FieldSpell'].Inst['setZhuangState'](l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                uiscript['UI_DesktopInfo'].Inst['logUpEmoInfo'](),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                l['DesktopMgr'].Inst['setAutoHule'](!1),
                                l['DesktopMgr'].Inst['setAutoMoQie'](!1),
                                l['DesktopMgr'].Inst['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                uiscript['UI_TingPai'].Inst['reset'](),
                                l['DesktopMgr'].Inst['SetChangJuShow'](l['DesktopMgr'].Inst['index_change'], l['DesktopMgr'].Inst['index_ju'], l['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](l['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                            for (var z = 0; 4 > z; z++)
                                l['DesktopMgr'].Inst['players'][z]['Reset'](), l['DesktopMgr'].Inst['players'][z]['setSeat'](l['DesktopMgr'].Inst['localPosition2Seat'](z));
                            l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['setScores'](a['scores']),
                                l['DesktopMgr'].Inst.md5 = a.md5,
                                l['DesktopMgr'].Inst['choosed_pai'] = null,
                                l['DesktopMgr'].Inst.dora = [];
                            var M = 0;
                            0 == l['DesktopMgr'].Inst['index_change'] && 0 == l['DesktopMgr'].Inst['index_ju'] && 0 == l['DesktopMgr'].Inst['index_ben'] && (l['DesktopMgr'].Inst['is_dora3_mode']() && !l['DesktopMgr'].Inst['is_muyu_mode']() && (uiscript['UI_DesktopInfo'].Inst['openDora3BeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_peipai_open_mode']() && (uiscript['UI_DesktopInfo'].Inst['openPeipaiOpenBeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_muyu_mode']() && (uiscript['UI_DesktopInfo'].Inst['openMuyuOpenBeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_shilian_mode']() && (uiscript['UI_DesktopInfo'].Inst['openShilianOpenBeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_xiuluo_mode']() && (uiscript['UI_DesktopInfo'].Inst['openXiuluoOpenBeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_top_match']() && (uiscript['UI_DesktopInfo'].Inst['openTopMatchOpenBeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_jiuchao_mode']() && (uiscript['UI_DesktopInfo'].Inst['openJiuChaoBeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_reveal_mode']() && (uiscript['UI_DesktopInfo'].Inst['openAnPaiBeginEffect'](), M = 1300), l['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_DesktopInfo'].Inst['openZhanxingBeginEffect'](), M = 1300)),
                                l['DesktopMgr'].Inst['is_chuanma_mode']() && 0 == l['DesktopMgr'].Inst['index_chuanma_ju'] && (uiscript['UI_DesktopInfo'].Inst['openChuanmaBeginEffect'](), M = 1300);
                            var g = !1;
                            void 0 != a.al && null != a.al && (g = a.al),
                                g && (uiscript['UI_AL'].Show(), M = 1300),
                                Laya['timer'].once(M, this, function() {
                                    for (var z = [], M = 0; M < a['tiles']['length']; M++)
                                        z.push(mjcore['MJPai']['Create'](a['tiles'][M]));
                                    var g = [],
                                        R = [];
                                    if (a['opens'])
                                        for (var M = 0; M < a['opens']['length']; M++)
                                            if (a['opens'][M].seat == l['DesktopMgr'].Inst.seat) {
                                                g = a['opens'][M]['tiles'],
                                                    R = a['opens'][M]['count'];
                                                break;
                                            }
                                    l['DesktopMgr'].Inst['mainrole']['NewGame'](z, g, R, !1),
                                        a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0);
                                    for (var M = 1; 4 > M; M++) {
                                        var E = l['DesktopMgr'].Inst['localPosition2Seat'](M);
                                        if (-1 != E) {
                                            var C = [],
                                                B = [];
                                            if (a['opens'])
                                                for (var w = 0; w < a['opens']['length']; w++)
                                                    if (a['opens'][w].seat == E) {
                                                        C = a['opens'][w]['tiles'],
                                                            B = a['opens'][w]['count'];
                                                        break;
                                                    }
                                            l['DesktopMgr'].Inst['players'][M]['NewGame'](13 + (E == l['DesktopMgr'].Inst['index_ju'] ? 1 : 0), C, B, !1, '');
                                        }
                                    }
                                    l['DesktopMgr'].Inst['is_huansanzhang_mode']() ? Laya['timer'].once(1500, U, function() {
                                        l['DesktopMgr'].Inst['ActionRunComplete'](),
                                            l['ActionOperation'].play(a['operation']);
                                    }) : (l['DesktopMgr'].Inst['is_dora3_mode']() && Laya['timer'].once(1000, U, function() {
                                        uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine']();
                                    }), Laya['timer'].once(1200, U, function() {
                                        if (a['doras'] && a['doras']['length'] > 0)
                                            for (var U = 0; U < a['doras']['length']; U++)
                                                l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][U])), uiscript['UI_DesktopInfo'].Inst['setDora'](U, l['DesktopMgr'].Inst.dora[U]);
                                        for (var U = 0; 4 > U; U++)
                                            l['DesktopMgr'].Inst['players'][U]['OnDoraRefresh']();
                                        if (l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat) {
                                            var z = {
                                                tingpais: a['tingpais0'],
                                                operation: a['operation']
                                            };
                                            uiscript['UI_TingPai'].Inst['setData0'](z);
                                        } else {
                                            var z = {
                                                tingpais: a['tingpais1']
                                            };
                                            uiscript['UI_TingPai'].Inst['setData1'](z, !1);
                                        }
                                        l['DesktopMgr'].Inst['ActionRunComplete']();
                                    }), void 0 != a['operation'] && Laya['timer'].once(1000, U, function() {
                                        l['ActionOperation'].play(a['operation']);
                                    }));
                                }),
                                l['DesktopMgr'].Inst['fetchLinks']();
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionNewRound fastplay data:' + JSON['stringify'](a) + ' usetime:' + U),
                                l['DesktopMgr'].Inst['index_change'] = a['chang'],
                                l['DesktopMgr'].Inst['index_ju'] = a.ju,
                                l['DesktopMgr'].Inst['index_ben'] = a.ben,
                                l['DesktopMgr'].Inst['index_player'] = a.ju,
                                l['DesktopMgr'].Inst['index_chuanma_ju'] = a['ju_count'],
                                l['DesktopMgr'].Inst['gameing'] = !0,
                                l['DesktopMgr'].Inst['left_tile_count'] = 69,
                                l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi4'] ? l['DesktopMgr'].Inst['left_tile_count'] = 69 : l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi3'] && (l['DesktopMgr'].Inst['left_tile_count'] = 50),
                                a['left_tile_count'] && (l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count']),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                l['DesktopMgr'].Inst['setAutoHule'](!1),
                                l['DesktopMgr'].Inst['setAutoMoQie'](!1),
                                l['DesktopMgr'].Inst['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                uiscript['UI_TingPai'].Inst['reset'](),
                                l['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['setZhuangState'](l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                uiscript['UI_DesktopInfo'].Inst['logUpEmoInfo'](),
                                l['DesktopMgr'].Inst['SetChangJuShow'](l['DesktopMgr'].Inst['index_change'], l['DesktopMgr'].Inst['index_ju'], l['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](l['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1);
                            for (var z = 0; 4 > z; z++)
                                l['DesktopMgr'].Inst['players'][z]['Reset'](), l['DesktopMgr'].Inst['players'][z]['setSeat'](l['DesktopMgr'].Inst['localPosition2Seat'](z));
                            l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['setScores'](a['scores']),
                                l['DesktopMgr'].Inst.md5 = a.md5,
                                l['DesktopMgr'].Inst['choosed_pai'] = null,
                                l['DesktopMgr'].Inst.dora = [];
                            for (var M = [], z = 0; z < a['tiles']['length']; z++)
                                M.push(mjcore['MJPai']['Create'](a['tiles'][z]));
                            var g = [],
                                R = [];
                            if (a['opens'])
                                for (var z = 0; z < a['opens']['length']; z++)
                                    if (a['opens'][z].seat == l['DesktopMgr'].Inst.seat) {
                                        g = a['opens'][z]['tiles'],
                                            R = a['opens'][z]['count'];
                                        break;
                                    }
                            l['DesktopMgr'].Inst['mainrole']['NewGame'](M, g, R, !0);
                            for (var z = 1; 4 > z; z++) {
                                var E = l['DesktopMgr'].Inst['localPosition2Seat'](z);
                                if (-1 != E) {
                                    var C = [],
                                        B = [];
                                    if (a['opens'])
                                        for (var w = 0; w < a['opens']['length']; w++)
                                            if (a['opens'][w].seat == E) {
                                                C = a['opens'][w]['tiles'],
                                                    B = a['opens'][w]['count'];
                                                break;
                                            }
                                    l['DesktopMgr'].Inst['players'][z]['NewGame'](13 + (E == l['DesktopMgr'].Inst['index_ju'] ? 1 : 0), C, B, !0, '');
                                }
                            }
                            if (l['DesktopMgr'].Inst['is_chuanma_mode']())
                                a['operation'] && -1 != U && Laya['timer'].once(100, this, function() {
                                    l['ActionOperation'].play(a['operation'], U + 100);
                                });
                            else if (l['DesktopMgr'].Inst['is_huansanzhang_mode']())
                                a['operation'] && -1 != U && Laya['timer'].once(100, this, function() {
                                    l['ActionOperation'].play(a['operation'], U + 100);
                                });
                            else {
                                if (a['doras'] && a['doras']['length'] > 0)
                                    for (var z = 0; z < a['doras']['length']; z++)
                                        l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][z])), uiscript['UI_DesktopInfo'].Inst['setDora'](z, l['DesktopMgr'].Inst.dora[z]);
                                for (var z = 0; 4 > z; z++)
                                    l['DesktopMgr'].Inst['players'][z]['OnDoraRefresh']();
                                if (l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat) {
                                    var L = {
                                        tingpais: a['tingpais0'],
                                        operation: a['operation']
                                    };
                                    uiscript['UI_TingPai'].Inst['setData0'](L);
                                } else {
                                    var L = {
                                        tingpais: a['tingpais1']
                                    };
                                    uiscript['UI_TingPai'].Inst['setData1'](L, !0);
                                }
                                a['operation'] && -1 != U && Laya['timer'].once(100, this, function() {
                                    l['ActionOperation'].play(a['operation'], U + 100);
                                });
                            }
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionNewRound record data:' + JSON['stringify'](a)),
                                l['DesktopMgr'].Inst['ClearOperationShow'](),
                                l['BgmListMgr']['PlayMJBgm'](),
                                l['DesktopMgr'].Inst['index_change'] = a['chang'],
                                l['DesktopMgr'].Inst['index_ju'] = a.ju,
                                l['DesktopMgr'].Inst['index_ben'] = a.ben,
                                l['DesktopMgr'].Inst['index_player'] = a.ju,
                                l['DesktopMgr'].Inst['index_chuanma_ju'] = a['ju_count'],
                                l['DesktopMgr'].Inst['gameing'] = !0,
                                l['DesktopMgr'].Inst['left_tile_count'] = 69,
                                l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi4'] ? l['DesktopMgr'].Inst['left_tile_count'] = 69 : l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi3'] && (l['DesktopMgr'].Inst['left_tile_count'] = 50),
                                a['left_tile_count'] && (l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count']),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                l['DesktopMgr'].Inst['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                l['DesktopMgr'].Inst['SetChangJuShow'](l['DesktopMgr'].Inst['index_change'], l['DesktopMgr'].Inst['index_ju'], l['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](l['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                            for (var z = 0; 4 > z; z++)
                                l['DesktopMgr'].Inst['players'][z]['setSeat'](l['DesktopMgr'].Inst['localPosition2Seat'](z));
                            l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['closeCardDetail'](), uiscript['UI_FieldSpell'].Inst['setZhuangState'](l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                l['DesktopMgr'].Inst['choosed_pai'] = null,
                                l['DesktopMgr'].Inst.dora = [],
                                l['AudioMgr']['PlayAudio'](216);
                            for (var z = 0; 4 > z; z++) {
                                var M = [],
                                    g = 'tiles' + z['toString']();
                                if (a[g] && a[g]['length'] > 0) {
                                    for (var R = 0; R < a[g]['length']; R++)
                                        M.push(mjcore['MJPai']['Create'](a[g][R]));
                                    var E = [],
                                        C = [];
                                    if (a['opens'])
                                        for (var R = 0; R < a['opens']['length']; R++)
                                            if (a['opens'][R].seat == z) {
                                                E = a['opens'][R]['tiles'],
                                                    C = a['opens'][R]['count'];
                                                break;
                                            }
                                    z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['RecordNewGame'](M, E, C) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['RecordNewGame'](M, E, C);
                                }
                            }
                            if (l['DesktopMgr'].Inst['setScores'](a['scores']), l['DesktopMgr'].Inst.md5 = a.md5, uiscript['UI_DesktopInfo'].Inst['reset_rounds'](), l['DesktopMgr'].Inst['is_huansanzhang_mode']()) {
                                var B = a['operations'][l['DesktopMgr'].Inst['localPosition2Seat'](l['DesktopMgr'].Inst.seat)];
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && B && l['ActionOperation'].ob(B, U, 1000);
                            } else {
                                if (a['doras'] && a['doras']['length'] > 0)
                                    for (var z = 0; z < a['doras']['length']; z++)
                                        l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][z])), uiscript['UI_DesktopInfo'].Inst['setDora'](z, l['DesktopMgr'].Inst.dora[z]);
                                else
                                    a.dora && '' != a.dora && (l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, l['DesktopMgr'].Inst.dora[0]));
                                for (var z = 0; 4 > z; z++)
                                    l['DesktopMgr'].Inst['players'][z]['OnDoraRefresh']();
                                if (a['tingpai'])
                                    for (var z = 0; z < a['tingpai']['length']; z++)
                                        a['tingpai'][z].seat != l['DesktopMgr'].Inst['index_ju'] && l['DesktopMgr'].Inst['setTingpai'](a['tingpai'][z].seat, a['tingpai'][z]['tingpais1']);
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 1000);
                            }
                            return a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['paipu'] && (a['paishan'] ? (uiscript['UI_Replay'].Inst['page_paishan']['setTiles'](a['paishan']), uiscript['UI_Replay'].Inst['page_paishan']['refresh']()) : uiscript['UI_Replay'].Inst['page_paishan']['setNoInfo']()),
                                300;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                app.Log.log('ActionNewRound fastrecord data:' + JSON['stringify'](a)),
                                l['BgmListMgr']['PlayMJBgm'](),
                                l['DesktopMgr'].Inst['ClearOperationShow'](),
                                l['DesktopMgr'].Inst['index_change'] = a['chang'],
                                l['DesktopMgr'].Inst['index_ju'] = a.ju,
                                l['DesktopMgr'].Inst['index_ben'] = a.ben,
                                l['DesktopMgr'].Inst['index_player'] = a.ju,
                                l['DesktopMgr'].Inst['index_chuanma_ju'] = a['ju_count'],
                                l['DesktopMgr'].Inst['gameing'] = !0,
                                l['DesktopMgr'].Inst['left_tile_count'] = 69,
                                l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi4'] ? l['DesktopMgr'].Inst['left_tile_count'] = 69 : l['DesktopMgr'].Inst['rule_mode'] == l['ERuleMode']['Liqi3'] && (l['DesktopMgr'].Inst['left_tile_count'] = 50),
                                a['left_tile_count'] && (l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count']),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                l['DesktopMgr'].Inst['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                l['DesktopMgr'].Inst['SetChangJuShow'](l['DesktopMgr'].Inst['index_change'], l['DesktopMgr'].Inst['index_ju'], l['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](l['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                            for (var z = 0; 4 > z; z++)
                                l['DesktopMgr'].Inst['players'][z]['setSeat'](l['DesktopMgr'].Inst['localPosition2Seat'](z));
                            l['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['setZhuangState'](l['DesktopMgr'].Inst['index_ju'] == l['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['choosed_pai'] = null,
                                l['DesktopMgr'].Inst.dora = [];
                            for (var z = 0; 4 > z; z++) {
                                var M = [],
                                    g = 'tiles' + z['toString']();
                                if (a[g] && a[g]['length'] > 0) {
                                    for (var R = 0; R < a[g]['length']; R++)
                                        M.push(mjcore['MJPai']['Create'](a[g][R]));
                                    var E = [],
                                        C = [];
                                    if (a['opens'])
                                        for (var R = 0; R < a['opens']['length']; R++)
                                            if (a['opens'][R].seat == z) {
                                                E = a['opens'][R]['tiles'],
                                                    C = a['opens'][R]['count'];
                                                break;
                                            }
                                    z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['RecordNewGame'](M, E, C) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['RecordNewGame'](M, E, C);
                                }
                            }
                            if (l['DesktopMgr'].Inst['setScores'](a['scores']), l['DesktopMgr'].Inst.md5 = a.md5, uiscript['UI_DesktopInfo'].Inst['reset_rounds'](), l['DesktopMgr'].Inst['is_huansanzhang_mode']()) {
                                var B = a['operations'][l['DesktopMgr'].Inst['localPosition2Seat'](l['DesktopMgr'].Inst.seat)];
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && B && l['ActionOperation'].ob(B, U, 1000);
                            } else {
                                if (a['doras'] && a['doras']['length'] > 0)
                                    for (var z = 0; z < a['doras']['length']; z++)
                                        l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a['doras'][z])), uiscript['UI_DesktopInfo'].Inst['setDora'](z, l['DesktopMgr'].Inst.dora[z]);
                                else
                                    a.dora && '' != a.dora && (l['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](a.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, l['DesktopMgr'].Inst.dora[0]));
                                for (var z = 0; 4 > z; z++)
                                    l['DesktopMgr'].Inst['players'][z]['OnDoraRefresh']();
                                if (a['tingpai'])
                                    for (var z = 0; z < a['tingpai']['length']; z++)
                                        a['tingpai'][z].seat != l['DesktopMgr'].Inst['index_ju'] && l['DesktopMgr'].Inst['setTingpai'](a['tingpai'][z].seat, a['tingpai'][z]['tingpais1']);
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 1000);
                            }
                            l['DesktopMgr'].Inst.mode == l['EMJMode']['paipu'] && (a['paishan'] ? (uiscript['UI_Replay'].Inst['page_paishan']['setTiles'](a['paishan']), uiscript['UI_Replay'].Inst['page_paishan']['refresh']()) : uiscript['UI_Replay'].Inst['page_paishan']['setNoInfo']()),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionNewRound'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionChiPengGang play data:' + JSON['stringify'](a));
                            var U = a.seat,
                                z = new mjcore['MJMing']();
                            z.type = a.type,
                                z.from = a['froms'],
                                z.pais = [];
                            for (var M = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)], g = 0; g < a['tiles']['length']; g++)
                                z.pais.push(mjcore['MJPai']['Create'](a['tiles'][g]));
                            for (var R = [], g = 0; g < z.pais['length']; g++)
                                !a['tile_states'] || a['tile_states']['length'] <= g ? R.push(0) : R.push(a['tile_states'][g]);
                            Laya['timer'].once(600, this, function() {
                                    try {
                                        a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                            l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                            M['AddMing'](z, R),
                                            z.type == mjcore['E_Ming']['gang_ming'] && (l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0);
                                    } catch (U) {
                                        var g = {};
                                        g['error'] = U['message'],
                                            g['stack'] = U['stack'],
                                            g['method'] = 'addming600',
                                            g.name = 'ActionChiPengGang',
                                            GameMgr.Inst['onFatalError'](g);
                                    }
                                }),
                                U != l['DesktopMgr'].Inst.seat || z.type != mjcore['E_Ming']['gang_an'] && z.type != mjcore['E_Ming']['gang_ming'] || (l['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']);
                            var E = '',
                                C = '';
                            switch (z.type) {
                                case mjcore['E_Ming'].kezi:
                                    E = 'emoji_4',
                                        C = 'emoji_3';
                                    break;
                                case mjcore['E_Ming']['shunzi']:
                                    E = 'emoji_2',
                                        C = 'emoji_1';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                    E = 'emoji_6',
                                        C = 'emoji_5';
                            }
                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](l['DesktopMgr'].Inst['index_player'], E, 2000),
                                l['DesktopMgr'].Inst['index_player'] = U,
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](l['DesktopMgr'].Inst['index_player'], C, 2000),
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi'].play(a.liqi),
                                a['operation'] && Laya['timer'].once(600, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                a['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                            var B = '';
                            switch (z.type) {
                                case mjcore['E_Ming']['shunzi']:
                                    B = 'act_chi';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                case mjcore['E_Ming']['gang_an']:
                                    B = 'act_kan';
                                    break;
                                case mjcore['E_Ming'].kezi:
                                    B = 'act_pon';
                            }
                            var w = M['score'];
                            a['scores'] && a['scores']['length'] > 0 && l['DesktopMgr'].Inst['setScores'](a['scores']),
                                M['PlaySound'](B, M['score'] - w),
                                U == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](a);
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionChiPengGang fastplay data:' + JSON['stringify'](a) + ' usetime:' + U);
                            var z = a.seat,
                                M = new mjcore['MJMing']();
                            M.type = a.type,
                                M.from = a['froms'],
                                M.pais = [];
                            for (var g = 0; g < a['tiles']['length']; g++)
                                M.pais.push(mjcore['MJPai']['Create'](a['tiles'][g]));
                            for (var R = [], g = 0; g < M.pais['length']; g++)
                                !a['tile_states'] || a['tile_states']['length'] <= g ? R.push(0) : R.push(a['tile_states'][g]);
                            a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddMing'](M, R, !1),
                                M.type == mjcore['E_Ming']['gang_ming'] && (l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0),
                                z != l['DesktopMgr'].Inst.seat || M.type != mjcore['E_Ming']['gang_an'] && M.type != mjcore['E_Ming']['gang_ming'] || (l['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']),
                                l['DesktopMgr'].Inst['index_player'] = z,
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi']['fastplay'](a.liqi, 0),
                                a['operation'] && -1 != U && Laya['timer'].once(600, this, function() {
                                    l['ActionOperation'].play(a['operation'], U);
                                }),
                                a['scores'] && a['scores']['length'] > 0 && l['DesktopMgr'].Inst['setScores'](a['scores']),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                a['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']),
                                z == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](a);
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionChiPengGang record data:' + JSON['stringify'](a));
                            var z = a.seat,
                                M = new mjcore['MJMing']();
                            M.type = a.type,
                                M.from = a['froms'],
                                M.pais = [];
                            for (var g = 0; g < a['tiles']['length']; g++)
                                M.pais.push(mjcore['MJPai']['Create'](a['tiles'][g]));
                            for (var R = [], g = 0; g < M.pais['length']; g++)
                                !a['tile_states'] || a['tile_states']['length'] <= g ? R.push(0) : R.push(a['tile_states'][g]);
                            Laya['timer'].once(600, this, function() {
                                    a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                        l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                        l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddMing'](M, R),
                                        M.type == mjcore['E_Ming']['gang_ming'] && (l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0);
                                }),
                                z != l['DesktopMgr'].Inst.seat || M.type != mjcore['E_Ming']['gang_an'] && M.type != mjcore['E_Ming']['gang_ming'] || (l['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']);
                            var E = '',
                                C = '';
                            switch (M.type) {
                                case mjcore['E_Ming'].kezi:
                                    E = 'emoji_4',
                                        C = 'emoji_3';
                                    break;
                                case mjcore['E_Ming']['shunzi']:
                                    E = 'emoji_2',
                                        C = 'emoji_1';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                    E = 'emoji_6',
                                        C = 'emoji_5';
                            }
                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](l['DesktopMgr'].Inst['index_player'], E, 2000),
                                l['DesktopMgr'].Inst['index_player'] = z,
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](l['DesktopMgr'].Inst['index_player'], C, 2000),
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi']['record'](a.liqi),
                                a['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']);
                            var B = '';
                            switch (M.type) {
                                case mjcore['E_Ming']['shunzi']:
                                    B = 'act_chi';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                case mjcore['E_Ming']['gang_an']:
                                    B = 'act_kan';
                                    break;
                                case mjcore['E_Ming'].kezi:
                                    B = 'act_pon';
                            }
                            var w = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)],
                                L = w['score'];
                            return a['scores'] && a['scores']['length'] > 0 && l['DesktopMgr'].Inst['setScores'](a['scores']),
                                w['PlaySound'](B, w['score'] - L),
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 500),
                                1200;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                app.Log.log('ActionChiPengGang fastrecord data:' + JSON['stringify'](a));
                            var z = a.seat,
                                M = new mjcore['MJMing']();
                            M.type = a.type,
                                M.from = a['froms'],
                                M.pais = [];
                            for (var g = 0; g < a['tiles']['length']; g++)
                                M.pais.push(mjcore['MJPai']['Create'](a['tiles'][g]));
                            for (var R = [], g = 0; g < M.pais['length']; g++)
                                !a['tile_states'] || a['tile_states']['length'] <= g ? R.push(0) : R.push(a['tile_states'][g]);
                            a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddMing'](M, R, !1),
                                M.type == mjcore['E_Ming']['gang_ming'] && (l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0),
                                a['scores'] && a['scores']['length'] > 0 && l['DesktopMgr'].Inst['setScores'](a['scores']),
                                a['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](a['liqibang']),
                                l['DesktopMgr'].Inst['index_player'] = z,
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi']['fastrecord'](a.liqi),
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operation'] && l['ActionOperation'].ob(a['operation'], U, 500);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionChiPengGang'] = a;
        }
        (view || (view = {}));

        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionDealTile play data:' + JSON['stringify'](a));
                            var U = a.seat,
                                z = a.tile;
                            l['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](a['tile_index'], !0), uiscript['UI_Astrology'].Inst['onSelectionEnd'](a['tile_index'])),
                                l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count'],
                                10 == l['DesktopMgr'].Inst['left_tile_count'] && (l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](l['DesktopMgr'].Inst.seat)]['already_xuezhan_hule_state'] || l['DesktopMgr'].Inst['addMindVoice'](l['DesktopMgr'].Inst.seat, 'ingame_remain10'), Laya['timer'].once(1000, this, function() {
                                    l['DesktopMgr'].Inst['playMindVoice']();
                                }));
                            var M = !1;
                            if (a['tile_state'] && a['tile_state'] > 0 && (M = !0), U == l['DesktopMgr'].Inst.seat) {
                                var g = Laya['timer']['currTimer'] - l['DesktopMgr'].Inst['last_gang'],
                                    R = 0;
                                650 > g && (R = 650 - g),
                                    Laya['timer'].once(R, this, function() {
                                        a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                            l['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](z), M),
                                            l['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                            } else
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0), M || z && -1 != z['indexOf']('t') ? l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['TakePai'](mjcore['MJPai']['Create'](z), M) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['TakePai'](mjcore['MJPai']['Create']('5z'), M), l['DesktopMgr'].Inst['ActionRunComplete']();
                            l['DesktopMgr'].Inst['index_player'] = U,
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi'].play(a.liqi),
                                a['operation'] && l['ActionOperation'].play(a['operation']),
                                a['doras'] && a['doras']['length'] > 0 && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                U == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](a),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionDealTile fastplay data:' + JSON['stringify'](a) + ' usetime:' + U);
                            var z = a.seat,
                                M = a.tile;
                            l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count'];
                            var g = !1;
                            a['tile_state'] && a['tile_state'] > 0 && (g = !0),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](M), g, !1) : g || M && -1 != M['indexOf']('t') ? l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['TakePai'](mjcore['MJPai']['Create'](M), g) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['TakePai'](mjcore['MJPai']['Create']('5z'), g),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](a['tile_index'], !1), uiscript['UI_Astrology'].Inst['onSelectionEnd'](a['tile_index'])),
                                l['DesktopMgr'].Inst['index_player'] = z,
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi']['fastplay'](a.liqi, 0),
                                a['operation'] && -1 != U && l['ActionOperation'].play(a['operation'], U),
                                a['doras'] && a['doras']['length'] > 0 && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                z == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](a),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionDealTile record data:' + JSON['stringify'](a));
                            var z = a.seat,
                                M = a.tile;
                            l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count'];
                            var g = !1;
                            return a['tile_state'] && a['tile_state'] > 0 && (g = !0),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](M), g) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordTakePai'](mjcore['MJPai']['Create'](M), g),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](a['tile_index'], !0), uiscript['UI_Astrology'].Inst['onSelectionEnd'](a['tile_index'])),
                                l['DesktopMgr'].Inst['index_player'] = z,
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi']['record'](a.liqi),
                                a['doras'] && a['doras']['length'] > 0 && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0),
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operation'] && l['ActionOperation'].ob(a['operation'], U),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                300;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                app.Log.log('ActionDealTile fastrecord data:' + JSON['stringify'](a));
                            var z = a.seat,
                                M = a.tile;
                            l['DesktopMgr'].Inst['left_tile_count'] = a['left_tile_count'];
                            var g = !1;
                            a['tile_state'] && a['tile_state'] > 0 && (g = !0),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](M), g, !1) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordTakePai'](mjcore['MJPai']['Create'](M), g),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](a['tile_index'], !1), uiscript['UI_Astrology'].Inst['onSelectionEnd'](a['tile_index'])),
                                l['DesktopMgr'].Inst['index_player'] = z,
                                l['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                l['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                a.liqi && l['ActionLiqi']['fastrecord'](a.liqi),
                                a['doras'] && a['doras']['length'] > 0 && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0),
                                l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operation'] && l['ActionOperation'].ob(a['operation'], U),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionDealTile'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionDiscardTile play data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1);
                            var U = a.seat,
                                z = mjcore['MJPai']['Create'](a.tile),
                                M = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']);
                            if (a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0), l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['AddQiPai'](z, M, a['moqie']), l['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](U, M), l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](), M) {
                                a['is_wliqi'] ? l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['PlaySound']('act_drich') : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['PlaySound']('act_rich');
                                var g = l['DesktopMgr'].Inst['player_effects'][U][game['EView']['lizhi_bgm']];
                                if (g && 0 != g) {
                                    var R = cfg['item_definition'].item.get(g)['sargs'][0];
                                    l['AudioMgr']['lizhiMuted'] ? l['AudioMgr']['PlayLiqiBgm'](R, 300, !0) : (l['BgmListMgr']['stopBgm'](), Laya['timer'].once(1000, this, function() {
                                        l['DesktopMgr'].Inst['gameing'] && (l['BgmListMgr']['PlayMJBgm']('', !0), l['AudioMgr']['PlayLiqiBgm'](R, 300, !0));
                                    }));
                                }
                            }
                            var E = !1;
                            !z['touming'] && a['tile_state'] && a['tile_state'] > 0 && (E = !0),
                                U == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](z, E, !1, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](U)]['onDiscardTile'](a['moqie'], a.tile, E, !1),
                                a['operation'] && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                U == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !1),
                                Laya['timer'].once(500, this, function() {
                                    M ? l['DesktopMgr'].Inst['clearMindVoice']() : l['DesktopMgr'].Inst['playMindVoice']();
                                });
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionDiscardTile fastplay data:' + JSON['stringify'](a) + ' usetime:' + U),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = mjcore['MJPai']['Create'](a.tile),
                                g = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']),
                                R = !1;
                            !M['touming'] && a['tile_state'] && a['tile_state'] > 0 && (R = !0),
                                l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddQiPai'](M, g, a['moqie'], !1),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](M, R, !0, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['onDiscardTile'](a['moqie'], a.tile, R, !0),
                                a['operation'] && -1 != U && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation'], U);
                                }),
                                void 0 != a['zhenting'] && void 0 == a['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](a['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting'])),
                                z == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !0),
                                l['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](z, g),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile']();
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionDiscardTile record data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = mjcore['MJPai']['Create'](a.tile),
                                g = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']),
                                R = !1;
                            if (!M['touming'] && a['tile_state'] && a['tile_state'] > 0 && (R = !0), a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0), l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddQiPai'](M, g, a['moqie']), g && (a['is_wliqi'] ? l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['PlaySound']('act_drich') : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['PlaySound']('act_rich'), uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](z, 'emoji_9', 2000)), z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](M, R, !1, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordDiscardTile'](M, a['moqie'], R, !1), a['tingpais'] && l['DesktopMgr'].Inst['setTingpai'](a.seat, a['tingpais']), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var E = 0; E < a['operations']['length']; E++)
                                    l['ActionOperation'].ob(a['operations'][E], U, 450);
                            return l['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](z, g),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](),
                                500;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                app.Log.log('ActionDiscardTile fastrecord data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = mjcore['MJPai']['Create'](a.tile),
                                g = !(null == a['is_liqi'] || void 0 == a['is_liqi'] || !a['is_liqi']),
                                R = !1;
                            if (!M['touming'] && a['tile_state'] && a['tile_state'] > 0 && (R = !0), a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1), l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['AddQiPai'](M, g, a['moqie'], !1), z == l['DesktopMgr'].Inst.seat ? l['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](M, R, !0, a['moqie']) : l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](z)]['recordDiscardTile'](M, a['moqie'], R, !0), a['tingpais'] && l['DesktopMgr'].Inst['setTingpai'](a.seat, a['tingpais']), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operations'])
                                for (var E = 0; E < a['operations']['length']; E++)
                                    l['ActionOperation'].ob(a['operations'][E], U, 450);
                            l['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](z, g),
                                l['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile']();
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionDiscardTile'] = a;
        }
        (view || (view = {}));

        ! function(l) {
            var a;
            ! function(l) {
                l[l.none = 0] = 'none',
                    l[l['room_invite'] = 1] = 'room_invite';
            }
            (a = l['EFriendMsgType'] || (l['EFriendMsgType'] = {}));
            var U = function() {
                    function a() {}
                    return a.init = function() {
                            var l = this;
                            this['_friend_list'] = [],
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchFriendList', {}, function(a, U) {
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify(U),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(U));
                                        }
                                    }));
                                    if (a)
                                        app.Log.log('获取好友列表时发生错误:' + a);
                                    else if (U['error'])
                                        app.Log.log('获取好友列表时发生错误，错误码：' + U['error'].code);
                                    else {
                                        if (app.Log.log(JSON['stringify'](U)), U['friends'])
                                            for (var z = 0; z < U['friends']['length']; z++) {
                                                var M = U['friends'][z];
                                                l['_friend_list'].push(M);
                                            }
                                        l['friend_count'] = U['friend_count'],
                                            l['friend_max_count'] = U['friend_max_count'];
                                    }
                                }),
                                this['_friendapply_list'] = [],
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchFriendApplyList', {}, function(a, U) {
                                    if (a || U['error'])
                                        app.Log.log('获取好友申请列表发生错误');
                                    else if (app.Log.log(JSON['stringify'](U)), U['applies'])
                                        for (var z = 0; z < U['applies']['length']; z++)
                                            l['_friendapply_list'].push(U['applies'][z]);
                                }),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendViewChange', Laya['Handler']['create'](this, this['_onFriendViewChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendStateChange', Laya['Handler']['create'](this, this['_onFriendStateChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendChange', Laya['Handler']['create'](this, this['_onFriendChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyNewFriendApply', Laya['Handler']['create'](this, this['_onFriendApplyChange'], null, !1));
                        },
                        Object['defineProperty'](a, 'friend_list', {
                            get: function() {
                                return this['_friend_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](a, 'friendapply_list', {
                            get: function() {
                                return this['_friendapply_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        a.find = function(l) {
                            for (var a = 0; a < this['_friend_list']['length']; a++)
                                if (this['_friend_list'][a].base['account_id'] == l)
                                    return this['_friend_list'][a];
                            return null;
                        },
                        a['_onFriendStateChange'] = function(l) {
                            app.Log.log(JSON['stringify'](l));
                            var a = this.find(l['target_id']);
                            return null == a ? (app.Log['Error']('收到并非好友的人的信息:' + JSON['stringify'](l)), void 0) : (l = l['active_state'], l && (null != l['login_time'] && void 0 != l['login_time'] && (a['state']['login_time'] = l['login_time']), null != l['logout_time'] && void 0 != l['logout_time'] && (a['state']['logout_time'] = l['logout_time']), a['state']['playing'] = l['playing'], null != l['is_online'] && void 0 != l['is_online'] && (a['state']['is_online'] = l['is_online']), this['triggerMsg']({
                                type: 'singlechange',
                                account_id: a.base['account_id']
                            })), void 0);
                        },
                        a['_onFriendViewChange'] = function(l) {
                            var a = this.find(l['target_id']);
                            return null == a ? (app.Log['Error']('收到并非好友的人的信息:' + JSON['stringify'](l)), void 0) : (null != l.base['avatar_id'] && void 0 != l.base['avatar_id'] && (a.base['avatar_id'] = l.base['avatar_id']), null != l.base['title'] && void 0 != l.base['title'] && (a.base['title'] = l.base['title']), null != l.base['nickname'] && void 0 != l.base['nickname'] && (a.base['nickname'] = l.base['nickname']), null != l.base['verified'] && void 0 != l.base['verified'] && (a.base['verified'] = l.base['verified']), null != l.base['level'] && void 0 != l.base['level'] && (a.base['level'] = l.base['level']), null != l.base['level3'] && void 0 != l.base['level3'] && (a.base['level3'] = l.base['level3']), null != l.base['avatar_frame'] && void 0 != l.base['avatar_frame'] && (a.base['avatar_frame'] = l.base['avatar_frame']), this['triggerMsg']({
                                type: 'singlechange',
                                account_id: a.base['account_id']
                            }), void 0);
                        },
                        a['addListener'] = function(l) {
                            this['removeListener'](l),
                                this['_listener'].push(l);
                        },
                        a['removeListener'] = function(l) {
                            for (var a = 0; a < this['_listener']['length']; a++)
                                if (this['_listener'][a] === l) {
                                    this['_listener'][a] = this['_listener'][this['_listener']['length'] - 1],
                                        this['_listener'].pop();
                                    break;
                                }
                        },
                        a['triggerMsg'] = function(l) {
                            for (var a = 0; a < this['_listener']['length']; a++)
                                this['_listener'][a] && this['_listener'][a]['runWith'](l);
                        },
                        a['removeFriend'] = function(l) {
                            for (var a = 0; a < this['_friend_list']['length']; a++)
                                if (this['_friend_list'][a].base['account_id'] == l) {
                                    for (var U = a; U < this['_friend_list']['length'] - 1; U++)
                                        this['_friend_list'][U] = this['_friend_list'][U + 1];
                                    this['_friend_list'].pop(),
                                        this['friend_count']--;
                                    break;
                                }
                        },
                        a['_onFriendChange'] = function(l) {
                            var a = l['account_id'];
                            1 == l.type ? this.find(a) || (this['friend_count']++, this['friend_list'].push(l['friend'])) : 2 == l.type && this['removeFriend'](a),
                                this['triggerMsg']({
                                    type: 'listchange'
                                });
                        },
                        a['_onFriendApplyChange'] = function(l) {
                            for (var a = 0; a < this['_friendapply_list']['length']; a++)
                                if (this['_friendapply_list'][a]['account_id'] == l['account_id'])
                                    return this['_friendapply_list'][a]['apply_time'] = l['apply_time'], void 0;
                            if (this['_friendapply_list'].push({
                                    account_id: l['account_id'],
                                    apply_time: l['apply_time']
                                }), l['removed_id'])
                                for (var a = 0; a < this['_friendapply_list']['length']; a++)
                                    if (this['_friendapply_list'][a]['account_id'] == l['removed_id']) {
                                        for (var U = 0; U < this['_friendapply_list']['length'] - 1; U++)
                                            this['_friendapply_list'][U] = this['_friendapply_list'][U + 1];
                                        this['_friendapply_list'].pop();
                                        break;
                                    }
                        },
                        a['delFriendApply'] = function(l) {
                            for (var a = 0; a < this['_friendapply_list']['length']; a++)
                                if (this['_friendapply_list'][a]['account_id'] == l) {
                                    for (var U = a; U < this['_friendapply_list']['length'] - 1; U++)
                                        this['_friendapply_list'][U] = this['_friendapply_list'][U + 1];
                                    this['_friendapply_list'].pop();
                                    break;
                                }
                        },
                        a['needShowRedpoint'] = function() {
                            var a = Laya['LocalStorage']['getItem']('friend_apply_' + GameMgr.Inst['account_id']),
                                U = 0;
                            if (a && (U = Number(a) / 1000), l['FriendMgr']['friendapply_list'])
                                for (var z = 0, M = l['FriendMgr']['friendapply_list']; z < M['length']; z++) {
                                    var g = M[z];
                                    if (g['apply_time'] > U)
                                        return !0;
                                }
                            return !1;
                        },
                        a['_friend_list'] = [],
                        a['_listener'] = [],
                        a['_friendapply_list'] = [],
                        a['friend_max_count'] = 0,
                        a['friend_count'] = 0,
                        a;
                }
                ();
            l['FriendMgr'] = U;
        }
        (game || (game = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this,
                                z = l['DesktopMgr'].Inst.mode == l['EMJMode'].play || l['DesktopMgr'].Inst['record_show_anim'];
                            a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                l['BgmListMgr']['stopBgm'](),
                                Laya['timer'].once(100, this, function() {
                                    var M = a['hules'],
                                        g = 0;
                                    if (a['hules_history'] && Laya['timer'].once(3000, U, function() {
                                            for (var U = 0, M = a['hules_history']; U < M['length']; U++) {
                                                var g = M[U],
                                                    R = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](g.seat)];
                                                if (R && R['already_xuezhan_hule_state']) {
                                                    for (var E = [], C = 0; C < g.hand['length']; C++)
                                                        E.push(mjcore['MJPai']['Create'](g.hand[C]));
                                                    E = E.sort(mjcore['MJPai']['Distance']),
                                                        R['onXuezhanEnd'](E, !z);
                                                }
                                            }
                                        }), M[0].zimo) {
                                        for (var R = M[0].seat, E = [], C = 0; C < M[0].hand['length']; C++)
                                            E.push(mjcore['MJPai']['Create'](M[0].hand[C]));
                                        E = E.sort(mjcore['MJPai']['Distance']),
                                            uiscript['UI_Huleshow'].Inst['showZimo']([l['DesktopMgr'].Inst['seat2LocalPosition'](R)]),
                                            a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                            g += 1400,
                                            Laya['timer'].once(g, U, function() {
                                                R == l['DesktopMgr'].Inst.seat && l['DesktopMgr'].Inst['mainrole']['HulePrepare'](E, M[0]['hu_tile'], M[0].zimo),
                                                    l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](R)].Hule(E, mjcore['MJPai']['Create'](M[0]['hu_tile']), M[0].zimo);
                                            }),
                                            g += z ? 1500 : 500,
                                            R == l['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                    } else {
                                        Laya['timer'].once(g, U, function() {
                                                for (var a = [], U = 0; U < M['length']; U++)
                                                    a.push(l['DesktopMgr'].Inst['seat2LocalPosition'](M[U].seat));
                                                uiscript['UI_Huleshow'].Inst['showRong'](a);
                                            }),
                                            g += 1500;
                                        for (var C = 0; C < M['length']; C++) {
                                            var B = M[C].seat;
                                            if (B == l['DesktopMgr'].Inst.seat) {
                                                for (var w = [], L = 0; L < M[C].hand['length']; L++)
                                                    w.push(mjcore['MJPai']['Create'](M[C].hand[L]));
                                                w = w.sort(mjcore['MJPai']['Distance']),
                                                    l['DesktopMgr'].Inst['mainrole']['HulePrepare'](w, M[C]['hu_tile'], M[C].zimo);
                                            }
                                        }
                                        Laya['timer'].once(g, U, function() {
                                                if (z) {
                                                    for (var a = 0, U = -1, g = 0; g < M['length']; g++) {
                                                        var R = M[g].seat;
                                                        if (-1 == U)
                                                            U = R;
                                                        else {
                                                            var E = l['DesktopMgr'].Inst['seat2LocalPosition'](U),
                                                                C = l['DesktopMgr'].Inst['seat2LocalPosition'](R);
                                                            E > C && (U = R);
                                                        }
                                                    }
                                                    U >= 0 && (a = l['DesktopMgr'].Inst['player_effects'][U][game['EView']['hupai_effect']]),
                                                        l['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                                        l['DesktopMgr'].Inst['lastqipai']['OnChoosedPai'](),
                                                        l['DesktopMgr'].Inst['ShowHuleEffect'](l['DesktopMgr'].Inst['lastqipai'], l['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], a, l['DesktopMgr'].Inst['lastpai_seat'], l['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                                }
                                                for (var g = 0; g < M['length']; g++) {
                                                    for (var B = [], w = 0; w < M[g].hand['length']; w++)
                                                        B.push(mjcore['MJPai']['Create'](M[g].hand[w]));
                                                    B = B.sort(mjcore['MJPai']['Distance']),
                                                        l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](M[g].seat)].Hule(B, mjcore['MJPai']['Create'](M[g]['hu_tile']), M[g].zimo),
                                                        M[g].seat == l['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                                }
                                            }),
                                            g += z ? 2000 : 300;
                                    }
                                    for (var c = [], C = 0; C < a['delta_scores']['length']; C++) {
                                        var h = {
                                            title_id: 0,
                                            score: 0,
                                            delta: 0
                                        };
                                        if (a['delta_scores'][C] > 0) {
                                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](C, 'emoji_7', -1),
                                                l['DesktopMgr'].Inst['onRoundEnd'](C, 1),
                                                h['delta'] = a['delta_scores'][C];
                                            for (var x = 0, O = M; x < O['length']; x++) {
                                                var _ = O[x];
                                                if (_.seat == C) {
                                                    h['title_id'] = _['title_id'];
                                                    break;
                                                }
                                            }
                                        } else
                                            a['delta_scores'][C] < 0 && (h['delta'] = a['delta_scores'][C], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](C, 'emoji_8', -1), l['DesktopMgr'].Inst['onRoundEnd'](C, 0));
                                        h['score'] = a['old_scores'][C],
                                            c.push(h);
                                    }
                                    Laya['timer'].once(g, U, function() {
                                            Laya['timer'].once(200, U, function() {
                                                    l['DesktopMgr'].Inst['setScores'](a['scores']);
                                                }),
                                                uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](c);
                                        }),
                                        g += 3000,
                                        Laya['timer'].once(g, U, function() {
                                            uiscript['UIMgr'].Inst['ShowWin'](a, !1),
                                                l['DesktopMgr'].Inst['ActionRunComplete']();
                                        });
                                });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](a)),
                                l['BgmListMgr']['stopBgm'](),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                l['DesktopMgr'].Inst['setScores'](a['scores']),
                                uiscript['UIMgr'].Inst['ShowWin'](a, !1);
                        },
                        U['record'] = function(l) {
                            return this.play(l),
                                100000;
                        },
                        U['fastrecord'] = function(a) {
                            l['BgmListMgr']['stopBgm'](),
                                l['DesktopMgr'].Inst['gameing'] = !1,
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1),
                                l['DesktopMgr'].Inst['setScores'](a['scores']),
                                uiscript['UIMgr'].Inst['ShowWin'](a, !1);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionHuleXueZhanEnd'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionNewCard play data:' + JSON['stringify'](a));
                            var U = uiscript['UI_FightBegin'].hide();
                            return Laya['timer'].once(U + 200, this, function() {
                                    uiscript['UI_DesktopInfo'].Inst['OnNewCard'](a, !0),
                                        l['DesktopMgr'].Inst['ActionRunComplete']();
                                }),
                                U + 1000;
                        },
                        U['fastplay'] = function(a) {
                            return app.Log.log('ActionNewCard fastplay data:' + JSON['stringify'](a)),
                                uiscript['UI_FightBegin'].hide(),
                                uiscript['UI_DesktopInfo'].Inst['OnNewCard'](a, !1),
                                l['DesktopMgr'].Inst['ActionRunComplete'](),
                                0;
                        },
                        U['record'] = function(a) {
                            app.Log.log('ActionNewCard record data:' + JSON['stringify'](a));
                            var U = uiscript['UI_FightBegin'].hide();
                            return l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] ? (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](a, !0), U += 1000) : uiscript['UI_DesktopInfo'].Inst['OnNewCard'](a, !1),
                                l['DesktopMgr'].Inst['ActionRunComplete'](),
                                U;
                        },
                        U['fastrecord'] = function(a) {
                            app.Log.log('ActionNewCard fastrecord data:' + JSON['stringify'](a));
                            uiscript['UI_FightBegin'].hide();
                            return uiscript['UI_DesktopInfo'].Inst['OnNewCard'](a, !1),
                                l['DesktopMgr'].Inst['ActionRunComplete'](),
                                0;
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionNewCard'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            app.Log.log('ActionAnGangAddGang play data:' + JSON['stringify'](a));
                            var U = a.seat,
                                z = l['DesktopMgr'].Inst['seat2LocalPosition'](U);
                            if (a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !1), a.type == mjcore['E_Ming']['gang_ming'])
                                l['DesktopMgr'].Inst['players'][z]['PlaySound']('act_kan'), Laya['timer'].once(500, this, function() {
                                    a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                        l['DesktopMgr'].Inst['players'][z]['AddGang'](mjcore['MJPai']['Create'](a['tiles'])),
                                        l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                });
                            else {
                                var M = new mjcore['MJMing']();
                                M.type = mjcore['E_Ming']['gang_an'],
                                    M.from = [U, U, U, U],
                                    M.pais = this['getAngangTile'](a['tiles']);
                                for (var g = [], R = 0; R < M.pais['length']; R++)
                                    g.push(-1);
                                Laya['timer'].once(500, this, function() {
                                        a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                            l['DesktopMgr'].Inst['players'][z]['AddMing'](M, g),
                                            l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                    }),
                                    l['DesktopMgr'].Inst['players'][z]['PlaySound']('act_kan');
                            }
                            a['operation'] && Laya['timer'].once(600, this, function() {
                                    l['ActionOperation'].play(a['operation']);
                                }),
                                void 0 != a['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting']),
                                U == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !1),
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](U, 'emoji_5', 2000),
                                l['DesktopMgr'].Inst['mainrole']['revertAllPais']();
                        },
                        U['fastplay'] = function(a, U) {
                            app.Log.log('ActionAnGangAddGang fastplay data:' + JSON['stringify'](a) + ' usetime:' + U);
                            var z = a.seat,
                                M = l['DesktopMgr'].Inst['seat2LocalPosition'](z);
                            if (a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0), a.type == mjcore['E_Ming']['gang_ming'])
                                l['DesktopMgr'].Inst['players'][M]['AddGang'](mjcore['MJPai']['Create'](a['tiles']), !1);
                            else {
                                var g = new mjcore['MJMing']();
                                g.type = mjcore['E_Ming']['gang_an'],
                                    g.from = [z, z, z, z],
                                    g.pais = this['getAngangTile'](a['tiles']);
                                for (var R = [], E = 0; E < g.pais['length']; E++)
                                    R.push(-1);
                                l['DesktopMgr'].Inst['players'][M]['AddMing'](g, R, !1);
                            }
                            a['operation'] && -1 != U && Laya['timer'].once(500, this, function() {
                                    l['ActionOperation'].play(a['operation'], U);
                                }),
                                void 0 != a['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](a['zhenting']),
                                z == l['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](a, !0),
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        U['record'] = function(a, U) {
                            void 0 === U && (U = 0),
                                app.Log.log('ActionAnGangAddGang record data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = l['DesktopMgr'].Inst['seat2LocalPosition'](z);
                            if (a.type == mjcore['E_Ming']['gang_ming'])
                                l['DesktopMgr'].Inst['players'][M]['PlaySound']('act_kan'), Laya['timer'].once(500, this, function() {
                                    a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                        l['DesktopMgr'].Inst['players'][M]['AddGang'](mjcore['MJPai']['Create'](a['tiles'])),
                                        l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                });
                            else {
                                var g = new mjcore['MJMing']();
                                g.type = mjcore['E_Ming']['gang_an'],
                                    g.from = [z, z, z, z],
                                    g.pais = this['getAngangTile'](a['tiles']);
                                for (var R = [], E = 0; E < g.pais['length']; E++)
                                    R.push(-1);
                                Laya['timer'].once(500, this, function() {
                                        a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0),
                                            l['DesktopMgr'].Inst['players'][M]['AddMing'](g, R),
                                            l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                    }),
                                    l['DesktopMgr'].Inst['players'][M]['PlaySound']('act_kan');
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](z, 'emoji_5', 2000), l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && a['operations'])
                                for (var E = 0; E < a['operations']['length']; E++)
                                    l['ActionOperation'].ob(a['operations'][E], U, 450);
                            return 1700;
                        },
                        U['fastrecord'] = function(a, U) {
                            void 0 === U && (U = -1),
                                app.Log.log('ActionAnGangAddGang fastrecord data:' + JSON['stringify'](a)),
                                a['doras'] && l['DesktopMgr'].Inst['WhenDoras'](a['doras'], !0);
                            var z = a.seat,
                                M = l['DesktopMgr'].Inst['seat2LocalPosition'](z);
                            if (a.type == mjcore['E_Ming']['gang_ming'])
                                l['DesktopMgr'].Inst['players'][M]['AddGang'](mjcore['MJPai']['Create'](a['tiles']), !1);
                            else {
                                var g = new mjcore['MJMing']();
                                g.type = mjcore['E_Ming']['gang_an'],
                                    g.from = [z, z, z, z],
                                    g.pais = this['getAngangTile'](a['tiles']);
                                for (var R = [], E = 0; E < g.pais['length']; E++)
                                    R.push(-1);
                                l['DesktopMgr'].Inst['players'][M]['AddMing'](g, R, !1);
                            }
                            if (l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && U >= 0 && a['operations'])
                                for (var E = 0; E < a['operations']['length']; E++)
                                    l['ActionOperation'].ob(a['operations'][E], U, 450);
                            l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1);
                        },
                        U['getAngangTile'] = function(a) {
                            var U = [];
                            if (l['DesktopMgr'].Inst['is_chuanma_mode']() || '0' != a['charAt'](0) && '5' != a['charAt'](0) || 'z' == a['charAt'](1))
                                for (var z = 0; 4 > z; z++) {
                                    var M = mjcore['MJPai']['Create'](a);
                                    l['DesktopMgr'].Inst['is_jiuchao_mode']() && (M['touming'] = 3 != z),
                                        U.push(M);
                                }
                            else {
                                var g = 1;
                                if (l['DesktopMgr'].Inst['game_config']) {
                                    var R = l['DesktopMgr'].Inst['game_config'].mode;
                                    if (R && R['extendinfo']) {
                                        var E = JSON['parse'](R['extendinfo']);
                                        if (E && null != E['dora_count'])
                                            switch (E['dora_count']) {
                                                case 0:
                                                    g = 0;
                                                    break;
                                                case 2:
                                                    g = 1;
                                                    break;
                                                case 3:
                                                    g = 1;
                                                    break;
                                                case 4:
                                                    g = 'p' == a['charAt'](1) ? 2 : 1;
                                            }
                                    }
                                    if (R && R['detail_rule'] && R['detail_rule'] && null != R['detail_rule']['dora_count'])
                                        switch (R['detail_rule']['dora_count']) {
                                            case 0:
                                                g = 0;
                                                break;
                                            case 2:
                                                g = 1;
                                                break;
                                            case 3:
                                                g = 1;
                                                break;
                                            case 4:
                                                g = 'p' == a['charAt'](1) ? 2 : 1;
                                        }
                                }
                                for (var z = 0; 4 > z; z++) {
                                    var M = mjcore['MJPai']['Create'](a);
                                    l['DesktopMgr'].Inst['is_jiuchao_mode']() && (M['touming'] = 3 != z),
                                        M.dora = 0 == z ? !1 : g >= z,
                                        U.push(M);
                                }
                            }
                            return l['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                U;
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionAnGangAddGang'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function() {
                    function a(l) {
                        var a = this;
                        this['rounds'] = [],
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = l,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                a['btn_up']['visible'] = a['scrollview'].rate > 0,
                                    a['btn_down']['visible'] = a['scrollview']['need_scroll'] && a['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return a['prototype'].show = function(a) {
                            var U = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['rounds'] = a;
                            for (var z = 0, M = 0; M < a['length']; M++) {
                                var g = this['caluH'](a[M]);
                                z += g,
                                    this['scrollview']['addItem'](1, g);
                            }
                            l['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    U['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        a['prototype']['close'] = function() {
                            var a = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                l['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1,
                                        a.me['visible'] = !1;
                                }));
                        },
                        a['prototype']['caluH'] = function(l) {
                            var a = l['actions'][l['actions']['length'] - 1];
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                return z.Inst['isRoundEnd'](a.name) ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120;
                            if (view['DesktopMgr'].Inst['xuezhan']) {
                                if (!z.Inst['isRoundEnd'](a.name))
                                    return 120;
                                if (a.data['hules_history'] && a.data['hules_history']['length'] > 0)
                                    return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            }
                            if ('RecordNoTile' == a.name) {
                                for (var U = a.data, M = [], g = 0; g < view['DesktopMgr'].Inst['player_count']; g++)
                                    M.push({
                                        old_score: U['scores'][0]['old_scores'][g],
                                        delta: 0
                                    });
                                for (var g = 0; g < U['scores']['length']; g++)
                                    for (var R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                        M[R]['delta'] += U['scores'][g]['delta_scores'][R];
                                for (var E = [], g = 0; g < M['length']; g++)
                                    M[g]['delta'] > 0 && E.push(g);
                                var C = 0 == E['length'] ? 120 : 80 + 40 * E['length'];
                                return C;
                            }
                            if ('RecordLiuJu' == a.name) {
                                if (view['DesktopMgr'].Inst['xuezhan']) {
                                    for (var B = 0, w = 0, L = a.data['delta_scores']; w < L['length']; w++) {
                                        var c = L[w];
                                        c && B++;
                                    }
                                    return B ? 100 + 40 * B : 120;
                                }
                                return 120;
                            }
                            return 'RecordHule' == a.name ? a.data['hules'][0].zimo ? 120 : 180 + 40 * (a.data['hules']['length'] - 1) : 120;
                        },
                        a['prototype']['renderInfo'] = function(l) {
                            for (var a = this, U = l['index'], M = l['container'], g = this['rounds'][U], R = 0; R < g['actions']['length']; R++)
                                if ('RecordNewRound' == g['actions'][R].name) {
                                    if (view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        M['getChildByName']('container_title')['getChildByName']('chang').text = 'en' == GameMgr['client_language'] ? 'Round' : '第',
                                            M['getChildByName']('container_title')['getChildByName']('ju').text = (g['actions'][R].data['ju_count'] + 1)['toString'](),
                                            M['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !1,
                                            M['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !1;
                                        for (var E = 0, C = M['getChildByName']('container_title'), B = [3, 3, 0], w = 0; 3 > w; w++) {
                                            var L = C['getChildAt'](w);
                                            E += L['textField']['textWidth'] * L['scaleX'],
                                                E += B[w];
                                        }
                                        for (var c = C['width'] / 2 - E / 2, h = 0; 3 > h; h++) {
                                            var L = C['getChildAt'](h);
                                            L.x = c,
                                                c += L['textField']['textWidth'] * L['scaleX'] + B[h],
                                                L.y = 'haolong' == L.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var x = void 0;
                                    x = 'chs' == GameMgr['client_language'] ? ['东', '南', '西', '北'] : 'jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'] ? ['東', '南', '西', '北'] : 'kr' == GameMgr['client_language'] ? ['동', '남', '서', '북'] : ['East', 'South', 'West', 'North'],
                                        M['getChildByName']('container_title')['getChildByName']('chang').text = x[g['actions'][R].data['chang'] % 4],
                                        M['getChildByName']('container_title')['getChildByName']('ju').text = (g['actions'][R].data.ju + 1)['toString'](),
                                        M['getChildByName']('container_title')['getChildByName']('ben').text = g['actions'][R].data.ben['toString']();
                                    for (var E = 0, C = M['getChildByName']('container_title'), B = [3, 3, 50, 3, 0], O = 0; O < C['numChildren']; O++) {
                                        var L = C['getChildAt'](O);
                                        E += L['textField']['textWidth'] * L['scaleX'],
                                            E += B[O];
                                    }
                                    for (var c = C['width'] / 2 - E / 2, _ = 0; _ < C['numChildren']; _++) {
                                        var L = C['getChildAt'](_);
                                        L.x = c,
                                            c += L['textField']['textWidth'] * L['scaleX'] + B[_],
                                            L.y = 'haolong' == L.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var p = g['actions'][g['actions']['length'] - 1],
                                N = p.data,
                                n = M,
                                P = M['getChildByName']('line'),
                                H = M['getChildByName']('liuju'),
                                Z = M['getChildByName']('win'),
                                b = M['getChildByName']('lose');
                            P['visible'] = !1,
                                H['visible'] = !1,
                                Z['visible'] = !1,
                                b['visible'] = !1;
                            var W = !0;
                            if (view['DesktopMgr'].Inst['xuezhan'] || view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                for (var d = [], R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                    d.push(0);
                                for (var u = !1, m = 0, i = g['actions']; m < i['length']; m++) {
                                    var q = i[m];
                                    if (('RecordHuleXueZhanEnd' == q.name || 'RecordNoTile' == q.name) && (u = q.data['hules_history'] && q.data['hules_history']['length'] > 0), 'RecordHuleXueZhanMid' == q.name || 'RecordHuleXueZhanEnd' == q.name)
                                        for (var R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                            d[R] += q.data['delta_scores'][R];
                                    else if ('RecordNoTile' == q.name) {
                                        for (var R = 0; R < q.data['scores']['length']; R++)
                                            if (q.data['scores'][R]['delta_scores'] && q.data['scores'][R]['delta_scores']['length'] > 0)
                                                for (var T = 0; T < view['DesktopMgr'].Inst['player_count']; T++)
                                                    d[T] += q.data['scores'][R]['delta_scores'][T];
                                    } else if ('RecordGangResult' == q.name || 'RecordGangResultEnd' == q.name)
                                        for (var R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                            d[R] += q.data['gang_infos']['delta_scores'][R];
                                }
                                if (view['DesktopMgr'].Inst['is_chuanma_mode']() && (u = !0), z.Inst['isRoundEnd'](p.name) || (W = !1), n['height'] = W ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120, u) {
                                    W = !1,
                                        Z['visible'] = !0;
                                    var r = Z['getChildByName']('info');
                                    r['visible'] = 'RecordLiuJu' != p.name,
                                        r.text = game['Tools']['strOfLocalization'](3257),
                                        r = b['getChildByName']('chong');
                                    for (var R = 0; R < view['DesktopMgr'].Inst['player_count']; R++) {
                                        var e = Z['getChildByName']('player'),
                                            v = e['getChildAt'](R);
                                        v['visible'] = !0,
                                            v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](R)['nickname'],
                                            v['getChildByName']('point').text = d[R] > 0 ? '+' + d[R]['toString']() : d[R]['toString']();
                                    }
                                    for (var f = Z['getChildByName']('player'), R = view['DesktopMgr'].Inst['player_count']; R < f['numChildren']; R++)
                                        f['getChildAt'](R)['visible'] = !1;
                                } else;
                            }
                            if ('RecordNoTile' == p.name) {
                                if (W) {
                                    for (var I = [], R = 0; R < view['DesktopMgr'].Inst['player_count']; R++)
                                        I.push({
                                            old_score: N['scores'][0]['old_scores'][R],
                                            delta: 0
                                        });
                                    for (var R = 0; R < N['scores']['length']; R++)
                                        for (var T = 0; T < view['DesktopMgr'].Inst['player_count']; T++)
                                            I[T]['delta'] += N['scores'][R]['delta_scores'][T];
                                    for (var y = [], R = 0; R < I['length']; R++)
                                        I[R]['delta'] > 0 && y.push(R);
                                    if (n['height'] = 120 + (0 == y['length'] ? 0 : 40 * (y['length'] - 1)), N['liujumanguan']) {
                                        Z['visible'] = !0;
                                        var r = Z['getChildByName']('info');
                                        r.text = game['Tools']['strOfLocalization'](2170),
                                            r['color'] = '#8d8fac';
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            R < y['length'] ? (v['visible'] = !0, v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](y[R])['nickname'], v['getChildByName']('point').text = (I[y[R]]['delta'] > 0 ? '+' : '') + I[y[R]]['delta']['toString']()) : v['visible'] = !1;
                                        }
                                    } else if (Z['visible'] = !0, Z['getChildByName']('info').text = '', H['visible'] = !0, H.text = game['Tools']['strOfLocalization'](2171), H['color'] = '#8d8fac', N['scores'])
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            R < y['length'] ? (v['visible'] = !0, v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](y[R])['nickname'], v['getChildByName']('point').text = (I[y[R]]['delta'] > 0 ? '+' : '') + I[y[R]]['delta']['toString']()) : v['visible'] = !1;
                                        }
                                }
                            } else if ('RecordLiuJu' == p.name) {
                                var F = ['', game['Tools']['strOfLocalization'](2172), game['Tools']['strOfLocalization'](2173), game['Tools']['strOfLocalization'](2174), game['Tools']['strOfLocalization'](2175), game['Tools']['strOfLocalization'](2176)];
                                H['visible'] = !0,
                                    H.text = F[N.type],
                                    H['color'] = '#8d8fac',
                                    W && (n['height'] = 120);
                            } else if ('RecordHule' == p.name) {
                                if (!view['DesktopMgr'].Inst['xuezhan'])
                                    if (p.data['hules'][0].zimo) {
                                        Z['visible'] = !0;
                                        var r = Z['getChildByName']('info');
                                        r.text = game['Tools']['strOfLocalization'](2177),
                                            r['color'] = '#ea3694';
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            if (0 == R) {
                                                v['visible'] = !0;
                                                var K = N['hules'][0].seat;
                                                v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                                var k = N['delta_scores'][K];
                                                v['getChildByName']('point').text = (k > 0 ? '+' : '') + k['toString']();
                                            } else
                                                v['visible'] = !1;
                                        }
                                        n['height'] = 120;
                                    } else {
                                        Z['visible'] = !0;
                                        var r = Z['getChildByName']('info');
                                        r.text = game['Tools']['strOfLocalization'](2178),
                                            r['color'] = '#ef3538';
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            if (R < N['hules']['length']) {
                                                v['visible'] = !0;
                                                var K = N['hules'][R].seat;
                                                v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                                var k = N['delta_scores'][K];
                                                v['getChildByName']('point').text = (k > 0 ? '+' : '') + k['toString']();
                                            } else
                                                v['visible'] = !1;
                                        }
                                        P['visible'] = !0,
                                            P.y = 80 + 40 * N['hules']['length'],
                                            b['visible'] = !0,
                                            b.y = 83 + 40 * N['hules']['length'];
                                        var r = b['getChildByName']('chong');
                                        r['visible'] = !0;
                                        for (var f = b['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            if (0 == R) {
                                                v['visible'] = !0;
                                                for (var K = 0, T = 0; T < N['delta_scores']['length']; T++)
                                                    (N['delta_scores'][T] < N['delta_scores'][K] || N['baopai'] > 0 && N['delta_scores'][T] == N['delta_scores'][K] && N['baopai'] - 1 == K) && (K = T);
                                                v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                                var k = N['delta_scores'][K];
                                                v['getChildByName']('point').text = k['toString']();
                                            } else
                                                v['visible'] = !1;
                                        }
                                        n['height'] = 180 + 40 * (p.data['hules']['length'] - 1);
                                    }
                            } else if (z.Inst['isRoundEnd'](p.name)) {
                                if (!view['DesktopMgr'].Inst['xuezhan'] && !view['DesktopMgr'].Inst['is_chuanma_mode']())
                                    if (p.data['hules'][0].zimo) {
                                        Z['visible'] = !0;
                                        var r = Z['getChildByName']('info');
                                        r.text = game['Tools']['strOfLocalization'](2177),
                                            r['color'] = '#ea3694';
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            if (0 == R) {
                                                v['visible'] = !0;
                                                var K = N['hules'][0].seat;
                                                v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                                var k = N['delta_scores'][K];
                                                v['getChildByName']('point').text = (k > 0 ? '+' : '') + k['toString']();
                                            } else
                                                v['visible'] = !1;
                                        }
                                        n['height'] = 120;
                                    } else {
                                        Z['visible'] = !0;
                                        var r = Z['getChildByName']('info');
                                        r.text = game['Tools']['strOfLocalization'](2178),
                                            r['color'] = '#ef3538';
                                        for (var f = Z['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            if (R < N['hules']['length']) {
                                                v['visible'] = !0;
                                                var K = N['hules'][R].seat;
                                                v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                                var k = N['delta_scores'][K];
                                                v['getChildByName']('point').text = (k > 0 ? '+' : '') + k['toString']();
                                            } else
                                                v['visible'] = !1;
                                        }
                                        P['visible'] = !0,
                                            P.y = 80 + 40 * N['hules']['length'],
                                            b['visible'] = !0,
                                            b.y = 83 + 40 * N['hules']['length'];
                                        var r = b['getChildByName']('chong');
                                        r['visible'] = !0;
                                        for (var f = b['getChildByName']('player'), R = 0; R < f['numChildren']; R++) {
                                            var v = f['getChildAt'](R);
                                            if (0 == R) {
                                                v['visible'] = !0;
                                                for (var K = 0, T = 0; T < N['delta_scores']['length']; T++)
                                                    (N['delta_scores'][T] < N['delta_scores'][K] || N['baopai'] > 0 && N['delta_scores'][T] == N['delta_scores'][K] && N['baopai'] - 1 == K) && (K = T);
                                                v['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](K)['nickname'];
                                                var k = N['delta_scores'][K];
                                                v['getChildByName']('point').text = k['toString']();
                                            } else
                                                v['visible'] = !1;
                                        }
                                        n['height'] = 180 + 40 * (p.data['hules']['length'] - 1);
                                    }
                            } else
                                H['visible'] = !0, H.text = game['Tools']['strOfLocalization'](3036), H['color'] = '#8ADB97', n['height'] = 120;
                            n['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    a['locking'] || (z.Inst['jumpRound'](U), a['close']());
                                }, null, !1),
                                M['getChildByName']('bg')['height'] = M['height'] - 4;
                        },
                        a;
                }
                (),
                U = function() {
                    function a(l) {
                        var a = this;
                        this['locking'] = !1,
                            this['enable'] = !1,
                            this['have0'] = !1,
                            this.me = l,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                a['locking'] || a['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                a['btn_up']['visible'] = a['scrollview'].rate > 0,
                                    a['btn_down']['visible'] = a['scrollview']['need_scroll'] && a['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return a['prototype'].show = function(a, U) {
                            var z = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this['have0'] = U,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['scrollview']['addItem'](a + (U ? 1 : 0)),
                                l['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    z['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        a['prototype']['close'] = function() {
                            var a = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                l['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1,
                                        a.me['visible'] = !1;
                                }));
                        },
                        a['prototype']['renderInfo'] = function(l) {
                            var a = this,
                                U = l['index'],
                                M = l['container'];
                            M['getChildByName']('num').text = (U + (this['have0'] ? 0 : 1))['toString'](),
                                M['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    a['locking'] || (z.Inst['jumpXun'](U + (a['have0'] ? 0 : 1)), a['close']());
                                }, null, !1);
                            var g = M,
                                R = [];
                            'en' == GameMgr['client_language'] ? (R.push(g['getChildByName']('xun')), R.push(g['getChildByName']('num'))) : (R.push(g['getChildByName']('num')), R.push(g['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](R, 115, [10]);
                            for (var E = 1; E < g['numChildren']; E++) {
                                var C = g['getChildAt'](E);
                                C.y = 'haolong' == C.font ? 42 : 39;
                            }
                        },
                        a;
                }
                (),
                z = function(z) {
                    function M() {
                        var l = z.call(this, new ui.mj['ob_replayUI']()) || this;
                        return l.root = null,
                            l['label_chang'] = null,
                            l['label_ju'] = null,
                            l['label_xun'] = null,
                            l['img_play'] = null,
                            l['img_stop'] = null,
                            l['btn_preround'] = null,
                            l['btn_nextround'] = null,
                            l['page_chang'] = null,
                            l['page_xun'] = null,
                            l['origin_actions'] = [],
                            l['rounds'] = [],
                            l['round_index'] = 0,
                            l['action_index'] = 0,
                            l['locking_time'] = 0,
                            l['anim_time'] = 0,
                            l['_auto_play'] = !1,
                            l['locking'] = !1,
                            M.Inst = l,
                            l;
                    }
                    return __extends(M, z),
                        Object['defineProperty'](M['prototype'], 'auto_play', {
                            get: function() {
                                return this['_auto_play'];
                            },
                            set: function(l) {
                                this['_auto_play'] = l,
                                    this['img_play']['visible'] = !l,
                                    this['img_stop']['visible'] = l;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        M['prototype']['onCreate'] = function() {
                            var l = this;
                            this.root = this.me['getChildByName']('root');
                            var z = this.me['getChildByName']('root')['getChildByName']('round');
                            z['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['page_chang']['locking'] || (l['locking'], l['auto_play'] && (l['auto_play'] = !1), l['page_xun']['enable'] && l['page_xun']['close'](), l['page_chang']['enable'] ? l['page_chang']['close']() : l['page_chang'].show(l['rounds']));
                                }, null, !1),
                                this['label_chang'] = z['getChildByName']('chang'),
                                this['label_ju'] = z['getChildByName']('ju');
                            var M = this.me['getChildByName']('root')['getChildByName']('turn');
                            this['label_xun'] = M['getChildByName']('xun'),
                                M['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['locking'],
                                        l['page_xun']['locking'] || (l['auto_play'] && (l['auto_play'] = !1), l['page_chang']['enable'] && l['page_chang']['close'](), l['page_xun']['enable'] ? l['page_xun']['close']() : l['page_xun'].show(l['rounds'][l['round_index']].xun['length'], 0 != l['rounds'][l['round_index']].xun[0]));
                                }, null, !1),
                                this['page_chang'] = new a(this.me['getChildByName']('info_chang')),
                                this['page_xun'] = new U(this.me['getChildByName']('info_xun')),
                                this.me['getChildByName']('root')['getChildByName']('play')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['locking'],
                                        l['auto_play'] = !l['auto_play'];
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextstep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return l['locking'],
                                        l['locking_time'] > Laya['timer']['currTimer'] ? (l['auto_play'] && (l['auto_play'] = !1), void 0) : (l['nextStep'](),
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
                                this.me['getChildByName']('root')['getChildByName']('prestep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['locking'],
                                        l['preStep']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['locking'],
                                        l['nextXun']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('preturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['locking'],
                                        l['preXun']();
                                }, null, !1),
                                this['btn_preround'] = this.me['getChildByName']('root')['getChildByName']('preround'),
                                this['btn_preround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['locking'],
                                        l['preRound']();
                                }, null, !1),
                                this['btn_nextround'] = this.me['getChildByName']('root')['getChildByName']('nextround'),
                                this['btn_nextround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    l['locking'],
                                        l['nextRound']();
                                }, null, !1),
                                this['img_play'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('play'),
                                this['img_stop'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('pause');
                        },
                        M['prototype']['isRoundEnd'] = function(l) {
                            return 'RecordNoTile' == l || 'RecordLiuJu' == l || 'RecordHule' == l || 'RecordHuleXueZhanEnd' == l || 'RecordGangResultEnd' == l;
                        },
                        M['prototype'].show = function(a) {
                            var U = this;
                            this['enable'] = !0,
                                this['origin_actions'] = a,
                                this['auto_play'] = !1,
                                this['page_chang']['enable'] = !1,
                                this['page_chang'].me['visible'] = !1,
                                this['page_xun']['enable'] = !1,
                                this['page_xun'].me['visible'] = !1,
                                this['initData'](),
                                this['locking'] = !0,
                                l['UIBase']['anim_alpha_in'](this.root, {
                                    x: 30
                                }, 150, 0, Laya['Handler']['create'](this, function() {
                                    U['locking'] = !1,
                                        l['UI_ReplayWheel'].Inst['enable'] = !0;
                                })),
                                this['round_index'] = this['rounds']['length'] - 1,
                                this['action_index'] = this['rounds'][this['round_index']]['actions']['length'] - 1,
                                this['_refreshBarshow']();
                        },
                        M['prototype']['close'] = function() {
                            var a = this;
                            this['reset'](),
                                this['locking'] = !0,
                                l['UIBase']['anim_alpha_out'](this.root, {
                                    x: 30
                                }, 150, 0, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1,
                                        a['enable'] = !1,
                                        l['UI_ReplayWheel'].Inst['enable'] = !1;
                                }));
                        },
                        M['prototype']['initData'] = function() {
                            var l = null;
                            this['rounds'] = [];
                            for (var a = this['origin_actions'], U = 0; U < a['length']; U++) {
                                var z = a[U];
                                null == l && (l = {
                                        xun: [],
                                        actions: []
                                    }),
                                    l['actions'].push(z),
                                    this['isRoundEnd'](z.name) && (this['pengding_xun'](l), this['rounds'].push(l), l = null);
                            }
                            null != l && (this['pengding_xun'](l), this['rounds'].push(l)),
                                this['action_index'] = -1,
                                this['round_index'] = -1,
                                this['label_chang'].text = '东',
                                this['label_ju'].text = '1',
                                this['label_xun'].text = '0',
                                this['auto_play'] = !1;
                            var M = [];
                            'en' != GameMgr['client_language'] ? (M.push(this['label_xun']['parent']['getChildByName']('xun')), M.push(this['label_xun']['parent']['getChildByName']('turn'))) : (M.push(this['label_xun']['parent']['getChildByName']('turn')), M.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                this['btn_nextround']['visible'] = this['rounds']['length'] > 1,
                                this['btn_preround']['visible'] = this['rounds']['length'] > 1,
                                game['Tools']['sprite_align_center'](M, 80, [5]);
                        },
                        M['prototype']['reset'] = function() {
                            this['auto_play'] = !1,
                                this['page_chang']['enable'] && this['page_chang']['close'](),
                                this['page_xun']['enable'] && this['page_xun']['close']();
                        },
                        M['prototype']['pengding_xun'] = function(l) {
                            l.xun = [];
                            for (var a = view['DesktopMgr'].Inst.seat, U = !1, z = 0; z < l['actions']['length']; z++) {
                                var M = l['actions'][z];
                                'RecordNewRound' == M.name ? M.data.ju == a && (U = !0, l.xun.push(z)) : 'RecordDealTile' == M.name || 'RecordChiPengGang' == M.name || 'RecordHuleXueZhanMid' == M.name ? M.data.seat == a && (U || (U = !0, l.xun.push(z))) : ('RecordDiscardTile' == M.name || 'RecordAnGangAddGang' == M.name || 'RecordBaBei' == M.name) && (U = !1);
                            }
                        },
                        M['prototype']['get_currentxun'] = function() {
                            var l = this['rounds'][this['round_index']];
                            if (0 == l.xun['length'])
                                return 1;
                            for (var a = l.xun['length'], U = 0; U < l.xun['length']; U++)
                                if (this['action_index'] < l.xun[U]) {
                                    a = U;
                                    break;
                                }
                            return 0 > a && (a = 0),
                                a;
                        },
                        M['prototype']['nextStep'] = function(l) {
                            if (void 0 === l && (l = !1), !(!l && this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= this['rounds']['length'])) {
                                if (this['round_index'] < 0 || this['rounds'][this['round_index']]['actions']['length'] <= this['action_index'] + 1 ? (this['round_index']++, this['action_index'] = 0, this['round_index'] == this['rounds']['length'] && (this['round_index'] = 0)) : this['action_index']++, this['btn_nextround']['visible'] = this['rounds']['length'] > 1, this['btn_preround']['visible'] = this['rounds']['length'] > 1, this['action_index'] > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name) {
                                    var a = this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].data.seat;
                                    a != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](a)]['RecordLiPai'](0);
                                }
                                this['locking_time'] = Laya['timer']['currTimer'] + this['doRecord'](this['rounds'][this['round_index']]['actions'][this['action_index']]),
                                    this['_refreshBarshow']();
                            }
                        },
                        M['prototype']['_refreshBarshow'] = function() {
                            var l = '';
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                'en' == GameMgr['client_language'] ? l = 'Round' : ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language']) && (l += '第'), this['label_chang'].text = l, this['label_ju'].text = (view['DesktopMgr'].Inst['index_chuanma_ju'] + 1)['toString']();
                            else {
                                if ('chs' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += '东';
                                            break;
                                        case 1:
                                            l += '南';
                                            break;
                                        case 2:
                                            l += '西';
                                            break;
                                        case 3:
                                            l += '北';
                                    }
                                else if ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += '東';
                                            break;
                                        case 1:
                                            l += '南';
                                            break;
                                        case 2:
                                            l += '西';
                                            break;
                                        case 3:
                                            l += '北';
                                    }
                                else if ('kr' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += '동';
                                            break;
                                        case 1:
                                            l += '남';
                                            break;
                                        case 2:
                                            l += '서';
                                            break;
                                        case 3:
                                            l += '북';
                                    }
                                else
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            l += 'East';
                                            break;
                                        case 1:
                                            l += 'South';
                                            break;
                                        case 2:
                                            l += 'West';
                                            break;
                                        case 3:
                                            l += 'North';
                                    }
                                this['label_chang'].text = l,
                                    this['label_ju'].text = (view['DesktopMgr'].Inst['index_ju'] + 1)['toString']();
                            }
                            var a = function(l, a) {
                                for (var U = 0, z = 1; z < l['numChildren']; z++) {
                                    1 != z && (U += 3);
                                    var M = l['getChildAt'](z);
                                    U += M['textField']['textWidth'] * M['scaleX'];
                                }
                                for (var g = l['width'] / 2 - U / 2, z = 1; z < l['numChildren']; z++) {
                                    var M = l['getChildAt'](z);
                                    M.x = g,
                                        g += M['textField']['textWidth'] * M['scaleX'] + 3,
                                        M.y = 'haolong' == M.font ? a + 3 : a;
                                }
                            };
                            this['label_xun'].text = this['get_currentxun']()['toString']();
                            var U = [];
                            'en' != GameMgr['client_language'] ? (U.push(this['label_xun']['parent']['getChildByName']('xun')), U.push(this['label_xun']['parent']['getChildByName']('turn'))) : (U.push(this['label_xun']['parent']['getChildByName']('turn')), U.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](U, 80, [5]),
                                a(this['label_chang']['parent'], 40);
                        },
                        M['prototype']['doRecord'] = function(l) {
                            try {
                                var a = 0;
                                switch (l.name) {
                                    case 'RecordNewRound':
                                        this['anim_time'] = view['ActionNewRound']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordChangeTile':
                                        this['anim_time'] = view['ActionChangeTile']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordSelectGap':
                                        this['anim_time'] = view['ActionSelectGap']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordDiscardTile':
                                        this['anim_time'] = view['ActionDiscardTile']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordDealTile':
                                        this['anim_time'] = view['ActionDealTile']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordChiPengGang':
                                        this['anim_time'] = view['ActionChiPengGang']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        this['anim_time'] = view['ActionAnGangAddGang']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 200 : 0);
                                        break;
                                    case 'RecordBaBei':
                                        this['anim_time'] = view['ActionBabei']['record'](l.data),
                                            a = this['anim_time'] + (this['_auto_play'] ? 200 : 0);
                                        break;
                                    case 'RecordHule':
                                        this['anim_time'] = view['ActionHule']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordLiuJu':
                                        this['anim_time'] = view['ActionLiuJu']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordNoTile':
                                        this['anim_time'] = view['ActionNoTile']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        this['anim_time'] = view['ActionHuleXueZhanMid']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        this['anim_time'] = view['ActionHuleXueZhanEnd']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordGangResult':
                                        this['anim_time'] = view['ActionGangResult']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordGangResultEnd':
                                        this['anim_time'] = view['ActionGangResultEnd']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordRevealTile':
                                        this['anim_time'] = view['ActionRevealTile']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordUnveilTile':
                                        this['anim_time'] = view['ActionUnveilTile']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordLockTile':
                                        this['anim_time'] = view['ActionLockTile']['record'](l.data),
                                            a = this['anim_time'];
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        this['anim_time'] = view['ActionFillAwaitingTiles']['record'](l.data),
                                            a = this['anim_time'];
                                }
                                return this['anim_time'] += Laya['timer']['currTimer'],
                                    a;
                            } catch (U) {
                                var z = {};
                                return z['error'] = U['message'],
                                    z['stack'] = U['stack'],
                                    z['method'] = 'UI_Ob_Replay doRecord',
                                    z.name = l.name,
                                    z.data = l.data,
                                    GameMgr.Inst['onFatalError'](z),
                                    1000000;
                            }
                        },
                        M['prototype']['doFastRecord'] = function(l) {
                            try {
                                switch (l.name) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](l.data);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordSelectGap':
                                        view['ActionSelectGap']['fastrecord'](l.data);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](l.data);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](l.data);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](l.data);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](l.data);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](l.data);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](l.data);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](l.data);
                                        break;
                                    case 'RecordGangResult':
                                        view['ActionGangResult']['fastrecord'](l.data);
                                        break;
                                    case 'RecordGangResultEnd':
                                        view['ActionGangResultEnd']['fastrecord'](l.data);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](l.data);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](l.data);
                                }
                            } catch (a) {
                                var U = {};
                                return U['error'] = a['message'],
                                    U['stack'] = a['stack'],
                                    U['method'] = 'UI_Ob_Replay doRecord',
                                    U.name = l.name,
                                    U.data = l.data,
                                    GameMgr.Inst['onFatalError'](U),
                                    1000000;
                            }
                            return 0;
                        },
                        M['prototype']['update'] = function() {
                            !this['auto_play'] || this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= 0 && this['round_index'] < this['rounds']['length'] && this['action_index'] + 1 < this['rounds'][this['round_index']]['actions']['length'] && (this['nextStep'](),
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
                        M['prototype']['jumpToLastRoundXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            this['round_index'] = (this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'];
                            var l = this['rounds'][this['round_index']],
                                a = l['actions']['length'] - 3;
                            1 > a && (a = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': a - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': a - 1
                                        }));
                                    }
                                })),
                                this['_jumpStep'](this['round_index'], a);
                        },
                        M['prototype']['nextXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var l = this['rounds'][this['round_index']];
                                if (this['action_index'] != l['actions']['length'] - 1) {
                                    var a = 0;
                                    if (0 == l.xun['length'])
                                        a = l['actions']['length'] - 1;
                                    else if (l.xun[0] > this['action_index'])
                                        a = l.xun[0];
                                    else {
                                        var U = this['get_currentxun']();
                                        a = U == l.xun['length'] ? l['actions']['length'] - 1 : l.xun[U];
                                    }
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': a - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextXun",
                                                'fast_record_to': a - 1
                                            }));
                                        }
                                    }));
                                    this['_jumpStep'](this['round_index'], a);
                                }
                            }
                        },
                        M['prototype']['preXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var l = this['rounds'][this['round_index']];
                                if (0 == this['action_index'] || 'RecordNewRound' == l['actions'][this['action_index']].name)
                                    return this['jumpToLastRoundXun'](), void 0;
                                var a = 0;
                                if (0 == l.xun['length'])
                                    a = 0;
                                else if (l.xun[0] > this['action_index'])
                                    a = 0;
                                else {
                                    var U = this['get_currentxun']() - 1;
                                    a = 0 == U ? 0 : l.xun[U - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': a - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': a - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], a);
                            }
                        },
                        M['prototype']['preStep'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var l = this['rounds'][this['round_index']];
                                return 0 == this['action_index'] || 'RecordNewRound' == l['actions'][this['action_index']].name ? (this['jumpToLastRoundXun'](), void 0) : (
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
                        M['prototype']['nextRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
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
                        M['prototype']['preRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
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
                        M['prototype']['jumpRound'] = function(l) {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (0 > l || l >= this['rounds']['length'] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': l
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': l
                                            }));
                                        }
                                    })) ||
                                    this["_jumpStep"](l, 0), void 0);
                        },
                        M['prototype']['jumpXun'] = function(l) {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var a = this['rounds'][this['round_index']],
                                    U = 0;
                                U = 0 == a.xun['length'] ? 0 : 0 == l ? 0 : a.xun[l - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': U - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': U - 1
                                            }));
                                        }
                                    })),
                                    this['_jumpStep'](this['round_index'], U);
                            }
                        },
                        M['prototype']['onWheelClick'] = function() {
                            return this['page_chang']['locking'] || this['page_xun']['locking'] ? void 0 : this['page_chang']['enable'] || this['page_xun']['enable'] ? (this['page_chang']['enable'] && this['page_chang']['close'](), this['page_xun']['enable'] && this['page_xun']['close'](), void 0) : (
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
                        M['prototype']['_jumpStep'] = function(l, a) {
                            var U = this['rounds'][l];
                            this['round_index'] = l,
                                U['actions'][a] && U['actions'][a + 1] && 'RecordNewCard' == U['actions'][a].name && a++;
                            for (var z = 0; a > z; z++) {
                                if (z > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][z - 1].name) {
                                    var M = this['rounds'][this['round_index']]['actions'][z - 1].data.seat;
                                    M != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](M)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](U['actions'][z]);
                            }
                            if (a == U['actions']['length'] - 1)
                                this['action_index'] = a - 1, this['nextStep']();
                            else {
                                if (a > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][a - 1].name) {
                                    var M = this['rounds'][this['round_index']]['actions'][a - 1].data.seat;
                                    M != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](M)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](U['actions'][a]),
                                    this['action_index'] = a,
                                    this['_refreshBarshow']();
                            }
                        },
                        M['prototype']['onChangeMainBody'] = function() {
                            var l = this['round_index'],
                                a = this['action_index'];
                            this['initData'](),
                                this['reset'](),
                                l >= this['rounds']['length'] || 0 > l || this['_jumpStep'](l, a);
                        },
                        M.Inst = null,
                        M;
                }
                (l['UIBase']);
            l['UI_Ob_Replay'] = z;
        }
        (uiscript || (uiscript = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            for (var U = 0, z = a['gang_infos'], M = [], g = 0; g < z['delta_scores']['length']; g++) {
                                var R = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                z['delta_scores'][g] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](g, 'emoji_7', -1), R['delta'] = z['delta_scores'][g]) : z['delta_scores'][g] < 0 && (R['delta'] = z['delta_scores'][g], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](g, 'emoji_8', -1)),
                                    R['score'] = z['old_scores'][g],
                                    M.push(R);
                            }
                            if (Laya['timer'].once(200, this, function() {
                                    l['DesktopMgr'].Inst['setScores'](z['scores']);
                                }), uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](M), U += 2000, z['hules_history'] && z['hules_history']['length'] > 0) {
                                for (var E = 0, C = z['hules_history']; E < C['length']; E++) {
                                    var B = C[E],
                                        w = l['DesktopMgr'].Inst['seat2LocalPosition'](B.seat);
                                    l['DesktopMgr'].Inst['players'][w]['onXuezhanEnd'](B.hand, !1);
                                }
                                Laya['timer'].once(U, this, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](z, !1);
                                });
                            } else
                                Laya['timer'].once(U, this, function() {
                                    l['DesktopMgr'].Inst.mode == l['EMJMode']['paipu'] ? uiscript['UI_Replay'].Inst['nextStep'](!0) : uiscript['UIMgr'].Inst['ShowGameEnd']();
                                });
                            Laya['timer'].once(U, this, function() {
                                l['DesktopMgr'].Inst['ActionRunComplete']();
                            });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](a));
                            var U = a['gang_infos'];
                            U['hules_history'] && U['hules_history']['length'] > 0 ? uiscript['UIMgr'].Inst['ShowWin'](U, !1) : l['DesktopMgr'].Inst.mode == l['EMJMode']['paipu'] ? uiscript['UI_Replay'].Inst['nextStep'](!0) : uiscript['UIMgr'].Inst['ShowGameEnd']();
                        },
                        U['record'] = function(l) {
                            return this.play(l),
                                5100;
                        },
                        U['fastrecord'] = function(a) {
                            a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                this['fastplay'](a, 1000);
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionGangResultEnd'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a = function(a) {
                    function U() {
                        return null !== a && a['apply'](this, arguments) || this;
                    }
                    return __extends(U, a),
                        U.play = function(a) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(a),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(a));
                                }
                            }));
                            var U = this;
                            app.Log.log('ActionNotile play data:' + JSON['stringify'](a));
                            for (var z = 0, M = 1; 4 > M; M++) {
                                var g = l['DesktopMgr'].Inst['players'][M]['discardcd'] - Laya['timer']['currTimer'];
                                g > z && (z = g);
                            }
                            z += 1000,
                                Laya['timer'].once(z, this, function() {
                                    l['BgmListMgr']['stopBgm']();
                                    var z = a['players'];
                                    l['DesktopMgr'].Inst['gameing'] = !1,
                                        uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                        uiscript['UI_TingPai'].Inst['reset'](),
                                        uiscript['UI_TingPai'].Inst['setZhengting'](!1),
                                        a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !0);
                                    for (var M = 0; M < z['length']; M++) {
                                        for (var g = l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](M)], R = [], E = 0; E < z[M].hand['length']; E++)
                                            R.push(mjcore['MJPai']['Create'](z[M].hand[E]));
                                        R = R.sort(mjcore['MJPai']['Distance']),
                                            l['DesktopMgr'].Inst['is_chuanma_mode']() ? g['onChuanmaNoTile'](R, !1) : g['already_xuezhan_hule_state'] ? g['onXuezhanEnd'](R, !1) : g['Huangpai'](z[M]['tingpai'], R, !1);
                                    }
                                    Laya['timer'].once(1000, U, function() {
                                        var M,
                                            g = !1,
                                            R = !1;
                                        if (l['DesktopMgr'].Inst['xuezhan'] || l['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                            var E = !1;
                                            if (a['scores'] && a['scores']['length'] > 0) {
                                                for (var C = 0; C < a['scores']['length']; C++) {
                                                    if (a['scores'][C]['hasOwnProperty']('delta_scores'))
                                                        for (var B = 0; B < l['DesktopMgr'].Inst['player_count'] && B < a['scores'][C]['delta_scores']['length']; B++)
                                                            0 != a['scores'][C]['delta_scores'][B] && (E = !0);
                                                    if (a['scores'][C]['hasOwnProperty']('taxes'))
                                                        for (var B = 0; B < l['DesktopMgr'].Inst['player_count'] && B < a['scores'][C]['taxes']['length']; B++)
                                                            0 != a['scores'][C]['taxes'][B] && (R = !0);
                                                }
                                                M = a['scores'][0]['lines'];
                                            }
                                            var w = !1;
                                            a['liujumanguan'] && (w = !0),
                                                a['hules_history'] && a['hules_history']['length'] > 0 && (w = !0),
                                                g = !R && !E && !w;
                                        }
                                        uiscript['UI_Huleshow'].Inst['showLiuJu'](z, Laya['Handler']['create'](U, function() {
                                            if (l['DesktopMgr'].Inst['xuezhan'] || l['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                                var z = !1,
                                                    g = [],
                                                    E = [];
                                                if (a['scores'] && a['scores']['length'] > 0) {
                                                    for (var C = 0; C < l['DesktopMgr'].Inst['player_count']; C++)
                                                        g.push({
                                                            score: l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](C)]['score'],
                                                            title_id: 0,
                                                            delta: 0
                                                        }), E.push({
                                                            score: 0,
                                                            title_id: 0,
                                                            delta: 0
                                                        });
                                                    for (var C = 0; C < a['scores']['length']; C++) {
                                                        if (a['liujumanguan'] && (g[a['scores'][C].seat]['title_id'] = -1), a['scores'][C]['hasOwnProperty']('delta_scores'))
                                                            for (var B = 0; B < l['DesktopMgr'].Inst['player_count'] && B < a['scores'][C]['delta_scores']['length']; B++)
                                                                g[B]['delta'] += a['scores'][C]['delta_scores'][B];
                                                        if (a['scores'][C]['hasOwnProperty']('taxes'))
                                                            for (var B = 0; B < l['DesktopMgr'].Inst['player_count'] && B < a['scores'][C]['taxes']['length']; B++)
                                                                E[B]['delta'] += a['scores'][C]['taxes'][B];
                                                    }
                                                    if (l['DesktopMgr'].Inst['is_chuanma_mode']())
                                                        for (var C = 0; C < l['DesktopMgr'].Inst['player_count']; C++)
                                                            0 != g[C]['delta'] && (z = !0), E[C]['score'] = g[C]['score'] + g[C]['delta'];
                                                    else
                                                        for (var C = 0; C < l['DesktopMgr'].Inst['player_count']; C++)
                                                            0 != g[C]['delta'] && (z = !0);
                                                }
                                                if (l['DesktopMgr'].Inst['is_chuanma_mode']() && R) {
                                                    var w = U,
                                                        L = function() {
                                                            var l = !1;
                                                            a['liujumanguan'] && (l = !0, uiscript['UIMgr'].Inst['ShowWin'](a['scores'], !0)),
                                                                a['hules_history'] && a['hules_history']['length'] > 0 && (l = !0, uiscript['UIMgr'].Inst['ShowHistoryWin'](a)),
                                                                l ? uiscript['UI_Hu_Xuezhan'].Inst['close']() : w['onXuezhanNoWinNext']();
                                                        };
                                                    z ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['showTaxes'](g, E, Laya['Handler']['create'](null, L))) : uiscript['UI_Hu_Xuezhan'].Inst['showTaxes'](null, E, Laya['Handler']['create'](null, L)),
                                                        l['DesktopMgr'].Inst['ActionRunComplete']();
                                                } else {
                                                    var c = U,
                                                        L = function() {
                                                            var l = !1;
                                                            a['liujumanguan'] && (l = !0, uiscript['UIMgr'].Inst['ShowWin'](a['scores'], !0)),
                                                                a['hules_history'] && a['hules_history']['length'] > 0 && (l = !0, uiscript['UIMgr'].Inst['ShowHistoryWin'](a)),
                                                                l ? uiscript['UI_Hu_Xuezhan'].Inst['close']() : c['onXuezhanNoWinNext']();
                                                        };
                                                    z ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](g, Laya['Handler']['create'](null, L), l['DesktopMgr'].Inst['is_chuanma_mode'](), M)) : L(),
                                                        l['DesktopMgr'].Inst['ActionRunComplete']();
                                                }
                                            } else {
                                                if (a['liujumanguan'])
                                                    uiscript['UIMgr'].Inst['ShowWin'](a['scores'], !0);
                                                else {
                                                    var h = [];
                                                    if (a['scores'] && a['scores']['length'] > 0) {
                                                        for (var C = 0; C < l['DesktopMgr'].Inst['player_count']; C++)
                                                            h.push({
                                                                old_score: a['scores'][0]['old_scores'][C],
                                                                delta: 0
                                                            });
                                                        for (var C = 0; C < a['scores']['length']; C++)
                                                            if (a['scores'][C]['hasOwnProperty']('delta_scores'))
                                                                for (var B = 0; B < l['DesktopMgr'].Inst['player_count'] && B < a['scores'][C]['delta_scores']['length']; B++)
                                                                    h[B]['delta'] += a['scores'][C]['delta_scores'][B];
                                                    } else
                                                        for (var C = 0; C < l['DesktopMgr'].Inst['player_count']; C++)
                                                            h.push({
                                                                old_score: l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](C)]['score'],
                                                                delta: 0
                                                            });
                                                    uiscript['UI_ScoreChange'].Inst.show(h);
                                                }
                                                l['DesktopMgr'].Inst['ActionRunComplete']();
                                            }
                                        }), g);
                                    });
                                });
                        },
                        U['fastplay'] = function(a) {
                            app.Log.log('ActionNewRound fastplay data:' + JSON['stringify'](a));
                            l['BgmListMgr']['stopBgm']();
                            var U = a['players'];
                            l['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close']();
                            var z = [!1, !1, !1, !1];
                            uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_TingPai'].Inst['setZhengting'](!1);
                            for (var M = 0; M < l['DesktopMgr'].Inst['player_count']; M++) {
                                for (var g = [], R = 0; R < U[M].hand['length']; R++)
                                    g.push(mjcore['MJPai']['Create'](U[M].hand[R]));
                                g = g.sort(mjcore['MJPai']['Distance']),
                                    l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](M)]['Huangpai'](U[M]['tingpai'], g, !0),
                                    z[l['DesktopMgr'].Inst['seat2LocalPosition'](M)] = U[M]['tingpai'];
                            }
                            if (a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1), a['liujumanguan'])
                                uiscript['UIMgr'].Inst['ShowWin'](a['scores'], !0);
                            else {
                                var E = [];
                                if (a['scores'] && a['scores']['length'] > 0) {
                                    for (var M = 0; M < l['DesktopMgr'].Inst['player_count']; M++)
                                        E.push({
                                            old_score: a['scores'][0]['old_scores'][M],
                                            delta: 0
                                        });
                                    for (var M = 0; M < a['scores']['length']; M++)
                                        if (a['scores'][M]['hasOwnProperty']('delta_scores'))
                                            for (var R = 0; R < l['DesktopMgr'].Inst['player_count'] && R < a['scores'][M]['delta_scores']['length']; R++)
                                                E[R]['delta'] += a['scores'][M]['delta_scores'][R];
                                } else
                                    for (var M = 0; M < l['DesktopMgr'].Inst['player_count']; M++)
                                        E.push({
                                            old_score: l['DesktopMgr'].Inst['players'][l['DesktopMgr'].Inst['seat2LocalPosition'](M)]['score'],
                                            delta: 0
                                        });
                                uiscript['UI_ScoreChange'].Inst.show(E);
                            }
                        },
                        U['record'] = function(l) {
                            return app.Log.log('ActionNewRound record data:' + JSON['stringify'](l)),
                                this.play(l),
                                8000;
                        },
                        U['fastrecord'] = function(a) {
                            l['BgmListMgr']['stopBgm'](),
                                l['DesktopMgr'].Inst['gameing'] = !1;
                            for (var U = [], z = 0; z < a['players']['length']; z++)
                                U.push({
                                    seat: z
                                });
                            a.muyu && l['DesktopMgr'].Inst['onMuyuChange'](a.muyu, !1),
                                uiscript['UI_Huleshow'].Inst['showLiuJu'](U, null);
                        },
                        U['onXuezhanNoWinNext'] = function() {
                            var a = this;
                            if (l['DesktopMgr'].Inst.mode == l['EMJMode'].play)
                                null != l['DesktopMgr'].Inst['gameEndResult'] ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['enable'] = !1, uiscript['UIMgr'].Inst['ShowGameEnd']()) : (l['DesktopMgr'].Inst['Reset'](), Laya['timer'].once(200, this, function() {
                                    l['DesktopMgr'].Inst['timestoped'] ? l['DesktopMgr'].Inst['handles_after_timerun'].push(Laya['Handler']['create'](a, function() {
                                        app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                    })) : app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                }));
                            else if (l['DesktopMgr'].Inst.mode == l['EMJMode']['paipu'])
                                uiscript['UI_Replay'].Inst['nextStep'](!0);
                            else if (l['DesktopMgr'].Inst.mode == l['EMJMode']['live_broadcast']) {
                                uiscript['UI_Huleshow'].Inst['enable'] = !1,
                                    uiscript['UI_Live_Broadcast'].Inst['onScoreChangeConfirm']();
                            }
                        },
                        U;
                }
                (l['ActionBase']);
            l['ActionNoTile'] = a;
        }
        (view || (view = {}));


        ! function(l) {
            var a,
                U = function() {
                    function a(a) {
                        var U = this;
                        this['_show_hand'] = !1,
                            this['_show_paopai'] = !1,
                            this['_show_replay'] = !1,
                            this.me = a,
                            this['_btn_out'] = this.me['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['switch']();
                            }, null, !1),
                            this.me['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['_show_hand'] = !U['_show_hand'],
                                    U['_choosed_show_hand']['visible'] = U['_show_hand'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](U['_show_hand']);
                            }, null, !1),
                            this['_choosed_show_hand'] = this.me['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['_show_paopai'] = !U['_show_paopai'],
                                    U['_choosed_show_paopai']['visible'] = U['_show_paopai'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](U['_show_paopai']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this.me['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_showbar')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                l['UI_Ob_Replay'].Inst['locking'] || l['UI_Ob_Replay'].Inst['anim_time'] > Laya['timer']['currTimer'] || 'RecordHuleXueZhanEnd' != z.Inst['last_action_name'] && 'RecordHule' != z.Inst['last_action_name'] && 'RecordLiuJu' != z.Inst['last_action_name'] && 'RecordNoTile' != z.Inst['last_action_name'] && ('RecordNewRound' == z.Inst['last_action_name'] && z.Inst['during_do_cd'] || (U['_show_replay'] = !U['_show_replay'], U['_choosed_show_replay']['visible'] = U['_show_replay'], U['_show_replay'] ? z.Inst['enterReplay']() : z.Inst['closeReplay']()));
                            }, null, !1),
                            this['_choosed_show_replay'] = this.me['getChildByName']('btn_showbar')['getChildByName']('choosed'),
                            this.me['getChildByName']('label_word')['visible'] = 'chs' == GameMgr['client_language'],
                            this.me['getChildByName']('img_set')['visible'] = 'chs' != GameMgr['client_language'];
                    }
                    return a['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this['_show_hand'] = !1,
                                this.me.x = -258,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = this['_show_hand'],
                                this['_show_paopai'] = !1,
                                this['_choosed_show_paopai']['visible'] = this['_show_paopai'],
                                this['_show_replay'] = !1,
                                this['_choosed_show_replay']['visible'] = this['_show_replay'];
                        },
                        a['prototype']['switch'] = function() {
                            var l = this,
                                a = -258;
                            this.me.x < -100 && (a = -5),
                                this['_btn_out']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: a
                                }, 200, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    l['_btn_out']['disabled'] = !1;
                                }), 0, !0, !0);
                        },
                        a;
                }
                ();
            ! function(l) {
                l[l.none = 0] = 'none',
                    l[l['gameing'] = 1] = 'gameing',
                    l[l['replay'] = 2] = 'replay';
            }
            (a || (a = {}));
            var z = function(z) {
                    function M() {
                        var l = z.call(this, new ui.mj['live_broadcastUI']()) || this;
                        return l['state'] = a.none,
                            l['segments'] = [],
                            l['_time0'] = 0,
                            l['_time_start'] = 0,
                            l['segment_index'] = 0,
                            l['unit_index'] = 0,
                            l['during_asknew'] = !1,
                            l['retry_loadtime'] = 0,
                            l['segment_end_millisecond'] = 0,
                            l['guanzhanconfig'] = null,
                            l['do_unit_cd'] = 0,
                            l['time_stop_length'] = 0,
                            l['time_stop_start_time'] = 0,
                            l['_last_action_name'] = '',
                            l['have_gameend'] = !1,
                            l['is_realtime'] = !1,
                            l['pending_units'] = [],
                            M.Inst = l,
                            app['NetAgent']['AddListener2MJ']('NotifyObserveData', Laya['Handler']['create'](l, function(a) {
                                l['pending_units'].push(a);
                            })),
                            l;
                    }
                    return __extends(M, z),
                        M['fetchInfo'] = function(a, U) {
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveInfo', {
                                game_uuid: a
                            }, function(z, M) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(M),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(M));
                                    }
                                }));
                                z || M['error'] ? (l['UIMgr'].Inst['showNetReqError']('fetchGameLiveInfo', z, M), U && U['runWith']({
                                    success: !1
                                })) : (app.Log.log('fetchGameLiveInfo res:' + JSON['stringify'](M)), M['left_start_seconds'] ? l['UI_WaitOb'].Inst.show(a, M['left_start_seconds'], U) : U && U['runWith']({
                                    success: !0,
                                    data: M
                                }));
                            });
                        },
                        M['goToWatch'] = function(a, U, z) {
                            var g = this;
                            app.Log.log('goToWatch res:' + JSON['stringify'](U)),
                                l['UI_Loading'].Inst.show('enter_mj'),
                                game['Scene_Lobby'].Inst['active'] && (game['Scene_Lobby'].Inst['active'] = !1),
                                GameMgr.Inst['onLoadStart']('ob');
                            for (var R = U['live_head'], E = [null, null, null, null], C = 0; C < R['players']['length']; C++) {
                                for (var B = -1, w = 0; w < R['seat_list']['length']; w++)
                                    if (R['seat_list'][w] == R['players'][C]['account_id']) {
                                        B = w;
                                        break;
                                    } -
                                1 != B ? E[B] = R['players'][C] : app.Log['Error']('goToWatch ' + JSON['stringify'](R['players'][C]) + '未找到位置');
                            }
                            var L = game['Tools']['strOfLocalization'](2003),
                                c = R['game_config'].mode;
                            c['extendinfo'] && (L = game['Tools']['strOfLocalization'](2004)),
                                c['detail_rule'] && c['detail_rule']['ai_level'] && (1 === c['detail_rule']['ai_level'] && (L = game['Tools']['strOfLocalization'](2003)), 2 === c['detail_rule']['ai_level'] && (L = game['Tools']['strOfLocalization'](2004)));
                            for (var C = 0; C < E['length']; C++)
                                null == E[C] && (E[C] = {
                                    nickname: L,
                                    avatar_id: game['GameUtility']['get_default_ai_skin'](),
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    }
                                });
                            game['Scene_MJ'].Inst['openMJRoom']({
                                mode: c
                            }, E, Laya['Handler']['create'](this, function() {
                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](R['game_config'])), E, z, view['EMJMode']['live_broadcast'], Laya['Handler']['create'](g, function() {
                                    l['UI_Loading'].Inst['setProgressVal'](0.7),
                                        Laya['timer'].once(1000, g, function() {
                                            GameMgr.Inst['EnterMJ'](),
                                                l['UI_Loading'].Inst['setProgressVal'](0.8),
                                                M.Inst['startLive'](a);
                                        });
                                }));
                            }), Laya['Handler']['create'](this, function(a) {
                                return l['UI_Loading'].Inst['setProgressVal'](0.7 * a);
                            }, null, !1));
                        },
                        Object['defineProperty'](M['prototype'], 'during_do_cd', {
                            get: function() {
                                return this['enable'] ? Laya['timer']['currTimer'] < this['do_unit_cd'] : l['UI_Live_Broadcast1'].Inst['during_do_cd'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](M['prototype'], 'during_play', {
                            get: function() {
                                return this['enable'] ? this['state'] == a['gameing'] : l['UI_Live_Broadcast1'].Inst['during_play'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](M['prototype'], 'last_action_name', {
                            get: function() {
                                return this['enable'] ? this['_last_action_name'] : l['UI_Live_Broadcast1'].Inst['last_action_name'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        M['prototype']['onCreate'] = function() {
                            this['guanzhanconfig'] = new U(this.me['getChildByName']('config'));
                        },
                        M['prototype']['onDisable'] = function() {
                            Laya['timer']['clearAll'](this),
                                this['pending_units'] = [];
                        },
                        M['prototype']['_doRecord'] = function(l, a, U) {
                            switch (view['DesktopMgr'].Inst['ClearOperationShow'](), this['_last_action_name'] = l, l) {
                                case 'RecordNewRound':
                                    return view['ActionNewRound']['record'](a, U);
                                case 'RecordChangeTile':
                                    return view['ActionChangeTile']['record'](a, U);
                                case 'RecordSelectGap':
                                    return view['ActionSelectGap']['record'](a, U);
                                case 'RecordDiscardTile':
                                    return view['ActionDiscardTile']['record'](a, U);
                                case 'RecordDealTile':
                                    return view['ActionDealTile']['record'](a, U);
                                case 'RecordChiPengGang':
                                    return view['ActionChiPengGang']['record'](a, U);
                                case 'RecordAnGangAddGang':
                                    return view['ActionAnGangAddGang']['record'](a, U);
                                case 'RecordHule':
                                    return view['ActionHule']['record'](a);
                                case 'RecordLiuJu':
                                    return view['ActionLiuJu']['record'](a);
                                case 'RecordNoTile':
                                    return view['ActionNoTile']['record'](a);
                                case 'RecordBaBei':
                                    return view['ActionBabei']['record'](a);
                                case 'RecordHuleXueZhanMid':
                                    return view['ActionHuleXueZhanMid']['record'](a);
                                case 'RecordHuleXueZhanEnd':
                                    return view['ActionHuleXueZhanEnd']['record'](a);
                                case 'RecordGangResult':
                                    return view['ActionGangResult']['record'](a);
                                case 'RecordGangResultEnd':
                                    return view['ActionGangResultEnd']['record'](a);
                                case 'RecordRevealTile':
                                    return view['ActionRevealTile']['record'](a);
                                case 'RecordLockTile':
                                    return view['ActionLockTile']['record'](a);
                                case 'RecordUnveilTile':
                                    return view['ActionUnveilTile']['record'](a);
                                case 'RecordNewCard':
                                    return view['ActionNewCard']['record'](a);
                                case 'RecordFillAwaitingTiles':
                                    return view['ActionFillAwaitingTiles']['record'](a);
                            }
                            return 0;
                        },
                        M['prototype']['_doFastRecord'] = function(l, a, U) {
                            try {
                                switch (this['_last_action_name'] = l, l) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](a, U);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](a, U);
                                        break;
                                    case 'RecoreSelectGap':
                                        view['ActionSelectGap']['fastrecord'](a, U);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](a, U);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](a, U);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](a, U);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](a, U);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](a);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](a);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](a);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](a);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](a);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](a);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](a);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](a);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](a);
                                        break;
                                    case 'RecordNewCard':
                                        view['ActionNewCard']['fastrecord'](a);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](a);
                                }
                            } catch (z) {
                                var M = {};
                                return M['error'] = z['message'],
                                    M['stack'] = z['stack'],
                                    M['method'] = 'ui_live_broadcast doFastRecord',
                                    M.name = l,
                                    M.data = a,
                                    GameMgr.Inst['onFatalError'](M),
                                    1000000;
                            }
                        },
                        M['prototype']['_doUnit'] = function(a, U, z) {
                            if (U) {
                                if (1 == a['category'])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': a
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': a
                                            }));
                                        }
                                    })), this['_doFastRecord'](a.name, a.data, z), view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0), 0;
                                if ('GameNewRoundState' == a.name) {
                                    for (var M = 0; M < a.data['seat_states']['length']; M++)
                                        view['DesktopMgr']['player_link_state'][M] = a.data['seat_states'][M];
                                    l['UI_DesktopInfo'].Inst['refreshLinks']();
                                } else
                                    'NotifyGameEndResult' == a.name ? (view['DesktopMgr'].Inst['gameEndResult'] = a.data['result'], this['enable'] = !1, l['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyPlayerConnectionState' == a.name ? l['UI_DesktopInfo'].Inst['onPlayerConnectionState'](a.data) : 'GameEndAction' == a.name ? 3 == a.data['state'] && l['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                        game['Scene_MJ'].Inst['ForceOut']();
                                    })) : 'NotifyGamePause' == a.name && (view['DesktopMgr'].Inst['setGameStop'](a.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += a['timestamp'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? a['timestamp'] : -1);
                                return -1;
                            }
                            if (1 == a['category']) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_action': a
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_action': a
                                        }));
                                    }
                                }));
                                var g = this['_doRecord'](a.name, a.data, z);
                                return view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0),
                                    g;
                            }
                            if ('GameNewRoundState' == a.name) {
                                for (var M = 0; M < a.data['seat_states']['length']; M++)
                                    view['DesktopMgr']['player_link_state'][M] = a.data['seat_states'][M];
                                l['UI_DesktopInfo'].Inst['refreshLinks']();
                            } else
                                'NotifyGameEndResult' == a.name ? (view['DesktopMgr'].Inst['gameEndResult'] = a.data['result'], this['enable'] = !1, l['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyGameBroadcast' == a.name ? l['UI_DesktopInfo'].Inst['onGameBroadcast'](a.data) : 'NotifyPlayerConnectionState' == a.name ? l['UI_DesktopInfo'].Inst['onPlayerConnectionState'](a.data) : 'GameEndAction' == a.name ? 3 == a.data['state'] && l['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                    game['Scene_MJ'].Inst['ForceOut']();
                                })) : 'NotifyGamePause' == a.name && (view['DesktopMgr'].Inst['setGameStop'](a.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += a['timestamp'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? a['timestamp'] : -1);
                            return -1;
                        },
                        M['prototype']['_parseUnit'] = function(l) {
                            var a = net['MessageWrapper']['decodeMessage'](l['action_data']);
                            return {
                                timestamp: l['timestamp'],
                                category: l['action_category'],
                                name: a['$type'].name,
                                data: a
                            };
                        },
                        M['prototype']['_loadUnit'] = function(l, a, U) {
                            var z = this,
                                M = new Laya['HttpRequest']();
                            M.once(Laya['Event']['COMPLETE'], this, function(M) {
                                    if (U)
                                        try {
                                            var g = new Laya.Byte();
                                            g['writeArrayBuffer'](M),
                                                z['last_success_segment_url'] = a;
                                            for (var R = net['MessageWrapper']['decodeMessage'](g['getUint8Array'](0, g['length'])), E = [], C = 0; C < R['actions']['length']; C++)
                                                E.push(z['_parseUnit'](R['actions'][C]));
                                            U['runWith']({
                                                success: !0,
                                                id: l,
                                                units: E,
                                                url: a
                                            });
                                        } catch (B) {
                                            U['runWith']({
                                                success: !1,
                                                id: l,
                                                type: 'parse_error',
                                                url: a
                                            });
                                        }
                                }),
                                M.once(Laya['Event']['ERROR'], this, function() {
                                    U && U['runWith']({
                                        success: !1,
                                        id: l,
                                        url: a,
                                        type: 'download_timeout'
                                    });
                                });
                            var g = [];
                            M.send(a, '', 'get', 'arraybuffer', g);
                        },
                        M['prototype']['startLive'] = function(a) {
                            var U = this;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveInfo', {
                                game_uuid: a
                            }, function(z, M) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(M),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(M));
                                    }
                                }));
                                if (z || M['error'] || M['left_start_seconds'])
                                    GameMgr.Inst['postInfo2Server']('ob_failure', {
                                        condition: 'loading',
                                        uuid: a,
                                        segment_name: '',
                                        last_success_segment_name: '',
                                        error_info: 'download_timeout',
                                        gametime_since_start: 0
                                    }), l['UIMgr'].Inst['showNetReqError']('fetchGameLiveInfo', z, M), U['_forceQuit']();
                                else {
                                    var g = M;
                                    U['segment_index'] = 0,
                                        U['segments'] = [],
                                        U['last_success_segment_url'] = '',
                                        U['_time0'] = g['now_millisecond'],
                                        U['_time_start'] = Laya['timer']['currTimer'];
                                    var R = 0,
                                        E = !1;
                                    U['game_uuid'] = a,
                                        U['enable'] = !0,
                                        U['guanzhanconfig']['reset'](),
                                        l['UI_Ob_Replay'].Inst['enable'] = !1,
                                        U['do_unit_cd'] = 0,
                                        U['have_gameend'] = !1,
                                        U['is_realtime'] = !1,
                                        U.me['getChildByName']('f_realtime')['visible'] = !1;
                                    for (var C = function(z) {
                                            if (!E)
                                                if (app.Log.log('loadover0 ' + JSON['stringify'](z)), z['success']) {
                                                    for (var M = 0; M < U['segments']['length']; M++)
                                                        if (U['segments'][M]['segment_id'] == z.id) {
                                                            U['segments'][M]['units'] = z['units'],
                                                                U['segments'][M]['loaded'] = !0;
                                                            break;
                                                        }
                                                    app.Log.log('loadover1'),
                                                        R++,
                                                        l['UI_Loading'].Inst['setProgressVal'](0.8 + 0.2 * (R / U['segments']['length'])),
                                                        R == U['segments']['length'] && U['_onFirstLoadOver']();
                                                } else
                                                    app.Log.log('loadover2'), E = !0, l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), U['_forceQuit'](), GameMgr.Inst['postInfo2Server']('ob_failure', {
                                                        condition: 'loading',
                                                        uuid: a,
                                                        segment_name: z.url,
                                                        last_success_segment_name: U['last_success_segment_url'],
                                                        error_info: z.type,
                                                        gametime_since_start: 0
                                                    });
                                        }, B = 0; B < g['segments']['length']; B++) {
                                        var w = g['segments'][B]['segment_id'],
                                            L = game['LobbyNetMgr'].Inst['ob_url'] + g['segments'][B]['segment_uri'];
                                        U['segments'].push({
                                                segment_id: w,
                                                uri: L,
                                                units: [],
                                                loaded: !1
                                            }),
                                            U['_loadUnit'](w, L, Laya['Handler']['create'](U, C));
                                    }
                                }
                            });
                        },
                        M['prototype']['clearPendingUnits'] = function() {
                            this['pending_units'] = [];
                        },
                        M['prototype']['startRealtimeLive'] = function(a, U) {
                            var z = this;
                            this['segment_index'] = 0,
                                this['segments'] = [],
                                this['enable'] = !0,
                                this['guanzhanconfig']['reset'](),
                                l['UI_Ob_Replay'].Inst['enable'] = !1,
                                this['do_unit_cd'] = 0,
                                this['have_gameend'] = !1,
                                this['is_realtime'] = !0,
                                this['_time0'] = 1000 * a,
                                this['_time_start'] = Laya['timer']['currTimer'];
                            var M = this.me['getChildByName']('f_realtime');
                            M['visible'] = !0,
                                Laya['timer']['clearAll'](this),
                                Laya['timer']['frameLoop'](1, this, function() {
                                    var l = (Laya['timer']['currTimer'] - z['_time_start']) / 1000;
                                    l -= 4 * Math['floor'](l / 4),
                                        M['alpha'] = 2 > l ? l / 2 * 0.7 + 0.3 : 0.7 * (1 - (l - 2) / 2) + 0.3;
                                });
                            for (var g = [], R = 0; R < U['actions']['length']; R++)
                                g.push(this['_parseUnit'](U['actions'][R]));
                            for (var R = 0; R < this['pending_units']['length']; R++)
                                g.push(this['_parseUnit'](this['pending_units'][R].unit));
                            this['pending_units'] = [],
                                this['segments'].push({
                                    segment_id: 1,
                                    units: g,
                                    loaded: !0
                                }),
                                this['_onFirstLoadOver']();
                        },
                        M['prototype']['_onFirstLoadOver'] = function() {
                            var l = this;
                            if (this['_fastSync']() && (app.Log.log('fastSync over'), Laya['timer'].loop(100, this, function() {
                                    if (l['is_realtime']) {
                                        for (var a = 0; a < l['pending_units']['length']; a++)
                                            l['segments'][0]['units'].push(l['_parseUnit'](l['pending_units'][a].unit));
                                        l['pending_units'] = [];
                                    }
                                    l['_timeDoAction'](!1);
                                }, null, !0), !this['is_realtime'])) {
                                var a = this['segments'][this['segments']['length'] - 1]['units'],
                                    U = a[a['length'] - 1]['timestamp'];
                                this['segment_end_millisecond'] = U,
                                    Laya['timer'].loop(3700, this, function() {
                                        l['_askNewSegment']();
                                    }, null, !1);
                            }
                        },
                        M['prototype']['_unitIsTimeLast'] = function(l, a) {
                            if (l >= this['segments']['length'])
                                return !0;
                            var U = this['segments'][l];
                            if (!U['loaded'])
                                return !0;
                            if (U['units']['length'] <= a)
                                return this['_unitIsTimeLast'](l + 1, 0);
                            var z = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'],
                                M = U['units'][a];
                            return M['timestamp'] > z ? !0 : 2 == M['category'] ? this['_unitIsTimeLast'](l, a + 1) : !1;
                        },
                        M['prototype']['_getTimeStop'] = function(l, a, U) {
                            var z = 0;
                            if (U > 0 && (z = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'] - U), l >= this['segments']['length'])
                                return z;
                            var M = this['segments'][l];
                            if (!M['loaded'])
                                return z;
                            if (M['units']['length'] <= a)
                                return this['_getTimeStop'](l + 1, 0, U);
                            var g = M['units'][a],
                                R = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            if (g['timestamp'] > R)
                                return z;
                            if (1 == g['category'])
                                return 0;
                            if ('NotifyGamePause' == g.name) {
                                var E = 0;
                                return U > 0 && (E += g['timestamp'] - U),
                                    U = g.data['paused'] ? g['timestamp'] : -1,
                                    E + this['_getTimeStop'](l, a + 1, U);
                            }
                            return this['_getTimeStop'](l, a + 1, U);
                        },
                        M['prototype']['_timeDoAction'] = function(U) {
                            if (this['state'] != a['gameing'])
                                return !1;
                            if (this['segment_index'] >= this['segments']['length'])
                                return !1;
                            var z = this['segments'][this['segment_index']];
                            if (!z['loaded'])
                                return !1;
                            if (this['segment_index'] == this['segments']['length'] - 1 && this['unit_index'] >= z['units']['length'])
                                return !1;
                            var M = z['units'][this['unit_index']],
                                g = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            if (M['timestamp'] > g && !this['is_realtime'])
                                return !0;
                            if ('NotifyGameEndResult' == M.name)
                                return !0;
                            if (1 == M['category'] && this['during_do_cd'])
                                return !0;
                            var R = this['_unitIsTimeLast'](this['segment_index'], this['unit_index'] + 1);
                            R && (g -= this['_getTimeStop'](this['segment_index'], this['unit_index'] + 1, this['time_stop_start_time']));
                            var E = 0;
                            if (this['is_realtime'] ? (E = Laya['timer']['currTimer'] + GameMgr.Inst['server_time_delta'] - this['_time0'] - M['timestamp'], E = 0 > E ? 0 : E) : E = g - M['timestamp'], l['UI_Loading'].Inst && l['UI_Loading'].Inst['enable'] && l['UI_Loading'].Inst['close'](), U)
                                R ? this['_doUnit'](M, !0, E) : this['_doUnit'](M, !0, -1);
                            else {
                                var C = this['_doUnit'](M, !1, E);
                                C > 0 && (this['do_unit_cd'] = Laya['timer']['currTimer'] + C);
                            }
                            return this['unit_index']++,
                                this['unit_index'] >= z['units']['length'] && !this['is_realtime'] && (this['unit_index'] = 0, this['segment_index']++),
                                this['_timeDoAction'](U);
                        },
                        M['prototype']['_askNewSegment'] = function() {
                            var a = this;
                            if (!this['have_gameend'] && !(this['during_asknew'] || this['retry_loadtime'] >= 3) && this['segments'][this['segments']['length'] - 1]['loaded']) {
                                var U = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                                U + 15000 < this['segment_end_millisecond'] || (this['during_asknew'] = !0, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveLeftSegment', {
                                    game_uuid: this['game_uuid'],
                                    last_segment_id: this['segments'][this['segments']['length'] - 1]['segment_id']
                                }, function(U, z) {
                                    if (a['during_asknew'] = !1, U || z['error'])
                                        a['retry_loadtime']++, a['retry_loadtime'] >= 3 && (l['UIMgr'].Inst['showNetReqError']('fetchGameLiveLeftSegment', U, z), GameMgr.Inst['postInfo2Server']('ob_failure', {
                                            condition: 'runtime',
                                            uuid: a['game_uuid'],
                                            segment_name: '',
                                            last_success_segment_name: a['segments'][a['segments']['length'] - 1].uri,
                                            error_info: 'server_timeout',
                                            gametime_since_start: a['_time_start']
                                        }));
                                    else {
                                        a['retry_loadtime'] = 0;
                                        var M = z['segments'];
                                        a['segment_end_millisecond'] = z['segment_end_millisecond'];
                                        for (var g = function(l) {
                                                if (l['success']) {
                                                    for (var U = 0; U < a['segments']['length']; U++)
                                                        if (a['segments'][U]['segment_id'] == l.id) {
                                                            a['segments'][U]['units'] = l['units'];
                                                            for (var z = 0; z < l['units']['length']; z++)
                                                                if ('NotifyGameEndResult' == l['units'][z].name) {
                                                                    a['have_gameend'] = !0;
                                                                    break;
                                                                }
                                                            a['segments'][U]['loaded'] = !0;
                                                            break;
                                                        }
                                                } else
                                                    GameMgr.Inst['postInfo2Server']('ob_failure', {
                                                        condition: 'runtime',
                                                        uuid: a['game_uuid'],
                                                        segment_name: l.url,
                                                        last_success_segment_name: a['last_success_segment_url'],
                                                        error_info: l.type,
                                                        gametime_since_start: a['_time_start']
                                                    });
                                            }, R = a['segments'][a['segments']['length'] - 1]['segment_id'], E = 0; E < M['length']; E++) {
                                            var C = M[E]['segment_id'],
                                                B = game['LobbyNetMgr'].Inst['ob_url'] + M[E]['segment_uri'];
                                            R >= C || (a['segments'].push({
                                                segment_id: C,
                                                uri: B,
                                                units: [],
                                                loaded: !1
                                            }), a['_loadUnit'](C, B, Laya['Handler']['create'](a, g, null, !1)));
                                        }
                                    }
                                }));
                            }
                        },
                        M['prototype']['_forceQuit'] = function() {
                            this['state'] = a.none,
                                this['enable'] = !1,
                                GameMgr.Inst['EnterLobby']();
                        },
                        M['prototype']['_fastSync'] = function() {
                            var U = -1,
                                z = -1;
                            this['time_stop_start_time'] = -1,
                                this['time_stop_length'] = 0;
                            var M = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            this['is_realtime'] && (M = Laya['timer']['currTimer']);
                            for (var g = 0; g < this['segments']['length']; g++)
                                for (var R = this['segments'][g], E = 0; E < R['units']['length']; E++)
                                    R['units'][E]['timestamp'] <= M && 'RecordNewRound' == R['units'][E].name && (U = g, z = E);
                            if (app.Log.log('_fastSync1: segment=' + U + ', unit=' + z), -1 == U) {
                                U = 0;
                                for (var R = this['segments'][0], E = 0; E < R['units']['length']; E++)
                                    if ('RecordNewRound' == R['units'][E].name) {
                                        U = 0,
                                            z = E,
                                            this['_time0'] = R['units'][E]['timestamp'] - 50;
                                        break;
                                    }
                            }
                            return app.Log.log('_fastSync2: segment=' + U + ', unit=' + z), -1 == z ? this['is_realtime'] ? (this['state'] = a['gameing'], this['segment_index'] = 0, this['unit_index'] = 0, !0) : (app.Log['Error']('给的数据没有RecordNewRound'), l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), this['_forceQuit'](), !1) : (this['state'] = a['gameing'], this['segment_index'] = U, this['unit_index'] = z, this['_timeDoAction'](!0), !0);
                        },
                        M['prototype']['onChangeMainbody'] = function() {
                            this['state'] == a['gameing'] ? (this['do_unit_cd'] = 0, this['_fastSync']()) : this['state'] == a['replay'] && l['UI_Ob_Replay'].Inst['onChangeMainBody']();
                        },
                        M['prototype']['onScoreChangeConfirm'] = function() {
                            if (!this['enable'])
                                return l['UI_Live_Broadcast1'].Inst['onScoreChangeConfirm'](), void 0;
                            if (this['state'] == a['gameing']) {
                                if (this['do_unit_cd'] = 0, this['segment_index'] >= this['segments']['length'])
                                    return !1;
                                var U = this['segments'][this['segment_index']];
                                if (!U['loaded'])
                                    return !1;
                                if (this['segment_index'] == this['segments']['length'] - 1 && this['unit_index'] >= U['units']['length'])
                                    return !1;
                                var z = U['units'][this['unit_index']];
                                'NotifyGameEndResult' == z.name && (l['UI_ScoreChange'].Inst['enable'] = !1, this['_doUnit'](z, !1, 0));
                            } else
                                this['state'] == a['replay'] && (l['UI_ScoreChange'].Inst['enable'] = !1, l['UI_Ob_Replay'].Inst['nextStep'](!0));
                        },
                        M['prototype']['enterReplay'] = function() {
                            this['state'] = a['replay'];
                            for (var U = [], z = 0; z <= this['segment_index'] && z < this['segments']['length'] && this['segments'][z]['loaded']; z++)
                                for (var M = this['segments'][z]['units'], g = 0; g < M['length'] && !(z == this['segment_index'] && g >= this['unit_index']); g++) {
                                    var R = M[g];
                                    1 == R['category'] && U.push({
                                        name: R.name,
                                        data: R.data
                                    });
                                }
                            l['UI_Ob_Replay'].Inst.show(U),
                                view['DesktopMgr'].Inst['ClearOperationShow']();
                        },
                        M['prototype']['closeReplay'] = function() {
                            this['state'] = a['gameing'],
                                l['UI_Ob_Replay'].Inst['close'](),
                                this['do_unit_cd'] = 0,
                                this['_fastSync']();
                        },
                        M;
                }
                (l['UIBase']);
            l['UI_Live_Broadcast'] = z;
        }
        (uiscript || (uiscript = {}));


        ! function(l) {
            var a,
                U = function() {
                    function a(a) {
                        var U = this;
                        this['_show_hand'] = !1,
                            this['_show_paopai'] = !1,
                            this['_show_replay'] = !1,
                            this.me = a,
                            this['_btn_out'] = this.me['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['switch']();
                            }, null, !1),
                            this.me['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['_show_hand'] = !U['_show_hand'],
                                    U['_choosed_show_hand']['visible'] = U['_show_hand'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](U['_show_hand']);
                            }, null, !1),
                            this['_choosed_show_hand'] = this.me['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                U['_show_paopai'] = !U['_show_paopai'],
                                    U['_choosed_show_paopai']['visible'] = U['_show_paopai'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](U['_show_paopai']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this.me['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_showbar')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                l['UI_Ob_Replay'].Inst['locking'] || l['UI_Ob_Replay'].Inst['anim_time'] > game['Tools']['getServerTime']() || 'RecordHuleXueZhanEnd' != z.Inst['last_action_name'] && 'RecordHule' != z.Inst['last_action_name'] && 'RecordLiuJu' != z.Inst['last_action_name'] && 'RecordNoTile' != z.Inst['last_action_name'] && ('RecordNewRound' == z.Inst['last_action_name'] && z.Inst['during_do_cd'] || (U['_show_replay'] = !U['_show_replay'], U['_choosed_show_replay']['visible'] = U['_show_replay'], U['_show_replay'] ? z.Inst['enterReplay']() : z.Inst['closeReplay']()));
                            }, null, !1),
                            this['_choosed_show_replay'] = this.me['getChildByName']('btn_showbar')['getChildByName']('choosed'),
                            this.me['getChildByName']('label_word')['visible'] = 'chs' == GameMgr['client_language'],
                            this.me['getChildByName']('img_set')['visible'] = 'chs' != GameMgr['client_language'];
                    }
                    return a['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this['_show_hand'] = !1,
                                this.me.x = -258,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = this['_show_hand'],
                                this['_show_paopai'] = !1,
                                this['_choosed_show_paopai']['visible'] = this['_show_paopai'],
                                this['_show_replay'] = !1,
                                this['_choosed_show_replay']['visible'] = this['_show_replay'];
                        },
                        a['prototype']['switch'] = function() {
                            var l = this,
                                a = -258;
                            this.me.x < -100 && (a = -5),
                                this['_btn_out']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: a
                                }, 200, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    l['_btn_out']['disabled'] = !1;
                                }), 0, !0, !0);
                        },
                        a;
                }
                ();
            ! function(l) {
                l[l.none = 0] = 'none',
                    l[l['gameing'] = 1] = 'gameing',
                    l[l['replay'] = 2] = 'replay';
            }
            (a || (a = {}));
            var z = function(z) {
                    function M() {
                        var l = z.call(this, new ui.mj['live_broadcastUI']()) || this;
                        return l['state'] = a.none,
                            l['pending_units'] = [],
                            l['_time0'] = 0,
                            l['_time_start'] = 0,
                            l['unit_index'] = 0,
                            l['guanzhanconfig'] = null,
                            l['do_unit_cd'] = 0,
                            l['time_stop_length'] = 0,
                            l['time_stop_start_time'] = 0,
                            l['_last_action_name'] = '',
                            l['have_gameend'] = !1,
                            l['is_realtime'] = !1,
                            l['waiting_start'] = !1,
                            l['sended_error_msg'] = !1,
                            M.Inst = l,
                            game['LiveNetMgr'].Inst['setNotifyHandler'](new Laya['Handler'](l, l['onReceiveNotify'])),
                            l;
                    }
                    return __extends(M, z),
                        M['fetchInfo'] = function(a, U) {
                            var z = this;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchOBToken', {
                                uuid: a
                            }, function(g, R) {
                                if (g || R['error'])
                                    l['UIMgr'].Inst['showNetReqError']('fetchOBToken', g, R), U && U['runWith']({
                                        success: !1
                                    });
                                else {
                                    app.Log.log('fetchOBToken res:' + JSON['stringify'](R)),
                                        z['token'] = R['token'],
                                        z['game_uuid'] = a,
                                        z['create_time'] = R['create_time'],
                                        z['delay'] = R['delay'],
                                        z['start_time'] = R['start_time'];
                                    var E = Math['floor'](R['start_time'] + R['delay'] - game['Tools']['getServerTime']() / 1000);
                                    E > 0 ? l['UI_WaitOb'].Inst.show(M['game_uuid'], E, U) : U && U['runWith']({
                                        success: !0,
                                        data: R
                                    });
                                }
                            });
                        },
                        M['goToWatch'] = function(a, U) {
                            var z = this;
                            l['UI_Loading'].Inst['setProgressVal'](0.1),
                                l['UI_Loading'].Inst.show('enter_mj'),
                                this['connect'](new Laya['Handler'](this, function(M) {
                                    M['success'] ? (l['UI_Loading'].Inst['setProgressVal'](0.2), z['startLoadOb'](a, M.data, U)) : (l['UI_Loading'].Inst['enable'] = !1, l['UIMgr'].Inst['showLobby']());
                                }));
                        },
                        M['startLoadOb'] = function(a, U, z) {
                            var g = this;
                            app.Log.log('startLoadOb res:' + JSON['stringify'](U)),
                                GameMgr.Inst['onLoadStart']('ob');
                            for (var R = JSON['parse'](U.head), E = [null, null, null, null], C = 0; C < R['players']['length']; C++) {
                                for (var B = -1, w = 0; w < R['seat_list']['length']; w++)
                                    if (R['seat_list'][w] == R['players'][C]['account_id']) {
                                        B = w;
                                        break;
                                    } -
                                1 != B ? E[B] = R['players'][C] : app.Log['Error']('goToWatch ' + JSON['stringify'](R['players'][C]) + '未找到位置');
                            }
                            var L = game['Tools']['strOfLocalization'](2003),
                                c = R['game_config'].mode;
                            c['extendinfo'] && (L = game['Tools']['strOfLocalization'](2004)),
                                c['detail_rule'] && c['detail_rule']['ai_level'] && (1 === c['detail_rule']['ai_level'] && (L = game['Tools']['strOfLocalization'](2003)), 2 === c['detail_rule']['ai_level'] && (L = game['Tools']['strOfLocalization'](2004)));
                            for (var C = 0; C < E['length']; C++)
                                null == E[C] && (E[C] = {
                                    nickname: L,
                                    avatar_id: game['GameUtility']['get_default_ai_skin'](),
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    }
                                });
                            game['Scene_MJ'].Inst['openMJRoom']({
                                mode: c
                            }, E, Laya['Handler']['create'](this, function() {
                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](R['game_config'])), E, z, view['EMJMode']['live_broadcast'], Laya['Handler']['create'](g, function() {
                                    l['UI_Loading'].Inst['setProgressVal'](0.7),
                                        Laya['timer'].once(1000, g, function() {
                                            GameMgr.Inst['EnterMJ'](),
                                                l['UI_Loading'].Inst['setProgressVal'](0.8),
                                                M.Inst['time0'] = game['Tools']['getServerTime']() - (1000 * U['start_time'] + 1000 * U['delay']),
                                                M.Inst['startLive'](a);
                                        });
                                }));
                            }), Laya['Handler']['create'](this, function(a) {
                                return l['UI_Loading'].Inst['setProgressVal'](0.5 * a + 0.2);
                            }, null, !1));
                        },
                        M['connect'] = function(l) {
                            this['connect_func'] = l,
                                game['LiveNetMgr'].Inst['connect'](new Laya['Handler'](this, this['onConnect']));
                        },
                        M['onConnect'] = function(a) {
                            var U = this;
                            if (a.open)
                                game['LiveNetMgr'].Inst['sendReq']('Auth', {
                                    token: this['token']
                                }, function(a, z) {
                                    a || z['error'] ? (U['connect_func'] && (U['connect_func']['runWith']({
                                        success: !1,
                                        data: z
                                    }), U['connect_func'] = null), M.Inst && M.Inst['_forceQuit'](), z['error'] ? l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](z['error'])) : l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), l['UI_Loading'].Inst['enable'] = !1) : M.Inst && M.Inst['enable'] ? M.Inst['sendStartObRequest']() : U['connect_func'] && (U['connect_func']['runWith']({
                                        success: !0,
                                        data: z
                                    }), U['connect_func'] = null);
                                });
                            else if (this['connect_func'] && (this['connect_func']['runWith']({
                                    success: !1
                                }), this['connect_func'] = null), game['LiveNetMgr'].Inst['close'](), 'connect failed' == a.info)
                                l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), M.Inst ? M.Inst['_forceQuit']() : l['UI_Loading'].Inst['enable'] = !1;
                            else if ('disconnect' == a.info) {
                                if (!M.Inst || !M.Inst['enable'])
                                    return;
                                l['UI_SecondConfirm'].Inst.show(game['Tools']['strOfLocalization'](3529), Laya['Handler']['create'](this, function() {
                                    game['LiveNetMgr'].Inst['force_reconnect']();
                                }), Laya['Handler']['create'](this, function() {
                                    M.Inst && M.Inst['_forceQuit']();
                                }));
                            } else
                                M.Inst && M.Inst['_forceQuit']();
                        },
                        Object['defineProperty'](M['prototype'], 'time0', {
                            set: function(l) {
                                this['_time0'] = l;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](M['prototype'], 'during_do_cd', {
                            get: function() {
                                return game['Tools']['getServerTime']() < this['do_unit_cd'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](M['prototype'], 'during_play', {
                            get: function() {
                                return this['state'] == a['gameing'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](M['prototype'], 'last_action_name', {
                            get: function() {
                                return this['_last_action_name'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        M['prototype']['onCreate'] = function() {
                            this['guanzhanconfig'] = new U(this.me['getChildByName']('config'));
                        },
                        M['prototype']['startLive'] = function() {
                            var a = this;
                            if (game['LiveNetMgr'].Inst['connect_state'] != game['EConnectState']['connecting'])
                                return l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), M.Inst && M.Inst['_forceQuit'](), void 0;
                            this['sended_error_msg'] = !1,
                                this['pending_units'] = [];
                            var U = this.me['getChildByName']('f_realtime');
                            U['visible'] = !1,
                                this['_time_start'] = game['Tools']['getServerTime']();
                            this['enable'] = !0,
                                this['guanzhanconfig']['reset'](),
                                l['UI_Ob_Replay'].Inst['enable'] = !1,
                                this['do_unit_cd'] = 0,
                                this['have_gameend'] = !1,
                                this['waiting_start'] = !0,
                                game['LiveNetMgr'].Inst['sendReq']('StartOb', {}, function(U, z) {
                                    U || z['error'] ? (z['error'] ? l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](z['error'])) : l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), a['_forceQuit']()) : (app.Log.log('StartOb'), a['start_seq'] = z.seq ? z.seq : 0);
                                });
                        },
                        M['prototype']['sendStartObRequest'] = function() {
                            var a = this;
                            game['LiveNetMgr'].Inst['sendReq']('StartOb', {}, function(U, z) {
                                U || z['error'] ? (z['error'] ? l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](z['error'])) : l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), a['_forceQuit']()) : app.Log.log('StartOb');
                            });
                        },
                        M['prototype']['onDisable'] = function() {
                            Laya['timer']['clearAll'](this),
                                game['LiveNetMgr'].Inst['close'](),
                                this['pending_units'] = [];
                        },
                        M['prototype']['onReceiveNotify'] = function(l, a) {
                            var U = this;
                            void 0 === a && (a = !1);
                            for (var z = 0, g = this['pending_units']; z < g['length']; z++) {
                                var R = g[z];
                                if (R.seq == l.seq)
                                    return;
                            }
                            if ('GameEndAction' == l.name && game['LiveNetMgr'].Inst['close'](), a) {
                                for (var E = !1, C = -1, B = 0, w = this['pending_units']; B < w['length']; B++) {
                                    var R = w[B];
                                    if (E || (C++, R.seq == l.seq - 1 && (E = !0)), R.seq == l.seq)
                                        return;
                                }
                                if (0 > C)
                                    this['pending_units'].push(l);
                                else if (this['pending_units']['splice'](C + 1, 0, l), this['pending_units'][C + 2] && this['pending_units'][C + 2].seq != l.seq + 1) {
                                    var L = this;
                                    game['LiveNetMgr'].Inst['sendReq']('FetchSegment', {
                                        seq: l.seq + 1
                                    }, function(a, U) {
                                        (a || U['error']) && GameMgr.Inst['postInfo2Server']('livebroad', {
                                            uuid: M['game_uuid'],
                                            token: M['token'],
                                            missing_seq: l.seq + 1,
                                            error: a || U['error']
                                        }), !a && U && L['onReceiveNotify'](L['_handleMsg'](U['segments']), !0);
                                    });
                                }
                            } else {
                                if (this['pending_units']['length'] > 0 && l.seq != this['pending_units'][this['pending_units']['length'] - 1].seq + 1) {
                                    this['sended_error_msg'] || (GameMgr.Inst['postInfo2Server']('livebroad', {
                                        uuid: M['game_uuid'],
                                        last_seq: this['pending_units'][this['pending_units']['length'] - 1].seq,
                                        recent_seq: l.seq,
                                        token: M['token']
                                    }), this['sended_error_msg'] = !0);
                                    var c = this;
                                    game['LiveNetMgr'].Inst['sendReq']('FetchSegment', {
                                        seq: this['pending_units'][this['pending_units']['length'] - 1].seq + 1
                                    }, function(l, a) {
                                        (l || a['error']) && GameMgr.Inst['postInfo2Server']('livebroad', {
                                            uuid: M['game_uuid'],
                                            token: M['token'],
                                            missing_seq: U['pending_units'][U['pending_units']['length'] - 1].seq + 1,
                                            error: l || a['error']
                                        }), !l && a && c['onReceiveNotify'](c['_handleMsg'](a['segments']), !0);
                                    });
                                }
                                this['pending_units'].push(l);
                            }
                            this['waiting_start'] && (l.seq >= this['start_seq'] && this['start_seq'] > 0 || l['offsetTime'] > this['_time0'] - 3000) && (this['_onFirstLoadOver'](), this['waiting_start'] = !1);
                        },
                        M['prototype']['_onFirstLoadOver'] = function() {
                            var l = this;
                            this['_fastSync']() && (app.Log.log('fastSync over'), Laya['timer'].loop(100, this, function() {
                                l['_timeDoAction'](!1);
                            }, null, !0));
                        },
                        M['prototype']['_fastSync'] = function() {
                            var U = -1;
                            this['time_stop_start_time'] = -1,
                                this['time_stop_length'] = 0;
                            var z = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            this['is_realtime'] && (z = game['Tools']['getServerTime']());
                            for (var M = 0; M < this['pending_units']['length']; M++) {
                                var g = this['pending_units'][M];
                                g['offsetTime'] <= z && ('RecordNewRound' == g.name || 'RecordNewCard' == g.name) && (U = M);
                            }
                            if (app.Log.log('_fastSync1: unit=' + U), -1 == U && (U = 0, this['pending_units']['length'] > 0)) {
                                var g = this['pending_units'][0];
                                ('RecordNewRound' == g.name || 'RecordNewCard' == g.name) && (U = 0, this['_time0'] = g['offsetTime'] - 50);
                            }
                            return app.Log.log('_fastSync2: unit=' + U), -1 == U ? this['is_realtime'] ? (this['state'] = a['gameing'], this['unit_index'] = 0, !0) : (app.Log['Error']('给的数据没有RecordNewRound'), l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), this['_forceQuit'](), !1) : (this['state'] = a['gameing'], this['unit_index'] = U, this['pending_units'][U] && 'RecordNewCard' == this['pending_units'][U].name && !this['pending_units'][U + 1] ? this['_timeDoAction'](!1) : this['_timeDoAction'](!0), !0);
                        },
                        M['prototype']['_forceQuit'] = function() {
                            app.Log['Error']('_forceQuit'),
                                this['state'] = a.none,
                                this['enable'] = !1,
                                GameMgr.Inst['EnterLobby']();
                        },
                        M['prototype']['_getTimeStop'] = function(l, a) {
                            var U = 0;
                            if (a > 0 && (U = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'] - a), this['pending_units']['length'] <= l)
                                return U;
                            var z = this['pending_units'][l],
                                M = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            if (z['offsetTime'] > M)
                                return U;
                            if (1 == z['category'])
                                return 0;
                            if ('NotifyGamePause' == z.name) {
                                var g = 0;
                                return a > 0 && (g += z['offsetTime'] - a),
                                    a = z.data['paused'] ? z['offsetTime'] : -1,
                                    g + this['_getTimeStop'](l + 1, a);
                            }
                            return this['_getTimeStop'](l + 1, a);
                        },
                        M['prototype']['_unitIsTimeLast'] = function(l) {
                            if (l >= this['pending_units']['length'])
                                return !0;
                            var a = this['pending_units'][l],
                                U = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            return a['offsetTime'] > U ? !0 : 2 == a['category'] ? this['_unitIsTimeLast'](l + 1) : !1;
                        },
                        M['prototype']['_timeDoAction'] = function(U) {
                            if (this['state'] != a['gameing'])
                                return !1;
                            if (this['unit_index'] >= this['pending_units']['length'])
                                return !1;
                            var z = this['pending_units'][this['unit_index']],
                                M = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            if (z['offsetTime'] > M && !this['is_realtime'])
                                return !0;
                            if ('NotifyGameEndResult' == z.name)
                                return !0;
                            if (1 == z['category'] && this['during_do_cd'])
                                return !0;
                            var g = this['_unitIsTimeLast'](this['unit_index'] + 1);
                            g && (M -= this['_getTimeStop'](this['unit_index'] + 1, this['time_stop_start_time']));
                            var R = 0;
                            if (this['is_realtime'] ? (R = game['Tools']['getServerTime']() - this['_time0'] - z['offsetTime'], R = 0 > R ? 0 : R) : R = M - z['offsetTime'], l['UI_Loading'].Inst && l['UI_Loading'].Inst['enable'] && l['UI_Loading'].Inst['close'](), U)
                                g ? this['_doUnit'](z, !0, R) : this['_doUnit'](z, !0, -1);
                            else {
                                var E = this['_doUnit'](z, !1, R);
                                E > 0 && (this['do_unit_cd'] = game['Tools']['getServerTime']() + E);
                            }
                            return this['unit_index']++,
                                this['_timeDoAction'](U);
                        },
                        M['prototype']['onScoreChangeConfirm'] = function() {
                            if (this['state'] == a['gameing']) {
                                if (this['do_unit_cd'] = 0, this['unit_index'] >= this['pending_units']['length'])
                                    return !1;
                                var U = this['pending_units'][this['unit_index']];
                                'NotifyGameEndResult' == U.name && (l['UI_ScoreChange'].Inst['enable'] = !1, this['_doUnit'](U, !1, 0));
                            } else
                                this['state'] == a['replay'] && (l['UI_ScoreChange'].Inst['enable'] = !1, l['UI_Ob_Replay'].Inst['nextStep'](!0));
                        },
                        M['prototype']['_doRecord'] = function(l, a, U) {
                            switch (view['DesktopMgr'].Inst['ClearOperationShow'](), this['_last_action_name'] = l, l) {
                                case 'RecordNewRound':
                                    return view['ActionNewRound']['record'](a, U);
                                case 'RecordChangeTile':
                                    return view['ActionChangeTile']['record'](a, U);
                                case 'RecordSelectGap':
                                    return view['ActionSelectGap']['record'](a, U);
                                case 'RecordDiscardTile':
                                    return view['ActionDiscardTile']['record'](a, U);
                                case 'RecordDealTile':
                                    return view['ActionDealTile']['record'](a, U);
                                case 'RecordChiPengGang':
                                    return view['ActionChiPengGang']['record'](a, U);
                                case 'RecordAnGangAddGang':
                                    return view['ActionAnGangAddGang']['record'](a, U);
                                case 'RecordHule':
                                    return view['ActionHule']['record'](a);
                                case 'RecordLiuJu':
                                    return view['ActionLiuJu']['record'](a);
                                case 'RecordNoTile':
                                    return view['ActionNoTile']['record'](a);
                                case 'RecordBaBei':
                                    return view['ActionBabei']['record'](a);
                                case 'RecordHuleXueZhanMid':
                                    return view['ActionHuleXueZhanMid']['record'](a);
                                case 'RecordHuleXueZhanEnd':
                                    return view['ActionHuleXueZhanEnd']['record'](a);
                                case 'RecordGangResult':
                                    return view['ActionGangResult']['record'](a);
                                case 'RecordGangResultEnd':
                                    return view['ActionGangResultEnd']['record'](a);
                                case 'RecordRevealTile':
                                    return view['ActionRevealTile']['record'](a);
                                case 'RecordLockTile':
                                    return view['ActionLockTile']['record'](a);
                                case 'RecordUnveilTile':
                                    return view['ActionUnveilTile']['record'](a);
                                case 'RecordNewCard':
                                    return view['ActionNewCard']['record'](a);
                                case 'RecordFillAwaitingTiles':
                                    return view['ActionFillAwaitingTiles']['record'](a);
                            }
                            return 0;
                        },
                        M['prototype']['_doFastRecord'] = function(l, a, U) {
                            try {
                                switch (this['_last_action_name'] = l, l) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](a, U);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](a, U);
                                        break;
                                    case 'RecoreSelectGap':
                                        view['ActionSelectGap']['fastrecord'](a, U);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](a, U);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](a, U);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](a, U);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](a, U);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](a);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](a);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](a);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](a);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](a);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](a);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](a);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](a);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](a);
                                        break;
                                    case 'RecordNewCard':
                                        return view['ActionNewCard']['fastrecord'](a);
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](a);
                                }
                            } catch (z) {
                                var M = {};
                                return M['error'] = z['message'],
                                    M['stack'] = z['stack'],
                                    M['method'] = 'ui_live_broadcast doFastRecord',
                                    M.name = l,
                                    M.data = a,
                                    GameMgr.Inst['onFatalError'](M),
                                    1000000;
                            }
                        },
                        M['prototype']['_doUnit'] = function(a, U, z) {
                            if (U) {
                                if (1 == a['category'])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': a
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': a
                                            }));
                                        }
                                    })), this['_doFastRecord'](a.name, a.data, z), view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0), 0;
                                if ('GameNewRoundState' == a.name) {
                                    for (var M = 0; M < a.data['seat_states']['length']; M++)
                                        view['DesktopMgr']['player_link_state'][M] = a.data['seat_states'][M];
                                    l['UI_DesktopInfo'].Inst['refreshLinks']();
                                } else
                                    'NotifyGameEndResult' == a.name ? (view['DesktopMgr'].Inst['gameEndResult'] = a.data['result'], this['enable'] = !1, l['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyPlayerConnectionState' == a.name ? l['UI_DesktopInfo'].Inst['onPlayerConnectionState'](a.data) : 'GameEndAction' == a.name ? 3 == a.data['state'] && l['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                        game['Scene_MJ'].Inst['ForceOut']();
                                    })) : 'NotifyGamePause' == a.name && (view['DesktopMgr'].Inst['setGameStop'](a.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += a['offsetTime'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? a['offsetTime'] : -1);
                                return -1;
                            }
                            if (1 == a['category']) {
                                var g = this['_doRecord'](a.name, a.data, z);
                                return view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0),
                                    g;
                            }
                            if ('GameNewRoundState' == a.name) {
                                for (var M = 0; M < a.data['seat_states']['length']; M++)
                                    view['DesktopMgr']['player_link_state'][M] = a.data['seat_states'][M];
                                l['UI_DesktopInfo'].Inst['refreshLinks']();
                            } else
                                'NotifyGameEndResult' == a.name ? (view['DesktopMgr'].Inst['gameEndResult'] = a.data['result'], this['enable'] = !1, l['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyGameBroadcast' == a.name ? l['UI_DesktopInfo'].Inst['onGameBroadcast'](a.data) : 'NotifyPlayerConnectionState' == a.name ? l['UI_DesktopInfo'].Inst['onPlayerConnectionState'](a.data) : 'GameEndAction' == a.name ? 3 == a.data['state'] && l['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                    game['Scene_MJ'].Inst['ForceOut']();
                                })) : 'NotifyGamePause' == a.name && (view['DesktopMgr'].Inst['setGameStop'](a.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += a['offsetTime'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? a['offsetTime'] : -1);
                            return -1;
                        },
                        M['prototype']['enterReplay'] = function() {
                            this['state'] = a['replay'];
                            for (var U = [], z = 0; z <= this['unit_index'] && z < this['pending_units']['length']; z++) {
                                var M = this['pending_units'][z];
                                1 == M['category'] && U.push({
                                    name: M.name,
                                    data: M.data
                                });
                            }
                            l['UI_Ob_Replay'].Inst.show(U),
                                view['DesktopMgr'].Inst['ClearOperationShow']();
                        },
                        M['prototype']['closeReplay'] = function() {
                            this['state'] = a['gameing'],
                                l['UI_Ob_Replay'].Inst['close'](),
                                this['do_unit_cd'] = 0,
                                this['_fastSync']();
                        },
                        M['prototype']['onChangeMainbody'] = function() {
                            this['state'] == a['gameing'] ? (this['do_unit_cd'] = 0, this['_fastSync']()) : this['state'] == a['replay'] && l['UI_Ob_Replay'].Inst['onChangeMainBody']();
                        },
                        M['prototype']['_handleMsg'] = function(l) {
                            for (var a = window.atob(l), U = a['length'], z = new Uint8Array(U), M = 0; U > M; M++)
                                z[M] = a['charCodeAt'](M);
                            var g = {};
                            g.seq = z[0] + (z[1] << 8),
                                g['offsetTime'] = z[2] + (z[3] << 8) + (z[4] << 16) + (z[5] << 24),
                                g.end = z[6] + (z[7] << 8),
                                g['category'] = z[8] + (z[9] << 8),
                                g['length'] = z[10] + (z[11] << 8) + (z[12] << 16) + (z[13] << 24),
                                z = z['slice'](14);
                            var R = net['MessageWrapper']['decodeMessage'](z);
                            return g.data = R,
                                g.name = R['$type'].name,
                                g;
                        },
                        M;
                }
                (l['UIBase']);
            l['UI_Live_Broadcast1'] = z;
        }
        (uiscript || (uiscript = {}));


        if (typeof MMP == 'undefined') {
            ! function(l) {
                var a = function() {
                        function a() {
                            var a = this;
                            this.urls = [],
                                this['link_index'] = -1,
                                this['connect_state'] = l['EConnectState'].none,
                                this['reconnect_count'] = 0,
                                this['reconnect_span'] = [500, 1000, 3000, 6000, 10000, 15000],
                                this['playerreconnect'] = !1,
                                this['lasterrortime'] = 0,
                                this['load_over'] = !1,
                                this['loaded_player_count'] = 0,
                                this['real_player_count'] = 0,
                                this['is_ob'] = !1,
                                this['ob_token'] = '',
                                this['lb_index'] = 0,
                                this['_report_reconnect_count'] = 0,
                                this['_connect_start_time'] = 0,
                                app['NetAgent']['AddListener2MJ']('NotifyPlayerLoadGameReady', Laya['Handler']['create'](this, function(l) {
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify(l),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(l));
                                        }
                                    }));
                                    app.Log.log('NotifyPlayerLoadGameReady: ' + JSON['stringify'](l)),
                                        a['loaded_player_count'] = l['ready_id_list']['length'],
                                        a['load_over'] && uiscript['UI_Loading'].Inst['enable'] && uiscript['UI_Loading'].Inst['showLoadCount'](a['loaded_player_count'], a['real_player_count']);
                                }));
                        }
                        return Object['defineProperty'](a, 'Inst', {
                                get: function() {
                                    return null == this['_Inst'] ? this['_Inst'] = new a() : this['_Inst'];
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            a['prototype']['OpenConnect'] = function(a, U, z, M) {
                                var g = this;
                                uiscript['UI_Loading'].Inst.show('enter_mj'),
                                    l['Scene_Lobby'].Inst && l['Scene_Lobby'].Inst['active'] && (l['Scene_Lobby'].Inst['active'] = !1),
                                    l['Scene_Huiye'].Inst && l['Scene_Huiye'].Inst['active'] && (l['Scene_Huiye'].Inst['active'] = !1),
                                    this['Close'](),
                                    view['BgmListMgr']['stopBgm'](),
                                    this['is_ob'] = !1,
                                    Laya['timer'].once(500, this, function() {
                                        g.url = '',
                                            g['token'] = a,
                                            g['game_uuid'] = U,
                                            g['server_location'] = z,
                                            GameMgr.Inst['ingame'] = !0,
                                            GameMgr.Inst['mj_server_location'] = z,
                                            GameMgr.Inst['mj_game_token'] = a,
                                            GameMgr.Inst['mj_game_uuid'] = U,
                                            g['playerreconnect'] = M,
                                            g['_setState'](l['EConnectState']['tryconnect']),
                                            g['load_over'] = !1,
                                            g['loaded_player_count'] = 0,
                                            g['real_player_count'] = 0,
                                            g['lb_index'] = 0,
                                            g['_fetch_gateway'](0);
                                    }),
                                    Laya['timer'].loop(300000, this, this['reportInfo']);
                            },
                            a['prototype']['reportInfo'] = function() {
                                this['connect_state'] == l['EConnectState']['connecting'] && GameMgr.Inst['postNewInfo2Server']('network_route', {
                                    client_type: 'web',
                                    route_type: 'game',
                                    route_index: l['LobbyNetMgr']['root_id_lst'][l['LobbyNetMgr'].Inst['choosed_index']],
                                    route_delay: Math.min(10000, Math['round'](app['NetAgent']['mj_network_delay'])),
                                    connection_time: Math['round'](Date.now() - this['_connect_start_time']),
                                    reconnect_count: this['_report_reconnect_count']
                                });
                            },
                            a['prototype']['Close'] = function() {
                                this['load_over'] = !1,
                                    app.Log.log('MJNetMgr close'),
                                    this['_setState'](l['EConnectState'].none),
                                    app['NetAgent']['Close2MJ'](),
                                    this.url = '',
                                    Laya['timer']['clear'](this, this['reportInfo']);
                            },
                            a['prototype']['_OnConnent'] = function(a) {
                                app.Log.log('MJNetMgr _OnConnent event:' + a),
                                    a == Laya['Event']['CLOSE'] || a == Laya['Event']['ERROR'] ? Laya['timer']['currTimer'] - this['lasterrortime'] > 100 && (this['lasterrortime'] = Laya['timer']['currTimer'], this['connect_state'] == l['EConnectState']['tryconnect'] ? this['_try_to_linknext']() : this['connect_state'] == l['EConnectState']['connecting'] ? view['DesktopMgr'].Inst['active'] ? (view['DesktopMgr'].Inst['duringReconnect'] = !0, this['_setState'](l['EConnectState']['reconnecting']), this['reconnect_count'] = 0, this['_Reconnect']()) : (this['_setState'](l['EConnectState']['disconnect']), uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](2008)), l['Scene_MJ'].Inst['ForceOut']()) : this['connect_state'] == l['EConnectState']['reconnecting'] && this['_Reconnect']()) : a == Laya['Event'].OPEN && (this['_connect_start_time'] = Date.now(), (this['connect_state'] == l['EConnectState']['tryconnect'] || this['connect_state'] == l['EConnectState']['reconnecting']) && ((this['connect_state'] = l['EConnectState']['tryconnect']) ? this['_report_reconnect_count'] = 0 : this['_report_reconnect_count']++, this['_setState'](l['EConnectState']['connecting']), this['is_ob'] ? this['_ConnectSuccessOb']() : this['_ConnectSuccess']()));
                            },
                            a['prototype']['_Reconnect'] = function() {
                                var a = this;
                                l['LobbyNetMgr'].Inst['connect_state'] == l['EConnectState'].none || l['LobbyNetMgr'].Inst['connect_state'] == l['EConnectState']['disconnect'] ? this['_setState'](l['EConnectState']['disconnect']) : l['LobbyNetMgr'].Inst['connect_state'] == l['EConnectState']['connecting'] && GameMgr.Inst['logined'] ? this['reconnect_count'] >= this['reconnect_span']['length'] ? this['_setState'](l['EConnectState']['disconnect']) : (Laya['timer'].once(this['reconnect_span'][this['reconnect_count']], this, function() {
                                    a['connect_state'] == l['EConnectState']['reconnecting'] && (app.Log.log('MJNetMgr reconnect count:' + a['reconnect_count']), app['NetAgent']['connect2MJ'](a.url, Laya['Handler']['create'](a, a['_OnConnent'], null, !1), 'local' == a['server_location'] ? '/game-gateway' : '/game-gateway-zone'));
                                }), this['reconnect_count']++) : Laya['timer'].once(1000, this, this['_Reconnect']);
                            },
                            a['prototype']['_try_to_linknext'] = function() {
                                this['link_index']++,
                                    this.url = '',
                                    app.Log.log('mj _try_to_linknext(' + this['link_index'] + ') url.length=' + this.urls['length']),
                                    this['link_index'] < 0 || this['link_index'] >= this.urls['length'] ? l['LobbyNetMgr'].Inst['polling_connect'] ? (this['lb_index']++, this['_fetch_gateway'](0)) : (this['_setState'](l['EConnectState'].none), uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](59)), this['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && l['Scene_MJ'].Inst['ForceOut']()) : (app['NetAgent']['connect2MJ'](this.urls[this['link_index']].url, Laya['Handler']['create'](this, this['_OnConnent'], null, !1), 'local' == this['server_location'] ? '/game-gateway' : '/game-gateway-zone'), this.url = this.urls[this['link_index']].url);
                            },
                            a['prototype']['GetAuthData'] = function() {
                                return {
                                    account_id: GameMgr.Inst['account_id'],
                                    token: this['token'],
                                    game_uuid: this['game_uuid'],
                                    gift: CryptoJS['HmacSHA256'](this['token'] + GameMgr.Inst['account_id'] + this['game_uuid'], 'damajiang')['toString']()
                                };
                            },
                            a['prototype']['_fetch_gateway'] = function(a) {
                                var U = this;
                                if (l['LobbyNetMgr'].Inst['polling_connect'] && this['lb_index'] >= l['LobbyNetMgr'].Inst.urls['length'])
                                    return uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](59)), this['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && l['Scene_MJ'].Inst['ForceOut'](), this['_setState'](l['EConnectState'].none), void 0;
                                this.urls = [],
                                    this['link_index'] = -1,
                                    app.Log.log('mj _fetch_gateway retry_count:' + a);
                                var z = function(z) {
                                        var M = JSON['parse'](z);
                                        if (app.Log.log('mj _fetch_gateway func_success data = ' + z), M['maintenance'])
                                            U['_setState'](l['EConnectState'].none), uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](2009)), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && l['Scene_MJ'].Inst['ForceOut']();
                                        else if (M['servers'] && M['servers']['length'] > 0) {
                                            for (var g = M['servers'], R = l['Tools']['deal_gateway'](g), E = 0; E < R['length']; E++)
                                                U.urls.push({
                                                    name: '___' + E,
                                                    url: R[E]
                                                });
                                            U['link_index'] = -1,
                                                U['_try_to_linknext']();
                                        } else
                                            1 > a ? Laya['timer'].once(1000, U, function() {
                                                U['_fetch_gateway'](a + 1);
                                            }) : l['LobbyNetMgr'].Inst['polling_connect'] ? (U['lb_index']++, U['_fetch_gateway'](0)) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](60)), U['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && l['Scene_MJ'].Inst['ForceOut'](), U['_setState'](l['EConnectState'].none));
                                    },
                                    M = function() {
                                        app.Log.log('mj _fetch_gateway func_error'),
                                            1 > a ? Laya['timer'].once(500, U, function() {
                                                U['_fetch_gateway'](a + 1);
                                            }) : l['LobbyNetMgr'].Inst['polling_connect'] ? (U['lb_index']++, U['_fetch_gateway'](0)) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](58)), U['_SendDebugInfo'](), view['DesktopMgr'].Inst['active'] || l['Scene_MJ'].Inst['ForceOut'](), U['_setState'](l['EConnectState'].none));
                                    },
                                    g = function(l) {
                                        var a = new Laya['HttpRequest']();
                                        a.once(Laya['Event']['COMPLETE'], U, function(l) {
                                                z(l);
                                            }),
                                            a.once(Laya['Event']['ERROR'], U, function() {
                                                M();
                                            });
                                        var g = [];
                                        g.push('If-Modified-Since'),
                                            g.push('0'),
                                            l += '?service=ws-game-gateway',
                                            l += GameMgr['inHttps'] ? '&protocol=ws&ssl=true' : '&protocol=ws&ssl=false',
                                            l += '&location=' + U['server_location'],
                                            l += '&rv=' + Math['floor'](10000000 * Math['random']()) + Math['floor'](10000000 * Math['random']()),
                                            a.send(l, '', 'get', 'text', g),
                                            app.Log.log('mj _fetch_gateway func_fetch url = ' + l);
                                    };
                                l['LobbyNetMgr'].Inst['polling_connect'] ? g(l['LobbyNetMgr'].Inst.urls[this['lb_index']]) : g(l['LobbyNetMgr'].Inst['lb_url']);
                            },
                            a['prototype']['_setState'] = function(a) {
                                this['connect_state'] = a,
                                    GameMgr['inRelease'] || null != uiscript['UI_Common'].Inst && (a == l['EConnectState'].none ? uiscript['UI_Common'].Inst['label_net_mj'].text = '' : a == l['EConnectState']['tryconnect'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '尝试连接麻将服务器', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#000000') : a == l['EConnectState']['connecting'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：正常', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#00ff00') : a == l['EConnectState']['disconnect'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：断开连接', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#ff0000', uiscript['UI_Disconnect'].Inst && uiscript['UI_Disconnect'].Inst.show()) : a == l['EConnectState']['reconnecting'] && (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：正在重连', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#ff0000', uiscript['UI_Disconnect'].Inst && uiscript['UI_Disconnect'].Inst.show()));
                            },
                            a['prototype']['_ConnectSuccess'] = function() {
                                var a = this;
                                app.Log.log('MJNetMgr _ConnectSuccess '),
                                    this['load_over'] = !1,
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'authGame', this['GetAuthData'](), function(U, z) {
                                        if (U || z['error'])
                                            uiscript['UIMgr'].Inst['showNetReqError']('authGame', U, z), l['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']();
                                        else {
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify(z),
                                                onload: function(msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(z));
                                                }
                                            }));
                                            app.Log.log('麻将桌验证通过：' + JSON['stringify'](z)),
                                                uiscript['UI_Loading'].Inst['setProgressVal'](0.1);
                                            var M = [],
                                                g = 0;
                                            view['DesktopMgr']['player_link_state'] = z['state_list'];
                                            var R = l['Tools']['strOfLocalization'](2003),
                                                E = z['game_config'].mode,
                                                C = view['ERuleMode']['Liqi4'];
                                            E.mode < 10 ? (C = view['ERuleMode']['Liqi4'], a['real_player_count'] = 4) : E.mode < 20 && (C = view['ERuleMode']['Liqi3'], a['real_player_count'] = 3);
                                            for (var B = 0; B < a['real_player_count']; B++)
                                                M.push(null);
                                            E['extendinfo'] && (R = l['Tools']['strOfLocalization'](2004)),
                                                E['detail_rule'] && E['detail_rule']['ai_level'] && (1 === E['detail_rule']['ai_level'] && (R = l['Tools']['strOfLocalization'](2003)), 2 === E['detail_rule']['ai_level'] && (R = l['Tools']['strOfLocalization'](2004)));
                                            for (var w = l['GameUtility']['get_default_ai_skin'](), L = l['GameUtility']['get_default_ai_character'](), B = 0; B < z['seat_list']['length']; B++) {
                                                var c = z['seat_list'][B];
                                                if (0 == c)
                                                    M[B] = {
                                                        nickname: R,
                                                        avatar_id: w,
                                                        level: {
                                                            id: '10101'
                                                        },
                                                        level3: {
                                                            id: '20101'
                                                        },
                                                        character: {
                                                            charid: L,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: w,
                                                            is_upgraded: !1
                                                        }
                                                    };
                                                else {
                                                    g++;
                                                    for (var h = 0; h < z['players']['length']; h++)
                                                        if (z['players'][h]['account_id'] == c) {
                                                            M[B] = z['players'][h];
                                                            break;
                                                        }
                                                }
                                            }
                                            for (var B = 0; B < a['real_player_count']; B++)
                                                null == M[B] && (M[B] = {
                                                    account: 0,
                                                    nickname: l['Tools']['strOfLocalization'](2010),
                                                    avatar_id: w,
                                                    level: {
                                                        id: '10101'
                                                    },
                                                    level3: {
                                                        id: '20101'
                                                    },
                                                    character: {
                                                        charid: L,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: w,
                                                        is_upgraded: !1
                                                    }
                                                });
                                            a['loaded_player_count'] = z['ready_id_list']['length'],
                                                a['_AuthSuccess'](M, z['is_game_start'], z['game_config']['toJSON']());
                                        }
                                    });
                            },
                            a['prototype']['_AuthSuccess'] = function(a, U, z) {
                                var M = this;
                                view['DesktopMgr'].Inst && view['DesktopMgr'].Inst['active'] ? (this['load_over'] = !0, Laya['timer'].once(500, this, function() {
                                    app.Log.log('重连信息1 round_id:' + view['DesktopMgr'].Inst['round_id'] + ' step:' + view['DesktopMgr'].Inst['current_step']),
                                        view['DesktopMgr'].Inst['Reset'](),
                                        view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                        uiscript['UI_Loading'].Inst['setProgressVal'](0.2),
                                        app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                            round_id: view['DesktopMgr'].Inst['round_id'],
                                            step: view['DesktopMgr'].Inst['current_step']
                                        }, function(a, U) {
                                            a || U['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', a, U), l['Scene_MJ'].Inst['ForceOut']()) : (app.Log.log('[syncGame] ' + JSON['stringify'](U)), U['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](2011)), l['Scene_MJ'].Inst['GameEnd']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](0.3), view['DesktopMgr'].Inst['fetchLinks'](), view['DesktopMgr'].Inst['Reset'](), view['DesktopMgr'].Inst['duringReconnect'] = !0, view['DesktopMgr'].Inst['syncGameByStep'](U['game_restore'])));
                                        });
                                })) : l['Scene_MJ'].Inst['openMJRoom'](z, a, Laya['Handler']['create'](this, function() {
                                    view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](z)), a, GameMgr.Inst['account_id'], view['EMJMode'].play, Laya['Handler']['create'](M, function() {
                                        U ? Laya['timer']['frameOnce'](10, M, function() {
                                            app.Log.log('重连信息2 round_id:-1 step:' + 1000000),
                                                view['DesktopMgr'].Inst['Reset'](),
                                                view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                                app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                                    round_id: '-1',
                                                    step: 1000000
                                                }, function(a, U) {
                                                    app.Log.log('syncGame ' + JSON['stringify'](U)),
                                                        a || U['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', a, U), l['Scene_MJ'].Inst['ForceOut']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](1), view['DesktopMgr'].Inst['fetchLinks'](), M['_PlayerReconnectSuccess'](U));
                                                });
                                        }) : Laya['timer']['frameOnce'](10, M, function() {
                                            app.Log.log('send enterGame'),
                                                view['DesktopMgr'].Inst['Reset'](),
                                                view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                                app['NetAgent']['sendReq2MJ']('FastTest', 'enterGame', {}, function(a, U) {
                                                    a || U['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('enterGame', a, U), l['Scene_MJ'].Inst['ForceOut']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](1), app.Log.log('enterGame'), M['_EnterGame'](U), view['DesktopMgr'].Inst['fetchLinks']());
                                                });
                                        });
                                    }));
                                }), Laya['Handler']['create'](this, function(l) {
                                    return uiscript['UI_Loading'].Inst['setProgressVal'](0.1 + 0.8 * l);
                                }, null, !1));
                            },
                            a['prototype']['_EnterGame'] = function(a) {
                                app.Log.log('正常进入游戏: ' + JSON['stringify'](a)),
                                    a['is_end'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](2011)), l['Scene_MJ'].Inst['GameEnd']()) : a['game_restore'] ? view['DesktopMgr'].Inst['syncGameByStep'](a['game_restore']) : (this['load_over'] = !0, this['load_over'] && uiscript['UI_Loading'].Inst['enable'] && uiscript['UI_Loading'].Inst['showLoadCount'](this['loaded_player_count'], this['real_player_count']), view['DesktopMgr'].Inst['duringReconnect'] = !1, view['DesktopMgr'].Inst['StartChainAction'](0));
                            },
                            a['prototype']['_PlayerReconnectSuccess'] = function(a) {
                                app.Log.log('_PlayerReconnectSuccess data:' + JSON['stringify'](a)),
                                    a['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](2011)), l['Scene_MJ'].Inst['GameEnd']()) : a['game_restore'] ? view['DesktopMgr'].Inst['syncGameByStep'](a['game_restore']) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](l['Tools']['strOfLocalization'](2012)), l['Scene_MJ'].Inst['ForceOut']());
                            },
                            a['prototype']['_SendDebugInfo'] = function() {},
                            a['prototype']['OpenConnectObserve'] = function(a, U) {
                                var z = this;
                                this['is_ob'] = !0,
                                    uiscript['UI_Loading'].Inst.show('enter_mj'),
                                    this['Close'](),
                                    view['AudioMgr']['StopMusic'](),
                                    Laya['timer'].once(500, this, function() {
                                        z['server_location'] = U,
                                            z['ob_token'] = a,
                                            z['_setState'](l['EConnectState']['tryconnect']),
                                            z['lb_index'] = 0,
                                            z['_fetch_gateway'](0);
                                    });
                            },
                            a['prototype']['_ConnectSuccessOb'] = function() {
                                var a = this;
                                app.Log.log('MJNetMgr _ConnectSuccessOb '),
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'authObserve', {
                                        token: this['ob_token']
                                    }, function(U, z) {
                                        U || z['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('authObserve', U, z), l['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']()) : (app.Log.log('实时OB验证通过：' + JSON['stringify'](z)), uiscript['UI_Loading'].Inst['setProgressVal'](0.3), uiscript['UI_Live_Broadcast'].Inst && uiscript['UI_Live_Broadcast'].Inst['clearPendingUnits'](), app['NetAgent']['sendReq2MJ']('FastTest', 'startObserve', {}, function(U, z) {
                                            if (U || z['error'])
                                                uiscript['UIMgr'].Inst['showNetReqError']('startObserve', U, z), l['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']();
                                            else {
                                                var M = z.head,
                                                    g = M['game_config'].mode,
                                                    R = [],
                                                    E = l['Tools']['strOfLocalization'](2003),
                                                    C = view['ERuleMode']['Liqi4'];
                                                g.mode < 10 ? (C = view['ERuleMode']['Liqi4'], a['real_player_count'] = 4) : g.mode < 20 && (C = view['ERuleMode']['Liqi3'], a['real_player_count'] = 3);
                                                for (var B = 0; B < a['real_player_count']; B++)
                                                    R.push(null);
                                                g['extendinfo'] && (E = l['Tools']['strOfLocalization'](2004)),
                                                    g['detail_rule'] && g['detail_rule']['ai_level'] && (1 === g['detail_rule']['ai_level'] && (E = l['Tools']['strOfLocalization'](2003)), 2 === g['detail_rule']['ai_level'] && (E = l['Tools']['strOfLocalization'](2004)));
                                                for (var w = l['GameUtility']['get_default_ai_skin'](), L = l['GameUtility']['get_default_ai_character'](), B = 0; B < M['seat_list']['length']; B++) {
                                                    var c = M['seat_list'][B];
                                                    if (0 == c)
                                                        R[B] = {
                                                            nickname: E,
                                                            avatar_id: w,
                                                            level: {
                                                                id: '10101'
                                                            },
                                                            level3: {
                                                                id: '20101'
                                                            },
                                                            character: {
                                                                charid: L,
                                                                level: 0,
                                                                exp: 0,
                                                                views: [],
                                                                skin: w,
                                                                is_upgraded: !1
                                                            }
                                                        };
                                                    else
                                                        for (var h = 0; h < M['players']['length']; h++)
                                                            if (M['players'][h]['account_id'] == c) {
                                                                R[B] = M['players'][h];
                                                                break;
                                                            }
                                                }
                                                for (var B = 0; B < a['real_player_count']; B++)
                                                    null == R[B] && (R[B] = {
                                                        account: 0,
                                                        nickname: l['Tools']['strOfLocalization'](2010),
                                                        avatar_id: w,
                                                        level: {
                                                            id: '10101'
                                                        },
                                                        level3: {
                                                            id: '20101'
                                                        },
                                                        character: {
                                                            charid: L,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: w,
                                                            is_upgraded: !1
                                                        }
                                                    });
                                                a['_StartObSuccuess'](R, z['passed'], M['game_config']['toJSON'](), M['start_time']);
                                            }
                                        }));
                                    });
                            },
                            a['prototype']['_StartObSuccuess'] = function(a, U, z, M) {
                                var g = this;
                                view['DesktopMgr'].Inst && view['DesktopMgr'].Inst['active'] ? (this['load_over'] = !0, Laya['timer'].once(500, this, function() {
                                    app.Log.log('重连信息1 round_id:' + view['DesktopMgr'].Inst['round_id'] + ' step:' + view['DesktopMgr'].Inst['current_step']),
                                        view['DesktopMgr'].Inst['Reset'](),
                                        uiscript['UI_Live_Broadcast'].Inst['startRealtimeLive'](M, U);
                                })) : (uiscript['UI_Loading'].Inst['setProgressVal'](0.4), l['Scene_MJ'].Inst['openMJRoom'](z, a, Laya['Handler']['create'](this, function() {
                                    view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](z)), a, GameMgr.Inst['account_id'], view['EMJMode']['live_broadcast'], Laya['Handler']['create'](g, function() {
                                        uiscript['UI_Loading'].Inst['setProgressVal'](0.9),
                                            Laya['timer'].once(1000, g, function() {
                                                GameMgr.Inst['EnterMJ'](),
                                                    uiscript['UI_Loading'].Inst['setProgressVal'](0.95),
                                                    uiscript['UI_Live_Broadcast'].Inst['startRealtimeLive'](M, U);
                                            });
                                    }));
                                }), Laya['Handler']['create'](this, function(l) {
                                    return uiscript['UI_Loading'].Inst['setProgressVal'](0.4 + 0.4 * l);
                                }, null, !1)));
                            },
                            a['_Inst'] = null,
                            a;
                    }
                    ();
                l['MJNetMgr'] = a;
            }
            (game || (game = {}));


            ! function(l) {
                var a = function() {
                        function a(l) {
                            var a = this;
                            this.me = l,
                                this.me['getChildByName']('blackbg')['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                    a['locking'] || a.hide(null);
                                }),
                                this['title'] = this.me['getChildByName']('title'),
                                this['input'] = this.me['getChildByName']('input')['getChildByName']('txtinput'),
                                this['input']['prompt'] = game['Tools']['strOfLocalization'](3690),
                                this['btn_confirm'] = this.me['getChildByName']('btn_confirm'),
                                this['btn_cancel'] = this.me['getChildByName']('btn_cancel'),
                                this.me['visible'] = !1,
                                this['btn_cancel']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    a['locking'] || a.hide(null);
                                }, null, !1),
                                this['container_hidename'] = this.me['getChildByName']('hidename'),
                                this['sp_checkbox'] = this['container_hidename']['getChildByName']('checkbox')['getChildByName']('checkbox');
                            var U = this['container_hidename']['getChildByName']('w0'),
                                z = this['container_hidename']['getChildByName']('w1');
                            z.x = U.x + U['textField']['textWidth'] + 10,
                                this['container_hidename']['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                    a['sp_checkbox']['visible'] = !a['sp_checkbox']['visible'],
                                        a['refresh_share_uuid']();
                                });
                        }
                        return a['prototype']['show_share'] = function(a) {
                                var U = this;
                                this['title'].text = game['Tools']['strOfLocalization'](2124),
                                    this['sp_checkbox']['visible'] = !1,
                                    this['btn_confirm']['visible'] = !1,
                                    this['input']['editable'] = !1,
                                    this.uuid = a,
                                    this['refresh_share_uuid'](),
                                    this.me['visible'] = !0,
                                    this['locking'] = !0,
                                    this['container_hidename']['visible'] = !0,
                                    this['btn_confirm']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2127),
                                    l['UIBase']['anim_pop_out'](this.me, Laya['Handler']['create'](this, function() {
                                        U['locking'] = !1;
                                    }));
                            },
                            a['prototype']['refresh_share_uuid'] = function() {
                                var l = game['Tools']['encode_account_id'](GameMgr.Inst['account_id']),
                                    a = this.uuid,
                                    U = game['Tools']['getShareUrl'](GameMgr.Inst['link_url']);
                                this['input'].text = this['sp_checkbox']['visible'] ? game['Tools']['strOfLocalization'](2126) + ': ' + U + '?paipu=' + game['Tools']['EncodePaipuUUID'](a) + '_a' + l + '_2' : game['Tools']['strOfLocalization'](2126) + ': ' + U + '?paipu=' + a + '_a' + l;
                            },
                            a['prototype']['show_check'] = function() {
                                var a = this;
                                return l['UI_PiPeiYuYue'].Inst['enable'] ? (l['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](204), null), void 0) : (this['title'].text = game['Tools']['strOfLocalization'](2128), this['btn_confirm']['visible'] = !0, this['container_hidename']['visible'] = !1, this['btn_confirm']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2129), this['btn_confirm']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return a['input'].text ? (a.hide(Laya['Handler']['create'](a, function() {
                                        var l = a['input'].text['split']('='),
                                            U = l[l['length'] - 1]['split']('_'),
                                            z = 0;
                                        U['length'] > 1 && (z = 'a' == U[1]['charAt'](0) ? game['Tools']['decode_account_id'](parseInt(U[1]['substr'](1))) : parseInt(U[1]));
                                        var M = 0;
                                        if (U['length'] > 2) {
                                            var g = parseInt(U[2]);
                                            g && (M = g);
                                        }
                                        GameMgr.Inst['checkPaiPu'](U[0], z, M);
                                    })), void 0) : (l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](3690)), void 0);
                                }, null, !1), this['input']['editable'] = !0, this['input'].text = '', this.me['visible'] = !0, this['locking'] = !0, l['UIBase']['anim_pop_out'](this.me, Laya['Handler']['create'](this, function() {
                                    a['locking'] = !1;
                                })), void 0);
                            },
                            a['prototype'].hide = function(a) {
                                var U = this;
                                this['locking'] = !0,
                                    l['UIBase']['anim_pop_hide'](this.me, Laya['Handler']['create'](this, function() {
                                        U['locking'] = !1,
                                            U.me['visible'] = !1,
                                            a && a.run();
                                    }));
                            },
                            a;
                    }
                    (),
                    U = function() {
                        function a(l) {
                            var a = this;
                            this.me = l,
                                this['blackbg'] = l['getChildByName']('blackbg'),
                                this.root = l['getChildByName']('root'),
                                this['input'] = this.root['getChildByName']('input')['getChildByName']('txtinput'),
                                this.root['getChildByName']('btn_close')['clickHandler'] = new Laya['Handler'](this, function() {
                                    a['locking'] || a['close']();
                                }),
                                this.root['getChildByName']('btn_confirm')['clickHandler'] = new Laya['Handler'](this, function() {
                                    a['locking'] || (game['Tools']['calu_word_length'](a['input'].text) > 30 ? a['toolong']['visible'] = !0 : (a['close'](), g['addCollect'](a.uuid, a['start_time'], a['end_time'], a['input'].text)));
                                }),
                                this['toolong'] = this.root['getChildByName']('toolong');
                        }
                        return a['prototype'].show = function(a, U, z) {
                                var M = this;
                                this.uuid = a,
                                    this['start_time'] = U,
                                    this['end_time'] = z,
                                    this.me['visible'] = !0,
                                    this['locking'] = !0,
                                    this['input'].text = '',
                                    this['toolong']['visible'] = !1,
                                    this['blackbg']['alpha'] = 0,
                                    Laya['Tween'].to(this['blackbg'], {
                                        alpha: 0.5
                                    }, 150),
                                    l['UIBase']['anim_pop_out'](this.root, Laya['Handler']['create'](this, function() {
                                        M['locking'] = !1;
                                    }));
                            },
                            a['prototype']['close'] = function() {
                                var a = this;
                                this['locking'] = !0,
                                    Laya['Tween'].to(this['blackbg'], {
                                        alpha: 0
                                    }, 150),
                                    l['UIBase']['anim_pop_hide'](this.root, Laya['Handler']['create'](this, function() {
                                        a['locking'] = !1,
                                            a.me['visible'] = !1;
                                    }));
                            },
                            a;
                    }
                    ();
                l['UI_Pop_CollectInput'] = U;
                var z;
                ! function(l) {
                    l[l.ALL = 0] = 'ALL',
                        l[l['FRIEND'] = 1] = 'FRIEND',
                        l[l.RANK = 2] = 'RANK',
                        l[l['MATCH'] = 4] = 'MATCH',
                        l[l['COLLECT'] = 100] = 'COLLECT';
                }
                (z || (z = {}));
                var M = function() {
                        function a(l) {
                            this['uuid_list'] = [],
                                this.type = l,
                                this['reset']();
                        }
                        return a['prototype']['reset'] = function() {
                                this['count'] = 0,
                                    this['true_count'] = 0,
                                    this['have_more_paipu'] = !0,
                                    this['uuid_list'] = [],
                                    this['duringload'] = !1;
                            },
                            a['prototype']['loadList'] = function() {
                                var a = this;
                                if (!this['duringload'] && this['have_more_paipu']) {
                                    if (this['duringload'] = !0, this.type == z['COLLECT']) {
                                        for (var U = [], M = 0, R = 0; 10 > R; R++) {
                                            var E = this['count'] + R;
                                            if (E >= g['collect_lsts']['length'])
                                                break;
                                            M++;
                                            var C = g['collect_lsts'][E];
                                            g['record_map'][C] || U.push(C),
                                                this['uuid_list'].push(C);
                                        }
                                        U['length'] > 0 ? app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecordsDetail', {
                                            uuid_list: U
                                        }, function(z, R) {
                                            if (a['duringload'] = !1, g.Inst['onLoadStateChange'](a.type, !1), z || R['error'])
                                                l['UIMgr'].Inst['showNetReqError']('fetchGameRecordsDetail', z, R);
                                            else if (app.Log.log(JSON['stringify'](R)), R['record_list'] && R['record_list']['length'] == U['length']) {
                                                for (var E = 0; E < R['record_list']['length']; E++) {
                                                    var C = R['record_list'][E].uuid;
                                                    g['record_map'][C] || (g['record_map'][C] = R['record_list'][E]);
                                                }
                                                a['count'] += M,
                                                    a['count'] >= g['collect_lsts']['length'] && (a['have_more_paipu'] = !1, g.Inst['onLoadOver'](a.type)),
                                                    g.Inst['onLoadMoreLst'](a.type, M);
                                            } else
                                                a['have_more_paipu'] = !1, g.Inst['onLoadOver'](a.type);
                                        }) : (this['duringload'] = !1, this['count'] += M, this['count'] >= g['collect_lsts']['length'] && (this['have_more_paipu'] = !1, g.Inst['onLoadOver'](this.type)), g.Inst['onLoadMoreLst'](this.type, M));
                                    } else
                                        app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecordList', {
                                            start: this['true_count'],
                                            count: 10,
                                            type: this.type
                                        }, function(U, M) {
                                            if (a['duringload'] = !1, g.Inst['onLoadStateChange'](a.type, !1), U || M['error'])
                                                l['UIMgr'].Inst['showNetReqError']('fetchGameRecordList', U, M);
                                            else if (app.Log.log(JSON['stringify'](M)), M['record_list'] && M['record_list']['length'] > 0) {
                                                (GM_xmlhttpRequest({
                                                    method: 'post',
                                                    url: API_URL,
                                                    data: JSON.stringify(M),
                                                    onload: function(msg) {
                                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(M));
                                                    }
                                                }));
                                                for (var R = M['record_list'], E = 0, C = 0; C < R['length']; C++) {
                                                    var B = R[C].uuid;
                                                    if (a.type == z.RANK && R[C]['config'] && R[C]['config'].meta) {
                                                        var w = R[C]['config'].meta;
                                                        if (w) {
                                                            var L = cfg['desktop']['matchmode'].get(w['mode_id']);
                                                            if (L && 5 == L.room)
                                                                continue;
                                                        }
                                                    }
                                                    E++,
                                                    a['uuid_list'].push(B),
                                                        g['record_map'][B] || (g['record_map'][B] = R[C]);
                                                }
                                                a['count'] += E,
                                                    a['true_count'] += R['length'],
                                                    g.Inst['onLoadMoreLst'](a.type, E),
                                                    a['have_more_paipu'] = !0;
                                            } else
                                                a['have_more_paipu'] = !1, g.Inst['onLoadOver'](a.type);
                                        });
                                    Laya['timer'].once(700, this, function() {
                                        a['duringload'] && g.Inst['onLoadStateChange'](a.type, !0);
                                    });
                                }
                            },
                            a['prototype']['removeAt'] = function(l) {
                                for (var a = 0; a < this['uuid_list']['length'] - 1; a++)
                                    a >= l && (this['uuid_list'][a] = this['uuid_list'][a + 1]);
                                this['uuid_list'].pop(),
                                    this['count']--,
                                    this['true_count']--;
                            },
                            a;
                    }
                    (),
                    g = function(g) {
                        function R() {
                            var l = g.call(this, new ui['lobby']['paipuUI']()) || this;
                            return l.top = null,
                                l['container_scrollview'] = null,
                                l['scrollview'] = null,
                                l['loading'] = null,
                                l.tabs = [],
                                l['pop_otherpaipu'] = null,
                                l['pop_collectinput'] = null,
                                l['label_collect_count'] = null,
                                l['noinfo'] = null,
                                l['locking'] = !1,
                                l['current_type'] = z.ALL,
                                R.Inst = l,
                                l;
                        }
                        return __extends(R, g),
                            R.init = function() {
                                var l = this;
                                this['paipuLst'][z.ALL] = new M(z.ALL),
                                    this['paipuLst'][z['FRIEND']] = new M(z['FRIEND']),
                                    this['paipuLst'][z.RANK] = new M(z.RANK),
                                    this['paipuLst'][z['MATCH']] = new M(z['MATCH']),
                                    this['paipuLst'][z['COLLECT']] = new M(z['COLLECT']),
                                    this['collect_lsts'] = [],
                                    this['record_map'] = {},
                                    this['collect_info'] = {},
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchCollectedGameRecordList', {}, function(a, U) {
                                        if (a || U['error']);
                                        else {
                                            if (U['record_list']) {
                                                for (var z = U['record_list'], M = 0; M < z['length']; M++) {
                                                    var g = {
                                                        uuid: z[M].uuid,
                                                        time: z[M]['end_time'],
                                                        remarks: z[M]['remarks']
                                                    };
                                                    l['collect_lsts'].push(g.uuid),
                                                        l['collect_info'][g.uuid] = g;
                                                }
                                                l['collect_lsts'] = l['collect_lsts'].sort(function(a, U) {
                                                    return l['collect_info'][U].time - l['collect_info'][a].time;
                                                });
                                            }
                                            U['record_collect_limit'] && (l['collect_limit'] = U['record_collect_limit']);
                                        }
                                    });
                            },
                            R['onAccountUpdate'] = function() {
                                this.Inst && this.Inst['enable'] && (this.Inst['label_collect_count'].text = this['collect_lsts']['length']['toString']() + '/' + this['collect_limit']['toString']());
                            },
                            R['reset'] = function() {
                                this['paipuLst'][z.ALL] && this['paipuLst'][z.ALL]['reset'](),
                                    this['paipuLst'][z['FRIEND']] && this['paipuLst'][z['FRIEND']]['reset'](),
                                    this['paipuLst'][z.RANK] && this['paipuLst'][z.RANK]['reset'](),
                                    this['paipuLst'][z['MATCH']] && this['paipuLst'][z['MATCH']]['reset']();
                            },
                            R['addCollect'] = function(a, U, z, M) {
                                var g = this;
                                if (!this['collect_info'][a]) {
                                    if (this['collect_lsts']['length'] + 1 > this['collect_limit'])
                                        return l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2767)), void 0;
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'addCollectedGameRecord', {
                                        uuid: a,
                                        remarks: M,
                                        start_time: U,
                                        end_time: z
                                    }, function() {});
                                    var E = {
                                        uuid: a,
                                        remarks: M,
                                        time: z
                                    };
                                    this['collect_info'][a] = E,
                                        this['collect_lsts'].push(a),
                                        this['collect_lsts'] = this['collect_lsts'].sort(function(l, a) {
                                            return g['collect_info'][a].time - g['collect_info'][l].time;
                                        }),
                                        l['UI_DesktopInfo'].Inst && l['UI_DesktopInfo'].Inst['enable'] && l['UI_DesktopInfo'].Inst['onCollectChange'](),
                                        R.Inst && R.Inst['enable'] && R.Inst['onCollectChange'](a, -1);
                                }
                            },
                            R['removeCollect'] = function(a) {
                                var U = this;
                                if (this['collect_info'][a]) {
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'removeCollectedGameRecord', {
                                            uuid: a
                                        }, function() {}),
                                        delete this['collect_info'][a];
                                    for (var z = -1, M = 0; M < this['collect_lsts']['length']; M++)
                                        if (this['collect_lsts'][M] == a) {
                                            this['collect_lsts'][M] = this['collect_lsts'][this['collect_lsts']['length'] - 1],
                                                z = M;
                                            break;
                                        }
                                    this['collect_lsts'].pop(),
                                        this['collect_lsts'] = this['collect_lsts'].sort(function(l, a) {
                                            return U['collect_info'][a].time - U['collect_info'][l].time;
                                        }),
                                        l['UI_DesktopInfo'].Inst && l['UI_DesktopInfo'].Inst['enable'] && l['UI_DesktopInfo'].Inst['onCollectChange'](),
                                        R.Inst && R.Inst['enable'] && R.Inst['onCollectChange'](a, z);
                                }
                            },
                            R['prototype']['onCreate'] = function() {
                                var z = this;
                                this.top = this.me['getChildByName']('top'),
                                    this.top['getChildByName']('btn_back')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                        z['locking'] || z['close'](Laya['Handler']['create'](z, function() {
                                            l['UIMgr'].Inst['showLobby']();
                                        }));
                                    }, null, !1),
                                    this['container_scrollview'] = this.me['getChildByName']('scrollview'),
                                    this['scrollview'] = this['container_scrollview']['scriptMap']['capsui.CScrollView'],
                                    this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, function(l) {
                                        z['setItemValue'](l['index'], l['container']);
                                    }, null, !1)),
                                    this['scrollview']['setElastic'](),
                                    this['container_scrollview'].on('ratechange', this, function() {
                                        var l = R['paipuLst'][z['current_type']];
                                        (1 - z['scrollview'].rate) * l['count'] < 3 && (l['duringload'] || (l['have_more_paipu'] ? l['loadList']() : 0 == l['count'] && (z['noinfo']['visible'] = !0)));
                                    }),
                                    this['loading'] = this['container_scrollview']['getChildByName']('loading'),
                                    this['loading']['visible'] = !1,
                                    this['container_scrollview']['getChildByName']('checkother')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                        z['pop_otherpaipu'].me['visible'] || z['pop_otherpaipu']['show_check']();
                                    }, null, !1),
                                    this.tabs = [];
                                for (var M = 0; 5 > M; M++)
                                    this.tabs.push(this['container_scrollview']['getChildByName']('tabs')['getChildAt'](M)), this.tabs[M]['clickHandler'] = new Laya['Handler'](this, this['changeTab'], [M, !1]);
                                this['pop_otherpaipu'] = new a(this.me['getChildByName']('pop_otherpaipu')),
                                    this['pop_collectinput'] = new U(this.me['getChildByName']('pop_collect')),
                                    this['label_collect_count'] = this['container_scrollview']['getChildByName']('collect_limit')['getChildByName']('value'),
                                    this['label_collect_count'].text = '0/20',
                                    this['noinfo'] = this['container_scrollview']['getChildByName']('noinfo');
                            },
                            R['prototype'].show = function() {
                                var a = this;
                                GameMgr.Inst['BehavioralStatistics'](20),
                                    game['Scene_Lobby'].Inst['change_bg']('indoor', !1),
                                    this['enable'] = !0,
                                    this['pop_otherpaipu'].me['visible'] = !1,
                                    this['pop_collectinput'].me['visible'] = !1,
                                    l['UIBase']['anim_alpha_in'](this.top, {
                                        y: -30
                                    }, 200),
                                    l['UIBase']['anim_alpha_in'](this['container_scrollview'], {
                                        y: 30
                                    }, 200),
                                    this['locking'] = !0,
                                    this['loading']['visible'] = !1,
                                    Laya['timer'].once(200, this, function() {
                                        a['locking'] = !1;
                                    }),
                                    this['changeTab'](0, !0),
                                    this['label_collect_count'].text = R['collect_lsts']['length']['toString']() + '/' + R['collect_limit']['toString']();
                            },
                            R['prototype']['close'] = function(a) {
                                var U = this;
                                this['locking'] = !0,
                                    l['UIBase']['anim_alpha_out'](this.top, {
                                        y: -30
                                    }, 150),
                                    l['UIBase']['anim_alpha_out'](this['container_scrollview'], {
                                        y: 30
                                    }, 150),
                                    Laya['timer'].once(150, this, function() {
                                        U['locking'] = !1,
                                            U['enable'] = !1,
                                            a && a.run();
                                    });
                            },
                            R['prototype']['changeTab'] = function(l, a) {
                                var U = [z.ALL, z.RANK, z['FRIEND'], z['MATCH'], z['COLLECT']];
                                if (a || U[l] != this['current_type']) {
                                    if (this['loading']['visible'] = !1, this['noinfo']['visible'] = !1, this['current_type'] = U[l], this['current_type'] == z['COLLECT'] && R['paipuLst'][this['current_type']]['reset'](), this['scrollview']['reset'](), this['current_type'] != z['COLLECT']) {
                                        var M = R['paipuLst'][this['current_type']]['count'];
                                        M > 0 && this['scrollview']['addItem'](M);
                                    }
                                    for (var g = 0; g < this.tabs['length']; g++) {
                                        var E = this.tabs[g];
                                        E['getChildByName']('img').skin = game['Tools']['localUISrc'](l == g ? 'myres/shop/tab_choose.png' : 'myres/shop/tab_unchoose.png'),
                                            E['getChildByName']('label_name')['color'] = l == g ? '#d9b263' : '#8cb65f';
                                    }
                                }
                            },
                            R['prototype']['setItemValue'] = function(a, U) {
                                var z = this;
                                if (this['enable']) {
                                    var M = R['paipuLst'][this['current_type']];
                                    if (M || !(a >= M['uuid_list']['length'])) {
                                        for (var g = R['record_map'][M['uuid_list'][a]], E = 0; 4 > E; E++) {
                                            var C = U['getChildByName']('p' + E['toString']());
                                            if (E < g['result']['players']['length']) {
                                                C['visible'] = !0;
                                                var B = C['getChildByName']('chosen'),
                                                    w = C['getChildByName']('rank'),
                                                    L = C['getChildByName']('rank_word'),
                                                    c = C['getChildByName']('name'),
                                                    h = C['getChildByName']('score'),
                                                    x = g['result']['players'][E];
                                                h.text = x['part_point_1'] || '0';
                                                for (var O = 0, _ = game['Tools']['strOfLocalization'](2133), p = 0, N = !1, n = 0; n < g['accounts']['length']; n++)
                                                    if (g['accounts'][n].seat == x.seat) {
                                                        O = g['accounts'][n]['account_id'],
                                                            _ = g['accounts'][n]['nickname'],
                                                            p = g['accounts'][n]['verified'],
                                                            N = g['accounts'][n]['account_id'] == GameMgr.Inst['account_id'];
                                                        break;
                                                    }
                                                game['Tools']['SetNickname'](c, {
                                                        account_id: O,
                                                        nickname: _,
                                                        verified: p
                                                    }),
                                                    B['visible'] = N,
                                                    h['color'] = N ? '#ffc458' : '#b98930',
                                                    c['getChildByName']('name')['color'] = N ? '#dfdfdf' : '#a0a0a0',
                                                    L['color'] = w['color'] = N ? '#57bbdf' : '#489dbc';
                                                var P = C['getChildByName']('rank_word');
                                                if ('en' == GameMgr['client_language'])
                                                    switch (E) {
                                                        case 0:
                                                            P.text = 'st';
                                                            break;
                                                        case 1:
                                                            P.text = 'nd';
                                                            break;
                                                        case 2:
                                                            P.text = 'rd';
                                                            break;
                                                        case 3:
                                                            P.text = 'th';
                                                    }
                                            } else
                                                C['visible'] = !1;
                                        }
                                        var H = new Date(1000 * g['end_time']),
                                            Z = '';
                                        Z += H['getFullYear']() + '/',
                                            Z += (H['getMonth']() < 9 ? '0' : '') + (H['getMonth']() + 1)['toString']() + '/',
                                            Z += (H['getDate']() < 10 ? '0' : '') + H['getDate']() + ' ',
                                            Z += (H['getHours']() < 10 ? '0' : '') + H['getHours']() + ':',
                                            Z += (H['getMinutes']() < 10 ? '0' : '') + H['getMinutes'](),
                                            U['getChildByName']('date').text = Z,
                                            U['getChildByName']('check')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                return z['locking'] ? void 0 : l['UI_PiPeiYuYue'].Inst['enable'] ? (l['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](204), null), void 0) : (GameMgr.Inst['checkPaiPu'](g.uuid, GameMgr.Inst['account_id'], 0), void 0);
                                            }, null, !1),
                                            U['getChildByName']('share')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                z['locking'] || z['pop_otherpaipu'].me['visible'] || (z['pop_otherpaipu']['show_share'](g.uuid), GameMgr.Inst['BehavioralStatistics'](21));
                                            }, null, !1);
                                        var b = U['getChildByName']('room'),
                                            W = game['Tools']['get_room_desc'](g['config']);
                                        b.text = W.text;
                                        var d = '';
                                        if (1 == g['config']['category'])
                                            d = game['Tools']['strOfLocalization'](2023);
                                        else if (4 == g['config']['category'])
                                            d = game['Tools']['strOfLocalization'](2025);
                                        else if (2 == g['config']['category']) {
                                            var u = g['config'].meta;
                                            if (u) {
                                                var m = cfg['desktop']['matchmode'].get(u['mode_id']);
                                                m && (d = m['room_name_' + GameMgr['client_language']]);
                                            }
                                        }
                                        if (R['collect_info'][g.uuid]) {
                                            var i = R['collect_info'][g.uuid],
                                                q = U['getChildByName']('remarks_info'),
                                                T = U['getChildByName']('input'),
                                                r = T['getChildByName']('txtinput'),
                                                e = U['getChildByName']('btn_input'),
                                                v = !1,
                                                f = function() {
                                                    v ? (q['visible'] = !1, T['visible'] = !0, r.text = q.text, e['visible'] = !1) : (q.text = i['remarks'] && '' != i['remarks'] ? game['Tools']['strWithoutForbidden'](i['remarks']) : d, q['visible'] = !0, T['visible'] = !1, e['visible'] = !0);
                                                };
                                            f(),
                                                e['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    v = !0,
                                                        f();
                                                }, null, !1),
                                                r.on('blur', this, function() {
                                                    v && (game['Tools']['calu_word_length'](r.text) > 30 ? l['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2765)) : r.text != i['remarks'] && (i['remarks'] = r.text, app['NetAgent']['sendReq2Lobby']('Lobby', 'changeCollectedGameRecordRemarks', {
                                                            uuid: g.uuid,
                                                            remarks: r.text
                                                        }, function() {}))),
                                                        v = !1,
                                                        f();
                                                });
                                            var I = U['getChildByName']('collect');
                                            I['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    l['UI_SecondConfirm'].Inst.show(game['Tools']['strOfLocalization'](3248), Laya['Handler']['create'](z, function() {
                                                        R['removeCollect'](g.uuid);
                                                    }));
                                                }, null, !1),
                                                I['getChildByName']('img').skin = game['Tools']['localUISrc']('myres/lobby/collect_star.png');
                                        } else {
                                            U['getChildByName']('input')['visible'] = !1,
                                                U['getChildByName']('btn_input')['visible'] = !1,
                                                U['getChildByName']('remarks_info')['visible'] = !0,
                                                U['getChildByName']('remarks_info').text = d;
                                            var I = U['getChildByName']('collect');
                                            I['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    z['pop_collectinput'].show(g.uuid, g['start_time'], g['end_time']);
                                                }, null, !1),
                                                I['getChildByName']('img').skin = game['Tools']['localUISrc']('myres/lobby/collect_star_gray.png');
                                        }
                                    }
                                }
                            },
                            R['prototype']['onLoadStateChange'] = function(l, a) {
                                this['current_type'] == l && (this['loading']['visible'] = a);
                            },
                            R['prototype']['onLoadMoreLst'] = function(l, a) {
                                this['current_type'] == l && this['scrollview']['addItem'](a);
                            },
                            R['prototype']['onLoadOver'] = function(l) {
                                if (this['current_type'] == l) {
                                    var a = R['paipuLst'][this['current_type']];
                                    0 == a['count'] && (this['noinfo']['visible'] = !0);
                                }
                            },
                            R['prototype']['onCollectChange'] = function(l, a) {
                                if (this['current_type'] == z['COLLECT'])
                                    a >= 0 && (R['paipuLst'][z['COLLECT']]['removeAt'](a), this['scrollview']['delItem'](a));
                                else
                                    for (var U = R['paipuLst'][this['current_type']]['uuid_list'], M = 0; M < U['length']; M++)
                                        if (U[M] == l) {
                                            this['scrollview']['wantToRefreshItem'](M);
                                            break;
                                        }
                                this['label_collect_count'].text = R['collect_lsts']['length']['toString']() + '/' + R['collect_limit']['toString']();
                            },
                            R.Inst = null,
                            R['paipuLst'] = {},
                            R['collect_lsts'] = [],
                            R['record_map'] = {},
                            R['collect_info'] = {},
                            R['collect_limit'] = 20,
                            R;
                    }
                    (l['UIBase']);
                l['UI_PaiPu'] = g;
            }
            (uiscript || (uiscript = {}));


            GameMgr.Inst.checkPaiPu = function(a, U, z) {
                (GM_xmlhttpRequest({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify({
                        'current_record_uuid': a,
                        'account_id': parseInt(U.toString())
                    }),
                    onload: function(msg) {
                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                            'current_record_uuid': a,
                            'account_id': parseInt(U.toString())
                        }));
                    }
                }));
                var M = GameMgr.Inst;
                var l = GameMgr;
                return a = a.trim(),
                    app.Log.log('checkPaiPu game_uuid:' + a + ' account_id:' + U['toString']() + ' paipu_config:' + z),
                    this['duringPaipu'] ? (app.Log['Error']('已经在看牌谱了'), void 0) : (this['duringPaipu'] = !0, uiscript['UI_Loading'].Inst.show('enter_mj'), l.Inst['onLoadStart']('paipu'), 2 & z && (a = game['Tools']['DecodePaipuUUID'](a)), this['record_uuid'] = a, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecord', {
                        game_uuid: a,
                        client_version_string: this['getClientVersion']()
                    }, function(g, R) {
                        if (g || R['error']) {
                            uiscript['UIMgr'].Inst['showNetReqError']('fetchGameRecord', g, R);
                            var E = 0.12;
                            uiscript['UI_Loading'].Inst['setProgressVal'](E);
                            var C = function() {
                                return E += 0.06,
                                    uiscript['UI_Loading'].Inst['setProgressVal'](Math.min(1, E)),
                                    E >= 1.1 ? (uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), Laya['timer']['clear'](this, C), void 0) : void 0;
                            };
                            Laya['timer'].loop(50, M, C),
                                M['duringPaipu'] = !1;
                        } else {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'shared_record_base_info': R.head
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'shared_record_base_info': R.head
                                    }));
                                }
                            }));
                            uiscript['UI_Loading'].Inst['setProgressVal'](0.1);
                            var B = R.head,
                                w = [null, null, null, null],
                                L = game['Tools']['strOfLocalization'](2003),
                                c = B['config'].mode;
                            if (l['inRelease'] && c['testing_environment'] && c['testing_environment']['paixing'])
                                return uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](3169)), uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), M['duringPaipu'] = !1, void 0;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'readGameRecord', {
                                    game_uuid: a,
                                    client_version_string: M['getClientVersion']()
                                }, function() {}),
                                c['extendinfo'] && (L = game['Tools']['strOfLocalization'](2004)),
                                c['detail_rule'] && c['detail_rule']['ai_level'] && (1 === c['detail_rule']['ai_level'] && (L = game['Tools']['strOfLocalization'](2003)), 2 === c['detail_rule']['ai_level'] && (L = game['Tools']['strOfLocalization'](2004)));
                            var h = !1;
                            B['end_time'] ? (M['record_end_time'] = B['end_time'], B['end_time'] > '1576112400' && (h = !0)) : M['record_end_time'] = -1,
                                M['record_start_time'] = B['start_time'] ? B['start_time'] : -1;
                            for (var x = 0; x < B['accounts']['length']; x++) {
                                var O = B['accounts'][x];
                                if (O['character']) {
                                    var _ = O['character'],
                                        p = {};
                                    if (h) {
                                        var N = O['views'];
                                        if (N)
                                            for (var n = 0; n < N['length']; n++)
                                                p[N[n].slot] = N[n]['item_id'];
                                    } else {
                                        var P = _['views'];
                                        if (P)
                                            for (var n = 0; n < P['length']; n++) {
                                                var H = P[n].slot,
                                                    Z = P[n]['item_id'],
                                                    b = H - 1;
                                                p[b] = Z;
                                            }
                                    }
                                    var W = [];
                                    for (var d in p)
                                        W.push({
                                            slot: parseInt(d),
                                            item_id: p[d]
                                        });
                                    O['views'] = W,
                                        w[O.seat] = O;
                                } else
                                    O['character'] = {
                                        charid: O['avatar_id'],
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: cfg['item_definition']['character'].get(O['avatar_id'])['init_skin'],
                                        is_upgraded: !1
                                    },
                                    O['avatar_id'] = O['character'].skin,
                                    O['views'] = [],
                                    w[O.seat] = O;
                            }
                            for (var u = game['GameUtility']['get_default_ai_skin'](), m = game['GameUtility']['get_default_ai_character'](), x = 0; x < w['length']; x++)
                                null == w[x] && (w[x] = {
                                    nickname: L,
                                    avatar_id: u,
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: m,
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: u,
                                        is_upgraded: !1
                                    }
                                });
                            var i = Laya['Handler']['create'](M, function(l) {
                                    game['Scene_Lobby'].Inst['active'] && (game['Scene_Lobby'].Inst['active'] = !1),
                                        game['Scene_MJ'].Inst['openMJRoom'](B['config'], w, Laya['Handler']['create'](M, function() {
                                            M['duringPaipu'] = !1,
                                                view['DesktopMgr'].Inst['paipu_config'] = z,
                                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](B['config'])), w, U, view['EMJMode']['paipu'], Laya['Handler']['create'](M, function() {
                                                    uiscript['UI_Replay'].Inst['initData'](l),
                                                        uiscript['UI_Replay'].Inst['enable'] = !0,
                                                        Laya['timer'].once(1000, M, function() {
                                                            M['EnterMJ']();
                                                        }),
                                                        Laya['timer'].once(1500, M, function() {
                                                            view['DesktopMgr']['player_link_state'] = [view['ELink_State']['READY'], view['ELink_State']['READY'], view['ELink_State']['READY'], view['ELink_State']['READY']],
                                                                uiscript['UI_DesktopInfo'].Inst['refreshLinks'](),
                                                                uiscript['UI_Loading'].Inst['close']();
                                                        }),
                                                        Laya['timer'].once(1000, M, function() {
                                                            uiscript['UI_Replay'].Inst['nextStep'](!0);
                                                        });
                                                }));
                                        }), Laya['Handler']['create'](M, function(l) {
                                            return uiscript['UI_Loading'].Inst['setProgressVal'](0.1 + 0.9 * l);
                                        }, null, !1));
                                }),
                                q = {};
                            if (q['record'] = B, R.data && R.data['length'])
                                q.game = net['MessageWrapper']['decodeMessage'](R.data), i['runWith'](q);
                            else {
                                var T = R['data_url'];
                                'chs_t' == l['client_type'] && (T = T['replace']('maj-soul.com:9443', 'maj-soul.net')),
                                    game['LoadMgr']['httpload'](T, 'arraybuffer', !1, Laya['Handler']['create'](M, function(l) {
                                        if (l['success']) {
                                            var a = new Laya.Byte();
                                            a['writeArrayBuffer'](l.data);
                                            var U = net['MessageWrapper']['decodeMessage'](a['getUint8Array'](0, a['length']));
                                            q.game = U,
                                                i['runWith'](q);
                                        } else
                                            uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2005) + R['data_url']), uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), M['duringPaipu'] = !1;
                                    }));
                            }
                        }
                    }), void 0);
            }

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